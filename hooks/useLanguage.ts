'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizedString } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (content: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko');

  useEffect(() => {
    const saved = localStorage.getItem('roen_language') as Language;
    if (saved === 'ko' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('roen_language', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  const t = (content: LocalizedString): string => {
    if (!content) return '';
    return content[language] || content.en || content.ko || '';
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage, toggleLanguage, t } },
    children
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
