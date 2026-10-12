'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Fade-up on scroll: opacity 0→1, y 24→0, 0.7s ease-out cubic. Reduced motion handled by MotionConfig. */
export default function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
}
