import type { Metadata } from "next";
import { Kanit,IBM_Plex_Sans_Thai } from "next/font/google";
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

export const metadata: Metadata = {
  title: "บ้านเดี่ยว นอกโครการ มีคุณภาพ มาตราฐาน | Peter Property",
  description: "ขายบ้าน โครงการใหม่ ราคาพิเศษ ทำเลดี ข้อมูลครบถ้วน",
  keywords: ["บ้าน", "อสังหา", "ขายที่ดิน", "โครงการใหม่", "บ้านสร้างใหม่"],
  openGraph: {
    title: "บ้านเดี่ยว นอกโครการ มีคุณภาพ มาตราฐาน | Peter Property",
    description: "ขายบ้าน อสังหาโครงการใหม่ บ้านเดี่ยว นอกโครการ มีคุณภาพ มาตราฐาน",
    url: "https://yourdomain.com",
    siteName: "Peter Property",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className={`${kanit.variable} ${ibm.variable}`}>
        {children}
      </body>
    </html>
  );
}
