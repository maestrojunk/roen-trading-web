'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src?: string;
  alt: string;
  aspectRatio?: string;
  placeholderLabel?: string;
  categoryTag?: string;
  className?: string;
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = 'aspect-[16/10]',
  placeholderLabel,
  categoryTag = 'EDITORIAL ARCHIVE',
  className,
  priority = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-sm border border-white/10 bg-[#121318]',
        aspectRatio,
        className
      )}
    >
      {src ? (
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        </div>
      ) : (
        /* High-End Editorial Placeholder */
        <div className="relative h-full w-full flex flex-col justify-between p-6 md:p-8 bg-gradient-to-br from-[#181920] via-[#121318] to-[#0c0d10] select-none">
          {/* Subtle architectural grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />

          {/* Top tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
              {categoryTag}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          </div>

          {/* Center visual indicator */}
          <div className="relative z-10 my-auto text-center py-6">
            <div className="inline-block mb-3 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-zinc-300 tracking-wider">
              TODO: {placeholderLabel || alt}
            </div>
            <p className="text-xs text-zinc-300 max-w-xs mx-auto font-light leading-relaxed">
              ROEN TRADING CURATED VISUAL
            </p>
          </div>

          {/* Bottom metadata */}
          <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono text-zinc-300">
            <span>ROEN TRADING ARCHIVE</span>
            <span className="text-zinc-300">B2B LOGISTICS & SOURCING</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};
