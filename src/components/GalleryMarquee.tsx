import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Two counter-scrolling film strips of real project photos. */
export default function GalleryMarquee() {
  const rowA = gallery.filter((g) => g.category !== "jobsite").slice(0, 8);
  const rowB = gallery.filter((g) => g.category !== "jobsite").slice(8, 16);
  const fill = gallery.slice(0, 8);
  const strip = (imgs: typeof gallery) => (imgs.length >= 6 ? imgs : [...imgs, ...fill]).slice(0, 8);

  return (
    <section className="grain overflow-hidden bg-pine-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Take a look at some of our work in Chittenden County"
            text="We've completed roof replacements in Essex Junction, added siding to homes in Richmond, and built decks in Winooski. Our work is visible all across the county."
            dark
          />
          <Reveal delay={0.2}>
            <Link
              href="/gallery"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-ember hover:border-ember"
            >
              View Full Gallery →
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="marquee-paused mt-14 space-y-5">
        {[
          { imgs: strip(rowA), anim: "animate-marquee" },
          { imgs: strip(rowB), anim: "animate-marquee-reverse" },
        ].map(({ imgs, anim }, row) => (
          <div key={row} className="relative flex overflow-hidden">
            <div className={`flex w-max gap-5 pr-5 ${anim}`}>
              {[...imgs, ...imgs].map((img, i) => (
                <Link
                  key={`${img.src}-${i}`}
                  href="/gallery"
                  className="group relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-96"
                  tabIndex={i >= imgs.length ? -1 : 0}
                  aria-hidden={i >= imgs.length}
                >
                  <Image
                    src={img.src}
                    alt={i >= imgs.length ? "" : img.alt}
                    fill
                    sizes="384px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-pine-deep/20 transition-opacity duration-500 group-hover:opacity-0" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
