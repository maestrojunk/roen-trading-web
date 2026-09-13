'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProcessStep } from './ProcessStep';
import { PROCESS_STEPS } from '@/data/process';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { staggerContainer, lineReveal } from '@/lib/animations';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative w-full py-28 md:py-36 bg-[#0a0a0c] border-t border-white/5">
      <Container>
        {/* Section Header */}
        <SectionTitle
          eyebrow="WORKFLOW & METHODOLOGY"
          title="OUR PROCESS"
          subtitle={
            t({
              ko: '철저한 소싱부터 품질 선별, 통관, 도매 공급, 사후 파트너십까지 빈틈없는 5단계 프로세스를 운영합니다.',
              en: 'A seamless five-phase methodology encompassing sourcing, quality curation, customs handling, wholesale delivery, and continuous partnership.',
            })
          }
        />

        {/* Global Process Connecting Line (Desktop) */}
        <div className="relative mb-12 hidden lg:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineReveal}
            className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#c5a880]/40 to-transparent"
          />
        </div>

        {/* Steps Grid: Responsive Horizontal on Desktop, Vertical Timeline on Mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative"
        >
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
