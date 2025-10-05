import { Metadata } from 'next'
import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';
import PropertySlideshow from '@/components/PropertySlideshow';

export const metadata: Metadata = {
  title: "ท่ารั้วแลนด์ 2 - บ้านเดี่ยว 2 ชั้น ดอยสะเก็ด เชียงใหม่ | Peter Property",
  description: "ท่ารั้วแลนด์ 2 บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน ตำบลสันปูเลย อำเภอดอยสะเก็ด ราคา 2.9-3.19 ล้านบาท พร้อมขาย",
  keywords: [
    "ท่ารั้วแลนด์ 2", "บ้านดอยสะเก็ด", "บ้านเดี่ยวเชียงใหม่", "บ้าน 2 ชั้น",
    "บ้านขายดอยสะเก็ด", "สันปูเลย", "บ้าน 4 ห้องนอน", "house Doi Saket",
    "Chiang Mai property", "2.9 million", "ready to move"
  ],
  openGraph: {
    title: "ท่ารั้วแลนด์ 2 - บ้านเดี่ยว 2 ชั้น ดอยสะเก็ด เชียงใหม่",
    description: "บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ ราคา 2.9-3.19 ล้านบาท พร้อมขาย ดอยสะเก็ด เชียงใหม่",
    url: "https://peterproperty.adappts.com/Project/p2",
    images: [
      {
        url: "https://peterproperty.adappts.com/properties/P2/20250906_111832308_iOS.jpg",
        width: 1200,
        height: 630,
        alt: "ท่ารั้วแลนด์ 2 บ้านเดี่ยว ดอยสะเก็ด เชียงใหม่",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://peterproperty.adappts.com/Project/p2",
  }
}

export default function ProjectP2() {
  const propertyImages = [
    '/properties/P2/20250906_111827569_iOS.jpg',
    '/properties/P2/20250906_111832308_iOS.jpg',
    '/properties/P2/20250906_111834893_iOS.jpg',
    '/properties/P2/20250906_111837009_iOS.jpg',
    '/properties/P2/20250906_111839318_iOS.jpg',
    '/properties/P2/20250906_111841553_iOS.jpg',
    '/properties/P2/20250906_111843783_iOS.jpg',
    '/properties/P2/20250906_111848402_iOS.jpg',
    '/properties/P2/20250906_111850668_iOS.jpg',
    '/properties/P2/20250906_111903360_iOS.jpg',
    '/properties/P2/20250906_111907659_iOS.jpg',
    '/properties/P2/20250906_111910069_iOS.jpg',
    '/properties/P2/20250906_111912405_iOS.jpg',
    '/properties/P2/20250906_111914669_iOS.jpg',
    '/properties/P2/20250906_112041546_iOS.jpg',
    '/properties/P2/20250906_112051814_iOS.jpg',
    '/properties/P2/20250906_112057470_iOS.jpg',
    '/properties/P2/20250906_112137506_iOS.jpg',
    '/properties/P2/20250906_112142611_iOS.jpg',
    '/properties/P2/20250906_112316338_iOS.jpg',
  ];

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Peter Property - ท่ารั้วแลนด์ 2",
    "description": "บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน ตำบลสันปูเลย อำเภอดอยสะเก็ด เชียงใหม่",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ตำบลสันปูเลย",
      "addressLocality": "อำเภอดอยสะเก็ด",
      "addressRegion": "เชียงใหม่",
      "addressCountry": "TH"
    },
    "offers": {
      "@type": "Offer",
      "availability": "InStock",
      "price": "2900000-3190000",
      "priceCurrency": "THB"
    },
    "image": "https://peterproperty.adappts.com/properties/P2/20250906_111832308_iOS.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
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
            <PropertySlideshow images={propertyImages} alt="ท่ารั้วแลนด์ 2" tone="dark" />

            <div className="space-y-10 px-6 py-10 text-white/80 sm:px-10">
              <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.35em]">
                <span className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-4 py-1 text-[#020805]">พร้อมขาย</span>
                <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">โครงการยอดนิยม</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/properties/P2/TL_logo.png"
                  alt="ท่ารั้วแลนด์ 2 โลโก้โครงการ"
                  width={56}
                  height={56}
                  className="h-14 w-auto rounded-2xl border border-white/15 bg-white/10 p-2 object-contain"
                />
                <h1 className="text-4xl font-light text-white sm:text-5xl">ท่ารั้วแลนด์ 2</h1>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3 text-sm text-white/70">
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">รายละเอียดโครงการ</h3>
                  <p>บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน</p>
                  <p>📍 ตำบลสันปูเลย อำเภอดอยสะเก็ด เชียงใหม่</p>
                  <p>พื้นที่ใช้สอย: 200 ตารางเมตร</p>
                  <p>ที่ดิน: 56-64 ตารางวา</p>
                  <p className="text-amber-200">ราคา: 2.9 - 3.19 ล้านบาท</p>
                  <p className="text-emerald-200/90">ห่างเซ็นทรัลเฟสติวัล 6.7 กม. (12 นาที)</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">สิ่งอำนวยความสะดวก</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/65">
                    <li>• จอดรถยนต์ 2 คันในร่ม</li>
                    <li>• ครัวในบ้าน + ครัวนอกบ้าน</li>
                    <li>• เข้าออกได้ 5 เส้นทาง</li>
                    <li>• บ้านพร้อมอยู่</li>
                    <li>• สนามหญ้าข้างบ้าน 5x16 ตร.ม.</li>
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
                    <li>• ปูกระเบื้องลานจอดรถจรดถนน</li>
                    <li>• ระบบกำจัดปลวก</li>
                    <li>• ชุดปั๊มน้ำ + ถังเก็บน้ำ</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <GoogleMapSection
                  lat={18.816382}
                  lng={99.062908}
                  title="แผนที่โครงการ"
                  link="https://maps.app.goo.gl/ex5H8jcqCVYwXXbL9"
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
