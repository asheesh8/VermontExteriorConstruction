import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/components/SocialIcons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Free Estimates in Chittenden County, VT",
  description:
    "Ready to upgrade your roof, siding, or outdoor living space? Call 802-282-2912 or send us a message. Every estimate is free, every job backed by honest service.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    lines: [
      { label: site.phone, href: site.phoneHref },
      { label: `Emergencies: ${site.emergencyPhone}`, href: site.emergencyPhoneHref },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [{ label: site.email, href: `mailto:${site.email}` }],
  },
  {
    icon: MapPin,
    title: "Office",
    lines: [
      {
        label: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
      },
    ],
  },
  {
    icon: Clock,
    title: "Work Hours",
    lines: [{ label: site.hours }, { label: "Phone, email, or visit us at our office" }],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's get started on your project"
        text="Ready to upgrade your roof, siding, or outdoor living space? We make it easy to get started. Fill out the form, give us a call, or email us directly — every estimate is free, and every job is backed by quality craftsmanship and honest service."
        image="/images/gallery/project-24.jpg"
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8 lg:py-28">
          {/* Contact info */}
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Talk to a real local team"
              text="For any inquiries or to learn more about Vermont Custom Exteriors, please reach out. Our professional team is ready to provide a prompt response."
            />
            <div className="mt-9 space-y-4">
              {contactCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-line bg-paper p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                        {card.title}
                      </h3>
                      {card.lines.map((line) =>
                        "href" in line && line.href ? (
                          <a
                            key={line.label}
                            href={line.href}
                            className="block text-sm font-bold text-ink hover:text-ember"
                          >
                            {line.label}
                          </a>
                        ) : (
                          <p key={line.label} className="text-sm font-semibold text-ink/75">
                            {line.label}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <div className="mt-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">
                  Social Media
                </h3>
                <p className="mt-1.5 text-sm text-ink/60">
                  To learn more about us, connect with our social media pages.
                </p>
                <div className="mt-4 flex gap-2.5">
                  {[
                    { href: site.social.facebook, icon: FacebookIcon, label: "Facebook" },
                    { href: site.social.x, icon: XIcon, label: "X (Twitter)" },
                    { href: site.social.instagram, icon: InstagramIcon, label: "Instagram" },
                    { href: site.social.youtube, icon: YoutubeIcon, label: "YouTube" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="rounded-full border border-line bg-paper p-3 text-ink/60 transition-all hover:border-ember hover:bg-ember hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-line bg-paper p-7 shadow-xl shadow-pine/5 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Request your free estimate
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                Tell us a little about your project and we&apos;ll get back to you promptly —
                usually the same business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
