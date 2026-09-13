'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: number | null;
  fallbackDisplay?: string;
  suffix?: string;
  duration?: number;
  isPending?: boolean;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  fallbackDisplay = '--+',
  suffix = '+',
  duration = 1.6,
  isPending = false,
}) => {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && !hasAnimated && value !== null && !isPending) {
      setHasAnimated(true);
      const startTime = performance.now();
      const endValue = value;

      const animate = (currentTime: number) => {
        const elapsedTime = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsedTime / duration, 1);
        // easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeProgress * endValue);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, hasAnimated, value, duration, isPending]);

  // If data is pending or not verified, strictly show fallback '--+' as per Rule 16
  if (value === null || isPending) {
    return (
      <span ref={ref} className="font-light tracking-tight text-white select-none">
        {fallbackDisplay}
      </span>
    );
  }

  return (
    <span ref={ref} className="font-light tracking-tight text-white select-none">
      {count}
      {suffix}
    </span>
  );
};
