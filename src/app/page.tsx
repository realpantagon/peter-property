import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import PropertySlideshow from '../components/PropertySlideshow';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import Image from 'next/image';
import GoogleMapSection from '@/components/GoogleMapSection';


const propertyCards = [
  {
    id: 'p2',
    title: 'โครงการยอดนิยม',
    img: '/properties/P2/20250906_111832308_iOS.jpg',
    sectionName: 'ท่ารั้วแลนด์ 2',
    sectionDetails: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน',
    location: 'ตำบลสันปูเลย ดอยสะเก็ด',
    isNew: true,
    isAvailable: true,
  },
  {
    id: 'p1',
    title: 'โครงการใหม่',
    img: '/properties/P1/20250906_105639731_iOS.jpg',
    sectionName: 'The Nest Maerim',
    sectionDetails: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว',
    location: 'แม่ริม แม่สา',
    isNew: true,
    isAvailable: false,
  },
  {
    id: 'p3',
    title: 'เต็มทุกยูนิต',
    img: '/properties/P3/10_28_1.jpg',
    sectionName: 'ท่ารั้วแลนด์ 3',
    sectionDetails: 'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ',
    location: 'ใกล้อรสิรินโครงการ 6',
    isNew: false,
    isAvailable: false,
    tags: ['SMART HOME'],
  },
  {
    id: 'p4',
    title: 'เต็มทุกยูนิต',
    img: '/properties/P4/20250906_115111550_iOS.jpg',
    sectionName: 'โครงการแม่ริมบ้านสวย',
    sectionDetails: 'บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ',
    location: 'ในตัวเมืองแม่ริม',
    isNew: false,
    isAvailable: false,
  }
];

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

export default function Home() {
  return (
    <main className="font-[var(--font-ibm)] relative min-h-screen overflow-x-hidden bg-[#0c0a08] text-[#f7f2e7]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,180,87,0.12),transparent_60%)]" />
        <div className="absolute -left-32 top-24 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-white/5 blur-[80px] sm:blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#d9b457]/10 blur-[100px] sm:blur-[120px]" />
      </div>

      <Header isHome={true} />

      {/* P2 Project Detail Section */}
      <section className="px-4 pt-6 pb-16 sm:px-8 md:px-16 lg:px-32 xl:px-[12vw]">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/5 bg-[#14100d]/60 shadow-2xl backdrop-blur-sm">
          <PropertySlideshow images={propertyImages} alt="ท่ารั้วแลนด์ 2" tone="dark" className="rounded-t-[32px] sm:rounded-t-[40px]" />

          <div className="space-y-8 px-5 py-8 sm:space-y-12 sm:px-12 md:px-16">
            <div className="flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.35em] font-medium">
              <span className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 px-3 py-1 sm:px-4 sm:py-1.5 text-white shadow-lg shadow-emerald-900/40">พร้อมขาย</span>
              <span className="rounded-full border border-white/20 px-3 py-1 sm:px-4 sm:py-1.5 text-white/70">โครงการยอดนิยม</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-inner shrink-0">
                <Image
                  src="/properties/P2/TL_logo.png"
                  alt="ท่ารั้วแลนด์ 2 โลโก้โครงการ"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-light text-white sm:text-5xl md:text-6xl tracking-tight leading-tight">ท่ารั้วแลนด์ 2</h1>
                <p className="text-sm sm:text-lg text-white/50 font-light">The New Definition of Luxury Living</p>
              </div>
            </div>

            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
              <div className="space-y-6 text-sm text-white/70">
                <h3 className="text-base sm:text-lg font-semibold tracking-[0.2em] text-[#b88a3a] border-l-2 border-[#b88a3a] pl-3">รายละเอียดโครงการ</h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base font-light leading-relaxed">
                  <p className="flex items-center gap-3"><span className="w-5 text-center shrink-0">🏠</span> บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน</p>
                  <p className="flex items-center gap-3"><span className="w-5 text-center shrink-0">📍</span> ตำบลสันปูเลย อำเภอดอยสะเก็ด เชียงใหม่</p>
                  <p className="flex items-center gap-3"><span className="w-5 text-center shrink-0">📐</span> พื้นที่ใช้สอย: 200 ตารางเมตร</p>
                  <p className="flex items-center gap-3"><span className="w-5 text-center shrink-0">🌳</span> ที่ดิน: 56-64 ตารางวา</p>
                  <p className="flex items-center gap-3 text-amber-200 text-lg font-normal"><span className="w-5 text-center shrink-0">💰</span> ราคาเริ่มต้น: 3.19 ล้านบาท</p>
                  <p className="flex items-center gap-3 text-emerald-200/80"><span className="w-5 text-center shrink-0">🚗</span> ห่างเซ็นทรัลเฟสติวัล 6.7 กม. (12 นาที)</p>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold tracking-[0.2em] text-[#b88a3a] border-l-2 border-[#b88a3a] pl-3">สิ่งอำนวยความสะดวก</h3>
                <ul className="mt-4 sm:mt-6 space-y-3 text-sm sm:text-base text-white/65 font-light">
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0"></span> จอดรถยนต์ 2 คันในร่ม</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0"></span> ครัวในบ้าน + ครัวนอกบ้าน</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0"></span> เข้าออกได้ 5 เส้นทาง สะดวกสบาย</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0"></span> บ้านพร้อมอยู่ ตกแต่งครบ</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0"></span> สนามหญ้ากว้างขวาง 5x16 ตร.ม.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[24px] sm:rounded-[32px] border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-emerald-900/5 p-6 sm:p-8 text-emerald-100 shadow-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl group-hover:bg-emerald-500/30 transition-all"></div>
              <h3 className="text-lg sm:text-xl font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-emerald-50 mb-4 flex items-center gap-2">
                <span>🎁</span> PROMOTION
              </h3>
              <p className="mt-3 text-emerald-50/90 text-sm sm:text-base font-light">โอนพรี ไม่มีค่าธรรมเนียมใดๆ ไม่มีส่วนกลาง พร้อมของแถมรายการพิเศษ:</p>
              <div className="mt-6 sm:mt-8 grid gap-x-8 gap-y-3 sm:gap-y-4 md:grid-cols-2 text-sm sm:text-base">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> ค่าธรรมเนียมโอนกรรมสิทธิ์</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> มิเตอร์ไฟฟ้า + น้ำประปา</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> เคาท์เตอร์ครัว + ซิงค์ล้างจาน</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> ฮูดดูดควัน + เตาแก๊ส</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> ฉนวนกันความร้อน</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> มุ้งลวดทั้งหลัง</li>
                </ul>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> เพิ่มเคาน์เตอร์ครัวนอกบ้าน</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> สนามหญ้ารอบบ้าน</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> ปูกระเบื้องรอบบ้าน</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> ปูกระเบื้องลานจอดรถจรดถนน</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> ระบบกำจัดปลวก</li>
                  <li className="flex items-center gap-2 text-emerald-100/80"><span className="text-emerald-400 shrink-0">✓</span> ชุดปั๊มน้ำ + ถังเก็บน้ำ</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
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
        </div>
      </section>

      {/* Property Cards Section */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[12vw] pb-24 sm:pb-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03),transparent_70%)]" />

        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-12 pt-12 sm:pt-16">
          <div className="flex flex-col gap-6 md:justify-between text-center md:text-left">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#b88a3a]">Our Collection</span>
              <h2 className="text-2xl sm:text-3xl font-light text-white md:text-5xl tracking-tight">โครงการบ้านคุณภาพจากเรา</h2>
              <p className="text-sm sm:text-lg text-white/50 font-light max-w-2xl mx-auto md:mx-0">
                สำรวจโครงการบ้านที่หลากหลาย คัดสรรทำเลที่ดีที่สุดเพื่อคุณ
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {propertyCards.map((card, idx) => (
              <PropertyCard
                key={idx}
                id={card.id}
                title={card.title}
                img={card.img}
                sectionName={card.sectionName}
                sectionDetails={card.sectionDetails}
                location={card.location}
                isNew={card.isNew}
                isAvailable={card.isAvailable}
                tags={card.tags}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
