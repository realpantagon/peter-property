


import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterSidebar from '../components/FilterSidebar';
import ProjectCard from '../components/ProjectCard';
import PropertyCard from '../components/PropertyCard';

const projectCards = [
  { title: 'แบบบ้านใหม่ Tropical Series', subtitle: '15 โครงการ', img: '/public/file.svg' },
  { title: 'โครงการบ้าน ศุภาลัย โซนภาคเหนือ - อยุธยา', subtitle: '2 โครงการ', img: '/public/file.svg' },
  { title: 'บ้านโซน จ อยุธยา', subtitle: '6 โครงการ', img: '/public/file.svg' },
  { title: 'บ้านจังหวัดเชียงราย', subtitle: '5 โครงการ', img: '/public/file.svg' },
  { title: 'บ้านและคอนโด โซนรังสิต คลอง 1-4', subtitle: '4 โครงการ', img: '/public/file.svg' },
  { title: 'บ้านและคอนโด โซนชลบุรี', subtitle: '8 โครงการ', img: '/public/file.svg' },
  { title: 'บ้านและคอนโด โซนพัทยา', subtitle: '9 โครงการ', img: '/public/file.svg' },
  { title: 'บ้านและคอนโด โซนศรีราชา', subtitle: '7 โครงการ', img: '/public/file.svg' },
  { title: 'แบบบ้านบ้าน 3 ชั้น', subtitle: '7 โครงการ', img: '/public/file.svg' },
];

const propertyCards = [
  {
    title: 'โครงการใหม่',
    img: '/public/file.svg',
    sectionName: 'Supalai Park Ville',
    sectionDetails: 'บ้านเดี่ยว 2 ชั้น 3 ห้องนอน 2 ห้องน้ำ',
    isNew: true,
    isAvailable: true,
  },
  {
    title: 'โครงการยอดนิยม',
    img: '/public/file.svg',
    sectionName: 'Supalai City Resort',
    sectionDetails: 'คอนโดมิเนียม 1 ห้องนอน 1 ห้องน้ำ',
    isNew: false,
    isAvailable: true,
  },
  {
    title: 'โครงการแนะนำ',
    img: '/public/file.svg',
    sectionName: 'Supalai Garden Ville',
    sectionDetails: 'บ้านแฝด 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ',
    isNew: true,
    isAvailable: false,
  },
  {
    title: 'โครงการพร้อมอยู่',
    img: '/public/file.svg',
    sectionName: 'Supalai Premier',
    sectionDetails: 'บ้านเดี่ยว 3 ชั้น 5 ห้องนอน 5 ห้องน้ำ',
    isNew: false,
    isAvailable: true,
  },
];

export default function Home() {
  return (
    <main className="font-[var(--font-ibm)] bg-[#faf9f6] min-h-screen">
      <Header />
      {/* <div className="">ทดสอบ</div> */}
      {/* <HeroSection /> */}
      {/* <section className="flex gap-8 px-12">
        <FilterSidebar />
        <div className="flex-1">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {projectCards.map((card, idx) => (
              <ProjectCard key={idx} title={card.title} subtitle={card.subtitle} img={card.img} />
            ))}
          </div>
        </div>
      </section> */}
  <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        {/* <div className="flex gap-4 mb-4">
          <button className="border rounded px-4 py-2">ทำเล</button>
          <button className="border rounded px-4 py-2">สถานะโครงการ</button>
          <button className="border rounded px-4 py-2">เรียงลำดับ</button>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyCards.map((card, idx) => (
            <PropertyCard
              key={idx}
              title={card.title}
              img={card.img}
              sectionName={card.sectionName}
              sectionDetails={card.sectionDetails}
              isNew={card.isNew}
              isAvailable={card.isAvailable}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
