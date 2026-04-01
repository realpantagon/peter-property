import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';
import PropertySlideshow from '@/components/PropertySlideshow';

export const metadata: Metadata = {
  title: "The Nest Maerim - บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่ | Peter Property",
  description:
    "The Nest Maerim บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ทำเลแม่ริม เชียงใหม่ ใกล้สิ่งอำนวยความสะดวก พร้อมโปรโมชันพิเศษ",
  keywords: [
    'The Nest Maerim',
    'บ้านแม่ริม',
    'บ้านเดี่ยวเชียงใหม่',
    'บ้าน 2 ชั้น',
    'บ้านขายแม่ริม',
    'โครงการใหม่',
    'บ้าน 4 ห้องนอน',
    'house Maerim',
    'Chiang Mai property',
    'new project',
    '2 story house',
  ],
  openGraph: {
    title: 'The Nest Maerim - บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่',
    description:
      'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ตำบลแม่สา อำเภอแม่ริม เชียงใหม่ โครงการใหม่พร้อมขาย',
    url: 'https://peterproperty.adappts.com/Project/p1',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg',
        width: 1200,
        height: 630,
        alt: 'The Nest Maerim บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p1',
  },
};

export default function ProjectP1() {
  const propertyImages = [
    '/properties/P1/20250906_105604356_iOS.jpg',
    '/properties/P1/20250906_105609464_iOS.jpg',
    '/properties/P1/20250906_105612057_iOS.jpg',
    '/properties/P1/20250906_105614562_iOS.jpg',
    '/properties/P1/20250906_105617424_iOS.jpg',
    '/properties/P1/20250906_105619705_iOS.jpg',
    '/properties/P1/20250906_105622051_iOS.jpg',
    '/properties/P1/20250906_105624557_iOS.jpg',
    '/properties/P1/20250906_105626944_iOS.jpg',
    '/properties/P1/20250906_105629322_iOS.jpg',
    '/properties/P1/20250906_105632493_iOS.jpg',
    '/properties/P1/20250906_105635162_iOS.jpg',
    '/properties/P1/20250906_105637419_iOS.jpg',
    '/properties/P1/20250906_105639731_iOS.jpg',
    '/properties/P1/20250906_105641882_iOS.jpg',
    // '/properties/P1/20250906_105644078_iOS.jpg',
    '/properties/P1/20250906_105646158_iOS.jpg',
    '/properties/P1/20250906_105648311_iOS.jpg',
    '/properties/P1/20250906_105650472_iOS.jpg',
    '/properties/P1/20250906_105652591_iOS.jpg',
    '/properties/P1/20250906_105654841_iOS.jpg',
    '/properties/P1/20250906_105656892_iOS.jpg',
    '/properties/P1/20250906_105658967_iOS.jpg',
  ];

  // JSON-LD Structured Data for GEO/SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - The Nest Maerim',
    description:
      'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ตำบลแม่สา อำเภอแม่ริม เชียงใหม่ ทำเลดี ใกล้สิ่งอำนวยความสะดวก',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ตำบลแม่สา',
      addressLocality: 'อำเภอแม่ริม',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      priceCurrency: 'THB',
    },
    image:
      'https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg',
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
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#14100d]/80 shadow-[0_55px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur p-1">
            <PropertySlideshow images={propertyImages} alt="The Nest Maerim" tone="dark" />

            <div className="space-y-10 px-6 py-10 text-white/80 sm:px-10">
              <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.35em]">
                <span className="rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 px-4 py-1 text-[#0a0502]">ใหม่</span>
                {/* <span className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-4 py-1 text-[#020805]">พร้อมขาย</span> */}
                <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">โครงการใหม่</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/properties/P1/TN_logo.png"
                  alt="The Nest Maerim"
                  width={56}
                  height={56}
                  className="h-14 w-auto rounded-2xl border border-white/15 bg-white/10 p-2 object-contain"
                />
                <h1 className="text-3xl font-light text-white sm:text-5xl">The Nest Maerim</h1>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3 text-sm text-white/70">
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">รายละเอียดโครงการ</h3>
                  <p>บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว</p>
                  <p>📍 ตั้งอยู่ในตัวเมืองแม่ริมบนทำเลทอง</p>
                  <p>พื้นที่ใช้สอย: 213-225 ตารางเมตร</p>
                  <p>ที่ดิน: 50-60 ตารางวา</p>
                  <p className="text-amber-200">ราคา: 3,690,000 บาท (ลดจาก 4,190,000)</p>
                  <p className="text-emerald-200/90">💡 กึ่ง Smart Home - สั่งงานระบบไฟฟ้าผ่าน App</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white/80">สิ่งอำนวยความสะดวก</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/65">
                    <li>• ที่จอดรถยนต์ 2 คันในร่ม</li>
                    <li>• ห้องรับแขก ห้องรับประทานอาหาร</li>
                    <li>• ปูกระเบื้องโรงรถจรดถนน</li>
                    <li>• วิวดอยสุเทพ บรรยากาศเงียบสงบ</li>
                    <li>• ห่างกาดฟรั่งแม่ริม 300 เมตร</li>
                    <li>• ห่างแมคโคร 500 เมตร</li>
                    <li>• จากสนามบิน 30 นาที</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[28px] border border-emerald-400/30 bg-emerald-500/10 p-6 text-sm text-emerald-100 shadow-[0_35px_90px_-60px_rgba(16,185,129,0.45)]">
                <h3 className="text-lg font-semibold tracking-[0.3em] text-emerald-50">🎁 PROMOTION - หลังแรกลด 500,000 บาท!</h3>
                <p className="mt-3 text-emerald-50/90">โอนพรี ไม่มีค่าธรรมเนียมใดๆ ไม่มีส่วนกลาง พร้อมของแถม:</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <ul className="space-y-2">
                    <li>• ค่าธรรมเนียมโอนกรรมสิทธิ์</li>
                    <li>• มิเตอร์ไฟฟ้า + น้ำประปา</li>
                    <li>• เคาท์เตอร์ครัว + ซิงค์ล้างจาน</li>
                    <li>• ฮูดดูดควัน + เตาแก๊ส</li>
                    <li>• ฉนวนกันความร้อน</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• มุ้งลวดทั้งหลัง</li>
                    <li>• สนามหญ้ารอบบ้าน</li>
                    <li>• ปูกระเบื้องรอบบ้าน + ลานจอดรถ</li>
                    <li>• ระบบกำจัดปลวก</li>
                    <li>• ชุดปั๊มน้ำ + ถังเก็บน้ำ</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <GoogleMapSection
                  lat={18.904425}
                  lng={98.945098}
                  title="แผนที่โครงการ"
                  link="https://maps.app.goo.gl/kmXgfSA9iJsMA3wN6"
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
