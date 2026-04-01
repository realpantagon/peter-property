import React from 'react';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-8 sm:px-8 sm:py-10 text-white shadow-2xl backdrop-blur-xl transition-transform hover:scale-[1.01]">
      <h3 className="text-xl font-semibold tracking-[0.2em] text-[#b88a3a] mb-8 border-b border-white/5 pb-4">ติดต่อสอบถาม & นัดหมาย</h3>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Helper info */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
            <a
              href="tel:0895555927"
              className="group flex items-center gap-4 rounded-2xl bg-[#1a1614] p-4 transition-all hover:bg-[#251f1c] hover:shadow-lg hover:shadow-amber-900/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100d]"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#b88a3a]/10 text-lg sm:text-2xl group-hover:bg-[#b88a3a]/20 group-hover:scale-110 transition-all">📞</div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/40">สายด่วน 1</div>
                <div className="font-medium text-white/90 text-sm sm:text-base">089-555-5927</div>
              </div>
            </a>

            <a
              href="tel:0614296398"
              className="group flex items-center gap-4 rounded-2xl bg-[#1a1614] p-4 transition-all hover:bg-[#251f1c] hover:shadow-lg hover:shadow-amber-900/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100d]"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#b88a3a]/10 text-lg sm:text-2xl group-hover:bg-[#b88a3a]/20 group-hover:scale-110 transition-all">📞</div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/40">สายด่วน 2</div>
                <div className="font-medium text-white/90 text-sm sm:text-base">061-429-6398</div>
              </div>
            </a>
          </div>

          <div className="grid gap-3 sm:gap-4">
            <a
              href="https://lin.ee/X0PNwBb"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-[#06c755]/10 p-4 border border-[#06c755]/20 transition-all hover:bg-[#06c755]/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100d]"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full transition-all group-hover:scale-110">
                <Image
                  src="/icons/line.png"
                  alt="Line"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#06c755]/60 block mb-1">LINE Official Account</div>
                <div className="font-medium text-[#06c755] text-sm sm:text-base">@652vvpdl</div>
              </div>
              <span className="ml-auto text-[#06c755]/50 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100094632858025"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-[#1877F2]/10 p-4 border border-[#1877F2]/20 transition-all hover:bg-[#1877F2]/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100d]"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full transition-all group-hover:scale-110">
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#1877F2]/60 block mb-1">Facebook Page</div>
                <div className="font-medium text-[#1877F2] text-sm sm:text-base">Peter Property CNX</div>
              </div>
              <span className="ml-auto text-[#1877F2]/50 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center rounded-3xl  p-6 border border-white/5">
          <div className="relative overflow-hidden rounded-xl bg-white p-2 shadow-xl">
            <Image
              src="https://qr-official.line.me/gs/M_652vvpdl_BW.png?oat_content=qr"
              alt="Line QR Code"
              width={140}
              height={140}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="mt-4 text-xs font-light tracking-widest text-white/50 bg-[#06c755]/10 px-3 py-1 rounded-full text-[#06c755]">SCAN LINE QR</span>
        </div>
      </div>
    </div>
  );
}
