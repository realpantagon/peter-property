'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface PropertySlideshowProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function PropertySlideshow({ images, alt, className = '' }: PropertySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(media.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    if (!hasMounted || images.length <= 1 || prefersReducedMotion) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [hasMounted, prefersReducedMotion, images.length, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className={`relative w-full bg-[var(--bg-deep)] ${className}`}>
      <div
        className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex]}
          alt={`${alt} — ภาพที่ ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
        />

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-[var(--bg-deep)]/70 text-[var(--ink)] transition-colors hover:bg-[var(--accent)] sm:flex"
          aria-label="ภาพก่อนหน้า"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-[var(--bg-deep)]/70 text-[var(--ink)] transition-colors hover:bg-[var(--accent)] sm:flex"
          aria-label="ภาพถัดไป"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 right-4 bg-[var(--bg-deep)]/70 px-3 py-1 text-sm text-[var(--ink)]">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="hidden gap-1 overflow-x-auto bg-[var(--surface)] p-2 md:flex">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-14 w-20 shrink-0 overflow-hidden transition-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-80'
            }`}
          >
            <Image src={image} alt={`${alt} — ภาพย่อ ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
