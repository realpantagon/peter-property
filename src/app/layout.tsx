import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "ขายบ้าน ที่ดิน | Peter Property",
  description: "ซื้อ-ขาย บ้าน โครงการใหม่ ราคาพิเศษ พร้อมรีวิว ทำเล และข้อมูลครบถ้วน",
  keywords: ["บ้าน", "อสังหา", "ขายที่ดิน", "โครงการใหม่", "บ้านสร้างใหม่"],
  openGraph: {
    title: "ขายบ้าน ที่ดิน | Peter Property",
    description: "ประกาศขายบ้าน ที่ดิน อสังหาโครงการใหม่",
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
      <body className={kanit.variable}>
        {children}
      </body>
    </html>
  );
}
