import React from 'react';
import Image from 'next/image';

export default function ProjectCard({ title, subtitle, img }: { title: string; subtitle: string; img: string }) {
  return (
    <div className="min-w-[220px] bg-white rounded-lg shadow overflow-hidden">
      <Image src={img} alt={title} width={220} height={120} className="object-cover" />
      <div className="p-4">
        <div className="font-bold text-base mb-1">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
