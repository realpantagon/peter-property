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
      className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/5 bg-[#181411] text-white shadow-[0_45px_120px_-60px_rgba(0,0,0,0.85)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30 hover:shadow-[0_20px_40px_-15px_rgba(184,138,58,0.15)] cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-[4/3] sm:aspect-[3/2] w-full overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181411] via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative flex flex-1 flex-col gap-5 p-7">
        {!!badgeConfigs.length && (
          <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium">
            {badgeConfigs.map((badge) => {
              const baseClass = 'inline-flex items-center rounded-full px-3 py-1 transition-colors';
              const className =
                badge.variant === 'new'
                  ? `${baseClass} bg-gradient-to-r from-[#e11d48] to-[#be123c] text-white shadow-md shadow-rose-900/20`
                  : badge.variant === 'available'
                    ? `${baseClass} bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-900/20`
                    : `${baseClass} border border-white/10 text-white/60 group-hover:border-white/20`;

              return (
                <span key={badge.key} className={className}>
                  {badge.label}
                </span>
              );
            })}
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-xs uppercase text-[#b88a3a] tracking-wider font-semibold">{sectionName}</h3>
          <p className="text-xl sm:text-2xl font-light text-white/95 leading-tight">{sectionDetails}</p>
        </div>

        {location && (
          <div className="text-sm text-white/50 flex items-center gap-2">
            <span className="opacity-70">📍</span> {location}
          </div>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/40 group-hover:text-amber-400/80 transition-colors">
          <span>View Residence</span>
          <span className="transform transition duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
}
