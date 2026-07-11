import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { counties, towns } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Service Areas — Roofing & Exteriors Across Vermont",
  description:
    "Vermont Custom Exteriors serves Chittenden, Essex, Franklin, Addison, Orange, Grand Isle, Washington, and Lamoille counties from our home base in Williston, VT.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Proudly serving counties across Vermont"
        text="From our home base in Williston, we serve homeowners and businesses across eight Vermont counties. Being local means faster estimates, faster starts, and crews who understand exactly what Vermont weather does to a home."
        image="/images/gallery/project-02.jpg"
        crumbs={[{ label: "Service Areas" }]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Counties We Serve"
            title="Eight counties. One standard of work."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {counties.map((county, i) => (
              <Reveal key={county.slug} delay={(i % 4) * 0.08}>
                <Link
                  href={`/service-areas/${county.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-xl hover:shadow-pine/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ember/10 text-ember transition-colors duration-500 group-hover:bg-ember group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="font-display mt-4 text-xl font-semibold text-ink">
                    {county.name}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/60">
                    {county.intro}
                  </p>
                  <span className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-ember">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Town Spotlights" title="Local pages for local towns" />
            <div className="mt-8 flex flex-wrap gap-3">
              {towns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/service-areas/${t.slug}`}
                  className="rounded-full border border-line bg-paper px-6 py-3 text-sm font-bold text-ink/75 transition-all hover:border-ember hover:bg-ember hover:text-white"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaMap />
      <Testimonials />
      <CtaBanner
        title="Don't see your town? Just ask."
        text="If you're anywhere near our service area, give us a call — chances are we can help, or point you to someone trustworthy who can."
      />
    </>
  );
}
