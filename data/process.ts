import { ProcessStepType } from '@/types';

export const PROCESS_STEPS: ProcessStepType[] = [
  {
    id: 'sourcing',
    step: '01',
    title: {
      ko: 'SOURCING',
      en: 'SOURCING',
    },
    description: {
      ko: '글로벌 제조 거점 및 신뢰할 수 있는 공급처를 심층 분석하고 최적의 제품 생산처를 발굴합니다.',
      en: 'Analyzing verified global manufacturers and identifying optimal production partners with proven reliability.',
    },
    highlights: [
      { ko: '글로벌 제조 인프라 조사', en: 'Global manufacturing landscape research' },
      { ko: '원가 경쟁력 및 공급 안정성 검토', en: 'Cost efficiency and supply stability audits' },
    ],
  },
  {
    id: 'selection',
    step: '02',
    title: {
      ko: 'SELECTION',
      en: 'SELECTION',
    },
    description: {
      ko: '원사, 원단, 봉제 마감까지 실물 샘플을 철저히 검증하여 국내 시장 기준에 부합하는 제품만 엄선합니다.',
      en: 'Evaluating physical samples from raw fabrics to stitch finishes, curating only items meeting strict standards.',
    },
    highlights: [
      { ko: '원단 및 마감 디테일 정밀 검수', en: 'Detailed fabric & finishing inspection' },
      { ko: '국내 시장 적합성 및 트렌드 평가', en: 'Domestic market fit & trend alignment' },
    ],
  },
  {
    id: 'trading',
    step: '03',
    title: {
      ko: 'IMPORT & TRADING',
      en: 'IMPORT & TRADING',
    },
    description: {
      ko: '복잡한 국제 무역 계약, 통관 규정, 복합 운송 과정을 원스톱으로 관리하여 납기를 정확히 준수합니다.',
      en: 'Managing trade contracts, customs documentation, and multi-modal logistics for timely and secure arrival.',
    },
    highlights: [
      { ko: '체계적인 수출입 통관 및 통관 서류 관리', en: 'Systematic customs clearance & documentation' },
      { ko: '실시간 운송 모니터링', en: 'Real-time cargo shipment tracking' },
    ],
  },
  {
    id: 'distribution',
    step: '04',
    title: {
      ko: 'DISTRIBUTION',
      en: 'DISTRIBUTION',
    },
    description: {
      ko: '안전하게 입고된 물량을 검수 후 파트너사의 물류창고 및 온·오프라인 도매 유통 채널로 신속하게 공급합니다.',
      en: 'Post-arrival inspection followed by prompt distribution to partner warehouses and wholesale channels.',
    },
    highlights: [
      { ko: '입고 검수 및 체계적 보관', en: 'Arrival inspection & organized warehousing' },
      { ko: 'B2B 거래처 맞춤 출고 시스템', en: 'Customized B2B dispatch systems' },
    ],
  },
  {
    id: 'partnership',
    step: '05',
    title: {
      ko: 'PARTNERSHIP',
      en: 'PARTNERSHIP',
    },
    description: {
      ko: '납품 완료 후에도 지속적인 피드백과 판매 동향을 공유하며 차기 시즌 및 신규 라인업 확장을 함께합니다.',
      en: 'Sharing post-delivery insights and market feedback to continually expand future season collaborations.',
    },
    highlights: [
      { ko: '피드백 수렴 및 품질 개선 관리', en: 'Feedback loop & quality iteration' },
      { ko: '장기적인 신규 라인업 공동 기획', en: 'Long-term joint product planning' },
    ],
  },
];
