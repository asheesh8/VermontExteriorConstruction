import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="grain relative overflow-hidden bg-pine-deep pt-16 sm:pt-20">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pine-deep/40 via-pine-deep/60 to-pine-deep" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        {crumbs && (
          <Reveal y={12}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-cream/50">
                <li>
                  <Link href="/" className="hover:text-ember">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3 w-3" />
                    {c.href ? (
                      <Link href={c.href} className="hover:text-ember">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-cream/80">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}
        <Reveal>
          {eyebrow && (
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-ember">
              <span className="inline-block h-px w-8 bg-ember" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {text && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {text}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
