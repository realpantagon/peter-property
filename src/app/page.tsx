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
    img: '/properties/P3/20250906_112935894_iOS.jpg',
    sectionName: 'ท่ารั้วแลนด์ 3',
    sectionDetails: 'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ',
    location: 'ใกล้อรสิรินโครงการ 6',
    isNew: true,
    isAvailable: true,
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
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header isHome={true} />
      {/* <HeroSection /> */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
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
      {/* <ContactUs /> */}
      <Footer />
    </main>
  );
}
