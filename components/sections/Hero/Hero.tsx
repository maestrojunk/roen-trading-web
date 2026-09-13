'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { HERO_DATA } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Apple-inspired scroll-driven transforms
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.65], [0, -50]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden bg-[#070709]"
    >
      {/* Background Visual Layer: Cinematic White Cashmere Macro with Parallax Zoom */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 h-full w-full will-change-transform"
      >
        <Image
          src="/images/hero/hero_cashmere.jpg"
          alt="ROEN TRADING White Cashmere Macro Textile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.45] contrast-[1.05]"
        />

        {/* Ambient Dark Gradient Vignette for Premium Apple-Style Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0c]/40 to-[#0a0a0c]/90" />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Brand Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-300">
            GLOBAL SOURCING & INTERNATIONAL COMMERCE
          </span>
        </motion.div>

        {/* Brand Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.03em] text-white uppercase select-none leading-[0.95]"
        >
          {HERO_DATA.brandName}
        </motion.h1>

        {/* Primary Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light text-zinc-200 tracking-tight"
        >
          {t(HERO_DATA.tagline)}
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-xl text-sm sm:text-base text-zinc-300 font-light leading-relaxed tracking-wide"
        >
          {t(HERO_DATA.subTagline)}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-xl shadow-black/40"
          >
            <span>{t(HERO_DATA.ctaText)}</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
          {t(HERO_DATA.scrollPrompt)}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-zinc-400"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};
