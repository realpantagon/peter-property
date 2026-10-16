import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peterproperty.adappts.com'),
  title: "บ้านเดี่ยว นอกโครงการ มีคุณภาพ มาตรฐาน | Peter Property",
  description: "บ้านเดี่ยวนอกโครงการ เชียงใหม่ แม่ริม ดอยสะเก็ด ออกแบบและสร้างเอง ควบคุมคุณภาพทุกขั้นตอน ดูโครงการที่กำลังก่อสร้างและจองได้ตอนนี้",
  keywords: [
    "บ้าน", "อสังหา", "ขายที่ดิน", "โครงการใหม่", "บ้านสร้างใหม่", 
    "บ้านเดี่ยว", "บ้านเชียงใหม่", "บ้านแม่ริม", "บ้านดอยสะเก็ด",
    "The Nest Maerim", "ท่ารั้วแลนด์", "บ้าน 2 ชั้น", "พร้อมขาย",
    "real estate Chiang Mai", "house for sale", "property Thailand"
  ],
  authors: [{ name: "Peter Property" }],
  creator: "Peter Property",
  publisher: "Peter Property",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://peterproperty.adappts.com",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "บ้านเดี่ยว นอกโครงการ มีคุณภาพ มาตรฐาน | Peter Property",
    description: "บ้านเดี่ยวนอกโครงการ เชียงใหม่ แม่ริม ดอยสะเก็ด ออกแบบและสร้างเอง ควบคุมคุณภาพทุกขั้นตอน ดูโครงการที่กำลังก่อสร้างและจองได้ตอนนี้",
    url: "https://peterproperty.adappts.com",
    siteName: "Peter Property",
    images: [
      {
        url: "https://peterproperty.adappts.com/properties/P1/nest-1-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "บ้านเดี่ยว Peter Property เชียงใหม่",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "บ้านเดี่ยว นอกโครงการ มีคุณภาพ มาตรฐาน | Peter Property",
    description: "บ้านเดี่ยวนอกโครงการ เชียงใหม่ แม่ริม ดอยสะเก็ด ออกแบบและสร้างเอง ควบคุมคุณภาพทุกขั้นตอน",
    images: ["https://peterproperty.adappts.com/properties/P1/nest-1-exterior.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Peter Property",
    "description": "ขายบ้าน โครงการใหม่ ราคาพิเศษ ทำเลดี บ้านเดี่ยว 2 ชั้น พร้อมอยู่ เชียงใหม่",
    "url": "https://peterproperty.adappts.com",
    "logo": "https://peterproperty.adappts.com/icons/Property_logo_6.png",
    "areaServed": {
      "@type": "City",
      "name": "Chiang Mai",
      "containedInPlace": {
        "@type": "Country",
        "name": "Thailand"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chiang Mai",
      "addressCountry": "TH"
    },
    "sameAs": [
      "https://peterproperty.adappts.com"
    ]
  };

  return (
    <html
      lang="th"
      className={`${prompt.variable} bg-[#0c0a08]`}
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="bg-[#0c0a08] text-[#f5efe3]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
