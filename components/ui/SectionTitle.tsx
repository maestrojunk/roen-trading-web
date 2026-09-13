'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, premiumEase } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeInUp}
      className={cn('flex flex-col mb-12 md:mb-20 max-w-3xl', alignmentClasses[align], className)}
    >
      {eyebrow && (
        <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: premiumEase, delay: 0.1 }}
        className={cn(
          'h-px bg-gradient-to-r from-zinc-600 via-zinc-400 to-transparent w-24 my-6',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
