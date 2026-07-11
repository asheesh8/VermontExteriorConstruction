"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone, ShieldCheck, Star } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  const [ended, setEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax: content drifts up and fades as you scroll past the hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-pine-deep"
    >
      {/* Background media: drone time-lapse that holds on its final frame */}
      <motion.div style={reduce ? undefined : { scale: mediaScale }} className="absolute inset-0">
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ${
            ended ? "opacity-0" : "opacity-100"
          }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          onEnded={() => setEnded(true)}
          aria-hidden="true"
        >
          <source src="/video/hero-timelapse.mp4" type="video/mp4" />
        </video>
        {/* Final frame hold — crossfades in as the video ends */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            ended ? "opacity-100" : "opacity-0"
          } ${ended && !reduce ? "animate-kenburns" : ""}`}
          style={{ backgroundImage: "url(/video/hero-endframe.jpg)" }}
        />
      </motion.div>

      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/85 via-pine-deep/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/90 via-transparent to-pine-deep/30" />

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:px-8"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-ember sm:text-sm"
        >
          <span className="inline-block h-px w-10 bg-ember" />
          Roofing · Siding · Decks · Gutters
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          Expert Roofer in{" "}
          <span className="text-ember">Chittenden County</span>, Vermont
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Your trusted local partner for roofing, siding, decks, and gutters. Honest work, fair
          prices, and reliable results — whether it&apos;s a leaking roof in Jericho, a gutter
          repair in Milton, or a new deck in Shelburne, we treat every project like it&apos;s our
          own.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-bold text-white shadow-xl shadow-ember/30 transition-all hover:scale-[1.03] hover:bg-ember-deep sm:text-base"
          >
            Get Started
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 bg-white/5 px-7 py-4 text-sm font-bold text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-pine sm:text-base"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold text-cream/70 sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-ember" />
            Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold text-gold" />
            5.0 on Google
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
            Free Consultations
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
            Locally Owned · Williston, VT
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/60">
        <ChevronDown className="animate-scrollcue h-6 w-6" />
      </div>
    </section>
  );
}
