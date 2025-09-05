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
    sectionDetails: 'บ้านเดี่ยว 2 ชั้น 3 ห้องนอน 2 ห้องน้ำ',
    location: 'แม่ริม แม่สา',
    isNew: true,
    isAvailable: true,
  },
  {
    id: 'p2',
    title: 'โครงการยอดนิยม',
    img: '/public/globe.svg',
    sectionName: 'ท่ารั้วแลนด์ 1',
    sectionDetails: 'คอนโดมิเนียม 1 ห้องนอน 1 ห้องน้ำ',
    location: 'ดอยสะเก็ด ท่ารั้ว',
    isNew: false,
    isAvailable: true,
  },
  {
    id: 'p3',
    title: 'โครงการแนะนำ',
    img: '/public/next.svg',
    sectionName: 'ท่ารั้วแลนด์ 2',
    sectionDetails: 'บ้านแฝด 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ',
    location: 'ดอยสะเก็ด ท่ารั้ว',
    isNew: true,
    isAvailable: false,
  },
  {
    id: 'p4',
    title: 'หมดทุกยูนิต',
    img: '/public/vercel.svg',
    sectionName: 'แม่ริม',
    sectionDetails: 'บ้านเดี่ยว 3 ชั้น 5 ห้องนอน 5 ห้องน้ำ',
    location: 'แม่ริม ริมใต้',
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
