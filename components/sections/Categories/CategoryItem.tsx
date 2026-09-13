'use client';

import React from 'react';
import Image from 'next/image';
import { CategoryItemExtended } from '@/data/categories';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface CategoryItemProps {
  category: CategoryItemExtended;
  index: number;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, index }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-[#101116] p-8 transition-all duration-500 hover:border-white/30"
    >
      {/* Background Real Image with Zoom Effect */}
      {category.imageSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={category.imageSrc}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.4] group-hover:brightness-[0.48]"
          />
          {/* Dark luxury gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/70 to-[#0a0a0c]/30" />
        </div>
      )}

      {/* Top Meta */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          CATEGORY 0{index + 1}
        </span>
        <span className="text-[10px] font-mono tracking-wider text-zinc-400">
          SOURCING SCOPE
        </span>
      </div>

      {/* Main Title & Editorial Headline */}
      <div className="relative z-10 space-y-2.5 mb-8">
        <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-zinc-200">
          {t(category.subtitle)}
        </p>
        <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-sm">
          {t(category.description)}
        </p>
      </div>

      {/* Tags / Subcategories */}
      <div className="relative z-10 pt-4 border-t border-white/15">
        <div className="flex flex-wrap gap-2">
          {category.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-zinc-300"
            >
              {t(tag)}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
