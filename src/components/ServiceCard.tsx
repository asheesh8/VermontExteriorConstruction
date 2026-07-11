import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import Reveal from "./Reveal";

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 0.12} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-pine/10"
      >
        <div className="relative h-52 overflow-hidden">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-108"
            />
          ) : (
            <div className="grain relative flex h-full items-center justify-center bg-pine">
              <span className="font-display text-5xl font-semibold text-cream/15">
                {service.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/60 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-pine backdrop-blur">
            {service.group}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display flex items-start justify-between gap-3 text-xl font-semibold text-ink">
            {service.title}
            <span className="mt-1 rounded-full bg-cream p-1.5 text-ember transition-all duration-300 group-hover:bg-ember group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </h3>
          <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/65">
            {service.short}
          </p>
          <span className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-ember">
            Read more
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
