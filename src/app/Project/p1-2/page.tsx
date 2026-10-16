import { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/lib/projects';

const project = projects['p1-2'];

export const metadata: Metadata = {
  title: 'The Nest Maerim B2 (เปิดจอง) - แม่ริม เชียงใหม่ | Peter Property',
  description:
    'The Nest Maerim B2 บ้านเดี่ยว 2 ชั้น 185 ตร.ม. 4 ห้องนอน 3 ห้องน้ำ กำลังก่อสร้าง ทำเลแม่ริม เชียงใหม่ เปิดจองระหว่างก่อสร้าง',
  keywords: [
    'The Nest Maerim', 'บ้านแม่ริม', 'บ้านเดี่ยวเชียงใหม่', 'บ้าน 2 ชั้น',
    'บ้านกำลังก่อสร้าง', 'บ้าน 4 ห้องนอน', 'house Maerim', 'Chiang Mai property',
  ],
  openGraph: {
    title: 'The Nest Maerim B2 - เปิดจอง กำลังก่อสร้าง แม่ริม เชียงใหม่',
    description: 'บ้านเดี่ยว 2 ชั้น 185 ตร.ม. 4 ห้องนอน 3 ห้องน้ำ กำลังก่อสร้าง เปิดจองได้แล้ว',
    url: 'https://peterproperty.adappts.com/Project/p1-2/',
    images: [
      {
        url: 'https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg',
        width: 1200,
        height: 630,
        alt: 'The Nest Maerim B2 บ้านเดี่ยว 2 ชั้น แม่ริม เชียงใหม่',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://peterproperty.adappts.com/Project/p1-2/',
  },
};

export default function ProjectB2() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Peter Property - The Nest Maerim B2',
    description: 'บ้านเดี่ยว 2 ชั้น 185 ตร.ม. 4 ห้องนอน 3 ห้องน้ำ กำลังก่อสร้าง ตำบลแม่สา อำเภอแม่ริม เชียงใหม่',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ตำบลแม่สา',
      addressLocality: 'อำเภอแม่ริม',
      addressRegion: 'เชียงใหม่',
      addressCountry: 'TH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      price: '3750000',
      priceCurrency: 'THB',
    },
    image: 'https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetail project={project} />
    </>
  );
}
