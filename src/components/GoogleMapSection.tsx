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
    <div className="mt-8 rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_35px_80px_-60px_rgba(0,0,0,0.85)] backdrop-blur">
      <h3 className="text-lg font-semibold tracking-[0.25em] text-white/80">{title}</h3>
      <div className="mt-4 h-[400px] w-full overflow-hidden rounded-3xl">
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
      {link && (
        <div className="mt-6 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2 text-[12px] uppercase tracking-[0.4em] text-white/70 transition hover:border-amber-400/60 hover:text-amber-200"
          >
            เปิดใน Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
