import { NumberItemType } from '@/types';

export const NUMBERS_DATA: NumberItemType[] = [
  {
    id: 'partners',
    value: null, // Set to number when verified (e.g., 25)
    fallbackDisplay: '--+',
    suffix: '+',
    label: {
      ko: 'Business Partners',
      en: 'Business Partners',
    },
    description: {
      ko: '국내외 신뢰를 바탕으로 구축 중인 거래 협력사',
      en: 'Trusted client & manufacturing partners worldwide',
    },
    isPending: true,
  },
  {
    id: 'products',
    value: null, // Set to number when verified (e.g., 180)
    fallbackDisplay: '--+',
    suffix: '+',
    label: {
      ko: 'Products Sourced',
      en: 'Products Sourced',
    },
    description: {
      ko: '엄격한 품질 검증을 거친 글로벌 패션 및 상품군',
      en: 'Vetted apparel & lifestyle items curated globally',
    },
    isPending: true,
  },
  {
    id: 'channels',
    value: null, // Set to number when verified (e.g., 15)
    fallbackDisplay: '--+',
    suffix: '+',
    label: {
      ko: 'Distribution Channels',
      en: 'Distribution Channels',
    },
    description: {
      ko: '도매 거래처 및 온·오프라인 공급 유통망',
      en: 'Domestic wholesale networks and retail stockists',
    },
    isPending: true,
  },
  {
    id: 'projects',
    value: null, // Set to number when verified (e.g., 40)
    fallbackDisplay: '--+',
    suffix: '+',
    label: {
      ko: 'Projects Completed',
      en: 'Projects Completed',
    },
    description: {
      ko: '성공적으로 인도된 소싱 및 트레이딩 프로젝트',
      en: 'Successfully executed sourcing and trade operations',
    },
    isPending: true,
  },
];
