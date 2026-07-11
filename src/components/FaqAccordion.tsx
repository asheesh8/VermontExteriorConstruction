"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

export default function FaqAccordion({
  faqs,
  dark = false,
}: {
  faqs: { q: string; a: string }[];
  dark?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <Reveal key={faq.q} delay={Math.min(i * 0.06, 0.3)}>
            <div
              className={`overflow-hidden rounded-2xl border transition-colors ${
                dark
                  ? open
                    ? "border-ember/50 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                  : open
                    ? "border-ember/40 bg-paper shadow-sm"
                    : "border-line bg-paper"
              }`}
            >
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span
                  className={`text-sm font-bold sm:text-base ${dark ? "text-cream" : "text-ink"}`}
                >
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 rounded-full p-1.5 transition-all duration-300 ${
                    open
                      ? "rotate-45 bg-ember text-white"
                      : dark
                        ? "bg-white/10 text-cream"
                        : "bg-cream text-ink/60"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p
                      className={`px-6 pb-6 text-sm leading-relaxed sm:text-base ${
                        dark ? "text-cream/65" : "text-ink/65"
                      }`}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
