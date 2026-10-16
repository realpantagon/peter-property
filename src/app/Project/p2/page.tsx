import { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/lib/projects';

const project = projects.p2;

export const metadata: Metadata = {
  title: 'ท่ารั้วแลนด์ 2 - บ้านเดี่ยว 2 ชั้น ดอยสะเก็ด เชียงใหม่ | Peter Property',
  description: 'ท่ารั้วแลนด์ 2 บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน ตำบลสันปูเลย อำเภอดอยสะเก็ด ราคา 2.9-3.19 ล้านบาท พร้อมขาย',
  keywords: [
    'ท่ารั้วแลนด์ 2', 'บ้านดอยสะเก็ด', 'บ้านเดี่ยวเชียงใหม่', 'บ้าน 2 ชั้น',
    'บ้านขายดอยสะเก็ด', 'สันปูเลย', 'บ้าน 4 ห้องนอน', 'house Doi Saket',
    'Chiang Mai property', '3.19 million', 'ready to move',
  ],
  openGraph: {
    title: 'ท่ารั้วแลนด์ 2 - บ้านเดี่ยว 2 ชั้น ดอยสะเก็ด เชียงใหม่',
    description: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ ราคา 2.9-3.19 ล้านบาท พร้อมขาย ดอยสะเก็ด เชียงใหม่',
    url: 'https://peterproperty.adappts.com/Project/p2/',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P2/20250906_111832308_iOS.jpg',
        width: 1200,
        height: 630,
        alt: 'ท่ารั้วแลนด์ 2 บ้านเดี่ยว ดอยสะเก็ด เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p2/',
  },
};

export default function ProjectP2() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - ท่ารั้วแลนด์ 2',
    description: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน ตำบลสันปูเลย อำเภอดอยสะเก็ด เชียงใหม่',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ตำบลสันปูเลย',
      addressLocality: 'อำเภอดอยสะเก็ด',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      price: '3190000',
      priceCurrency: 'THB',
    },
    image: 'https://peterproperty.adappts.com/properties/P2/20250906_111832308_iOS.jpg',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetail project={project} />
    </>
  );
}
