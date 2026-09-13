import { CategoryItemType } from '@/types';

export interface CategoryItemExtended extends CategoryItemType {
  imageSrc: string;
}

export const CATEGORIES_DATA: CategoryItemExtended[] = [
  {
    id: 'apparel',
    title: 'APPAREL',
    subtitle: {
      ko: '모던 & 클래식 데일리 웨어',
      en: 'Modern & Classic Contemporary Wear',
    },
    description: {
      ko: '원단의 텍스처와 완성도 높은 실루엣을 바탕으로 글로벌 감각의 의류 라인업을 큐레이션합니다.',
      en: 'Curating contemporary apparel characterized by refined silhouettes, premium textures, and global aesthetics.',
    },
    tags: [
      { ko: '셔츠 & 블라우스', en: 'Shirts & Blouses' },
      { ko: '팬츠 & 슬랙스', en: 'Trousers & Slacks' },
      { ko: '테일러링', en: 'Tailoring' },
    ],
    imageSrc: '/images/categories/category_apparel.jpg',
    imagePlaceholder: {
      label: 'Minimalist Contemporary Apparel Rack',
      tone: 'deep-slate',
    },
  },
  {
    id: 'knitwear',
    title: 'KNITWEAR',
    subtitle: {
      ko: '고밀도 니트 & 파인 게이지 원사',
      en: 'Fine-Gauge & High-Density Knitwear',
    },
    description: {
      ko: '소재의 촉감과 내구성을 최우선으로 검증하여 사계절 편안함과 품격을 제공하는 니트 컬렉션을 소싱합니다.',
      en: 'Sourcing knit collections focused on tactile softness, enduring durability, and seasonal versatility.',
    },
    tags: [
      { ko: '울 & 캐시미어 블렌드', en: 'Wool & Cashmere Blends' },
      { ko: '가디건 & 풀오버', en: 'Cardigans & Pullovers' },
      { ko: '시즌 니트웨어', en: 'Seasonal Knits' },
    ],
    imageSrc: '/images/categories/category_knitwear.jpg',
    imagePlaceholder: {
      label: 'Textured Fine Knitwear Detail',
      tone: 'warm-neutral',
    },
  },
  {
    id: 'outerwear',
    title: 'OUTERWEAR',
    subtitle: {
      ko: '프리미엄 코트 & 자켓 라인',
      en: 'Tailored Coats & Protective Outerwear',
    },
    description: {
      ko: '정밀한 패턴 봉제와 기능성 부자재를 접목하여 완성도 높은 아우터 컬렉션을 도매 유통합니다.',
      en: 'Distributing tailored outerwear engineered with precise craftsmanship and premium hardware.',
    },
    tags: [
      { ko: '테일러드 코트', en: 'Tailored Overcoats' },
      { ko: '캐주얼 재킷', en: 'Casual Jackets' },
      { ko: '다운 & 패딩', en: 'Insulated Outerwear' },
    ],
    imageSrc: '/images/categories/category_outerwear.jpg',
    imagePlaceholder: {
      label: 'Structured Tailored Outerwear Silhouette',
      tone: 'charcoal',
    },
  },
  {
    id: 'fashion-goods',
    title: 'FASHION GOODS',
    subtitle: {
      ko: '감각적인 패션 잡화 & 악세서리',
      en: 'Curated Leather Goods & Accessories',
    },
    description: {
      ko: '스타일의 완성도를 높여주는 레더 굿즈, 백, 스카프 등 차별화된 패션 소품을 발굴합니다.',
      en: 'Sourcing distinctive fashion accoutrements including refined leather goods, bags, and lifestyle accessories.',
    },
    tags: [
      { ko: '레더 굿즈', en: 'Leather Goods' },
      { ko: '가방 & 파우치', en: 'Bags & Pouches' },
      { ko: '시즌 악세서리', en: 'Seasonal Accessories' },
    ],
    imageSrc: '/images/categories/category_fashion_goods.jpg',
    imagePlaceholder: {
      label: 'Artisanal Leather Goods Still Life',
      tone: 'espresso',
    },
  },
  {
    id: 'lifestyle',
    title: 'LIFESTYLE',
    subtitle: {
      ko: '라이프스타일 & 리빙 아이템',
      en: 'Essential Living & Lifestyle Objects',
    },
    description: {
      ko: '일상의 공간을 채우는 감각적인 홈 패브릭과 실용적인 라이프스타일 굿즈로 카테고리를 확장합니다.',
      en: 'Expanding into sensory home textiles, curated living objects, and utilitarian lifestyle essentials.',
    },
    tags: [
      { ko: '홈 패브릭', en: 'Home Fabrics' },
      { ko: '인테리어 오브제', en: 'Interior Objects' },
      { ko: '라이프 굿즈', en: 'Daily Essentials' },
    ],
    imageSrc: '/images/categories/category_lifestyle.jpg',
    imagePlaceholder: {
      label: 'Modern Minimalist Lifestyle Space',
      tone: 'stone-gray',
    },
  },
];
