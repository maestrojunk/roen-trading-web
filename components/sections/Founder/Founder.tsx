'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FOUNDER_DATA } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Founder: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="founder" className="relative w-full py-28 md:py-36 bg-[#070709] border-t border-white/5">
      <Container>
        {/* Section Header */}
        <SectionTitle
          eyebrow="LEADERSHIP & TRUST"
          title="FOUNDER & LEADERSHIP"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo Placeholder (Strictly adhering to Rule 19 & 37) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-white/10 bg-gradient-to-b from-[#14161d] to-[#0d0e12] p-8 flex flex-col justify-between shadow-2xl"
            >
              {/* Subtle geometric monogram */}
              <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#c5a880] uppercase">
                <span>EXECUTIVE PROFILE</span>
                <span>ROEN TRADING</span>
              </div>

              {/* Center Portrait Placeholder Block */}
              <div className="my-auto text-center py-10">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-xl font-light tracking-widest text-zinc-300">
                  JK
                </div>
                <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-zinc-400">
                  TODO: Founder Portrait Image
                </div>
                <p className="mt-3 text-xs text-zinc-500 font-light">
                  {FOUNDER_DATA.photoPlaceholder.name} — {FOUNDER_DATA.photoPlaceholder.title}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span>FOUNDER & CEO</span>
                <span>JAYDEN KIM</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Founder Message & Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-xs font-mono font-medium tracking-[0.25em] text-[#c5a880] uppercase block mb-2">
                {t(FOUNDER_DATA.role)}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                {t(FOUNDER_DATA.name)}
              </h3>
            </motion.div>

            {/* Core Quote */}
            <motion.blockquote
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed tracking-tight border-l-2 border-[#c5a880] pl-6 py-1"
            >
              {t(FOUNDER_DATA.quote)}
            </motion.blockquote>

            {/* Editorial Body (Short 2-3 lines, no traditional greetings) */}
            <motion.div variants={fadeInUp} className="space-y-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              {FOUNDER_DATA.description.map((paragraph, idx) => (
                <p key={idx}>{t(paragraph)}</p>
              ))}
            </motion.div>

            {/* Signature / Credentials Footnote */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 border-t border-white/5 flex items-center justify-between"
            >
              <div className="text-xs font-mono text-zinc-500">
                <span>ROEN TRADING LEADERSHIP</span>
              </div>
              <div className="text-xs font-mono text-zinc-400 tracking-wider">
                B2B GLOBAL COMMERCE
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
