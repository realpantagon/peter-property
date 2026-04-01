import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ isHome = false }: { isHome?: boolean }) {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0c0a08]/80 border-b border-white/5 data-[state=scrolled]:shadow-xl transition-all duration-300">
            <Link
                href="/"
                className="flex items-center justify-center px-4 py-5 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0a08] rounded-full max-w-[90vw] mx-auto"
            >
                <div className="flex items-center gap-4">
                    <Image
                        src="/icons/Property_logo_6.png"
                        alt="Peter Property Logo"
                        width={45}
                        height={45}
                        className="object-contain"
                    />
                    <span
                        className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[#b88a3a] font-[var(--font-tinos)] drop-shadow-sm"
                        style={{ fontFamily: 'Tinos, var(--font-tinos), serif' }}
                    >
                        PETER PROPERTY
                    </span>
                </div>
            </Link>
        </header>
    );
}
