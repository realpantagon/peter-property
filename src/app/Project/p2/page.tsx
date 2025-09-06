import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';

export default function ProjectP2() {
  return (
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header />
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← กลับสู่หน้าหลัก
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/public/globe.svg"
            alt="ท่ารั้วแลนด์ 2"
            width={800}
            height={400}
            className="w-full object-cover"
          />

          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span>
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">โครงการยอดนิยม</span>
            </div>

            <h1 className="text-3xl font-bold mb-4">ท่ารั้วแลนด์ 2</h1>

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
  );
}
