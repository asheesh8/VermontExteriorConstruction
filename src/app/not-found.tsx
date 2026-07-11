import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80vh] items-center bg-pine-deep">
      <div className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
        <p className="font-display text-8xl font-bold text-ember">404</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-cream sm:text-4xl">
          This page must have blown off in the last storm.
        </h1>
        <p className="mt-4 text-cream/65">
          The page you&apos;re looking for doesn&apos;t exist — but our crew is easy to find.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-ember px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
          >
            Back to Home
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-cream hover:text-pine"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
