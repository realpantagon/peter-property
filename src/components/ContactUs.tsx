import React from 'react';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <div id="contact" className="bg-[var(--surface)] px-6 py-10 sm:px-10 sm:py-12">
      <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
        ติดต่อสอบถาม &amp; นัดหมาย
      </h3>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="tel:0895555927"
            className="flex flex-col gap-1 bg-[var(--surface-2)] p-5 transition-colors hover:bg-[var(--bg-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span className="text-base text-[var(--muted)]">สายด่วน 1</span>
            <span className="text-lg font-semibold text-[var(--ink)]">089-555-5927</span>
          </a>

          <a
            href="tel:0614296398"
            className="flex flex-col gap-1 bg-[var(--surface-2)] p-5 transition-colors hover:bg-[var(--bg-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span className="text-base text-[var(--muted)]">สายด่วน 2</span>
            <span className="text-lg font-semibold text-[var(--ink)]">061-429-6398</span>
          </a>

          <a
            href="https://lin.ee/X0PNwBb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 bg-[var(--surface-2)] p-5 transition-colors hover:bg-[var(--bg-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span className="text-base text-[var(--muted)]">LINE Official Account</span>
            <span className="text-lg font-semibold text-[var(--ink)]">@652vvpdl</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100094632858025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 bg-[var(--surface-2)] p-5 transition-colors hover:bg-[var(--bg-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span className="text-base text-[var(--muted)]">Facebook</span>
            <span className="text-lg font-semibold text-[var(--ink)]">Peter Property CNX</span>
          </a>
        </div>

        <div className="flex items-center gap-5 bg-[var(--surface-2)] p-6">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-white p-1.5">
            <Image
              src="https://qr-official.line.me/gs/M_652vvpdl_BW.png?oat_content=qr"
              alt="LINE QR Code"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base text-[var(--muted)]">
            สแกนเพื่อเพิ่มเพื่อนทาง LINE แจ้งความต้องการและนัดดูบ้านได้ทันที
          </p>
        </div>
      </div>
    </div>
  );
}
