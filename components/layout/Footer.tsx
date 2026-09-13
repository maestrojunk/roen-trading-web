'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { FOOTER_DATA } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/10 bg-[#08080a] py-12 md:py-16 text-zinc-300">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand & Notice */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
                {FOOTER_DATA.brandName}
              </span>
              <span className="text-xs text-zinc-300">|</span>
              <span className="text-xs tracking-wider text-zinc-300">
                {t(FOOTER_DATA.notice)}
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-mono">{FOOTER_DATA.copyright}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-300">
            {FOOTER_DATA.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {t(link.label)}
              </a>
            ))}
            <a
              href="#about"
              className="hover:text-white transition-colors duration-200 ml-auto md:ml-0"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
