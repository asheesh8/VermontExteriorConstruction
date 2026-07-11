"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/site";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) => (i === null ? null : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2.5">
        {galleryCategories.map((c) => (
          <button
            key={c.key}
            onClick={() => {
              setFilter(c.key);
              setLightbox(null);
            }}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
              filter === c.key
                ? "bg-pine text-cream shadow-md"
                : "border border-line bg-paper text-ink/60 hover:border-ember/50 hover:text-ink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Masonry via CSS columns */}
      <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(i)}
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-ember/50"
              aria-label={`Open photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="p-5 text-left text-sm font-semibold text-cream">{img.alt}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && images[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-pine-deep/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              onClick={close}
              aria-label="Close photo viewer"
              className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-cream transition-colors hover:bg-ember"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-cream transition-colors hover:bg-ember sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-cream transition-colors hover:bg-ember sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={images[lightbox].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={images[lightbox].w}
                height={images[lightbox].h}
                sizes="90vw"
                className="max-h-[82vh] w-auto rounded-xl object-contain"
                priority
              />
              <figcaption className="mt-4 text-center text-sm text-cream/70">
                {images[lightbox].alt}
                <span className="ml-3 text-cream/40">
                  {lightbox + 1} / {images.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
