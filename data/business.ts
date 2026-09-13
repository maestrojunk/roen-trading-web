import { BusinessItemType } from '@/types';

export interface BusinessItemExtended extends BusinessItemType {
  imageSrc: string;
}

export const BUSINESS_ITEMS: BusinessItemExtended[] = [
  {
    id: 'global-sourcing',
    index: '01',
    title: {
      ko: 'Global Sourcing',
      en: 'Global Sourcing',
    },
    subtitle: {
      ko: '검증된 글로벌 제조사 발굴',
      en: 'Curated Manufacturing Network',
    },
    description: {
      ko: '신뢰할 수 있는 제품과 공급 파트너를 발굴합니다. 엄격한 품질 기준과 원자재 검수를 통해 글로벌 시장에서 경쟁력 있는 제품을 선별합니다.',
      en: 'We discover verified products and trusted supply partners. Through strict quality standards and material audits, we curate competitive products across global markets.',
    },
    details: [
      { ko: '엄격한 품질 관리 및 현장 샘플 검수', en: 'Rigorous quality assurance & sample verification' },
      { ko: '신뢰도 높은 해외 공장 및 제조 파트너십', en: 'Verified overseas manufacturing partnerships' },
      { ko: '트렌드에 기민하게 반응하는 패션 라인업 확보', en: 'Trend-responsive fashion product line curation' },
    ],
    imageSrc: '/images/business/sourcing_inspection.jpg',
    imagePlaceholder: {
      category: 'Raw Materials & Textile Inspection',
      aspectRatio: '4/3',
      alt: {
        ko: '원단 디테일 및 글로벌 소싱 품질 검수',
        en: 'Fabric detail and global sourcing quality inspection',
      },
    },
  },
  {
    id: 'international-trading',
    index: '02',
    title: {
      ko: 'International Trading',
      en: 'International Trading',
    },
    subtitle: {
      ko: '원활하고 투명한 무역 실행',
      en: 'Streamlined Trade Execution',
    },
    description: {
      ko: '제품의 수입 및 국제 거래 과정을 효율적으로 연결합니다. 통관, 물류, 규정 준수까지 복잡한 무역 절차를 최적화하여 안정적인 운송을 보장합니다.',
      en: 'We streamline import execution and international commerce. From customs compliance to cross-border logistics, we optimize trading workflows for seamless delivery.',
    },
    details: [
      { ko: '안정적인 국제 물류 및 신속한 통관 프로세스', en: 'Stable international freight & swift customs handling' },
      { ko: '규정 준수 및 국제 무역 계약 체계 관리', en: 'Regulatory compliance & cross-border contract governance' },
      { ko: '운송 리스크 관리 및 안전한 공급망 운영', en: 'Freight risk mitigation & secure supply chain operations' },
    ],
    imageSrc: '/images/business/trading_logistics.jpg',
    imagePlaceholder: {
      category: 'Cross-Border Logistics & Global Cargo',
      aspectRatio: '4/3',
      alt: {
        ko: '글로벌 무역 물류 및 운송 프로세스',
        en: 'Global trade freight and logistics operation',
      },
    },
  },
  {
    id: 'wholesale-distribution',
    index: '03',
    title: {
      ko: 'Wholesale Distribution',
      en: 'Wholesale Distribution',
    },
    subtitle: {
      ko: '타겟 채널 맞춤 도매 유통',
      en: 'Targeted Wholesale Network',
    },
    description: {
      ko: '제품을 국내 유통 채널과 거래처에 공급합니다. 안정적인 재고 관리와 체계적인 물류 인프라로 온·오프라인 파트너의 비즈니스 안정성을 지원합니다.',
      en: 'We supply vetted products to domestic wholesale channels and client networks. With robust inventory oversight, we empower partners across retail and wholesale sectors.',
    },
    details: [
      { ko: 'B2B 거래처별 맞춤형 공급 및 납기 준수', en: 'Customized B2B volume supply & reliable delivery timelines' },
      { ko: '체계적인 창고 입출고 및 재고 운영 체계', en: 'Systematic warehousing and inventory management' },
      { ko: '온·오프라인 편집숍 및 유통망 공급 레퍼런스', en: 'Supplying to select shops, boutiques, and multi-channel retailers' },
    ],
    imageSrc: '/images/business/wholesale_dist.jpg',
    imagePlaceholder: {
      category: 'Modern Warehousing & Distribution Hub',
      aspectRatio: '4/3',
      alt: {
        ko: '체계적인 창고 관리 및 도매 유통 현장',
        en: 'Systematic warehouse management and wholesale distribution',
      },
    },
  },
  {
    id: 'business-partnership',
    index: '04',
    title: {
      ko: 'Business Partnership',
      en: 'Business Partnership',
    },
    subtitle: {
      ko: '신뢰 기반의 장기적 동반 성장',
      en: 'Strategic Long-Term Value',
    },
    description: {
      ko: '단순 거래를 넘어 장기적인 비즈니스 관계를 구축합니다. 파트너의 비즈니스 니즈를 깊이 이해하고 함께 성장하는 신뢰의 생태계를 지향합니다.',
      en: 'We establish strategic business relationships that endure beyond single transactions. We closely understand client objectives to foster sustainable mutual expansion.',
    },
    details: [
      { ko: '정직하고 투명한 커뮤니케이션 원칙', en: 'Commitment to authentic and transparent communication' },
      { ko: '신규 제품군 공동 기획 및 유연한 소싱 협력', en: 'Joint product category planning and agile sourcing collaboration' },
      { ko: '지속 가능한 상생 비즈니스 모델 지향', en: 'Dedicated to long-term mutual growth and shared success' },
    ],
    imageSrc: '/images/business/partnership_meeting.jpg',
    imagePlaceholder: {
      category: 'Strategic Alliance & Executive Discussion',
      aspectRatio: '4/3',
      alt: {
        ko: '비즈니스 파트너십 및 전략적 협력',
        en: 'Strategic alliance and executive business partnership',
      },
    },
  },
];
