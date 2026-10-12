"use client";
import { motion, useReducedMotion } from "motion/react";

// Leaf client component: the only animated part of the hero.
// The text is still in the server-rendered HTML for crawlers.
export default function HeroHeadline({ lines }: { lines: string[] }) {
  const reduce = useReducedMotion();
  return (
    <h1 className="hero-title">
      {lines.map((line, i) => (
        <span className="line-mask" key={line}>
          <motion.span
            className="line"
            initial={reduce ? false : { y: "115%", rotate: 5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.1 + i * 0.14 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
