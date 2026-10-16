import React from 'react';

interface GoogleMapSectionProps {
  lat: number;
  lng: number;
  title?: string;
  link?: string;
  zoom?: number;
}

export default function GoogleMapSection({ lat, lng, title = 'แผนที่โครงการ', link, zoom = 16 }: GoogleMapSectionProps) {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=th&z=${zoom}&output=embed`;
  return (
    <div className="bg-[var(--surface)] p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--ink)]">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            เปิดใน Google Maps →
          </a>
        )}
      </div>
      <div className="mt-5 h-[380px] w-full overflow-hidden">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
