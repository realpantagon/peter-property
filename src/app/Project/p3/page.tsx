import { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/lib/projects';

const project = projects.p3;

export const metadata: Metadata = {
  title: 'ท่ารั้วแลนด์ 3 - บ้านเดี่ยว Smart Home เชียงใหม่ | Peter Property',
  description:
    'ท่ารั้วแลนด์ 3 บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ ใกล้อรสิรินโครงการ 6 ดอยสะเก็ด เชียงใหม่ ทำเลดี เดินทางสะดวก พร้อมโปรโมชันโอนฟรี',
  keywords: [
    'ท่ารั้วแลนด์ 3', 'Smart Home เชียงใหม่', 'บ้านเดี่ยวเชียงใหม่', 'บ้าน Smart Home',
    'บ้านดอยสะเก็ด', 'บ้าน 4 ห้องนอน', 'Chiang Mai smart home', 'บ้านโครงการใหม่',
  ],
  openGraph: {
    title: 'ท่ารั้วแลนด์ 3 - บ้านเดี่ยว Smart Home เชียงใหม่',
    description: 'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ ใกล้อรสิรินโครงการ 6 ดอยสะเก็ด เชียงใหม่ พร้อมสิ่งอำนวยความสะดวกและโปรโมชันพิเศษ',
    url: 'https://peterproperty.adappts.com/Project/p3/',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P3/10_28_1.jpg',
        width: 1200,
        height: 630,
        alt: 'ท่ารั้วแลนด์ 3 บ้านเดี่ยว Smart Home เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p3/',
  },
};

export default function ProjectP3() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - ท่ารั้วแลนด์ 3',
    description: 'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ ใกล้อรสิรินโครงการ 6 ดอยสะเก็ด เชียงใหม่ พร้อมสิ่งอำนวยความสะดวกและการเดินทางสะดวก',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ใกล้อรสิรินโครงการ 6',
      addressLocality: 'อำเภอดอยสะเก็ด',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      price: '2890000',
      priceCurrency: 'THB',
    },
    image: 'https://peterproperty.adappts.com/properties/P3/10_28_1.jpg',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetail project={project} />
    </>
  );
}
