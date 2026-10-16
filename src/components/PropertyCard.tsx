import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { statusColor, type Project } from '@/lib/projects';

export default function PropertyCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/Project/${project.id}`}
      className="group flex h-full w-full flex-col overflow-hidden border border-[var(--accent)]/30 bg-[var(--surface)] text-left text-[var(--ink)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_-12px_rgba(184,134,58,0.45)] active:translate-y-0 active:border-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface-2)]">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="text-base text-[var(--muted)]">
          <span className="font-semibold" style={{ color: statusColor(project.status) }}>
            {project.statusLabel}
          </span>{' '}
          · {project.location}
        </p>
        <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-tight text-[var(--ink)]">
          {project.name}
        </h3>
        <p className="text-base text-[var(--tan)]">{project.tagline}</p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--accent)]/20 pt-4 text-base">
          <span className="font-semibold text-[var(--ink)]">{project.price}</span>
          <span className="inline-flex items-center gap-1.5 border border-[var(--accent)]/60 px-3 py-1.5 text-sm font-medium text-[var(--accent-strong)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)]">
            ดูรายละเอียด
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
