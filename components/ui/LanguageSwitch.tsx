'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-black/30 p-0.5 backdrop-blur-md text-xs font-medium tracking-wider',
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage('kr' as any === 'kr' ? 'ko' : 'ko')}
        className={cn(
          'px-2.5 py-1 rounded-full transition-all duration-300',
          language === 'ko'
            ? 'bg-white text-black font-semibold shadow-sm'
            : 'text-zinc-400 hover:text-white'
        )}
        aria-label="한국어 선택"
      >
        KR
      </button>
      <span className="text-white/20 select-none">|</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2.5 py-1 rounded-full transition-all duration-300',
          language === 'en'
            ? 'bg-white text-black font-semibold shadow-sm'
            : 'text-zinc-400 hover:text-white'
        )}
        aria-label="Select English"
      >
        EN
      </button>
    </div>
  );
};
