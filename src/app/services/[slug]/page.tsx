import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProcessSection from "@/components/ProcessSection";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Chittenden County, VT`,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.group === service.group && s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.group}
        title={`${service.title} in Chittenden County, VT`}
        text={service.hero}
        image={service.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      {/* What's included */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <SectionHeading eyebrow="What's Included" title={service.includesTitle} text={service.includesIntro} />
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base font-semibold text-ink/80">
                    <span className="mt-0.5 rounded-full bg-ember/15 p-1.5 text-ember">
                      <Check className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-ember/25 transition-transform hover:scale-[1.03]"
                >
                  Get a Free Estimate →
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:border-pine hover:bg-pine hover:text-cream"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            {service.image ? (
              <Image
                src={service.image}
                alt={`${service.title} by Vermont Custom Exteriors`}
                width={960}
                height={1200}
                className="max-h-[620px] w-full rounded-3xl object-cover shadow-2xl shadow-pine/20"
              />
            ) : (
              <div className="grain relative flex min-h-96 items-center justify-center rounded-3xl bg-pine p-10">
                <p className="font-display text-center text-3xl font-semibold leading-snug text-cream">
                  Free consultations.
                  <br />
                  <span className="text-ember">Honest quotes.</span>
                  <br />
                  No upselling.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="grain relative bg-pine">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="The Benefits"
            title={`Why ${service.title.toLowerCase()} pays off`}
            dark
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 0.1}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-ember/50">
                  <span className="font-display text-4xl font-bold text-ember/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-semibold text-cream">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        eyebrow="How We Help"
        title={`Our ${service.title.toLowerCase()} process`}
        text="Organized, clear, and stress-free. You always know what is happening and why."
      />

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="FAQ"
              title={`${service.title} questions, answered`}
              center
            />
            <div className="mt-12">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">
              Related Services
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-bold text-ink/75 transition-all hover:border-ember hover:bg-ember hover:text-white"
                >
                  {r.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Testimonials />
      <CtaBanner
        title="Contact us for a free estimate"
        text="We respond quickly, offer free estimates, and provide personalized consultations to help you get started. Whether it's a small job or a major project, we're here to help."
      />
    </>
  );
}
