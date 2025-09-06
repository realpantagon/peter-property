import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from '@/components/ContactUs';
import GoogleMapSection from '@/components/GoogleMapSection';
import PropertySlideshow from '@/components/PropertySlideshow';

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

  return (
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header isHome={false} />
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <PropertySlideshow
            images={propertyImages}
            alt="The Nest Maerim"
            className="w-full"
          />

          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">ใหม่</span>
              {/* <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span> */}
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">โครงการใหม่</span>
            </div>
            <div className="flex mb-4 gap-3">
              <Image
                src="/properties/P1/TN_logo.png"
                alt="The Nest Maerim"
                width={50}
                height={0}
                style={{ height: '2.25rem', width: 'auto' }} // 2.25rem = text-3xl
                className="object-cover border border-gray-300 rounded"
              />
              <h1 className="text-3xl font-bold mb-4">The Nest Maerim</h1>
            </div>
            

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">รายละเอียดโครงการ</h3>
                <p className="text-gray-600 mb-2">บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว</p>
                <p className="text-gray-600 mb-2">📍 ตั้งอยู่ในตัวเมืองแม่ริมบนทำเลทอง</p>
                <p className="text-gray-600 mb-2">พื้นที่ใช้สอย: 213-225 ตารางเมตร</p>
                <p className="text-gray-600 mb-2">ที่ดิน: 50-60 ตารางวา</p>
                <p className="text-red-600 font-semibold mb-2">ราคา: 3,690,000 บาท (ลดจาก 4,190,000)</p>
                <p className="text-green-600 text-sm">💡 กึ่ง Smart Home - สั่งงานระบบไฟฟ้าผ่าน App</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
                <ul className="text-gray-600 space-y-1">
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

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-2 text-green-800">🎁 PROMOTION - หลังแรกลด 500,000 บาท!</h3>
              <p className="text-green-700 mb-2">โอนพรี ไม่มีค่าธรรมเนียมใดๆ ไม่มีส่วนกลาง พร้อมของแถม:</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                <ul>
                  <li>• ค่าธรรมเนียมโอนกรรมสิทธิ์</li>
                  <li>• มิเตอร์ไฟฟ้า + น้ำประปา</li>
                  <li>• เคาท์เตอร์ครัว + ซิงค์ล้างจาน</li>
                  <li>• ฮูดดูดควัน + เตาแก๊ส</li>
                  <li>• ฉนวนกันความร้อน</li>
                </ul>
                <ul>
                  <li>• มุ้งลวดทั้งหลัง</li>
                  <li>• สนามหญ้ารอบบ้าน</li>
                  <li>• ปูกระเบื้องรอบบ้าน + ลานจอดรถ</li>
                  <li>• ระบบกำจัดปลวก</li>
                  <li>• ชุดปั๊มน้ำ + ถังเก็บน้ำ</li>
                </ul>
              </div>
            </div>

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
      </section>
      <Footer />
    </main>
  );
}
