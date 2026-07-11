export type Area = {
  slug: string;
  name: string;
  kind: "county" | "town";
  headline: string;
  intro: string;
  body: string[];
  towns?: string[];
  faqs: { q: string; a: string }[];
  /** Approximate pin position on the stylized Vermont map, in % of the SVG viewBox */
  pin: { x: number; y: number };
};

const sharedFaq = (place: string) => [
  {
    q: `How long does a typical roofing project take in ${place}?`,
    a: `Most roofing projects take one to several days depending on the size of the roof and the materials being installed. Weather conditions can influence timing, but we plan carefully to complete work efficiently and safely. During your consultation, we provide a clear timeline so you always know what to expect.`,
  },
  {
    q: `Do you offer emergency roof repair in ${place}?`,
    a: `Yes. Vermont weather can cause sudden leaks or wind damage. We respond quickly — often within 24 hours — to stabilize your home and prevent further issues.`,
  },
  {
    q: `Do you offer free estimates in ${place}?`,
    a: `Always. We provide free consultations, explain your options, and give you a clear estimate upfront. No hidden fees, no upselling.`,
  },
  {
    q: `How often should my roof be inspected in ${place}?`,
    a: `Roofs in Vermont should be inspected at least once a year due to heavy snowfall and seasonal temperature swings. Regular inspections help catch problems early and extend the life of your roof.`,
  },
];

export const areas: Area[] = [
  {
    slug: "chittenden-county",
    name: "Chittenden County",
    kind: "county",
    headline: "Expert Roofing & Exterior Contractor in Chittenden County, VT",
    intro:
      "Chittenden County is home base for Vermont Custom Exteriors. From our shop in Williston, we're minutes from every neighborhood in the county — which means faster estimates, faster starts, and crews who know exactly how local homes are built.",
    body: [
      "We've completed roof replacements in Essex Junction, added siding to homes in Richmond, and built decks in Winooski. Our work is visible all across the county — from older homes in Essex Junction that need special attention to newer builds in South Burlington needing stormproof shingles.",
      "Whether it's a leaking roof in Jericho, a gutter repair in Milton, or a new deck in Shelburne, we treat every project like it's our own. Licensed, insured, and locally owned, we understand the weather, the building styles, and what locals expect.",
    ],
    towns: [
      "Burlington",
      "South Burlington",
      "Essex",
      "Essex Junction",
      "Colchester",
      "Milton",
      "Williston",
      "Shelburne",
      "Winooski",
      "Jericho",
      "Richmond",
      "Hinesburg",
    ],
    faqs: sharedFaq("Chittenden County"),
    pin: { x: 22, y: 30 },
  },
  {
    slug: "franklin-county",
    name: "Franklin County",
    kind: "county",
    headline: "Trusted Roofing & Exterior Services in Franklin County, VT",
    intro:
      "Just north of our home base, Franklin County homes face some of the toughest lake-effect weather in the state. We bring the same honest work and weather-tested materials to St. Albans, Swanton, and every town in between.",
    body: [
      "Franklin County's mix of historic village homes and newer builds means no two roofs are the same. Our crews handle steep-pitch shingle work, metal roofing, siding, and gutter systems built for northern Vermont winters.",
      "From storm damage repairs in St. Albans to full roof replacements in Fairfax, we deliver clear communication, clean job sites, and dependable results — the same reasons our Chittenden County neighbors keep referring us north.",
    ],
    towns: ["St. Albans", "Swanton", "Enosburg Falls", "Fairfax", "Georgia", "Highgate"],
    faqs: sharedFaq("Franklin County"),
    pin: { x: 30, y: 14 },
  },
  {
    slug: "addison-county",
    name: "Addison County",
    kind: "county",
    headline: "Quality Roofing & Exterior Work in Addison County, VT",
    intro:
      "South of Chittenden County along the lake, Addison County's farmhouses, village homes, and new construction all get the same treatment from our crew: honest estimates, quality materials, and work that holds up.",
    body: [
      "From Middlebury to Vergennes to Bristol, we handle roof replacements, repairs, siding, gutters, and decks across Addison County. Older farmhouses often need thoughtful structural work before new roofing goes on — that's exactly the kind of project we enjoy.",
      "We show up when we say we will, explain everything without confusing terms, and leave your property better than we found it. That's the Vermont Custom Exteriors standard, no matter which county you're in.",
    ],
    towns: ["Middlebury", "Vergennes", "Bristol", "Ferrisburgh", "New Haven", "Monkton"],
    faqs: sharedFaq("Addison County"),
    pin: { x: 24, y: 52 },
  },
  {
    slug: "essex-county",
    name: "Essex County",
    kind: "county",
    headline: "Dependable Roofing & Exteriors in Essex County, VT",
    intro:
      "Vermont's Northeast Kingdom sees the harshest winters in the state. For Essex County homes and camps, we build roofs and exteriors that shrug off deep snow, ice, and wide temperature swings.",
    body: [
      "Camps, cabins, and year-round homes in Essex County all share one need: an exterior that can be trusted through a Kingdom winter. We install snow-rated roofing systems, durable siding, and gutter setups designed for heavy melt.",
      "Distance never changes our standards — free consultations, honest quotes, and crews that treat your property like their own.",
    ],
    towns: ["Island Pond", "Lunenburg", "Canaan", "Guildhall", "Concord"],
    faqs: sharedFaq("Essex County"),
    pin: { x: 78, y: 12 },
  },
  {
    slug: "orange-county",
    name: "Orange County",
    kind: "county",
    headline: "Roofing & Exterior Contractor Serving Orange County, VT",
    intro:
      "From Randolph to Bradford, Orange County's hillside homes and village centers trust us for roofing, siding, gutters, and decks built to handle central Vermont weather.",
    body: [
      "Orange County homes deal with heavy snow loads and long freeze-thaw seasons. We install roofing and exterior systems matched to those conditions — architectural shingles, standing-seam metal, and properly vented assemblies that prevent ice dams.",
      "Every project starts with a free consultation and a clear, honest estimate. We explain your options, respect your budget, and never upsell.",
    ],
    towns: ["Randolph", "Bradford", "Chelsea", "Williamstown", "Thetford"],
    faqs: sharedFaq("Orange County"),
    pin: { x: 58, y: 62 },
  },
  {
    slug: "grand-isle-county",
    name: "Grand Isle County",
    kind: "county",
    headline: "Roofing & Exteriors for Grand Isle County's Island Homes",
    intro:
      "The Champlain Islands are beautiful — and brutally exposed. Wind off the lake tests every shingle, seam, and gutter. We build exteriors for island homes that are ready for it.",
    body: [
      "From South Hero to Alburgh, island homes take lake wind and driving rain from every direction. We spec higher wind-rated shingles, meticulous flashing, and gutter systems that handle sideways weather.",
      "Whether it's a seasonal camp or a year-round home, you get the same free consultation, honest pricing, and clean, careful work.",
    ],
    towns: ["South Hero", "Grand Isle", "North Hero", "Alburgh", "Isle La Motte"],
    faqs: sharedFaq("Grand Isle County"),
    pin: { x: 16, y: 13 },
  },
  {
    slug: "washington-county",
    name: "Washington County",
    kind: "county",
    headline: "Roofing & Exterior Services in Washington County, VT",
    intro:
      "From Montpelier to Barre to Waterbury, central Vermont homes get hammered by snow and spring melt. We keep them protected with roofing and exterior work built for the climate.",
    body: [
      "Washington County's historic homes deserve careful hands. We handle everything from slate-to-shingle conversions and roof repairs to full siding replacements and seamless gutters — always with clear communication and honest estimates.",
      "Our crews plan carefully, work quickly, and keep your property clean. Most roof replacements finish in one to three days.",
    ],
    towns: ["Montpelier", "Barre", "Waterbury", "Northfield", "Berlin", "Middlesex"],
    faqs: sharedFaq("Washington County"),
    pin: { x: 48, y: 44 },
  },
  {
    slug: "lamoille-county",
    name: "Lamoille County",
    kind: "county",
    headline: "Roofing & Exterior Contractor in Lamoille County, VT",
    intro:
      "Stowe, Morrisville, and the towns of Lamoille County see serious mountain snow. We build roofs, siding, and decks that stand up to it — season after season.",
    body: [
      "Mountain weather demands more from an exterior. We install snow-rated roofing assemblies with proper ventilation to fight ice dams, siding that handles wide temperature swings, and decks built on frost-proof footings.",
      "From ski houses in Stowe to village homes in Morrisville and Johnson, we bring the same care, communication, and craftsmanship to every job.",
    ],
    towns: ["Stowe", "Morrisville", "Hyde Park", "Johnson", "Cambridge", "Jeffersonville"],
    faqs: sharedFaq("Lamoille County"),
    pin: { x: 44, y: 25 },
  },
  {
    slug: "burlington-vt",
    name: "Burlington, VT",
    kind: "town",
    headline: "Expert Roofing Contractor in Burlington, VT",
    intro:
      "If you want a roofing team that treats your home with real care and delivers work that holds up through every Vermont season, you are in the right place. Homeowners across Burlington trust us to protect their property with strong materials and detailed workmanship.",
    body: [
      "Burlington experiences significant environmental stressors, from freezing winter snow to intense summer rainstorms, making a high-quality roofing system an absolute necessity for every local homeowner. Our comprehensive services are designed to safeguard your residence against moisture infiltration, heat loss, and long-term structural degradation.",
      "We understand traditional Vermont architecture and modern construction standards alike, letting us tailor solutions that keep your home safe and energy efficient throughout the seasons. By combining premium, weather-resistant materials with expert installation, we deliver roofing systems with superior durability and peak performance.",
    ],
    faqs: sharedFaq("Burlington"),
    pin: { x: 18, y: 28 },
  },
  {
    slug: "shelburne-vt",
    name: "Shelburne, VT",
    kind: "town",
    headline: "Trusted Roofing & Exterior Contractor in Shelburne, VT",
    intro:
      "Shelburne homes — from lakeside properties to village classics — get the full Vermont Custom Exteriors treatment: honest estimates, premium materials, and craftsmanship that shows.",
    body: [
      "Minutes from our Williston shop, Shelburne is home turf. We've built decks, replaced roofs, and installed siding throughout the town, and we know how lake proximity shapes what your exterior needs to handle.",
      "Every project starts with a free consultation. We explain your options clearly, give you an honest quote, and show up when we say we will.",
    ],
    faqs: sharedFaq("Shelburne"),
    pin: { x: 19, y: 35 },
  },
  {
    slug: "jericho-vt",
    name: "Jericho, VT",
    kind: "town",
    headline: "Roofing & Exterior Services in Jericho, VT",
    intro:
      "From leaking roofs to brand-new decks, Jericho homeowners call us because we're close, we're honest, and our work holds up to hill-town weather.",
    body: [
      "Jericho's elevation means more snow and longer winters than the valley towns. We build roofing assemblies with proper ventilation and ice protection, and exteriors that handle the freeze-thaw cycle gracefully.",
      "We've handled everything from emergency leak repairs to full replacements in Jericho — always with clear communication and a clean job site.",
    ],
    faqs: sharedFaq("Jericho"),
    pin: { x: 30, y: 30 },
  },
];

export const counties = areas.filter((a) => a.kind === "county");
export const towns = areas.filter((a) => a.kind === "town");

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
