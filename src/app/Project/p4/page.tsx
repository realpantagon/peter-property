import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';
import PropertySlideshow from '@/components/PropertySlideshow';

export const metadata: Metadata = {
  title: 'โครงการแม่ริมบ้านสวย - บ้านเดี่ยว 1 ชั้น แม่ริม เชียงใหม่ | Peter Property',
  description:
    'โครงการแม่ริมบ้านสวย บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ ในตัวเมืองแม่ริม เชียงใหม่ ใกล้ตลาดสด ที่ว่าการอำเภอ และสิ่งอำนวยความสะดวก ราคาเริ่มต้น 1.9 ล้านบาท',
  keywords: [
    'โครงการแม่ริมบ้านสวย',
    'บ้านแม่ริม',
    'บ้านเดี่ยวชั้นเดียว',
    'บ้านเดี่ยวเชียงใหม่',
    'บ้านใกล้ตลาดแม่ริม',
    'บ้าน 2 ห้องนอน',
    'Mae Rim house',
    'Chiang Mai property',
  ],
  openGraph: {
    title: 'โครงการแม่ริมบ้านสวย - บ้านเดี่ยว 1 ชั้น แม่ริม เชียงใหม่',
    description:
      'บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ ในตัวเมืองแม่ริม เชียงใหม่ ทำเลใกล้ตลาดสดแม่ริมและที่ว่าการอำเภอ ราคาเริ่มต้น 1.9 ล้านบาท',
    url: 'https://peterproperty.adappts.com/Project/p4',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P4/20250906_115111550_iOS.jpg',
        width: 1200,
        height: 630,
        alt: 'โครงการแม่ริมบ้านสวย บ้านเดี่ยว 1 ชั้น แม่ริม เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p4',
  },
};

export default function ProjectP4() {
  const propertyImages = [
    '/properties/P4/S__8282141.jpg',
    '/properties/P4/20250906_115111550_iOS.jpg',
    '/properties/P4/20250906_115119953_iOS.jpg',
    '/properties/P4/20250906_115125413_iOS.jpg',
    '/properties/P4/20250906_115140135_iOS.jpg',
    '/properties/P4/20250906_115143665_iOS.jpg',
  ];

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - โครงการแม่ริมบ้านสวย',
    description:
      'บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ ในตัวเมืองแม่ริม เชียงใหม่ ใกล้ตลาดสดแม่ริม และที่ว่าการอำเภอ เดินทางสะดวก เหมาะสำหรับครอบครัว',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ในตัวเมืองแม่ริม',
      addressLocality: 'อำเภอแม่ริม',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      price: '1900000',
      priceCurrency: 'THB',
    },
    image: 'https://peterproperty.adappts.com/properties/P4/20250906_115111550_iOS.jpg',
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
            <PropertySlideshow images={propertyImages} alt="โครงการแม่ริมบ้านสวย" tone="dark" />

            <div className="space-y-10 px-6 py-10 text-white/80 sm:px-10">
              {/* <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.35em]">
                <span className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-4 py-1 text-[#020805]">พร้อมขาย</span>
                <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">โครงการพิเศษ</span>
              </div> */}

              <h1 className="text-4xl font-light text-white sm:text-5xl">โครงการแม่ริมบ้านสวย</h1>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3 text-sm text-white/70">
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">รายละเอียดโครงการ</h3>
                  <p>บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ</p>
                  <p>📍 ในตัวเมืองแม่ริม อำเภอแม่ริม จ.เชียงใหม่</p>
                  <p>พื้นที่ใช้สอย: 90 ตารางเมตร</p>
                  <p>ที่ดิน: 50-60 ตารางวา</p>
                  <p className="text-amber-200">ราคา: 1,900,000 บาท</p>
                  <p className="text-emerald-200/90">ห่างตลาดสดแม่ริม ที่ว่าการฯ เพียง 200 เมตร</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">สิ่งอำนวยความสะดวก</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/65">
                    <li>• ที่จอดรถยนต์ 2 คัน</li>
                    <li>• ห้องครัวในบ้าน + ครัวนอกบ้าน</li>
                    <li>• ห้องเก็บเสื้อผ้า</li>
                    <li>• ใกล้ตลาดสดแม่ริม</li>
                    <li>• ใกล้สถานีตำรวจแม่ริม</li>
                    <li>• ใกล้แม่ริมพลาซ่า</li>
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
                  lat={18.917215}
                  lng={98.948109}
                  title="แผนที่โครงการ"
                  link="https://maps.app.goo.gl/bwt7WcxNjUnLYhYw6"
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
