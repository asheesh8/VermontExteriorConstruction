"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { counties } from "@/lib/areas";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Stylized Vermont silhouette with animated pins for each county we serve.
 * Not a survey-grade map — a recognizable, on-brand illustration.
 */
export default function ServiceAreaMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="grain relative overflow-hidden bg-pine">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly serving counties across Vermont"
          text="We focus our services in and around Chittenden County. That means faster service, better follow-ups, and a strong understanding of local homes and weather patterns."
          dark
          center
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Vermont illustration */}
          <Reveal className="mx-auto w-full max-w-md">
            <div className="relative">
              <svg
                viewBox="0 0 100 130"
                className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                role="img"
                aria-label="Stylized map of Vermont showing our service area pins"
              >
                {/* Simplified Vermont outline */}
                <path
                  d="M8 4 L86 1 L83 12 L86 22 L82 34 L85 46 L81 58 L84 72 L80 86 L83 100 L79 114 L81 124 L38 128 L36 118 L30 106 L31 94 L25 84 L26 72 L20 62 L22 50 L15 40 L17 28 L10 16 Z"
                  fill="var(--pine-mid)"
                  stroke="var(--ember)"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                {/* Ridge line texture suggesting the Green Mountains */}
                <path
                  d="M52 8 L50 30 L54 52 L50 74 L54 96 L51 122"
                  fill="none"
                  stroke="var(--cream)"
                  strokeWidth="0.4"
                  strokeDasharray="2 3"
                  opacity="0.25"
                />
                {counties.map((c) => (
                  <g
                    key={c.slug}
                    transform={`translate(${c.pin.x * 0.92 + 4}, ${c.pin.y * 1.24 + 3})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setActive(c.slug)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <motion.circle
                      r={active === c.slug ? 4.5 : 2.6}
                      fill={active === c.slug ? "var(--ember)" : "var(--gold)"}
                      animate={{ r: active === c.slug ? 4.5 : [2.6, 3.4, 2.6] }}
                      transition={
                        active === c.slug
                          ? { duration: 0.2 }
                          : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                      }
                    />
                    <circle r="1.1" fill="var(--pine-deep)" />
                  </g>
                ))}
              </svg>
              {/* Home-base badge */}
              <div className="absolute left-1/2 top-full mt-2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-pine-deep/90 px-4 py-2 text-xs font-bold text-cream backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-ember" />
                Based in Williston, VT
              </div>
            </div>
          </Reveal>

          {/* County cards */}
          <div className="grid grid-cols-2 gap-3">
            {counties.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.07}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  onMouseEnter={() => setActive(c.slug)}
                  onMouseLeave={() => setActive(null)}
                  className={`group flex items-center justify-between gap-2 rounded-2xl border px-5 py-4 transition-all duration-300 ${
                    active === c.slug
                      ? "border-ember/60 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.03] hover:border-ember/40 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="text-sm font-bold text-cream sm:text-base">{c.name}</span>
                  <span className="text-ember transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
