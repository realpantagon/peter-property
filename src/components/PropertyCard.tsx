"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { statusColor, type Project } from '@/lib/projects';

export default function PropertyCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/Project/${project.id}`)}
      className="group flex w-full flex-col text-left text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface)]">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 pt-5">
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

        <div className="mt-3 flex items-center justify-between text-base">
          <span className="font-semibold text-[var(--ink)]">{project.price}</span>
          <span className="text-sm text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
            ดูรายละเอียด →
          </span>
        </div>
      </div>
    </button>
  );
}
