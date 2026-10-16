import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-[var(--bg)]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <Image
            src="/icons/Property_logo_6.png"
            alt="Peter Property"
            width={40}
            height={40}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
          <span className="font-[var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)]">
            Peter Property
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-base text-[var(--muted)]">
          <Link href="/#collection" className="hidden transition-colors hover:text-[var(--ink)] sm:inline">
            โครงการ
          </Link>
          <Link href="/#contact" className="hidden transition-colors hover:text-[var(--ink)] sm:inline">
            ติดต่อ
          </Link>
          <a
            href="tel:0895555927"
            className="bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] transition-colors hover:bg-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
          >
            089-555-5927
          </a>
        </nav>
      </div>
    </header>
  );
}
