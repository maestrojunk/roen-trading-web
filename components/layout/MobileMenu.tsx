'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeSection }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0c]/98 backdrop-blur-2xl md:hidden"
        >
          {/* Top Bar */}
          <div className="flex h-20 items-center justify-between px-6 border-b border-white/10">
            <span className="text-sm font-semibold tracking-widest text-white">ROEN TRADING</span>
            <div className="flex items-center gap-4">
              <LanguageSwitch />
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="메뉴 닫기"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-1 flex-col justify-center px-8 py-10 space-y-6">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1, duration: 0.4 }}
                  className="flex items-baseline justify-between py-2 border-b border-white/5 group"
                >
                  <span
                    className={`text-2xl font-light tracking-tight transition-colors ${
                      isActive ? 'text-white font-normal' : 'text-zinc-400 group-hover:text-white'
                    }`}
                  >
                    {t(item.label)}
                  </span>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400">
                    0{index + 1}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Bottom Footer info */}
          <div className="px-8 pb-10 border-t border-white/5 pt-6 text-xs text-zinc-500 font-mono">
            <p>© 2026 ROEN TRADING. All Rights Reserved.</p>
            <p className="mt-1">Connecting Products, Markets and People.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
