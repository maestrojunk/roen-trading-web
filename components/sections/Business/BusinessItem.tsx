'use client';

import React from 'react';
import { BusinessItemType } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface BusinessItemProps {
  item: BusinessItemType;
  isActive?: boolean;
  onVisible?: () => void;
}

export const BusinessItem: React.FC<BusinessItemProps> = ({ item, isActive }) => {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        'group relative py-12 md:py-16 transition-all duration-500 border-b border-white/10 last:border-b-0',
        isActive ? 'opacity-100' : 'opacity-40 lg:opacity-30'
      )}
    >
      {/* Index & Category tag */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm md:text-base font-mono font-medium text-[#c5a880]">
          {item.index}
        </span>
        <span className="text-zinc-600 font-mono text-xs">/</span>
        <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
          {t(item.subtitle)}
        </span>
      </div>

      {/* Main Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
        {t(item.title)}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-xl mb-6">
        {t(item.description)}
      </p>

      {/* Detail highlights */}
      <div className="space-y-2.5 pt-2">
        {item.details.map((detail, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
            <CheckCircle2 size={15} className="text-[#c5a880] mt-0.5 shrink-0" />
            <span className="font-light">{t(detail)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
