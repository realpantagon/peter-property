export interface Project {
  id: string;
  name: string;
  englishName?: string;
  status: 'new' | 'available' | 'sold-out' | 'featured' | 'under-construction';
  statusLabel: string;
  tagline: string;
  location: string;
  houseType: string;
  usableArea: string;
  landArea: string;
  price: string;
  priceNote?: string;
  highlight: string;
  intro: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  facts: { label: string; value: string }[];
  amenities: string[];
  promotion: {
    headline: string;
    items: string[];
  };
  map: {
    lat: number;
    lng: number;
    link: string;
  };
}

export function statusColor(status: Project['status']): string {
  switch (status) {
    case 'sold-out':
      return 'var(--status-sold)';
    case 'under-construction':
      return 'var(--status-building)';
    case 'available':
    case 'new':
    case 'featured':
      return 'var(--status-available)';
    default:
      return 'var(--muted)';
  }
}

// The Nest Maerim's original 3D design renders — used for houses still
// under construction (no real photos exist of them yet). House 1 has its
// own real photos now that it's built and delivered.
const NEST_RENDER_IMAGES = [
  '/properties/P1/20250906_105604356_iOS.jpg',
  '/properties/P1/20250906_105609464_iOS.jpg',
  '/properties/P1/20250906_105612057_iOS.jpg',
  '/properties/P1/20250906_105614562_iOS.jpg',
  '/properties/P1/20250906_105617424_iOS.jpg',
  '/properties/P1/20250906_105619705_iOS.jpg',
  '/properties/P1/20250906_105622051_iOS.jpg',
  '/properties/P1/20250906_105624557_iOS.jpg',
  '/properties/P1/20250906_105626944_iOS.jpg',
  '/properties/P1/20250906_105629322_iOS.jpg',
  '/properties/P1/20250906_105632493_iOS.jpg',
  '/properties/P1/20250906_105635162_iOS.jpg',
  '/properties/P1/20250906_105637419_iOS.jpg',
  '/properties/P1/20250906_105639731_iOS.jpg',
  '/properties/P1/20250906_105641882_iOS.jpg',
  '/properties/P1/20250906_105646158_iOS.jpg',
  '/properties/P1/20250906_105648311_iOS.jpg',
  '/properties/P1/20250906_105650472_iOS.jpg',
  '/properties/P1/20250906_105652591_iOS.jpg',
  '/properties/P1/20250906_105654841_iOS.jpg',
  '/properties/P1/20250906_105656892_iOS.jpg',
  '/properties/P1/20250906_105658967_iOS.jpg',
];

export const projects: Record<string, Project> = {
  p1: {
    id: 'p1',
    name: 'The Nest Maerim A1',
    status: 'sold-out',
    statusLabel: 'ขายแล้ว',
    tagline: 'บ้านเดี่ยว 2 ชั้น กึ่ง Smart Home ใจกลางเมืองแม่ริม',
    location: 'ตำบลแม่สา อำเภอแม่ริม เชียงใหม่',
    houseType: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องแต่งตัว',
    usableArea: '213–225 ตร.ม.',
    landArea: '50–60 ตร.วา',
    price: '3,690,000 บาท',
    priceNote: 'หลังนี้ขายแล้ว ส่งมอบเรียบร้อย',
    highlight: 'สั่งงานระบบไฟฟ้าในบ้านผ่านแอปพลิเคชันบนมือถือ',
    intro:
      'บ้านหลังแรกของโครงการ The Nest Maerim สร้างเสร็จและส่งมอบให้เจ้าของแล้ว อยู่ใจกลางเมืองแม่ริม เดินไปกาดฝรั่งแค่ไม่กี่นาที ในบ้านมี 4 ห้องนอน 4 ห้องน้ำ และสั่งเปิดปิดไฟฟ้าผ่านมือถือได้เลยโดยไม่ต้องลุกจากโซฟา',
    bedrooms: 4,
    bathrooms: 4,
    images: [
      '/properties/P1/nest-1-exterior.jpg',
      '/properties/P1/nest-1-living-room.jpg',
      '/properties/P1/nest-1-staircase.jpg',
      '/properties/P1/nest-1-bedroom.jpg',
      '/properties/P1/nest-1-bathroom.jpg',
      '/properties/P1/nest-1-kitchen.jpg',
      '/properties/P1/nest-1-yard.jpg',
    ],
    facts: [
      { label: 'กาดฝรั่งแม่ริม', value: '300 ม.' },
      { label: 'แม็คโคร แม่ริม', value: '500 ม.' },
      { label: 'สนามบินเชียงใหม่', value: '30 นาที' },
      { label: 'วิว', value: 'ดอยสุเทพ บรรยากาศเงียบสงบ' },
    ],
    amenities: [
      'ที่จอดรถยนต์ 2 คันในร่ม',
      'ห้องรับแขก และห้องรับประทานอาหารแยกสัดส่วน',
      'ปูกระเบื้องโรงรถจรดถนน',
      'กึ่ง Smart Home พร้อมระบบควบคุมผ่านแอป',
    ],
    promotion: {
      headline: 'ส่งมอบแล้ว พร้อมของแถมครบทุกรายการ',
      items: [
        'ค่าธรรมเนียมโอนกรรมสิทธิ์',
        'มิเตอร์ไฟฟ้า และน้ำประปา',
        'เคาน์เตอร์ครัว พร้อมซิงค์ล้างจาน',
        'ฮูดดูดควัน และเตาแก๊ส',
        'ฉนวนกันความร้อน',
        'มุ้งลวดทั้งหลัง',
        'สนามหญ้ารอบบ้าน',
        'ปูกระเบื้องรอบบ้านและลานจอดรถ',
        'ระบบกำจัดปลวก',
        'ชุดปั๊มน้ำ และถังเก็บน้ำ',
      ],
    },
    map: {
      lat: 18.904425,
      lng: 98.945098,
      link: 'https://maps.app.goo.gl/kmXgfSA9iJsMA3wN6',
    },
  },

  'p1-2': {
    id: 'p1-2',
    name: 'The Nest Maerim B2',
    status: 'under-construction',
    statusLabel: 'เปิดจองแล้ว กำลังก่อสร้าง',
    tagline: 'บ้านเดี่ยว 2 ชั้น กึ่ง Smart Home ใจกลางเมืองแม่ริม',
    location: 'ตำบลแม่สา อำเภอแม่ริม เชียงใหม่',
    houseType: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ 1 ห้องเสื้อผ้า 1 ห้องรับแขก 1 ห้องครัว',
    usableArea: '185 ตร.ม.',
    landArea: '50 ตร.วา',
    price: '3,750,000 บาท',
    priceNote: 'แบบมาตรฐาน 185 ตร.ม. เปิดจองระหว่างก่อสร้าง',
    highlight: 'สั่งงานระบบไฟฟ้าในบ้านผ่านแอปพลิเคชันบนมือถือ',
    intro:
      'B2 ของโครงการ The Nest Maerim เป็นบ้านไซส์มาตรฐาน 185 ตร.ม. กำลังก่อสร้างอยู่ 4 ห้องนอน 3 ห้องน้ำ จอดรถในร่ม 2 คัน บนที่ดิน 50 ตารางวา ภาพที่เห็นเป็นภาพจำลอง 3 มิติของแบบบ้าน ใช้ดูลักษณะหน้าตาบ้านระหว่างรอก่อสร้างจริง',
    bedrooms: 4,
    bathrooms: 3,
    images: NEST_RENDER_IMAGES,
    facts: [
      { label: 'กาดฝรั่งแม่ริม', value: '300 ม.' },
      { label: 'แม็คโคร แม่ริม', value: '500 ม.' },
      { label: 'สนามบินเชียงใหม่', value: '30 นาที' },
      { label: 'วิว', value: 'ดอยสุเทพ บรรยากาศเงียบสงบ' },
    ],
    amenities: [
      'ที่จอดรถยนต์ 2 คันในร่ม',
      'ห้องรับแขก และห้องรับประทานอาหารแยกสัดส่วน',
      'ปูกระเบื้องโรงรถจรดถนน',
      'กึ่ง Smart Home พร้อมระบบควบคุมผ่านแอป',
    ],
    promotion: {
      headline: 'จองระหว่างก่อสร้าง โอนพรี ไม่มีค่าธรรมเนียม ไม่มีส่วนกลาง',
      items: [
        'ค่าธรรมเนียมโอนกรรมสิทธิ์',
        'มิเตอร์ไฟฟ้า และน้ำประปา',
        'เคาน์เตอร์ครัว พร้อมซิงค์ล้างจาน',
        'ฮูดดูดควัน และเตาแก๊ส',
        'ฉนวนกันความร้อน',
        'มุ้งลวดทั้งหลัง',
        'สนามหญ้ารอบบ้าน',
        'ปูกระเบื้องรอบบ้านและลานจอดรถ',
        'ระบบกำจัดปลวก',
        'ชุดปั๊มน้ำ และถังเก็บน้ำ',
      ],
    },
    map: {
      lat: 18.904425,
      lng: 98.945098,
      link: 'https://maps.app.goo.gl/kmXgfSA9iJsMA3wN6',
    },
  },

  'p1-3': {
    id: 'p1-3',
    name: 'The Nest Maerim A2',
    status: 'under-construction',
    statusLabel: 'เปิดจองแล้ว กำลังก่อสร้าง',
    tagline: 'บ้านเดี่ยว 2 ชั้น กึ่ง Smart Home ใจกลางเมืองแม่ริม',
    location: 'ตำบลแม่สา อำเภอแม่ริม เชียงใหม่',
    houseType: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 4 ห้องน้ำ 2 ห้องเสื้อผ้า 1 ห้องรับแขก 1 ห้องครัว',
    usableArea: '225 ตร.ม.',
    landArea: '50 ตร.วา',
    price: '3,970,000 บาท',
    priceNote: 'แบบใหญ่พิเศษ 225 ตร.ม. เปิดจองระหว่างก่อสร้าง',
    highlight: 'สั่งงานระบบไฟฟ้าในบ้านผ่านแอปพลิเคชันบนมือถือ',
    intro:
      'A2 ของโครงการ The Nest Maerim เป็นบ้านไซส์ใหญ่พิเศษ 225 ตร.ม. กำลังก่อสร้างอยู่ 4 ห้องนอน 4 ห้องน้ำ 2 ห้องเสื้อผ้า จอดรถในร่ม 2 คัน บนที่ดิน 50 ตารางวา ภาพที่เห็นเป็นภาพจำลอง 3 มิติของแบบบ้าน ใช้ดูลักษณะหน้าตาบ้านระหว่างรอก่อสร้างจริง',
    bedrooms: 4,
    bathrooms: 4,
    images: NEST_RENDER_IMAGES,
    facts: [
      { label: 'กาดฝรั่งแม่ริม', value: '300 ม.' },
      { label: 'แม็คโคร แม่ริม', value: '500 ม.' },
      { label: 'สนามบินเชียงใหม่', value: '30 นาที' },
      { label: 'วิว', value: 'ดอยสุเทพ บรรยากาศเงียบสงบ' },
    ],
    amenities: [
      'ที่จอดรถยนต์ 2 คันในร่ม',
      'ห้องรับแขก และห้องรับประทานอาหารแยกสัดส่วน',
      'ปูกระเบื้องโรงรถจรดถนน',
      'กึ่ง Smart Home พร้อมระบบควบคุมผ่านแอป',
    ],
    promotion: {
      headline: 'จองระหว่างก่อสร้าง โอนพรี ไม่มีค่าธรรมเนียม ไม่มีส่วนกลาง',
      items: [
        'ค่าธรรมเนียมโอนกรรมสิทธิ์',
        'มิเตอร์ไฟฟ้า และน้ำประปา',
        'เคาน์เตอร์ครัว พร้อมซิงค์ล้างจาน',
        'ฮูดดูดควัน และเตาแก๊ส',
        'ฉนวนกันความร้อน',
        'มุ้งลวดทั้งหลัง',
        'สนามหญ้ารอบบ้าน',
        'ปูกระเบื้องรอบบ้านและลานจอดรถ',
        'ระบบกำจัดปลวก',
        'ชุดปั๊มน้ำ และถังเก็บน้ำ',
      ],
    },
    map: {
      lat: 18.904425,
      lng: 98.945098,
      link: 'https://maps.app.goo.gl/kmXgfSA9iJsMA3wN6',
    },
  },

  p2: {
    id: 'p2',
    name: 'ท่ารั้วแลนด์ 2',
    status: 'sold-out',
    statusLabel: 'ขายหมดแล้ว',
    tagline: 'บ้านเดี่ยว 2 ชั้น จอดรถ 2 คัน ทำเลดอยสะเก็ด',
    location: 'ตำบลสันปูเลย อำเภอดอยสะเก็ด เชียงใหม่',
    houseType: 'บ้านเดี่ยว 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ จอดรถ 2 คัน',
    usableArea: '200 ตร.ม.',
    landArea: '56–64 ตร.วา',
    price: '3.19 ล้านบาท',
    highlight: 'เข้าออกได้ 5 เส้นทาง เดินทางสะดวกทุกทิศทาง',
    intro:
      'บ้านหลังนี้จอดรถได้ 2 คัน อยู่ย่านดอยสะเก็ด เข้าออกได้ตั้ง 5 เส้นทาง ขับไปเซ็นทรัล เฟสติวัลแค่ 12 นาที ตกแต่งพร้อมอยู่ ไม่ต้องรอ ไม่ต้องทำอะไรเพิ่ม',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      '/properties/P2/20250906_111827569_iOS.jpg',
      '/properties/P2/20250906_111832308_iOS.jpg',
      '/properties/P2/20250906_111834893_iOS.jpg',
      '/properties/P2/20250906_111837009_iOS.jpg',
      '/properties/P2/20250906_111839318_iOS.jpg',
      '/properties/P2/20250906_111841553_iOS.jpg',
      '/properties/P2/20250906_111843783_iOS.jpg',
      '/properties/P2/20250906_111848402_iOS.jpg',
      '/properties/P2/20250906_111850668_iOS.jpg',
      '/properties/P2/20250906_111903360_iOS.jpg',
      '/properties/P2/20250906_111907659_iOS.jpg',
      '/properties/P2/20250906_111910069_iOS.jpg',
      '/properties/P2/20250906_111912405_iOS.jpg',
      '/properties/P2/20250906_111914669_iOS.jpg',
      '/properties/P2/20250906_112041546_iOS.jpg',
      '/properties/P2/20250906_112051814_iOS.jpg',
      '/properties/P2/20250906_112057470_iOS.jpg',
      '/properties/P2/20250906_112137506_iOS.jpg',
      '/properties/P2/20250906_112142611_iOS.jpg',
      '/properties/P2/20250906_112316338_iOS.jpg',
    ],
    facts: [
      { label: 'เซ็นทรัล เฟสติวัล', value: '6.7 กม. / 12 นาที' },
      { label: 'เส้นทางเข้าออก', value: '5 เส้นทาง' },
      { label: 'สนามหญ้าข้างบ้าน', value: '5×16 ตร.ม.' },
    ],
    amenities: [
      'ที่จอดรถยนต์ 2 คันในร่ม',
      'ครัวในบ้าน และครัวนอกบ้าน',
      'เข้าออกได้ 5 เส้นทาง',
      'บ้านพร้อมอยู่ ตกแต่งครบ',
    ],
    promotion: {
      headline: 'ส่งมอบแล้ว พร้อมของแถมครบทุกรายการ',
      items: [
        'ค่าธรรมเนียมโอนกรรมสิทธิ์',
        'มิเตอร์ไฟฟ้า และน้ำประปา',
        'เคาน์เตอร์ครัว พร้อมซิงค์ล้างจาน',
        'ฮูดดูดควัน และเตาแก๊ส',
        'ฉนวนกันความร้อน',
        'มุ้งลวดทั้งหลัง',
        'เพิ่มเคาน์เตอร์ครัวนอกบ้าน',
        'สนามหญ้ารอบบ้าน',
        'ปูกระเบื้องรอบบ้านและลานจอดรถจรดถนน',
        'ระบบกำจัดปลวก',
        'ชุดปั๊มน้ำ และถังเก็บน้ำ',
      ],
    },
    map: {
      lat: 18.816382,
      lng: 99.062908,
      link: 'https://maps.app.goo.gl/ex5H8jcqCVYwXXbL9',
    },
  },

  p3: {
    id: 'p3',
    name: 'ท่ารั้วแลนด์ 3',
    status: 'sold-out',
    statusLabel: 'ขายหมดแล้ว',
    tagline: 'บ้านเดี่ยว Smart Home ใกล้อรสิรินโครงการ 6',
    location: 'ใกล้อรสิรินโครงการ 6 อำเภอดอยสะเก็ด เชียงใหม่',
    houseType: 'บ้านเดี่ยว Smart Home 4 ห้องนอน 3 ห้องน้ำ',
    usableArea: '180 ตร.ม.',
    landArea: '50 ตร.วา',
    price: '2,890,000 บาท',
    highlight: 'Smart Home พร้อมอยู่ ใกล้โรงเรียนนานาชาติ Mill Hill',
    intro:
      'บ้าน Smart Home หลังนี้ห่างจากอรสิรินโครงการ 6 แค่ 300 เมตร เดินไปตลาดท่ารั้วได้สบายๆ และอยู่ไม่ไกลจากโรงเรียนนานาชาติ Mill Hill เหมาะกับครอบครัวที่มีลูกวัยเรียน',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      '/properties/P3/10_28_1.jpg',
      '/properties/P3/10_28_2.jpg',
      '/properties/P3/10_28_3.jpg',
      '/properties/P3/S__90693634.jpg',
      '/properties/P3/20250906_112831850_iOS.jpg',
      '/properties/P3/20250906_112921359_iOS.jpg',
      '/properties/P3/20250906_112923524_iOS.jpg',
      '/properties/P3/20250906_112925779_iOS.jpg',
      '/properties/P3/20250906_112927818_iOS.jpg',
      '/properties/P3/20250906_112930657_iOS.jpg',
      '/properties/P3/20250906_112935894_iOS.jpg',
      '/properties/P3/20250906_112942066_iOS.jpg',
      '/properties/P3/20250906_112951326_iOS.jpg',
      '/properties/P3/20250906_112953821_iOS.jpg',
      '/properties/P3/20250906_112955883_iOS.jpg',
      '/properties/P3/20250906_112959099_iOS.jpg',
      '/properties/P3/20250906_113003125_iOS.jpg',
      '/properties/P3/20250906_113013668_iOS.jpg',
    ],
    facts: [
      { label: 'อรสิรินโครงการ 6', value: '300 ม.' },
      { label: 'วงแหวนรอบ 3', value: '1.8 กม.' },
      { label: 'เซเว่น อีเลฟเว่น', value: '500 ม.' },
      { label: 'โรงเรียนนานาชาติ Mill Hill', value: 'ใกล้เคียง' },
    ],
    amenities: [
      'ที่จอดรถยนต์ 2 คัน',
      'เข้าออกได้ 3 เส้นทาง',
      'ใกล้ตลาดท่ารั้ว',
      'Smart Home พร้อมอยู่',
    ],
    promotion: {
      headline: 'ส่งมอบแล้ว พร้อมของแถมครบทุกรายการ',
      items: [
        'ค่าธรรมเนียมโอนกรรมสิทธิ์',
        'มิเตอร์ไฟฟ้า และน้ำประปา',
        'เคาน์เตอร์ครัว พร้อมซิงค์ล้างจาน',
        'ฮูดดูดควัน และเตาแก๊ส',
        'ฉนวนกันความร้อน',
        'มุ้งลวดทั้งหลัง',
        'เพิ่มเคาน์เตอร์ครัวนอกบ้าน',
        'สนามหญ้ารอบบ้าน',
        'ปูกระเบื้องรอบบ้านและลานจอดรถ',
        'ระบบกำจัดปลวก',
        'ชุดปั๊มน้ำ และถังเก็บน้ำ',
      ],
    },
    map: {
      lat: 18.796216,
      lng: 99.080786,
      link: 'https://maps.app.goo.gl/mSqx4qmiikyjzzM98',
    },
  },

  p4: {
    id: 'p4',
    name: 'โครงการแม่ริมบ้านสวย',
    status: 'sold-out',
    statusLabel: 'ขายหมดแล้ว',
    tagline: 'บ้านเดี่ยวชั้นเดียว ในตัวเมืองแม่ริม เดินทางสะดวก',
    location: 'ในตัวเมืองแม่ริม อำเภอแม่ริม เชียงใหม่',
    houseType: 'บ้านเดี่ยว 1 ชั้น 2 ห้องนอน 2 ห้องน้ำ',
    usableArea: '90 ตร.ม.',
    landArea: '50–60 ตร.วา',
    price: '1,900,000 บาท',
    highlight: 'เดินถึงตลาดสดแม่ริมและที่ว่าการอำเภอในไม่กี่นาที',
    intro:
      'บ้านชั้นเดียวหลังนี้อยู่ในตัวเมืองแม่ริม เดินไปตลาดสดกับที่ว่าการอำเภอได้ในไม่กี่นาที เหมาะกับคนที่อยากได้บ้านหลังแรกแบบไม่ต้องเดินทางไกล',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      '/properties/P4/S__8282141.jpg',
      '/properties/P4/20250906_115111550_iOS.jpg',
      '/properties/P4/20250906_115119953_iOS.jpg',
      '/properties/P4/20250906_115125413_iOS.jpg',
      '/properties/P4/20250906_115140135_iOS.jpg',
      '/properties/P4/20250906_115143665_iOS.jpg',
    ],
    facts: [
      { label: 'ตลาดสดแม่ริม', value: '200 ม.' },
      { label: 'ที่ว่าการอำเภอแม่ริม', value: '200 ม.' },
      { label: 'สถานีตำรวจแม่ริม', value: 'ใกล้เคียง' },
      { label: 'แม่ริมพลาซ่า', value: 'ใกล้เคียง' },
    ],
    amenities: [
      'ที่จอดรถยนต์ 2 คัน',
      'ครัวในบ้าน และครัวนอกบ้าน',
      'ห้องเก็บเสื้อผ้า',
      'ใกล้สิ่งอำนวยความสะดวกครบ',
    ],
    promotion: {
      headline: 'ส่งมอบแล้ว พร้อมของแถมครบทุกรายการ',
      items: [
        'ค่าธรรมเนียมโอนกรรมสิทธิ์',
        'มิเตอร์ไฟฟ้า และน้ำประปา',
        'เคาน์เตอร์ครัว พร้อมซิงค์ล้างจาน',
        'ฮูดดูดควัน และเตาแก๊ส',
        'ฉนวนกันความร้อน',
        'มุ้งลวดทั้งหลัง',
        'เพิ่มเคาน์เตอร์ครัวนอกบ้าน',
        'สนามหญ้ารอบบ้าน',
        'ปูกระเบื้องรอบบ้านและลานจอดรถ',
        'ระบบกำจัดปลวก',
        'ชุดปั๊มน้ำ และถังเก็บน้ำ',
      ],
    },
    map: {
      lat: 18.917215,
      lng: 98.948109,
      link: 'https://maps.app.goo.gl/bwt7WcxNjUnLYhYw6',
    },
  },
};

// Homepage display order: open-for-reservation units (B2, A2) lead,
// since they're what a visitor can actually buy right now.
export const projectList = [
  projects['p1-2'],
  projects['p1-3'],
  projects.p1,
  projects.p2,
  projects.p3,
  projects.p4,
];
