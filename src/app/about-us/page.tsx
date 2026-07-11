import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, Hammer, MapPin, MessageSquareText, Target, UserCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import GalleryMarquee from "@/components/GalleryMarquee";
import CtaBanner from "@/components/CtaBanner";
import { counties } from "@/lib/areas";

export const metadata: Metadata = {
  title: "About Us — The Best Roofing Contractor in Vermont",
  description:
    "Vermont Custom Exteriors is your local roofing team in Chittenden County. Honest, quality roofing built for Vermont winters — learn what makes us different.",
};

const differentiators = [
  {
    icon: MapPin,
    title: "Local Knowledge",
    text: "We live here. We know what heavy snow does to shingles. We understand how spring rain finds its way into older roofs.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    text: "If you've ever hired a contractor who ghosted you halfway through a job, we feel your pain. That won't happen with us.",
  },
  {
    icon: UserCheck,
    title: "Owner-Involved",
    text: "Our owners are hands-on, on-site, and just a call away. No layers of managers. No getting passed around. You deal with people who care.",
  },
  {
    icon: Hammer,
    title: "Right Tools, Right Approach",
    text: "We use up-to-date tools, but we don't chase trends. We stick to what works — solid roof builds, done with care, cleaned up right.",
  },
  {
    icon: Compass,
    title: "Focus on You",
    text: "It's your home. You should feel good about what's going on up there. We take extra time to walk you through your options, show before-and-after photos, and leave your property better than we found it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Learn about the best roofing contractor in Vermont"
        text="We started this business with one goal: bring honesty, quality, and care back into roofing. In a state like Vermont, where winters hit hard and summer storms roll in fast, your roof can't be average. It has to hold up — season after season. That's what we build."
        image="/images/gallery/project-08.jpg"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Story */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <Reveal className="relative order-2 lg:order-1">
            <Image
              src="/images/gallery/project-01.jpg"
              alt="Drone view of a completed porch and roofing project in Chittenden County"
              width={960}
              height={540}
              className="rounded-3xl object-cover shadow-2xl shadow-pine/20"
            />
            <Image
              src="/images/gallery/project-11.jpg"
              alt="Vermont Custom Exteriors crew building a deck in winter"
              width={400}
              height={533}
              className="absolute -bottom-10 -right-4 hidden w-44 rotate-2 rounded-2xl border-4 border-cream object-cover shadow-xl sm:block lg:-right-10 lg:w-56"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our Story"
              title="Skilled hands. New name. Old-school values."
              text="Vermont Custom Exteriors is proud to be your local roofing team in Chittenden County. We may be new — with just over a year of experience — but we've already helped dozens of homeowners protect what matters most: their homes and families."
            />
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
                <p>
                  While we&apos;re new on paper, our team is made up of skilled workers who&apos;ve
                  been on rooftops across Vermont for years. What brought us together? A shared
                  frustration with rushed work, missed calls, and poor follow-up.
                </p>
                <p>
                  We wanted to be different. So we focus on things that matter:{" "}
                  <strong className="text-ink">we return every call</strong>,{" "}
                  <strong className="text-ink">
                    we explain everything — without fancy words or confusing terms
                  </strong>
                  , and <strong className="text-ink">we treat your home like it&apos;s ours</strong>.
                </p>
                <p>
                  From repairs in Winooski to full replacements in Jericho, we bring the same level
                  of care to every job, no matter how big or small. We know local homes — whether
                  it&apos;s an older home in Essex Junction that needs special attention or a newer
                  build in South Burlington needing stormproof shingles. Every roof has a story.
                  We&apos;re here to help protect it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grain relative bg-pine">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 text-ember">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-display mt-5 text-2xl font-semibold text-cream">Our Mission</h2>
                <p className="mt-3 leading-relaxed text-cream/65">
                  To deliver reliable, high-quality roofing services in Vermont that protect homes,
                  earn trust, and build lasting relationships with our clients.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 text-ember">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-display mt-5 text-2xl font-semibold text-cream">Our Vision</h2>
                <p className="mt-3 leading-relaxed text-cream/65">
                  To become the most dependable and referred roofing company in Chittenden County by
                  setting a new standard for service, communication, and craftsmanship in the
                  roofing industry.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What makes us the best */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="What Makes Us Different"
            title="What makes us the best roofing contractor in Vermont?"
            text="Lots of companies talk about being the best. We're here to show it — through the work we do, the people we hire, and the promises we keep."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-3xl border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember transition-colors duration-500 group-hover:bg-ember group-hover:text-white">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{d.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <Link
                href="/contact-us"
                className="grain relative flex h-full min-h-48 flex-col justify-between overflow-hidden rounded-3xl bg-pine p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <p className="font-display text-xl font-semibold leading-snug text-cream">
                  If your roof is leaking, aging, or just needs a second look — reach out.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ember">
                  Contact Us →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Areas We Serve"
            title="Areas we serve in Vermont"
            text="We focus our services in and around Chittenden County. That means faster service, better follow-ups, and a strong understanding of local homes and weather patterns."
            center
          />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {counties.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.06}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="inline-block rounded-full border border-line bg-cream px-5 py-2.5 text-sm font-bold text-ink/75 transition-all hover:border-ember hover:bg-ember hover:text-white"
                >
                  {c.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GalleryMarquee />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
