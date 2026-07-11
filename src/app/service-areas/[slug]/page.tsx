import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessSection from "@/components/ProcessSection";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { areas, getArea } from "@/lib/areas";
import { coreServiceSlugs, services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `${area.headline}`,
    description: area.intro,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const coreServices = coreServiceSlugs
    .map((s) => services.find((sv) => sv.slug === s)!)
    .filter(Boolean)
    .slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={area.kind === "county" ? "Service Area" : "Town Spotlight"}
        title={area.headline}
        text={area.intro}
        image="/images/gallery/project-01.jpg"
        crumbs={[{ label: "Service Areas", href: "/service-areas" }, { label: area.name }]}
      />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8 lg:py-28">
          <div>
            <SectionHeading
              eyebrow={`Serving ${area.name}`}
              title={`Roofing & exteriors built for ${area.name}`}
            />
            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
                {area.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="grain relative overflow-hidden rounded-3xl bg-pine p-8">
              <h3 className="font-display text-xl font-semibold text-cream">
                {area.kind === "county" ? `Towns we serve in ${area.name}` : "Quick contact"}
              </h3>
              {area.towns ? (
                <ul className="mt-5 grid grid-cols-2 gap-2.5">
                  {area.towns.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-cream/75">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-ember" />
                      {t}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-cream/65">
                  Free consultations, honest quotes, and fast turnaround — right in your
                  neighborhood.
                </p>
              )}
              <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-cream hover:text-pine"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services in this area */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="What We Do Here"
            title={`Services offered in ${area.name}`}
            text="Each service is designed to address the unique needs of local homes. Our work focuses on durability, long-term value, and results you can trust."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        eyebrow="How We Help"
        title={`How we deliver top-quality results in ${area.name}`}
        text="Our process keeps everything organized, clear, and stress-free. You always know what is happening and why."
      />

      <section className="grain relative bg-pine">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title={`Common questions from ${area.name} homeowners`}
            dark
            center
          />
          <div className="mt-12">
            <FaqAccordion faqs={area.faqs} dark />
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">
            Nearby Service Areas
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {areas
              .filter((a) => a.slug !== area.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-bold text-ink/75 transition-all hover:border-ember hover:bg-ember hover:text-white"
                >
                  {a.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner
        title={`Need a roofer in ${area.name}? Let's talk.`}
        text="We respond quickly, offer free estimates, and provide personalized consultations to help you get started."
      />
    </>
  );
}
