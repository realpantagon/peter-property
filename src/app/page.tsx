import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import PhotoSlideshow from '../components/PhotoSlideshow';


const propertyCards = [
  {
    id: 'p1',
    title: 'โครงการใหม่',
    img: '/public/file.svg',
    sectionName: 'The Nest Maerim',
    sectionDetails: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว',
    location: 'แม่ริม แม่สา',
    isNew: true,
    isAvailable: false,
  },
  {
    id: 'p2',
    title: 'โครงการยอดนิยม',
    img: '/public/globe.svg',
    sectionName: 'ท่ารั้วแลนด์ 2',
    sectionDetails: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน',
    location: 'ตำบลสันปูเลย ดอยสะเก็ด',
    isNew: true,
    isAvailable: true,
  },
  {
    id: 'p3',
    title: 'โครงการแนะนำ',
    img: '/public/next.svg',
    sectionName: 'ท่ารั้วแลนด์ 3',
    sectionDetails: 'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ',
    location: 'ใกล้อรสิรินโครงการ 6',
    isNew: true,
    isAvailable: true,
  },
  {
    id: 'p4',
    title: 'เต็มทุกยูนิต',
    img: '/public/vercel.svg',
    sectionName: 'โครงการแม่ริมบ้านสวย',
    sectionDetails: 'บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ',
    location: 'ในตัวเมืองแม่ริม',
    isNew: false,
    isAvailable: false,
  }
];

export default function Home() {
  return (
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header />
      {/* <HeroSection /> */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        <PhotoSlideshow />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            />
          ))}
        </div>
      </section>
        <footer className="w-full text-center py-4 text-gray-500 text-sm border-t border-neutral-200 mt-8">
          Powered by Peter Property &copy; 2025
        </footer>
    </main>
  );
}
