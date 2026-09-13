'use client';

import React from 'react';
import { CategoryItemType } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface CategoryItemProps {
  category: CategoryItemType;
  index: number;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, index }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-[#101116] p-8 transition-all duration-500 hover:border-white/25 hover:bg-[#14161c]"
    >
      {/* Top Meta */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase">
          CATEGORY 0{index + 1}
        </span>
        <span className="text-xs font-mono text-zinc-600">SOURCING SCOPE</span>
      </div>

      {/* Main Title & Editorial Headline */}
      <div className="space-y-3 mb-8">
        <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight group-hover:text-white transition-colors">
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-zinc-300">
          {t(category.subtitle)}
        </p>
        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
          {t(category.description)}
        </p>
      </div>

      {/* Tags / Subcategories */}
      <div className="pt-6 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {category.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300"
            >
              {t(tag)}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
