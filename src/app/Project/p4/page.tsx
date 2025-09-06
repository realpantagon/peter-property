import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';

export default function ProjectP4() {
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
            src="/public/vercel.svg"
            alt="โครงการแม่ริมบ้านสวย"
            width={800}
            height={400}
            className="w-full object-cover"
          />

          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span>
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">โครงการพิเศษ</span>
            </div>

            <h1 className="text-3xl font-bold mb-4">โครงการแม่ริมบ้านสวย</h1>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">รายละเอียดโครงการ</h3>
                <p className="text-gray-600 mb-2">บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ</p>
                <p className="text-gray-600 mb-2">📍 ในตัวเมืองแม่ริม อำเภอแม่ริม จ.เชียงใหม่</p>
                <p className="text-gray-600 mb-2">พื้นที่ใช้สอย: 90 ตารางเมตร</p>
                <p className="text-gray-600 mb-2">ที่ดิน: 50-60 ตารางวา</p>
                <p className="text-red-600 font-semibold mb-2">ราคา: 1,900,000 บาท</p>
                <p className="text-green-600 text-sm">ห่างตลาดสดแม่ริม ที่ว่าการฯ เพียง 200 เมตร</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• ที่จอดรถยนต์ 2 คัน</li>
                  <li>• ห้องครัวในบ้าน + ครัวนอกบ้าน</li>
                  <li>• ห้องเก็บเสื้อผ้า</li>
                  <li>• ใกล้ตลาดสดแม่ริม</li>
                  <li>• ใกล้สถานีตำรวจแม่ริม</li>
                  <li>• ใกล้แม่ริมพลาซ่า</li>
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
              lat={18.917215}
              lng={98.948109}
              title="แผนที่โครงการ"
              link="https://maps.app.goo.gl/bwt7WcxNjUnLYhYw6"
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
