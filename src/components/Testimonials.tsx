"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { site, testimonials } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="Testimonials"
              title="Hear what our clients in Chittenden County have to say"
              text="From South Burlington to Jericho, customers appreciate our clear communication, clean work sites, and dependable results. Many come back for future projects."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-paper p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4285F4]/10 font-display text-xl font-bold text-[#4285F4]">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-lg font-bold text-ink">5.0</span>
                    <span className="flex" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </span>
                  </div>
                  <p className="text-xs text-ink/55">
                    Based on {site.googleReviewCount} Google reviews
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div
              className="relative"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Quote className="absolute -top-6 left-8 z-10 h-12 w-12 rounded-2xl bg-ember p-2.5 text-white shadow-lg shadow-ember/30" />
              <div className="overflow-hidden rounded-3xl border border-line bg-paper p-8 pt-12 shadow-sm sm:p-10 sm:pt-14">
                <AnimatePresence mode="wait">
                  <motion.figure
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="flex gap-1" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <blockquote className="mt-5 min-h-40 text-base leading-relaxed text-ink/80 sm:text-lg">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pine font-display text-base font-bold uppercase text-cream">
                        {t.name[0]}
                      </span>
                      <span>
                        <span className="block text-sm font-bold capitalize text-ink">
                          {t.name}
                        </span>
                        <span className="block text-xs text-ink/50">
                          Google review · {t.date}
                        </span>
                      </span>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to review ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          i === index ? "w-8 bg-ember" : "w-2 bg-line hover:bg-ember/40"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous review"
                      className="rounded-full border border-line p-2.5 text-ink/60 transition-colors hover:border-ember hover:text-ember"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next review"
                      className="rounded-full border border-line p-2.5 text-ink/60 transition-colors hover:border-ember hover:text-ember"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
