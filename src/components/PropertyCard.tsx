import React from 'react';
import Image from 'next/image';

export default function PropertyCard({
  title,
  img,
  sectionName,
  sectionDetails,
  isNew = false,
  isAvailable = false,
}: {
  title: string;
  img: string;
  sectionName: string;
  sectionDetails: string;
  isNew?: boolean;
  isAvailable?: boolean;
}) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden relative">
      <div className="absolute top-4 left-4 flex gap-2">
        {isNew && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">ใหม่</span>
        )}
        {isAvailable && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span>
        )}
        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">{title}</span>
      </div>
      <Image src={img} alt={title} width={400} height={220} className="object-cover" />
      <div className="p-4">
        <div className="font-bold text-base mb-1">{sectionName}</div>
        <div className="text-xs text-gray-500 mb-1">{sectionDetails}</div>
        <div className="text-xs text-gray-500">รายละเอียดโครงการ</div>
      </div>
    </div>
  );
}
