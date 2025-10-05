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
  tags = [],
}: {
  id: string;
  title: string;
  img: string;
  sectionName: string;
  sectionDetails: string;
  location?: string;
  isNew?: boolean;
  isAvailable?: boolean;
  tags?: string[];
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/Project/${id}`);
  };

  const badgeConfigs = [
    ...(isNew
      ? [
          {
            key: 'new',
            label: 'ใหม่',
            variant: 'new' as const,
          },
        ]
      : []),
    ...(isAvailable
      ? [
          {
            key: 'available',
            label: 'พร้อมขาย',
            variant: 'available' as const,
          },
        ]
      : []),
    ...tags.map((label, idx) => ({
      key: `tag-${idx}`,
      label,
      variant: 'outline' as const,
    })),
    {
      key: 'title',
      label: title,
      variant: 'outline' as const,
    },
  ];

  return (
    <div
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#13100d]/85 text-white shadow-[0_45px_120px_-60px_rgba(0,0,0,0.85)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:shadow-[0_35px_100px_-45px_rgba(217,180,87,0.45)]"
      onClick={handleClick}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-amber-200/20" />
      </div>
      <div className="relative h-[240px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={400}
          height={240}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13100d] via-[#13100d]/10 to-transparent" />
      </div>
      <div className="relative flex flex-col gap-5 p-6">
        {!!badgeConfigs.length && (
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.35em]">
            {badgeConfigs.map((badge) => {
              const baseClass = 'inline-flex items-center rounded-full px-4 py-1 transition-colors';
              const className =
                badge.variant === 'new'
                  ? `${baseClass} bg-gradient-to-r from-[#ff5f8a] to-[#ff1d52] text-[#0a0502]`
                  : badge.variant === 'available'
                  ? `${baseClass} bg-gradient-to-r from-[#13d79e] to-[#0f9f6d] text-[#071a12]`
                  : `${baseClass} border border-white/20 text-white/70`;

              return (
                <span key={badge.key} className={className}>
                  {badge.label}
                </span>
              );
            })}
          </div>
        )}
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.45em] text-amber-200/70">{sectionName}</div>
          <div className="text-2xl font-light text-white">{sectionDetails}</div>
        </div>
        {location && (
          <div className="text-sm text-white/60">📍 {location}</div>
        )}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-white/40">
          <span>View Residence</span>
          <span className="transition duration-500 group-hover:text-amber-200">→</span>
        </div>
        {/* <div className="text-xs text-gray-500">รายละเอียดโครงการ</div> */}
      </div>
    </div>
  );
}
