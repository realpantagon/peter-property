import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';
import PropertySlideshow from '@/components/PropertySlideshow';

export default function ProjectP3() {
  const propertyImages = [
    '/properties/P3/20250906_112831850_iOS.jpg',
    '/properties/P3/20250906_112919126_iOS.jpg',
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

  return (
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header isHome={false} />
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <PropertySlideshow
            images={propertyImages}
            alt="ท่ารั้วแลนด์ 3"
            className="w-full"
          />
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">ใหม่</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Smart Home</span>
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">โครงการแนะนำ</span>
            </div>
            <div className="flex items-center mb-4 gap-3">
              <Image
                src="/properties/P2/TL_logo.png"
                alt="TL1"
                width={50}
                height={0}
                style={{ height: '2.25rem', width: 'auto' }} // 2.25rem = text-3xl
                className="object-cover border border-gray-300 rounded"
              />
              <h1 className="text-3xl font-bold">ท่ารั้วแลนด์ 3</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">รายละเอียดโครงการ</h3>
                <p className="text-gray-600 mb-2">บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ</p>
                <p className="text-gray-600 mb-2">📍 ห่างอรสิรินโครงการ 6 เพียง 300 เมตร</p>
                <p className="text-gray-600 mb-2">พื้นที่ใช้สอย: 180 ตารางเมตร</p>
                <p className="text-gray-600 mb-2">ที่ดิน: 50 ตารางวา</p>
                <p className="text-red-600 font-semibold mb-2">ราคา: 2,890,000 บาท</p>
                <p className="text-green-600 text-sm">💡 Smart Home พร้อมอยู่</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• จอดรถยนต์ 2 คัน</li>
                  <li>• ห่างวงแหวน 3 เพียง 1.8 กม.</li>
                  <li>• เข้าออกได้ 3 ทาง</li>
                  <li>• ใกล้ตลาดท่ารั้ว</li>
                  <li>• ห่างเซเว่นอิเลเว่น 500 เมตร</li>
                  <li>• ใกล้โรงเรียนนานาชาติ Mill Hill</li>
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
                  <li>• ปูกระเบื้องลานจอดรถ</li>
                  <li>• ระบบกำจัดปลวก</li>
                  <li>• ชุดปั๊มน้ำ + ถังเก็บน้ำ</li>
                </ul>
              </div>
            </div>
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
      </section>
      <Footer />
    </main>
  );
}
