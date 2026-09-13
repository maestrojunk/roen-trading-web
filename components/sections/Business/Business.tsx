'use client';

import React, { useState, useEffect, useRef } from 'react';
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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-[#121318]">
              {/* Visual Card with Crossfade Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-br from-[#181920] via-[#111216] to-[#0a0a0c]"
                >
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none" />

                  {/* Header Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-[#c5a880] uppercase">
                      PILLAR {activeItem.index} / 04
                    </span>
                    <span className="text-xs font-mono text-zinc-400">ROEN SPECIFICATION</span>
                  </div>

                  {/* Center Content */}
                  <div className="relative z-10 my-auto text-center py-8">
                    <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-zinc-300 tracking-wider">
                      TODO: {activeItem.imagePlaceholder.category}
                    </div>
                    <h4 className="text-2xl font-light text-white tracking-tight mt-2">
                      {t(activeItem.title)}
                    </h4>
                    <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-2 font-light">
                      {t(activeItem.imagePlaceholder.alt)}
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono text-zinc-400">
                    <span>INTERNATIONAL TRADE LOGISTICS</span>
                    <span className="text-zinc-400 font-medium">B2B VERIFIED</span>
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
