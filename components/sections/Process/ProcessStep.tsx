'use client';

import React from 'react';
import { ProcessStepType } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isLast }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex flex-col group"
    >
      {/* Step Number & Activation indicator */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] text-xs font-mono font-medium text-white transition-all duration-300 group-hover:border-[#c5a880] group-hover:text-[#c5a880]">
          {step.step}
        </div>
        {!isLast && (
          <div className="hidden lg:block flex-1 h-px bg-white/10 group-hover:bg-white/30 transition-colors" />
        )}
      </div>

      {/* Step Title */}
      <h3 className="text-xl font-light text-white tracking-tight mb-3">
        {t(step.title)}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
        {t(step.description)}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 pt-2 border-t border-white/5 text-[11px] font-mono text-zinc-500">
        {step.highlights.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#c5a880]/60" />
            <span>{t(item)}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
