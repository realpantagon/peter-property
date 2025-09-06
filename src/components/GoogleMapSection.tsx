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
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="w-full h-[400px] rounded-lg overflow-hidden">
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
        <div className="mt-2 mb-2 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            เปิดใน Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
