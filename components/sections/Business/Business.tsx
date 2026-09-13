'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BusinessItem } from './BusinessItem';
import { BUSINESS_ITEMS } from '@/data/business';
import { useLanguage } from '@/hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';

export const Business: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const middleY = window.innerHeight * 0.45;
      itemRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= middleY && rect.bottom >= middleY) {
            setActiveIndex(index);
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

  const activeItem = BUSINESS_ITEMS[activeIndex] || BUSINESS_ITEMS[0];

  return (
    <section id="business" className="relative w-full py-28 md:py-36 bg-[#070709] border-t border-white/5">
      <Container>
        {/* Section Title */}
        <SectionTitle
          eyebrow="CAPABILITIES & SERVICES"
          title="WHAT WE DO"
          subtitle={
            t({
              ko: '글로벌 소싱부터 물류, 유통, 장기적 파트너십까지 신뢰할 수 있는 B2B 트레이딩 솔루션을 제공합니다.',
              en: 'Delivering dependable B2B commerce solutions spanning sourcing, cross-border logistics, distribution, and strategic alliances.',
            })
          }
        />

        {/* Sticky Scroll Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Scrolling Business Items */}
          <div className="lg:col-span-6">
            {BUSINESS_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
              >
                <BusinessItem item={item} isActive={activeIndex === idx} />
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Canvas */}
          <div className="lg:col-span-6 hidden lg:block sticky top-32">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-[#121318] shadow-2xl shadow-black/80">
              {/* Visual Card with Crossfade Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.imageSrc}
                    alt={t(activeItem.title)}
                    fill
                    sizes="(max-width: 1200px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/30 to-black/50 pointer-events-none" />

                  {/* Header Badge */}
                  <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 uppercase">
                      PILLAR {activeItem.index} / 04
                    </span>
                    <span className="text-xs font-mono text-[#c5a880] font-medium bg-black/50 px-2 py-0.5 rounded">
                      VERIFIED B2B
                    </span>
                  </div>

                  {/* Center/Bottom Overlay Details */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="text-[11px] font-mono tracking-widest text-[#c5a880] uppercase block mb-1">
                      {t(activeItem.subtitle)}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                      {t(activeItem.title)}
                    </h4>
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
