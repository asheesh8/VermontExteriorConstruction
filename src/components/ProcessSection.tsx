"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { process } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProcessSection({
  steps = process,
  eyebrow = "How We Help",
  title = "Our Roofer and Exterior Contractor Process",
  text,
}: {
  steps?: { title: string; text: string }[];
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        <div ref={ref} className="relative mt-14">
          {/* Animated connecting line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-line sm:block lg:left-0 lg:top-7 lg:h-px lg:w-full" />
          <motion.div
            style={reduce ? undefined : { scaleY: lineScale, scaleX: lineScale }}
            className="absolute left-6 top-0 hidden h-full w-px origin-top bg-ember sm:block lg:left-0 lg:top-7 lg:h-px lg:w-full lg:origin-left"
          />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.15} className="relative sm:pl-16 lg:pl-0">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ember bg-cream font-display text-lg font-bold text-ember sm:absolute sm:-left-1 sm:top-0 lg:relative lg:left-0 lg:mb-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mt-4 text-xl font-semibold text-ink sm:mt-0 lg:mt-0">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/65">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
