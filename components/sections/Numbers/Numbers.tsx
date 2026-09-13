'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CountUp } from './CountUp';
import { NUMBERS_DATA } from '@/data/numbers';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Numbers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="numbers" className="relative w-full py-28 md:py-36 bg-[#0a0a0c] border-t border-white/5">
      <Container>
        {/* Section Header */}
        <SectionTitle
          eyebrow="GROWTH & PERFORMANCE"
          title="BY THE NUMBERS"
          subtitle={
            t({
              ko: '정직하고 투명한 기업 운영을 바탕으로 검증된 비즈니스 지표를 지속적으로 업데이트합니다.',
              en: 'Committed to transparent and authentic operations, updating verified commerce metrics quarterly.',
            })
          }
        />

        {/* Numbers Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {NUMBERS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="relative p-8 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Index Number */}
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-4">
                METRIC 0{index + 1}
              </span>

              {/* Huge Number Typography */}
              <div className="text-5xl sm:text-6xl md:text-7xl font-extralight text-white mb-4 tracking-tighter leading-none">
                <CountUp
                  value={item.value}
                  fallbackDisplay={item.fallbackDisplay}
                  suffix={item.suffix}
                  isPending={item.isPending}
                />
              </div>

              {/* Label */}
              <h4 className="text-base sm:text-lg font-medium text-white tracking-tight mb-2">
                {t(item.label)}
              </h4>

              {/* Description */}
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {t(item.description)}
              </p>

              {/* Pending Note as per Rule 16 */}
              {item.isPending && (
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-600">
                  <span>STATUS</span>
                  <span className="text-[#c5a880]/80">VERIFICATION PENDING</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
