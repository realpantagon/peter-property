import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';
import PropertySlideshow from '@/components/PropertySlideshow';

export const metadata: Metadata = {
  title: 'ท่ารั้วแลนด์ 3 - บ้านเดี่ยว Smart Home เชียงใหม่ | Peter Property',
  description:
    'ท่ารั้วแลนด์ 3 บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ ใกล้อรสิรินโครงการ 6 ดอยสะเก็ด เชียงใหม่ ทำเลดี เดินทางสะดวก พร้อมโปรโมชันโอนฟรี',
  keywords: [
    'ท่ารั้วแลนด์ 3',
    'Smart Home เชียงใหม่',
    'บ้านเดี่ยวเชียงใหม่',
    'บ้าน Smart Home',
    'บ้านดอยสะเก็ด',
    'บ้าน 4 ห้องนอน',
    'Chiang Mai smart home',
    'บ้านโครงการใหม่',
  ],
  openGraph: {
    title: 'ท่ารั้วแลนด์ 3 - บ้านเดี่ยว Smart Home เชียงใหม่',
    description:
      'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ ใกล้อรสิรินโครงการ 6 ดอยสะเก็ด เชียงใหม่ พร้อมสิ่งอำนวยความสะดวกและโปรโมชันพิเศษ',
    url: 'https://peterproperty.adappts.com/Project/p3',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P3/10_28_1.jpg',
        width: 1200,
        height: 630,
        alt: 'ท่ารั้วแลนด์ 3 บ้านเดี่ยว Smart Home เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p3',
  },
};

export default function ProjectP3() {
  const propertyImages = [
    '/properties/P3/10_28_1.jpg',
    '/properties/P3/10_28_2.jpg',
    '/properties/P3/10_28_3.jpg',
    '/properties/P3/S__90693634.jpg',
    '/properties/P3/20250906_112831850_iOS.jpg',
    '/properties/P3/20250906_112921359_iOS.jpg',
    '/properties/P3/20250906_112923524_iOS.jpg',
    '/properties/P3/20250906_112925779_iOS.jpg',
    '/properties/P3/20250906_112927818_iOS.jpg',
    '/properties/P3/20250906_112930657_iOS.jpg',
    '/properties/P3/20250906_112935894_iOS.jpg',
    '/properties/P3/20250906_112942066_iOS.jpg',
    '/properties/P3/20250906_112951326_iOS.jpg',
    '/properties/P3/20250906_112953821_iOS.jpg',
    '/properties/P3/20250906_112955883_iOS.jpg',
    '/properties/P3/20250906_112959099_iOS.jpg',
    '/properties/P3/20250906_113003125_iOS.jpg',
    '/properties/P3/20250906_113013668_iOS.jpg',
  ];

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - ท่ารั้วแลนด์ 3',
    description:
      'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ ใกล้อรสิรินโครงการ 6 ดอยสะเก็ด เชียงใหม่ พร้อมสิ่งอำนวยความสะดวกและการเดินทางสะดวก',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ใกล้อรสิรินโครงการ 6',
      addressLocality: 'อำเภอดอยสะเก็ด',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      price: '2890000',
      priceCurrency: 'THB',
    },
    image: 'https://peterproperty.adappts.com/properties/P3/10_28_1.jpg',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="font-[var(--font-ibm)] relative min-h-screen overflow-hidden bg-[#0c0a08] text-[#f7f2e7]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,180,87,0.16),transparent_55%)]" />
          <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-40 bottom-[-5rem] h-96 w-96 rounded-full bg-[#d9b457]/20 blur-3xl" />
        </div>
        <Header isHome={false} />
        <section className="px-4 pt-2 pb-20 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#14100d]/80 shadow-[0_55px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur">
            <PropertySlideshow images={propertyImages} alt="ท่ารั้วแลนด์ 3" tone="dark" />

            <div className="space-y-10 px-6 py-10 text-white/80 sm:px-10">
              <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.35em]">
                {/* <span className="rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 px-4 py-1 text-[#0a0502]">ใหม่</span> */}
                {/* <span className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-4 py-1 text-[#020805]">พร้อมขาย</span> */}
                <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">Smart Home</span>
                <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">โครงการแนะนำ</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/properties/P2/TL_logo.png"
                  alt="ท่ารั้วแลนด์ 3 โลโก้โครงการ"
                  width={56}
                  height={56}
                  className="h-14 w-auto rounded-2xl border border-white/15 bg-white/10 p-2 object-contain"
                />
                <h1 className="text-4xl font-light text-white sm:text-5xl">ท่ารั้วแลนด์ 3</h1>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3 text-sm text-white/70">
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">รายละเอียดโครงการ</h3>
                  <p>บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ</p>
                  <p>📍 ห่างอรสิรินโครงการ 6 เพียง 300 เมตร</p>
                  <p>พื้นที่ใช้สอย: 180 ตารางเมตร</p>
                  <p>ที่ดิน: 50 ตารางวา</p>
                  <p className="text-amber-200">ราคา: 2,890,000 บาท</p>
                  <p className="text-emerald-200/90">💡 Smart Home พร้อมอยู่</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">สิ่งอำนวยความสะดวก</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/65">
                    <li>• จอดรถยนต์ 2 คัน</li>
                    <li>• ห่างวงแหวน 3 เพียง 1.8 กม.</li>
                    <li>• เข้าออกได้ 3 ทาง</li>
                    <li>• ใกล้ตลาดท่ารั้ว</li>
                    <li>• ห่างเซเว่นอิเลเว่น 500 เมตร</li>
                    <li>• ใกล้โรงเรียนนานาชาติ Mill Hill</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[28px] border border-emerald-400/30 bg-emerald-500/10 p-6 text-sm text-emerald-100 shadow-[0_35px_90px_-60px_rgba(16,185,129,0.45)]">
                <h3 className="text-lg font-semibold tracking-[0.3em] text-emerald-50">🎁 PROMOTION</h3>
                <p className="mt-3 text-emerald-50/90">โอนพรี ไม่มีค่าธรรมเนียมใดๆ ไม่มีส่วนกลาง พร้อมของแถม:</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <ul className="space-y-2">
                    <li>• ค่าธรรมเนียมโอนกรรมสิทธิ์</li>
                    <li>• มิเตอร์ไฟฟ้า + น้ำประปา</li>
                    <li>• เคาท์เตอร์ครัว + ซิงค์ล้างจาน</li>
                    <li>• ฮูดดูดควัน + เตาแก๊ส</li>
                    <li>• ฉนวนกันความร้อน</li>
                    <li>• มุ้งลวดทั้งหลัง</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• เพิ่มเคาน์เตอร์ครัวนอกบ้าน</li>
                    <li>• สนามหญ้ารอบบ้าน</li>
                    <li>• ปูกระเบื้องรอบบ้าน</li>
                    <li>• ปูกระเบื้องลานจอดรถ</li>
                    <li>• ระบบกำจัดปลวก</li>
                    <li>• ชุดปั๊มน้ำ + ถังเก็บน้ำ</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <GoogleMapSection
                  lat={18.796216}
                  lng={99.080786}
                  title="แผนที่โครงการ"
                  link="https://maps.app.goo.gl/mSqx4qmiikyjzzM98"
                  zoom={16}
                />
                <ContactUs />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
