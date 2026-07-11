import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Roofing & Exterior Services in Chittenden County, VT",
  description:
    "Roof replacement, roof repair, roof coating, siding, gutters, decks, and remodeling — designed for Vermont's weather and built to last. Free estimates.",
};

const groups = [
  "Roofing",
  "Siding",
  "Gutters",
  "Decks & Outdoor",
  "Remodeling & Additions",
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Roofing & exterior services built for Vermont"
        text="We offer a wide range of roofing and exterior services, designed for Vermont's weather and built to last. Our experienced roofers, deck builders, and siding pros pay attention to every detail, no matter the size of the job."
        image="/images/gallery/project-09.jpg"
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl space-y-16 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          {groups.map((group) => {
            const groupServices = services.filter((s) => s.group === group);
            if (!groupServices.length) return null;
            return (
              <div key={group}>
                <SectionHeading eyebrow={group} title={group} />
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupServices.map((service, i) => (
                    <ServiceCard key={service.slug} service={service} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProcessSection />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
