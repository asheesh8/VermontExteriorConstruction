import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import GalleryMarquee from "@/components/GalleryMarquee";
import Testimonials from "@/components/Testimonials";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { homeFaqs } from "@/lib/site";
import { services, coreServiceSlugs } from "@/lib/services";

const welcomePoints = [
  "Local Exterior Experts",
  "Complete Roofing & Exterior Services",
  "Custom Designs for Vermont Homes",
  "Trusted Across Chittenden County",
  "Licensed & Insured Team",
  "Energy-Efficient, Weather-Resistant Options",
  "Customer-First Service Philosophy",
  "Free Consultations & Honest Quotes",
];

export default function Home() {
  const coreServices = coreServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      <Hero />
      <StatsBar />

      {/* Welcome / intro */}
      <section className="overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <SectionHeading
              eyebrow="Welcome to Vermont Custom Exteriors"
              title="Your trusted roofer & exterior contractor in Chittenden County"
              text="Whether you need a new roof, updated siding, or a custom deck to enjoy Vermont's beautiful seasons, we're here to bring your vision to life. We take pride in helping local homeowners and businesses protect and enhance their properties with durable, expertly crafted exterior solutions."
            />
            <Reveal delay={0.15}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {welcomePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-semibold text-ink/80">
                    <span className="mt-0.5 rounded-full bg-ember/15 p-1 text-ember">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/about-us"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-bold text-cream transition-all hover:bg-pine-mid hover:gap-3"
              >
                More About Us →
              </Link>
            </Reveal>
          </div>

          {/* Photo collage */}
          <Reveal delay={0.2} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/gallery/project-05.jpg"
                alt="Roofer installing architectural shingles on a Vermont home"
                width={720}
                height={960}
                className="mt-10 rounded-3xl object-cover shadow-xl shadow-pine/15"
              />
              <Image
                src="/images/gallery/project-10.jpg"
                alt="Finished covered porch with composite decking"
                width={720}
                height={960}
                className="rounded-3xl object-cover shadow-xl shadow-pine/15"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-line bg-paper px-6 py-4 shadow-xl">
              <span className="font-display text-3xl font-bold text-ember">EST.</span>
              <span className="font-display text-3xl font-bold text-ink">2025</span>
              <span className="max-w-32 text-xs font-semibold leading-tight text-ink/60">
                Decades of combined crew experience
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Our Services"
              title="Expert roofing and exterior services"
              text="We offer a wide range of roofing and exterior services, designed for Vermont's weather and built to last. Our experienced roofers, deck builders, and siding pros pay attention to every detail, no matter the size of the job."
            />
            <Reveal delay={0.2}>
              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-ember hover:bg-ember hover:text-white"
              >
                All Services →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSection />
      <GalleryMarquee />
      <Testimonials />
      <ServiceAreaMap />

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            text="Straight answers to the questions Chittenden County homeowners ask us most."
            center
          />
          <div className="mt-12">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
