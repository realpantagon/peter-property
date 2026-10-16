import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { projectList, projects } from '@/lib/projects';

const flagship = projects.p1;

export default function Home() {
  return (
    <main className="min-h-svh bg-[var(--bg)] text-[var(--ink)]">
      <Header />

      {/* Hero — the place carries it */}
      <section className="relative h-[60svh] w-full overflow-hidden sm:h-[90svh]">
        <div className="hero-shutter absolute inset-0">
          <Image
            src={flagship.images[0]}
            alt={flagship.name}
            fill
            priority
            className="object-cover object-[center_32%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--bg-deep)] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-10 sm:pb-16">
          <Reveal>
            <h1 className="font-[var(--font-display)] text-[16vw] font-semibold leading-[0.9] tracking-tight text-[var(--ink)] sm:text-[8vw]">
              บ้านเดี่ยว
              <br />
              เชียงใหม่
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Link
                href="#collection"
                className="bg-[var(--accent)] px-6 py-3 text-base font-semibold text-[var(--accent-ink)] transition-colors hover:bg-[var(--accent-strong)]"
              >
                ดูโครงการทั้งหมด
              </Link>
              <p className="max-w-sm text-base text-[var(--tan)]">
                The Nest Maerim A1 ขายแล้ว ตอนนี้เปิดจอง B2 และ A2 กำลังก่อสร้างอยู่
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery — property collection */}
      <section id="collection" className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex items-baseline justify-between">
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[var(--ink)] sm:text-5xl">
              โครงการทั้งหมด
            </h2>
            <span className="text-base text-[var(--muted)]">{projectList.length} โครงการ</span>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {projectList.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 60}>
                <PropertyCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <ContactUs />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
