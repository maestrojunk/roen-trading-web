import {
  NavItem,
  HeroContent,
  AboutContent,
  FounderContent,
  ContactContent,
  FooterContent,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: { ko: '소개', en: 'About' }, href: '#about' },
  { id: 'business', label: { ko: '사업 영역', en: 'Business' }, href: '#business' },
  { id: 'numbers', label: { ko: '실적', en: 'Numbers' }, href: '#numbers' },
  { id: 'categories', label: { ko: '카테고리', en: 'Categories' }, href: '#categories' },
  { id: 'process', label: { ko: '프로세스', en: 'Process' }, href: '#process' },
  { id: 'founder', label: { ko: '경영진', en: 'Founder' }, href: '#founder' },
  { id: 'contact', label: { ko: '문의', en: 'Contact' }, href: '#contact' },
];

export const HERO_DATA: HeroContent = {
  brandName: 'ROEN TRADING',
  tagline: {
    ko: 'Beyond Trading.',
    en: 'Beyond Trading.',
  },
  subTagline: {
    ko: '제품과 시장, 그리고 사람을 연결하는 글로벌 트레이딩 파트너',
    en: 'Connecting Products, Markets and People.',
  },
  scrollPrompt: {
    ko: 'SCROLL TO DISCOVER',
    en: 'SCROLL TO DISCOVER',
  },
  ctaText: {
    ko: '비즈니스 문의하기',
    en: 'Work With Us',
  },
};

export const ABOUT_DATA: AboutContent = {
  sectionTitle: {
    ko: 'ABOUT ROEN',
    en: 'ABOUT ROEN',
  },
  mainHeading: {
    ko: '신뢰할 수 있는 글로벌 소싱과 유통으로 새로운 비즈니스 가치를 만듭니다.',
    en: 'Connecting reliable products with the right markets through global sourcing, trading and distribution.',
  },
  descriptionPrimary: {
    ko: 'ROEN TRADING은 글로벌 소싱과 효율적인 유통을 통해 좋은 제품과 적합한 시장을 연결합니다.',
    en: 'ROEN TRADING connects reliable products with the right markets through global sourcing, trading and distribution.',
  },
  descriptionSecondary: {
    ko: '제품과 시장, 그리고 사람을 연결하며 오래 지속되는 비즈니스 관계를 만들어갑니다.',
    en: 'We build long-term business relationships by connecting products, markets and people.',
  },
  coreValues: [
    {
      title: { ko: '글로벌 네트워크', en: 'Global Sourcing' },
      description: {
        ko: '검증된 글로벌 생산 네트워크를 기반으로 안정적인 공급 체인을 구축합니다.',
        en: 'Establishing stable supply chains based on verified global production networks.',
      },
    },
    {
      title: { ko: '품질 중심 셀렉션', en: 'Curated Quality' },
      description: {
        ko: '패션 및 라이프스타일 시장의 트렌드와 철저한 퀄리티 기준을 통과한 제품만을 엄선합니다.',
        en: 'Curating products that meet rigorous quality standards and fashion market trends.',
      },
    },
    {
      title: { ko: '지속 가능한 파트너십', en: 'Enduring Partnership' },
      description: {
        ko: '단발성 거래를 지양하고 투명성과 신뢰를 바탕으로 파트너의 비즈니스 성장을 함께합니다.',
        en: 'Fostering long-term strategic growth built on transparency, reliability, and mutual trust.',
      },
    },
  ],
};

export const FOUNDER_DATA: FounderContent = {
  sectionTitle: {
    ko: 'FOUNDER & LEADERSHIP',
    en: 'FOUNDER & LEADERSHIP',
  },
  role: {
    ko: 'FOUNDER & CEO',
    en: 'FOUNDER & CEO',
  },
  name: {
    ko: 'Jayden Kim',
    en: 'Jayden Kim',
  },
  quote: {
    ko: '“좋은 제품과 시장을 연결하고, 오래 지속되는 거래 관계를 만들어갑니다.”',
    en: '“Building reliable connections between products, markets and people.”',
  },
  description: [
    {
      ko: 'ROEN TRADING은 급변하는 글로벌 유통 환경 속에서 고객사와 파트너에게 가장 신뢰할 수 있는 트레이딩 기준을 제시합니다.',
      en: 'In an ever-evolving global commerce landscape, ROEN TRADING provides reliable standards in international trading and distribution.',
    },
    {
      ko: '형식적인 관행을 넘어 제품의 실질적인 퀄리티와 정직한 비즈니스 커뮤니케이션을 통해 지속 가능한 가치를 창출합니다.',
      en: 'Moving beyond transactional conventions, we create enduring value through curated product quality and authentic business partnerships.',
    },
  ],
  photoPlaceholder: {
    name: 'Jayden Kim',
    title: 'Founder & CEO',
  },
};

export const CONTACT_DATA: ContactContent = {
  sectionTitle: {
    ko: 'CONTACT US',
    en: 'CONTACT US',
  },
  mainHeadline: {
    ko: "LET'S WORK TOGETHER.",
    en: "LET'S WORK TOGETHER.",
  },
  subHeadline: {
    ko: '새로운 비즈니스 기회와 신뢰할 수 있는 글로벌 파트너십을 위해 언제든 연락주세요.',
    en: 'Connect with us to explore new business horizons and establish dependable global trade partnerships.',
  },
  companyName: 'ROEN TRADING',
  founderRole: {
    ko: '대표자 / Founder & CEO',
    en: 'Founder & CEO',
  },
  founderName: {
    ko: 'Jayden Kim',
    en: 'Jayden Kim',
  },
  emailPlaceholder: 'contact@roentrading.com', // Placeholder
  phonePlaceholder: '+82 (0)2-0000-0000', // Placeholder
  addressPlaceholder: {
    ko: '서울특별시 (세부 주소 업데이트 예정)',
    en: 'Seoul, Republic of Korea (Detailed address to be updated)',
  },
  bizRegNumberPlaceholder: '000-00-00000', // Placeholder
  inquiryCategories: [
    { id: 'wholesale', label: { ko: '도매 및 유통 공급 문의', en: 'Wholesale & Distribution' } },
    { id: 'sourcing', label: { ko: '글로벌 소싱 및 수입 문의', en: 'Global Sourcing & Import' } },
    { id: 'partnership', label: { ko: '전략적 비즈니스 제휴', en: 'Strategic Partnership' } },
  ],
  ctaButton: {
    ko: '문의 이메일 보내기',
    en: 'Send Inquiry Email',
  },
};

export const FOOTER_DATA: FooterContent = {
  brandName: 'ROEN TRADING',
  copyright: '© 2026 ROEN TRADING. All Rights Reserved.',
  notice: {
    ko: '본 사이트는 ROEN TRADING의 공식 B2B 기업 소개 사이트입니다.',
    en: 'Official Corporate B2B Website of ROEN TRADING.',
  },
  links: [
    { label: { ko: '사업 영역', en: 'Business' }, href: '#business' },
    { label: { ko: '프로세스', en: 'Process' }, href: '#process' },
    { label: { ko: '파트너십 문의', en: 'Contact' }, href: '#contact' },
  ],
};
