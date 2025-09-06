"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PropertyCard({
  id,
  title,
  img,
  sectionName,
  sectionDetails,
  location,
  isNew = false,
  isAvailable = false,
}: {
  id: string;
  title: string;
  img: string;
  sectionName: string;
  sectionDetails: string;
  location?: string;
  isNew?: boolean;
  isAvailable?: boolean;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/Project/${id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <div className="absolute top-4 left-4 flex gap-2">
        {isNew && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">ใหม่</span>
        )}
        {isAvailable && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span>
        )}
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">{title}</span>
      </div>
      <Image src={img} alt={title} width={400} height={220} className="w-full h-[220px] object-cover" />
      <div className="p-4">
        <div className="font-bold font-size-3xl text-base mb-1">{sectionName}</div>
        <div className="text-xs text-gray-500 mb-1">{sectionDetails}</div>
        {location && (
          <div className="text-xs text-gray-500 mb-1">📍 {location}</div>
        )}
        {/* <div className="text-xs text-gray-500">รายละเอียดโครงการ</div> */}
      </div>
    </div>
  );
}
