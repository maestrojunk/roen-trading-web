'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { ABOUT_DATA } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full py-28 md:py-36 bg-[#0a0a0c] border-t border-white/5">
      <Container>
        {/* Section Header */}
        <SectionTitle
          eyebrow={t(ABOUT_DATA.sectionTitle)}
          title={t(ABOUT_DATA.mainHeading)}
          align="left"
        />

        {/* Editorial Layout: Left Narrative, Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl font-light text-zinc-200 leading-relaxed tracking-tight"
            >
              {t(ABOUT_DATA.descriptionPrimary)}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
            >
              {t(ABOUT_DATA.descriptionSecondary)}
            </motion.p>

            {/* Core Values Cards */}
            <motion.div variants={fadeInUp} className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {ABOUT_DATA.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-sm border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
                >
                  <span className="text-[10px] font-mono text-[#c5a880] tracking-widest uppercase block mb-2">
                    VALUE 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-white tracking-wide mb-2">
                    {t(val.title)}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {t(val.description)}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <div className="lg:col-span-5">
            <ImageReveal
              alt="ROEN TRADING Sourcing & Quality Inspection"
              aspectRatio="aspect-[4/5]"
              categoryTag="COMPANY PHILOSOPHY"
              placeholderLabel="ROEN TRADING Core Logistics & Fabric Inspection"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
