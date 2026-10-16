import React from 'react';
import Image from 'next/image';
import { statusColor, type Project } from '@/lib/projects';
import Header from './Header';
import Footer from './Footer';
import PropertySlideshow from './PropertySlideshow';
import GoogleMapSection from './GoogleMapSection';
import ContactUs from './ContactUs';
import Reveal from './Reveal';

export default function ProjectDetail({ project }: { project: Project }) {
  const amenityPhoto = project.images[Math.min(2, project.images.length - 1)];
  const promoPhoto = project.images[Math.min(4, project.images.length - 1)];

  return (
    <main className="min-h-svh bg-[var(--bg)] text-[var(--ink)]">
      <Header />

      {/* Hero — the photograph is the argument */}
      <section className="relative h-[58svh] w-full overflow-hidden sm:h-[85svh]">
        <div className="hero-shutter absolute inset-0">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            priority
            className="object-cover object-[center_32%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--bg-deep)] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 sm:px-10 sm:pb-14">
          <h1 className="font-[var(--font-display)] text-[10vw] font-semibold leading-[0.95] tracking-tight text-[var(--ink)] sm:text-[5vw]">
            {project.name}
          </h1>
          <p className="mt-3 max-w-xl text-base text-[var(--tan)] sm:text-lg">
            <span className="font-semibold" style={{ color: statusColor(project.status) }}>
              {project.statusLabel}
            </span>{' '}
            · {project.tagline}
          </p>
        </div>
      </section>

      {/* Intro — a person describing the house, the numbers at a glance, and what's nearby */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 sm:py-24">
        <Reveal>
          <p className="max-w-2xl text-xl leading-snug text-[var(--ink)] sm:text-2xl">
            {project.intro}
          </p>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <p className="font-[var(--font-display)] text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
                {project.bedrooms}
              </p>
              <p className="mt-1 text-base text-[var(--muted)]">ห้องนอน</p>
            </div>
            <div>
              <p className="font-[var(--font-display)] text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
                {project.bathrooms}
              </p>
              <p className="mt-1 text-base text-[var(--muted)]">ห้องน้ำ</p>
            </div>
            <div>
              <p className="font-[var(--font-display)] text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
                {project.usableArea}
              </p>
              <p className="mt-1 text-base text-[var(--muted)]">พื้นที่ใช้สอย</p>
            </div>
            <div>
              <p className="font-[var(--font-display)] text-4xl font-semibold text-[var(--accent)] sm:text-5xl">
                {project.price}
              </p>
              {project.priceNote && (
                <p className="mt-1 text-base text-[var(--muted)]">{project.priceNote}</p>
              )}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-base text-[var(--muted)]">ใกล้อะไรบ้าง</p>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-lg text-[var(--tan)]">
              {project.facts.map((f) => (
                <span key={f.label}>
                  {f.label} <span className="text-[var(--ink)]">{f.value}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Gallery — one browsable set, not a teaser and a repeat */}
      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-10 sm:pb-24">
        <Reveal>
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
              ภาพโครงการ
            </h2>
            <span className="text-base text-[var(--muted)]">{project.images.length} ภาพ</span>
          </div>
          <PropertySlideshow images={project.images} alt={project.name} />
        </Reveal>
      </section>

      {/* Amenities — read as a sentence, not a checklist, paired with a photo */}
      <section className="bg-[var(--surface)] px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
              <div>
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                  ในบ้านมีอะไรให้บ้าง
                </h2>
                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[var(--tan)] sm:text-2xl">
                  {project.amenities.join('  ·  ')}
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
                <Image
                  src={amenityPhoto}
                  alt={`${project.name} ภายในบ้าน`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Promotion — a real bulleted list, paired with a photo */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 sm:py-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
              <Image
                src={promoPhoto}
                alt={`${project.name} ของแถมในโปรโมชัน`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                {project.promotion.headline}
              </h2>
              <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {project.promotion.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[var(--tan)]">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Map + Contact */}
      <section className="mx-auto max-w-[1400px] space-y-6 px-5 py-16 sm:px-10 sm:py-24">
        <Reveal>
          <GoogleMapSection lat={project.map.lat} lng={project.map.lng} link={project.map.link} />
        </Reveal>
        <Reveal delay={100}>
          <ContactUs />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
