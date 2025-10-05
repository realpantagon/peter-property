'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface PropertySlideshowProps {
  images: string[];
  alt: string;
  className?: string;
  tone?: 'light' | 'dark';
}

export default function PropertySlideshow({
  images,
  alt,
  className = '',
  tone = 'light',
}: PropertySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isDark = tone === 'dark';

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] ${
        isDark
          ? 'border border-white/10 bg-white/5 backdrop-blur'
          : 'bg-gray-100'
      } ${className}`}
    >
      {/* Main Image Container */}
      <div 
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={currentIndex === 0}
          onLoadingComplete={() => setIsLoading(false)}
        />
        
        {/* Loading overlay */}
        {isLoading && (
          <div
            className={`absolute inset-0 flex items-center justify-center animate-pulse ${
              isDark ? 'bg-white/10 text-white/60' : 'bg-gray-200 text-gray-500'
            }`}
          >
            <div>Loading...</div>
          </div>
        )}

        {/* Navigation Arrows - Hidden on mobile, shown on larger screens */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full transition-colors z-10 sm:flex ${
            isDark
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-black/50 text-white hover:bg-black/70'
          }`}
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full transition-colors z-10 sm:flex ${
            isDark
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-black/50 text-white hover:bg-black/70'
          }`}
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div
          className={`absolute top-5 right-5 rounded-full px-3 py-1 text-sm ${
            isDark ? 'bg-black/50 text-white/90 backdrop-blur' : 'bg-black/50 text-white'
          }`}
        >
          {currentIndex + 1} / {images.length}
        </div>

        {/* Swipe Indicator for Mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
          <div
            className={`flex items-center space-x-2 rounded-full px-3 py-1 text-xs ${
              isDark ? 'bg-black/40 text-white/80 backdrop-blur' : 'bg-black/50 text-white'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Swipe</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div
        className={`flex items-center justify-center space-x-2 px-4 ${
          isDark ? 'bg-white/5 backdrop-blur' : 'bg-white'
        }`}
      >
        <div className="flex space-x-1 overflow-x-auto max-w-full py-2 px-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? isDark
                    ? 'h-2 w-4 scale-125 bg-amber-400'
                    : 'h-2 w-4 scale-125 bg-blue-600'
                  : isDark
                    ? 'h-2 w-2 bg-white/30 hover:bg-white/50'
                    : 'h-2 w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip for larger screens */}
      <div
        className={`hidden p-2 md:block ${
          isDark ? 'bg-white/5 backdrop-blur' : 'bg-gray-50'
        }`}
      >
        <div className="flex space-x-2 overflow-x-auto py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded transition-all duration-200 ${
                index === currentIndex
                  ? isDark
                    ? 'ring-2 ring-amber-400/80 scale-105'
                    : 'ring-2 ring-blue-600 scale-105'
                  : isDark
                    ? 'hover:ring-2 hover:ring-white/50'
                    : 'hover:ring-2 hover:ring-gray-400'
              }`}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
