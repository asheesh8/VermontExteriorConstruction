"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/site";

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (inView) setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-cream sm:text-5xl">
      {display.toFixed(decimals)}
      <span className="text-ember">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="grain relative border-y border-white/10 bg-pine">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/50 sm:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
