import type { Metadata } from "next";
import { Kanit,IBM_Plex_Sans_Thai,Tinos } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});


const ibm = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-tinos",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peterproperty.adappts.com'),
  title: "บ้านเดี่ยว นอกโครงการ มีคุณภาพ มาตราฐาน | Peter Property",
  description: "ขายบ้าน โครงการใหม่ ราคาพิเศษ ทำเลดี ข้อมูลครบถ้วน บ้านเดี่ยว 2 ชั้น พร้อมอยู่ เชียงใหม่ แม่ริม ดอยสะเก็ด",
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
    title: "บ้านเดี่ยว นอกโครการ มีคุณภาพ มาตราฐาน | Peter Property",
    description: "ขายบ้าน อสังหาโครงการใหม่ บ้านเดี่ยว นอกโครการ มีคุณภาพ มาตราฐาน เชียงใหม่ พร้อมอยู่ ราคาดี",
    url: "https://peterproperty.adappts.com",
    siteName: "Peter Property",
    images: [
      {
        url: "https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg",
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
    title: "บ้านเดี่ยว นอกโครการ มีคุณภาพ มาตราฐาน | Peter Property",
    description: "ขายบ้าน โครงการใหม่ ราคาพิเศษ ทำเลดี ข้อมูลครบถ้วน",
    images: ["https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  }
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
    "logo": "https://peterproperty.adappts.com/properties/P1/20250906_105639731_iOS.jpg",
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
    <html lang="th" className="bg-[#0c0a08]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${kanit.variable} ${ibm.variable} ${tinos.variable} bg-[#0c0a08] text-[#f7f2e7]`}>
        {children}
      </body>
    </html>
  );
}
