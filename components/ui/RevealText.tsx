'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
            delay,
          },
        },
      }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
};
