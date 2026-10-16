import { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/lib/projects';

const project = projects.p4;

export const metadata: Metadata = {
  title: 'โครงการแม่ริมบ้านสวย - บ้านเดี่ยว 1 ชั้น แม่ริม เชียงใหม่ | Peter Property',
  description:
    'โครงการแม่ริมบ้านสวย บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ ในตัวเมืองแม่ริม เชียงใหม่ ใกล้ตลาดสด ที่ว่าการอำเภอ และสิ่งอำนวยความสะดวก ราคาเริ่มต้น 1.9 ล้านบาท',
  keywords: [
    'โครงการแม่ริมบ้านสวย', 'บ้านแม่ริม', 'บ้านเดี่ยวชั้นเดียว', 'บ้านเดี่ยวเชียงใหม่',
    'บ้านใกล้ตลาดแม่ริม', 'บ้าน 2 ห้องนอน', 'Mae Rim house', 'Chiang Mai property',
  ],
  openGraph: {
    title: 'โครงการแม่ริมบ้านสวย - บ้านเดี่ยว 1 ชั้น แม่ริม เชียงใหม่',
    description: 'บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ ในตัวเมืองแม่ริม เชียงใหม่ ทำเลใกล้ตลาดสดแม่ริมและที่ว่าการอำเภอ ราคาเริ่มต้น 1.9 ล้านบาท',
    url: 'https://peterproperty.adappts.com/Project/p4/',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P4/20250906_115111550_iOS.jpg',
        width: 1200,
        height: 630,
        alt: 'โครงการแม่ริมบ้านสวย บ้านเดี่ยว 1 ชั้น แม่ริม เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p4/',
  },
};

export default function ProjectP4() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - โครงการแม่ริมบ้านสวย',
    description: 'บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ ในตัวเมืองแม่ริม เชียงใหม่ ใกล้ตลาดสดแม่ริม และที่ว่าการอำเภอ เดินทางสะดวก เหมาะสำหรับครอบครัว',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ในตัวเมืองแม่ริม',
      addressLocality: 'อำเภอแม่ริม',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      price: '1900000',
      priceCurrency: 'THB',
    },
    image: 'https://peterproperty.adappts.com/properties/P4/20250906_115111550_iOS.jpg',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetail project={project} />
    </>
  );
}
