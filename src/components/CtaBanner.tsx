import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaBanner({
  title = "If your roof is leaking, aging, or just needs a second look — reach out.",
  text = "We respond quickly, offer free estimates, and provide personalized consultations to help you get started.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/gallery/project-02.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-pine-deep/85" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream/70 sm:text-lg">{text}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full bg-ember px-8 py-4 text-base font-bold text-white shadow-xl shadow-ember/30 transition-transform hover:scale-[1.04]"
            >
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/5 px-8 py-4 text-base font-bold text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-pine"
            >
              Get a Free Estimate
            </Link>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Free consultations · No upselling · {site.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
