import { Metadata } from 'next'
import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
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
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header isHome={false} />
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <PropertySlideshow
            images={propertyImages}
            alt="ท่ารั้วแลนด์ 2"
            className="w-full"
          />
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span>
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">โครงการยอดนิยม</span>
            </div>
            <div className="flex items-center mb-4 gap-3">
              <Image
              src="/properties/P2/TL_logo.png"
              alt="ท่ารั้วแลนด์ 2 โลโก้โครงการ"
              width={50}
              height={0}
              style={{ height: '2.25rem', width: 'auto' }} // 2.25rem = text-3xl
              className="object-cover border border-gray-300 rounded"
              />
              <h1 className="text-3xl font-bold">ท่ารั้วแลนด์ 2</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">รายละเอียดโครงการ</h3>
                <p className="text-gray-600 mb-2">บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน</p>
                <p className="text-gray-600 mb-2">📍 ตำบลสันปูเลย อำเภอดอยสะเก็ด เชียงใหม่</p>
                <p className="text-gray-600 mb-2">พื้นที่ใช้สอย: 200 ตารางเมตร</p>
                <p className="text-gray-600 mb-2">ที่ดิน: 56-64 ตารางวา</p>
                <p className="text-red-600 font-semibold mb-2">ราคา: 2.9 - 3.19 ล้านบาท</p>
                <p className="text-green-600 text-sm">ห่างเซ็นทรัลเฟสติวัล 6.7 กม. (12 นาที)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• จอดรถยนต์ 2 คันในร่ม</li>
                  <li>• ครัวในบ้าน + ครัวนอกบ้าน</li>
                  <li>• เข้าออกได้ 5 เส้นทาง</li>
                  <li>• บ้านพร้อมอยู่</li>
                  <li>• สนามหญ้าข้างบ้าน 5x16 ตร.ม.</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-2 text-green-800">🎁 PROMOTION</h3>
              <p className="text-green-700 mb-2">โอนพรี ไม่มีค่าธรรมเนียมใดๆ ไม่มีส่วนกลาง พร้อมของแถม:</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                <ul>
                  <li>• ค่าธรรมเนียมโอนกรรมสิทธิ์</li>
                  <li>• มิเตอร์ไฟฟ้า + น้ำประปา</li>
                  <li>• เคาท์เตอร์ครัว + ซิงค์ล้างจาน</li>
                  <li>• ฮูดดูดควัน + เตาแก๊ส</li>
                  <li>• ฉนวนกันความร้อน</li>
                  <li>• มุ้งลวดทั้งหลัง</li>
                </ul>
                <ul>
                  <li>• เพิ่มเคาน์เตอร์ครัวนอกบ้าน</li>
                  <li>• สนามหญ้ารอบบ้าน</li>
                  <li>• ปูกระเบื้องรอบบ้าน</li>
                  <li>• ปูกระเบื้องลานจอดรถจรดถนน</li>
                  <li>• ระบบกำจัดปลวก</li>
                  <li>• ชุดปั๊มน้ำ + ถังเก็บน้ำ</li>
                </ul>
              </div>
            </div>
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
      </section>
      <Footer />
    </main>
    </>
  );
}
