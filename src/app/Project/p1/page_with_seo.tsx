import { Metadata } from 'next'
import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';
import PropertySlideshow from '@/components/PropertySlideshow';

export const metadata: Metadata = {
  title: "The Nest Maerim - บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่ | Peter Property",
  description: "The Nest Maerim บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ตำบลแม่สา อำเภอแม่ริม เชียงใหม่ พร้อมขาย โครงการใหม่",
  keywords: [
    "The Nest Maerim", "บ้านแม่ริม", "บ้านเดี่ยวเชียงใหม่", "บ้าน 2 ชั้น",
    "บ้านขายแม่ริม", "โครงการใหม่", "บ้าน 4 ห้องนอน", "house Maerim",
    "Chiang Mai property", "new project", "2 story house"
  ],
  openGraph: {
    title: "The Nest Maerim - บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่",
    description: "บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ ตำบลแม่สา อำเภอแม่ริม โครงการใหม่พร้อมขาย",
    url: "https://peterproperty.adappts.com/Project/p1",
    images: [
      {
        url: "https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg",
        width: 1200,
        height: 630,
        alt: "The Nest Maerim บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://peterproperty.adappts.com/Project/p1",
  }
}

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

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Peter Property - The Nest Maerim",
    "description": "บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ตำบลแม่สา อำเภอแม่ริม เชียงใหม่",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ตำบลแม่สา",
      "addressLocality": "อำเภอแม่ริม",
      "addressRegion": "เชียงใหม่",
      "addressCountry": "TH"
    },
    "offers": {
      "@type": "Offer",
      "availability": "InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "THB"
      }
    },
    "image": "https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header isHome={false} />
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <PropertySlideshow
            images={propertyImages}
            alt="The Nest Maerim บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่"
            className="w-full"
          />

          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">ใหม่</span>
              {/* <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span> */}
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">โครงการใหม่</span>
            </div>
            <div className="flex items-center mb-4 gap-3">
              <Image
                src="/properties/P1/The_Nest_logo.jpg"
                alt="The Nest Maerim โลโก้โครงการ"
                width={50}
                height={0}
                style={{ height: '2.25rem', width: 'auto' }}
                className="object-cover"
              />
              <h1 className="text-3xl font-bold">The Nest Maerim</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">รายละเอียดโครงการ</h2>
                <p className="text-gray-600 mb-2">บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว</p>
                <p className="text-gray-600 mb-2">📍 ตำบลแม่สา อำเภอแม่ริม เชียงใหม่</p>
                <p className="text-gray-600 mb-2">พื้นที่ใช้สอย: 200 ตารางเมตร</p>
                <p className="text-gray-600 mb-2">ที่ดิน: 50-80 ตารางวา</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• จอดรถยนต์ 2 คันในร่ม</li>
                  <li>• ครัวในบ้าน + ครัวนอกบ้าน</li>
                  <li>• เข้าออกได้หลายเส้นทาง</li>
                  <li>• บ้านพร้อมอยู่</li>
                  <li>• สวนข้างบ้าน</li>
                </ul>
              </div>
            </div>
            <GoogleMapSection
              lat={18.9074}
              lng={98.9063}
              title="แผนที่โครงการ The Nest Maerim"
              zoom={16}
            />
            <ContactUs />
          </div>
        </div>
      </section>
      <Footer />
    </main>
    </>
  );
}
