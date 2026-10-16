import Image from 'next/image';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-deep)]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10">
        <Reveal className="flex items-center gap-4">
          <Image
            src="/icons/Property_logo_6.png"
            alt="Peter Property"
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <p className="font-[var(--font-display)] text-[13vw] font-semibold leading-[0.9] tracking-tight text-[var(--ink)] sm:text-[5.5vw]">
            Peter Property
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-col gap-6 text-base text-[var(--muted)] sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm">
            เราสร้างบ้านเองทุกหลัง ตั้งแต่ลงเสาเข็มจนส่งมอบกุญแจ
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Peter Property</p>
        </Reveal>
      </div>
    </footer>
  );
}
