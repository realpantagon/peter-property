import Header from '../../../components/Header';
import Image from 'next/image';
import Link from 'next/link';

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
            alt="ท่ารั้วแลนด์ 1" 
            width={800} 
            height={400} 
            className="w-full object-cover"
          />
          
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">พร้อมขาย</span>
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">โครงการยอดนิยม</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">ท่ารั้วแลนด์ 1</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">รายละเอียดโครงการ</h3>
                <p className="text-gray-600 mb-2">คอนโดมิเนียม 1 ห้องนอน 1 ห้องน้ำ</p>
                <p className="text-gray-600 mb-2">📍 ดอยสะเก็ด ท่ารั้ว</p>
                <p className="text-gray-600">พื้นที่ใช้สอย: 35 ตารางเมตร</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• ที่จอดรถใต้อาคาร</li>
                  <li>• ฟิตเนส</li>
                  <li>• สระว่ายน้ำ</li>
                  <li>• ร้านสะดวกซื้อชั้น 1</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
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
