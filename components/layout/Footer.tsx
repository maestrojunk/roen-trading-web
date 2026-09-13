'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { FOOTER_DATA, CONTACT_DATA } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/10 bg-[#08080a] py-12 md:py-16 text-zinc-300">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Brand & Corporate Business Registration Info */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold tracking-[0.2em] text-white uppercase">
                {FOOTER_DATA.brandName}
              </span>
              <span className="text-xs text-zinc-600">|</span>
              <span className="text-xs tracking-wider text-zinc-400">
                {t(FOOTER_DATA.notice)}
              </span>
            </div>

            {/* Official Legal Details */}
            <div className="space-y-1.5 text-xs text-zinc-400 font-mono">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-300">
                <span>상호명: {CONTACT_DATA.companyName}</span>
                <span className="text-zinc-700">|</span>
                <span>대표자: {t(CONTACT_DATA.founderName)}</span>
                <span className="text-zinc-700">|</span>
                <span className="text-white font-medium">사업자등록번호: {CONTACT_DATA.bizRegNumber}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-400">
                <span>공식 이메일: <a href={`mailto:${CONTACT_DATA.email}`} className="text-zinc-300 hover:text-white transition-colors">{CONTACT_DATA.email}</a></span>
                <span className="text-zinc-700">|</span>
                <span>대표전화: <a href={`tel:${CONTACT_DATA.phone}`} className="text-zinc-300 hover:text-white transition-colors">{CONTACT_DATA.phone}</a></span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-600 font-mono pt-1">
              {FOOTER_DATA.copyright}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
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
              className="hover:text-white transition-colors duration-200"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
