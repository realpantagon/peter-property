import { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/lib/projects';

const project = projects.p1;

export const metadata: Metadata = {
  title: 'The Nest Maerim A1 (ขายแล้ว) - แม่ริม เชียงใหม่ | Peter Property',
  description:
    'The Nest Maerim A1 บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ทำเลแม่ริม เชียงใหม่ หลังแรกของโครงการ สร้างเสร็จและส่งมอบแล้ว',
  keywords: [
    'The Nest Maerim', 'บ้านแม่ริม', 'บ้านเดี่ยวเชียงใหม่', 'บ้าน 2 ชั้น',
    'บ้านขายแม่ริม', 'บ้าน 4 ห้องนอน', 'house Maerim',
    'Chiang Mai property', '2 story house',
  ],
  openGraph: {
    title: 'The Nest Maerim A1 - บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่ (ขายแล้ว)',
    description: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ตำบลแม่สา อำเภอแม่ริม เชียงใหม่ สร้างเสร็จและส่งมอบแล้ว',
    url: 'https://peterproperty.adappts.com/Project/p1/',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P1/nest-1-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'The Nest Maerim A1 บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p1/',
  },
};

export default function ProjectP1() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - The Nest Maerim A1',
    description: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว ตำบลแม่สา อำเภอแม่ริม เชียงใหม่ สร้างเสร็จและส่งมอบแล้ว',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ตำบลแม่สา',
      addressLocality: 'อำเภอแม่ริม',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/SoldOut',
      priceCurrency: 'THB',
    },
    image: 'https://peterproperty.adappts.com/properties/P1/nest-1-exterior.jpg',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetail project={project} />
    </>
  );
}
