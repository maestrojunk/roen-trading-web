'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CONTACT_DATA } from '@/data/siteContent';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Mail, Phone, MapPin, Building, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { submitInquiry, isSupabaseConfigured } from '@/lib/supabase';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CONTACT_DATA.inquiryCategories[0].id
  );
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (isSupabaseConfigured) {
      await submitInquiry({
        category: selectedCategory,
        email: formEmail,
        message: formMessage,
      });
    }

    const categoryObj = CONTACT_DATA.inquiryCategories.find(
      (c) => c.id === selectedCategory
    );
    const categoryLabel = categoryObj ? t(categoryObj.label) : selectedCategory;

    const mailSubject = encodeURIComponent(
      `[ROEN TRADING B2B 문의] ${categoryLabel}`
    );
    const mailBody = encodeURIComponent(
      `[ROEN TRADING B2B 공식 문의 접수]\n\n` +
        `• 문의 유형: ${categoryLabel}\n` +
        `• 회신 이메일: ${formEmail}\n\n` +
        `• 상세 문의 내용:\n${formMessage}\n\n` +
        `----------------------------------------\n` +
        `본 메일은 ROEN TRADING 공식 기업 홈페이지에서 발송되었습니다.`
    );

    // Direct mail transmission to jayden@roentrading.com
    window.location.href = `mailto:${CONTACT_DATA.email}?subject=${mailSubject}&body=${mailBody}`;

    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-28 md:py-36 bg-[#0a0a0c] border-t border-white/5">
      <Container>
        {/* Section Header */}
        <SectionTitle
          eyebrow={t(CONTACT_DATA.sectionTitle)}
          title={t(CONTACT_DATA.mainHeadline)}
          subtitle={t(CONTACT_DATA.subHeadline)}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Corporate Information & Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#c5a880] uppercase block mb-2">
                CORPORATE DIRECTORY
              </span>
              <h3 className="text-3xl font-light text-white tracking-tight">
                {CONTACT_DATA.companyName}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                {t(CONTACT_DATA.founderRole)} : {t(CONTACT_DATA.founderName)}
              </p>
            </div>

            {/* Official Contact Info List */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/[0.02]">
                <Mail size={18} className="text-[#c5a880] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="text-white hover:text-[#c5a880] transition-colors font-mono text-xs sm:text-sm font-medium"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/[0.02]">
                <Phone size={18} className="text-[#c5a880] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Direct Contact
                  </span>
                  <a
                    href={`tel:${CONTACT_DATA.phone}`}
                    className="text-white hover:text-[#c5a880] transition-colors font-mono text-xs sm:text-sm font-medium"
                  >
                    {CONTACT_DATA.phone}
                  </a>
                </div>
              </div>

              {/* Business Registration Number */}
              <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/[0.02]">
                <Building size={18} className="text-[#c5a880] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    사업자등록번호 (Business License)
                  </span>
                  <span className="text-white font-mono text-xs sm:text-sm font-medium">
                    {CONTACT_DATA.bizRegNumber}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form / Transmission Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-sm border border-white/10 bg-[#101116] p-8 md:p-10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                B2B PARTNERSHIP INQUIRY
              </span>
              <span className="text-xs font-mono text-[#c5a880]">RESPONSE WITHIN 24H</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Inquiry Category Selectors */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Inquiry Nature
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CONTACT_DATA.inquiryCategories.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-left p-3 rounded-sm border text-xs transition-all duration-200 ${
                        selectedCategory === cat.id
                          ? 'border-[#c5a880] bg-[#c5a880]/10 text-white font-medium'
                          : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {t(cat.label)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Your Business Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#c5a880] focus:outline-none transition-colors"
                />
              </div>

              {/* Message / Scope Input */}
              <div>
                <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Project / Partnership Details
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder={
                    t({
                      ko: '문의하실 품목, 예상 수량, 협력 요청 사항 등을 자유롭게 기재해 주세요.',
                      en: 'Describe your product categories of interest, projected volumes, or partnership details.',
                    })
                  }
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#c5a880] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-3 rounded-sm bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c5a880] hover:text-white disabled:opacity-50"
              >
                <span>
                  {isSubmitting
                    ? t({ ko: '전송 중...', en: 'Transmitting...' })
                    : t(CONTACT_DATA.ctaButton)}
                </span>
                <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {formSubmitted && (
                <div className="flex items-center gap-2 p-3 rounded-sm border border-[#c5a880]/30 bg-[#c5a880]/10 text-xs text-zinc-300 font-mono">
                  <CheckCircle2 size={16} className="text-[#c5a880] shrink-0" />
                  <span>
                    {t({
                      ko: '문의 접수가 완료되었습니다. 담당자가 확인 후 신속히 회신드리겠습니다.',
                      en: 'Your inquiry has been submitted. Our team will review and reply promptly.',
                    })}
                  </span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
