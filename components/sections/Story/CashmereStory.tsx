'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/hooks/useLanguage';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const STORY_STEPS = [
  {
    id: 'purity',
    badge: '01 / RAW PURITY',
    title: {
      ko: '고순도 자연 화이트 캐시미어',
      en: 'High-Purity Natural Raw Cashmere',
    },
    subtitle: {
      ko: '자연 그대로의 순수함과 최소화된 가공',
      en: 'Pristine Natural Fiber with Minimal Processing',
    },
    description: {
      ko: 'ROEN TRADING은 자연 본연의 색감과 극강의 부드러움을 간직한 고순도 화이트 캐시미어 원사를 엄선하여 발굴합니다. 인위적인 탈색과 과도한 가공을 지양하여 섬유 본연의 탄력과 터치감을 완벽히 보존합니다.',
      en: 'ROEN TRADING curates high-purity white cashmere fibers characterized by pristine natural luster and sublime softness. By minimizing artificial bleaching, we preserve the natural elasticity and warmth of the raw fiber.',
    },
    image: '/images/story/cashmere_knit.jpg',
    alt: 'High-purity white cashmere fine knit macro detail',
  },
  {
    id: 'craft',
    badge: '02 / ARTISAN GAUGE',
    title: {
      ko: '정밀한 파인 게이지 편직 기술',
      en: 'Fine-Gauge Knitting & Tactile Density',
    },
    subtitle: {
      ko: '가벼움과 보온성이 균형을 이루는 직조',
      en: 'Harmonious Balance of Featherweight Loft & Warmth',
    },
    description: {
      ko: '검증된 글로벌 제조 파트너의 정밀 편직 라인을 통해 촘촘하면서도 통기성 있는 직조를 완성합니다. 가벼우면서도 풍부한 공기층을 형성하여 겨울철 최적의 보온 성능을 선사합니다.',
      en: 'Partnered with premier overseas manufacturers, we achieve dense yet breathable knit structures. Creating rich microscopic air pockets, the garments deliver optimal winter thermal performance.',
    },
    image: '/images/story/cashmere_garment.jpg',
    alt: 'Minimalist folded white cashmere knitwear on stone plinth',
  },
  {
    id: 'lineup',
    badge: '03 / TIMELESS VALUE',
    title: {
      ko: '타임리스 에센셜 니트 컬렉션',
      en: 'Timeless Essential Knitwear Lineup',
    },
    subtitle: {
      ko: '시즌을 넘어 사랑받는 B2B 도매 공급',
      en: 'Curated Wholesale Supply Built for Longevity',
    },
    description: {
      ko: '단순한 일회성 유행이 아닌, 오랜 시간 가치를 유지하는 베이직 실루엣과 감각적인 텍스처의 화이트 캐시미어 제품군을 국내 편집숍 및 도매 유통 채널에 안정적으로 공급합니다.',
      en: 'Transcending ephemeral trends, we supply essential silhouettes and refined textures to selective domestic retailers, multi-brand stores, and B2B wholesale networks.',
    },
    image: '/images/hero/hero_cashmere.jpg',
    alt: 'Curated white cashmere essential apparel fold',
  },
];

export const CashmereStory: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.45;
      stepRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom >= triggerY) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentItem = STORY_STEPS[activeStep] || STORY_STEPS[0];

  return (
    <section
      id="cashmere-story"
      className="relative w-full py-28 md:py-36 bg-[#0c0d11] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.08),transparent_70%)] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/10 text-[#c5a880] text-[11px] font-mono tracking-widest uppercase mb-4">
            <Sparkles size={12} />
            <span>SEASONAL HIGHLIGHT · WINTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.05]">
            WHITE CASHMERE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {t({
              ko: '이번 겨울 ROEN TRADING이 제안하는 핵심 비주얼 스토리. 자연 본연의 고순도 화이트 캐시미어로 완성된 감각적인 텍스처를 확인하세요.',
              en: 'The signature visual highlight of ROEN TRADING this season. Experience the tactile purity of natural raw white cashmere.',
            })}
          </p>
        </div>

        {/* Sticky Scroll Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Progressive Text Steps */}
          <div className="lg:col-span-6 space-y-16 lg:space-y-28 py-6">
            {STORY_STEPS.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`transition-opacity duration-500 ${
                  activeStep === idx ? 'opacity-100' : 'opacity-40 lg:opacity-30'
                }`}
              >
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#c5a880] uppercase block mb-3">
                  {step.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight mb-2">
                  {t(step.title)}
                </h3>
                <p className="text-sm sm:text-base font-medium text-zinc-300 mb-4">
                  {t(step.subtitle)}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-lg">
                  {t(step.description)}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Canvas */}
          <div className="lg:col-span-6 sticky top-28 md:top-32 hidden lg:block">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-[#14161c] shadow-2xl shadow-black/60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={currentItem.image}
                    alt={currentItem.alt}
                    fill
                    sizes="(max-width: 1200px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      PURE CASHMERE ARCHIVE
                    </span>
                    <span className="text-xs font-mono text-[#c5a880]">ROEN CURATION</span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                    <span>{t(currentItem.title)}</span>
                    <span className="text-zinc-500">TACTILE MACRO</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
