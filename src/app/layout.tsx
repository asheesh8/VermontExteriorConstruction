import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChromeGate from "@/components/ChromeGate";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vermontcustomexteriors.com"),
  title: {
    default: "Vermont Custom Exteriors | Expert Roofer in Chittenden County, VT",
    template: "%s | Vermont Custom Exteriors",
  },
  description:
    "Licensed & insured roofing, siding, deck, and gutter contractor serving Chittenden County and surrounding Vermont counties. Free consultations, honest quotes, fast turnaround. Call 802-282-2912.",
  keywords: [
    "roofer Chittenden County",
    "roofing contractor Vermont",
    "roof replacement Burlington VT",
    "siding replacement Vermont",
    "deck installation Chittenden County",
    "gutter installation Vermont",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Vermont Custom Exteriors | Expert Roofer in Chittenden County, VT",
    description:
      "Your trusted local partner for roofing, siding, decks, and gutters — honest work, fair prices, reliable results.",
    images: [{ url: "/video/hero-poster.jpg", width: 1920, height: 1080 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  image: "https://vermontcustomexteriors.com/video/hero-poster.jpg",
  telephone: site.phone,
  email: site.email,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(site.googleReviewCount),
  },
  areaServed: [
    "Chittenden County VT",
    "Essex County VT",
    "Franklin County VT",
    "Addison County VT",
    "Orange County VT",
    "Grand Isle County VT",
    "Washington County VT",
    "Lamoille County VT",
  ],
  sameAs: [site.social.facebook, site.social.instagram, site.social.x, site.social.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ChromeGate header={<Header />} footer={<Footer />}>
          {children}
        </ChromeGate>
      </body>
    </html>
  );
}
