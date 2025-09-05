import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';

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
            alt="แม่ริม" 
            width={800} 
            height={400} 
            className="w-full object-cover"
          />
          
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">หมดทุกยูนิต</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">แม่ริม</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">รายละเอียดโครงการ</h3>
                <p className="text-gray-600 mb-2">บ้านเดี่ยว 3 ชั้น 5 ห้องนอน 5 ห้องน้ำ</p>
                <p className="text-gray-600 mb-2">📍 แม่ริม ริมใต้</p>
                <p className="text-gray-600">พื้นที่ใช้สอย: 280 ตารางเมตร</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• ที่จอดรถ 3 คัน</li>
                  <li>• สระว่ายน้ำส่วนตัว</li>
                  <li>• ห้องแม่บ้าน</li>
                  <li>• วิวภูเขา 360 องศา</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-red-800">สถานะ: ขายหมดแล้ว</h3>
              <p className="text-red-700">โครงการนี้ขายหมดทุกยูนิตแล้ว สามารถติดตามโครงการใหม่ได้ที่เว็บไซต์</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-2">ข้อมูลติดต่อ</h3>
              <p className="text-gray-600">โทรศัพท์: 053-xxx-xxxx</p>
              <p className="text-gray-600">อีเมล: info@peterproperty.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
