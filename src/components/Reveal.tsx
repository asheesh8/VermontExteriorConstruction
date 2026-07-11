"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fade-and-rise reveal when the element scrolls into view. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.32, 0.9] }}
    >
      {children}
    </motion.div>
  );
}
