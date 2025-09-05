import React from 'react';

export default function FilterSidebar() {
  return (
    <aside className="bg-white rounded-lg shadow p-6 min-w-[220px]">
      <div className="mb-4 text-gray-700">ค้นหาโครงการที่สนใจ<br />ได้จากหลากหลายทำเลทั่วไทย</div>
      <select className="w-full border rounded px-2 py-1">
        <option>เลือกทำเล</option>
      </select>
    </aside>
  );
}
