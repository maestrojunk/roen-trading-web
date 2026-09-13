'use client';

import React, { useState } from 'react';
import { NAV_ITEMS } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const { isScrolled, activeSection } = useScrollAnimation(60);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 will-change-transform',
          isScrolled
            ? 'bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/20'
            : 'bg-transparent py-6 md:py-8'
        )}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="ROEN TRADING 홈으로 이동"
          >
            <span className="text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase transition-colors group-hover:text-zinc-300">
              ROEN
            </span>
            <span className="text-xs sm:text-sm font-light tracking-[0.3em] text-zinc-400 uppercase">
              TRADING
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="메인 내비게이션">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 relative py-1',
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  )}
                >
                  {t(item.label)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Switch & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <LanguageSwitch className="hidden sm:inline-flex" />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-zinc-300 hover:text-white transition-colors lg:hidden focus:outline-none"
              aria-label="모바일 메뉴 열기"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
