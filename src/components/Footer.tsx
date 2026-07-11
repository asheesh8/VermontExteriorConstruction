import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "./SocialIcons";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { counties } from "@/lib/areas";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-pine-deep text-cream">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Ready to protect your home from the top down?
            </h2>
            <p className="mt-2 max-w-xl text-cream/60">
              Free consultations, honest quotes, and fast turnaround — that&apos;s the Vermont
              Custom Exteriors promise.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-ember/25 transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-cream hover:text-pine"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Vermont Custom Exteriors logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full ring-1 ring-white/20"
            />
            <div>
              <p className="font-display font-semibold leading-tight">Vermont Custom Exteriors</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
                Est. 2025 · Williston, VT
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Whether you need a new roof, updated siding, or a custom deck to enjoy Vermont&apos;s
            beautiful seasons, we&apos;re here to bring your vision to life — with durable,
            expertly crafted exterior solutions.
          </p>
          <div className="mt-5 flex gap-2.5">
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
                className="rounded-full bg-white/8 p-2.5 text-cream/70 transition-colors hover:bg-ember hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-cream/70 transition-colors hover:text-ember"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-ember hover:text-gold">
                All services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {counties.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="text-cream/70 transition-colors hover:text-ember"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
              <span>
                <a href={site.phoneHref} className="block font-semibold text-cream hover:text-ember">
                  {site.phone}
                </a>
                <a href={site.emergencyPhoneHref} className="hover:text-ember">
                  Emergencies: {site.emergencyPhone}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-ember">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
              <span>
                {site.address.street},<br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-cream/40 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Vermont Custom Exteriors. All rights reserved. Licensed
            &amp; Insured.
          </p>
          <nav className="flex gap-5" aria-label="Footer">
            <Link href="/about-us" className="hover:text-cream">
              About
            </Link>
            <Link href="/gallery" className="hover:text-cream">
              Gallery
            </Link>
            <Link href="/contact-us" className="hover:text-cream">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
