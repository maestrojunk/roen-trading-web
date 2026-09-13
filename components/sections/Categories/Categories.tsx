'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CategoryItem } from './CategoryItem';
import { CATEGORIES_DATA } from '@/data/categories';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

export const Categories: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="categories" className="relative w-full py-28 md:py-36 bg-[#070709] border-t border-white/5">
      <Container>
        {/* Section Header */}
        <SectionTitle
          eyebrow="PRODUCT DOMAIN"
          title="CURATED CATEGORIES"
          subtitle={
            t({
              ko: '소재의 촉감부터 완성도 높은 테일러링까지, ROEN TRADING이 취급하는 핵심 패션 및 라이프스타일 영역입니다.',
              en: 'From tactile yarn quality to refined tailoring, exploring the core apparel & lifestyle realms handled by ROEN TRADING.',
            })
          }
        />

        {/* Editorial Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {CATEGORIES_DATA.map((cat, index) => (
            <CategoryItem key={cat.id} category={cat} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
