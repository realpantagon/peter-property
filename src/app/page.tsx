import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import PropertySlideshow from '../components/PropertySlideshow';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';


const propertyCards = [
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
    id: 'p2',
    title: 'โครงการยอดนิยม',
    img: '/properties/P2/20250906_111832308_iOS.jpg',
    sectionName: 'ท่ารั้วแลนด์ 2',
    sectionDetails: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน',
    location: 'ตำบลสันปูเลย ดอยสะเก็ด',
    isNew: false,
    isAvailable: false,
  },
  {
    id: 'p3',
    title: 'โครงการแนะนำ',
    img: '/properties/P3/S__90693634.jpg',
    sectionName: 'ท่ารั้วแลนด์ 3',
    sectionDetails: 'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ',
    location: 'ใกล้อรสิรินโครงการ 6',
    isNew: true,
    isAvailable: true,
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

export default function Home() {
  return (
    <main className="font-[var(--font-ibm)] relative min-h-screen overflow-hidden bg-[#0c0a08] text-[#f7f2e7]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,180,87,0.18),transparent_55%)]" />
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-40 bottom-[-5rem] h-96 w-96 rounded-full bg-[#d9b457]/20 blur-3xl" />
      </div>
      <Header isHome={true} />
      {/* <HeroSection /> */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[12vw] pb-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3 pt-4">
              <span className="text-[12px] uppercase  text-white/60 ">โครงการแนะนำพิเศษ</span>
              <h2 className="text-3xl font-light text-white sm:text-4xl py-2">บ้านที่คัดสรรเพื่อการอยู่อาศัยอย่างมีคุณภาพ</h2>
              <p className="text-base text-white/60">
                บ้านที่เลือกสรรมาอย่างตั้งใจ ผสมผสานการออกแบบที่ลงตัวกับบรรยากาศธรรมชาติ
                พร้อมโครงการที่มีให้เลือกทั้งปัจจุบันและในอนาคต เหมาะสำหรับคนที่มองหาบ้านคุณภาพ
              </p>

            </div>
            {/* <div className="flex gap-4 text-sm">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-left text-white/70">
                <div className="text-xs uppercase tracking-[0.4em] text-white/50">New Launch</div>
                <div className="text-xl font-light text-white">ท่ารั้วแลนด์ 3</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-left text-white/70">
                <div className="text-xs uppercase tracking-[0.4em] text-white/50">Exclusive</div>
                <div className="text-xl font-light text-white">Private Tours</div>
              </div>
            </div> */}
          </div>
          {/* <PropertySlideshow
          images={[
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
            '/properties/P1/20250906_105644078_iOS.jpg',
            '/properties/P1/20250906_105646158_iOS.jpg',
            '/properties/P1/20250906_105648311_iOS.jpg',
            '/properties/P1/20250906_105650472_iOS.jpg',
            '/properties/P1/20250906_105652591_iOS.jpg',
            '/properties/P1/20250906_105654841_iOS.jpg',
            '/properties/P1/20250906_105656892_iOS.jpg',
            '/properties/P1/20250906_105658967_iOS.jpg',
          ]}
          alt="The Nest Maerim"
        /> */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
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
      {/* <section className="relative px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[12vw] pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/15 bg-white/5 px-8 py-12 text-center text-white/70 shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur-xl md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="relative space-y-6">
            <span className="text-[12px] uppercase tracking-[0.55em] text-white/60">Bespoke Consultation</span>
            <h3 className="text-3xl font-light text-white sm:text-4xl">Let Our Specialists Curate Your Next Investment</h3>
            <p className="mx-auto max-w-3xl text-base text-white/65 sm:text-lg">
              Share your aspirations and we will orchestrate private showings, investment analysis, and tailored recommendations that honour your lifestyle and portfolio.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.5em] text-[#0a0804] transition hover:from-amber-300 hover:via-amber-400 hover:to-amber-500"
              >
                Schedule Now
              </button>
              <span className="text-[12px] uppercase tracking-[0.4em] text-white/50">Confidential &amp; Complimentary</span>
            </div>
          </div>
        </div>
      </section> */}
      {/* <ContactUs /> */}
      <Footer />
    </main>
  );
}
