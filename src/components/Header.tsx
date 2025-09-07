import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ isHome = false }: { isHome?: boolean }) {
    return (
        <Link href="/">
            <header className="flex items-center justify-center px-4 py-6 bg-[#faf9f6] shadow-sm">
                <div className="flex items-center gap-4">
                    <Image
                        src="/icons/Property_logo_6.png"
                        alt="Peter Property Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span
                        className="text-3xl font-extrabold tracking-wide text-[#b88a3a] font-[var(--font-tinos)]"
                        style={{ fontFamily: 'Tinos, var(--font-tinos), serif' }}
                    >
                        PETER PROPERTY
                    </span>
                </div>
            </header>
        </Link>
    );
}
