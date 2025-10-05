import React from 'react';

export default function ContactUs() {
  return (
    <div className="rounded-[28px] border border-white/15 bg-white/5 px-6 py-7 text-white/75 shadow-[0_35px_80px_-60px_rgba(0,0,0,0.85)] backdrop-blur">
      <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">ติดต่อเรา</h3>
      <div className="mt-4 space-y-2 text-sm">
        <p className="flex items-center gap-3 text-white/70">
          <span className="text-lg">📞</span>
          <span>โทร: 089-555-5927</span>
        </p>
        <p className="flex items-center gap-3 text-white/70">
          <span className="text-lg">💬</span>
          <span>Line ID: prachan2550</span>
        </p>
      </div>
      <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-white/40">*เงื่อนไขเป็นไปตามบริษัทกำหนด</p>
    </div>
  );
}
