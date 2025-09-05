"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/public/file.svg',
  '/public/globe.svg',
  '/public/next.svg',
  '/public/vercel.svg',
  '/public/window.svg',
];

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Swipe gesture logic
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (Math.abs(distance) > 50) {
        if (distance > 0) {
          // Swipe left
          setCurrent((prev) => (prev - 1) % images.length);
        } else {
          // Swipe right
          setCurrent((prev) => (prev + 1 + images.length) % images.length);
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="w-full flex flex-col items-center mb-8">
      <div
        className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-lg shadow"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={img} alt={`slide-${idx}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#b88a3a]' : 'bg-gray-300'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
