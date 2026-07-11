"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-line/60 bg-paper/90 shadow-[0_1px_20px_rgba(22,33,28,0.06)] backdrop-blur-xl"
          : "bg-gradient-to-b from-pine-deep/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Vermont Custom Exteriors home">
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 rounded-full ring-1 ring-black/10 sm:h-11 sm:w-11"
            priority
          />
          <span className="leading-tight">
            <span
              className={`font-display block text-[15px] font-semibold tracking-tight sm:text-base ${
                solid ? "text-ink" : "text-cream"
              }`}
            >
              Vermont Custom Exteriors
            </span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${
                solid ? "text-ember" : "text-cream/70"
              }`}
            >
              Roofing · Siding · Decks
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    solid
                      ? "text-ink/80 hover:bg-pine/5 hover:text-ink"
                      : "text-cream/85 hover:bg-white/10 hover:text-white"
                  } ${pathname.startsWith("/services") ? (solid ? "text-ember-deep" : "text-white") : ""}`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="grid w-[540px] grid-cols-2 gap-1 rounded-2xl border border-line bg-paper p-3 shadow-2xl shadow-pine/10">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-xl px-4 py-2.5 transition-colors hover:bg-cream"
                      >
                        <span className="block text-sm font-semibold text-ink">{s.title}</span>
                        <span className="block text-xs text-ink/50">{s.group}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  solid
                    ? "text-ink/80 hover:bg-pine/5 hover:text-ink"
                    : "text-cream/85 hover:bg-white/10 hover:text-white"
                } ${pathname === link.href ? (solid ? "text-ember-deep" : "text-white underline decoration-ember decoration-2 underline-offset-8") : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all sm:flex ${
              solid
                ? "bg-pine text-cream hover:bg-pine-mid"
                : "bg-ember text-white shadow-lg shadow-ember/30 hover:bg-ember-deep"
            }`}
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`rounded-full p-2.5 transition-colors lg:hidden ${
              solid ? "bg-pine/5 text-ink" : "bg-white/10 text-cream"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-4" aria-label="Mobile">
              {links.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServices(!mobileServices)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink"
                      aria-expanded={mobileServices}
                    >
                      Services
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <Link
                            href="/services"
                            className="block rounded-lg py-2.5 pl-8 pr-4 text-sm font-semibold text-ember-deep"
                          >
                            All Services →
                          </Link>
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="block rounded-lg py-2.5 pl-8 pr-4 text-sm font-medium text-ink/70"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-ink"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-3.5 text-base font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
