import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Project Gallery — Our Work Across Chittenden County, VT",
  description:
    "Real photos from real jobs: roof replacements in Essex Junction, siding in Richmond, decks in Winooski. See Vermont Custom Exteriors' work across the county.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our work, all across Vermont"
        text="We've completed roof replacements in Essex Junction, added siding to homes in Richmond, and built decks in Winooski. Every photo below is from a real Vermont Custom Exteriors job site — no stock photos, ever."
        image="/images/gallery/project-07.jpg"
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <GalleryGrid />
        </div>
      </section>
      <Testimonials />
      <CtaBanner
        title="Like what you see? Your home could be next."
        text="Free consultations, honest quotes, and craftsmanship that shows — from the first shingle to the final walkthrough."
      />
    </>
  );
}
