import React from 'react';

export default function HeroSection() {
  return (
    <section className="text-center py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">บ้าน ศุภาลัย</h2>
      {/* <p className="max-w-md sm:max-w-2xl mx-auto text-gray-600 mb-6 text-sm sm:text-base">
        เพราะสิ่งที่สวยงามที่สุดของบ้านคือ "ชีวิตจริง" เป็นเรื่องราวที่เราสร้างผ่านการออกแบบดีไซน์ที่สะท้อนความสุขในบ้านแต่ตัวเอง ออกแบบรองรับทุกไลฟ์สไตล์ตอบสนองครอบครัว มอบชีวิตที่มีคุณภาพด้วยวัสดุที่ได้มาตรฐาน สถาปัตยกรรมและระบบรักษาความปลอดภัย บ้านศุภาลัยตอบโจทย์ทุกความต้องการที่แท้จริง ส่วนกลางครบครัน ตอบโจทย์การใช้ชีวิตด้วยดีไซน์ที่ตอบสนอง
      </p> */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-8">
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <span className="material-icons text-2xl sm:text-3xl text-[#b88a3a]">favorite</span>
          <span className="text-xs sm:text-base">ทำเลน่าสนใจ</span>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <span className="material-icons text-2xl sm:text-3xl text-[#b88a3a]">branding_watermark</span>
          <span className="text-xs sm:text-base">แบรนด์</span>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <span className="material-icons text-2xl sm:text-3xl text-[#b88a3a]">schedule</span>
          <span className="text-xs sm:text-base">ช่วงราคา</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-icons text-2xl sm:text-3xl text-[#b88a3a]">map</span>
          <span className="text-xs sm:text-base">เส้นทางคมนาคม</span>
        </div>
      </div>
    </section>
  );
}
