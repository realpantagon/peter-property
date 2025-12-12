import React from 'react';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <div className="rounded-[28px] border border-white/15 bg-white/5 px-6 py-7 text-white/75 shadow-[0_35px_80px_-60px_rgba(0,0,0,0.85)] backdrop-blur">
      <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">ติดต่อเรา</h3>
      <div className="mt-4 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="space-y-2 text-sm flex-1">
          <p className="flex items-center gap-3 text-white/70">
            <span className="text-lg">📞</span>
            <span>โทร: 089-555-5927</span>
          </p>
          <p className="flex items-center gap-3 text-white/70">
            <span className="text-lg">📞</span>
            <span>โทร: 061-429-6398</span>
          </p>
          <a 
            href="https://lin.ee/X0PNwBb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-lg">💬</span>
            <span>Line ID: @652vvpdl</span>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=100094632858025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-lg">📘</span>
            <span>Peter Property CNX</span>
          </a>
        </div>
        <a 
          href="https://lin.ee/X0PNwBb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image 
            src="https://qr-official.line.me/gs/M_652vvpdl_BW.png?oat_content=qr"
            alt="Line QR Code"
            width={120}
            height={120}
            className="rounded-lg bg-white p-2"
          />
          <p className="text-xs text-white/60">สแกนเพื่อเพิ่มเพื่อน</p>
        </a>
      </div>
      {/* <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-white/40">*เงื่อนไขเป็นไปตามบริษัทกำหนด</p> */}
    </div>
  );
}
