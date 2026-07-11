export type Service = {
  slug: string;
  title: string;
  short: string;
  group: "Roofing" | "Siding" | "Gutters" | "Decks & Outdoor" | "Remodeling & Additions";
  image?: string;
  hero: string;
  includesTitle: string;
  includesIntro: string;
  includes: string[];
  benefits: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    group: "Roofing",
    image: "/images/gallery/project-05.jpg",
    short:
      "We remove old, damaged materials and install strong, long-lasting shingles or metal roofing. We help you choose the right option based on your home and budget. Our insured roofing contractors ensure a safe, clean job site from start to finish.",
    hero: "A full roof replacement becomes necessary when aging materials can no longer protect your home. We guide you through selecting the right materials for Vermont weather and install everything with precision. A new roof improves safety, appearance, and long-term home value — and most jobs take just 1 to 3 days.",
    includesTitle: "What Our Roof Replacement Service Includes",
    includesIntro:
      "From tear-off to final cleanup, our insured roofing contractors keep the job site safe and tidy. We work with the materials that hold up to Vermont winters and walk you through every choice.",
    includes: [
      "Complete tear-off and disposal of old materials",
      "Deck inspection and repair of hidden damage",
      "Ice & water shield and synthetic underlayment",
      "Architectural asphalt shingles or standing-seam metal",
      "Ridge venting and flashing done right",
      "Magnetic nail sweep and full site cleanup",
    ],
    benefits: [
      {
        title: "Built for Vermont Weather",
        text: "Heavy snow loads, ice dams, and wind-driven rain are the norm here. We install systems designed to take all of it, season after season.",
      },
      {
        title: "Boost Home Value",
        text: "A new roof improves curb appeal, energy efficiency, and resale value — and reassures buyers if you ever sell.",
      },
      {
        title: "Honest Material Guidance",
        text: "Shingle, metal, or low-slope: we explain the pros, cons, and costs of each so you can pick what fits your home and budget.",
      },
      {
        title: "Fast, Clean Installs",
        text: "Most replacements finish in 1–3 days, weather permitting. We protect your landscaping and leave the property cleaner than we found it.",
      },
    ],
    faqs: [
      {
        q: "How long will my roof replacement take?",
        a: "Most jobs take 1 to 3 days, weather permitting. We work efficiently and keep you updated throughout the process.",
      },
      {
        q: "What affects the cost of a roof replacement?",
        a: "Roof replacement cost depends on materials, roof size, labor needs, and any structural repairs required. We give detailed estimates so you understand the full scope of the project — clear and honest pricing without any confusion.",
      },
      {
        q: "What types of roofing materials do you offer?",
        a: "We install asphalt shingles, metal roofing, and low-slope options. We'll walk you through the choices and help you pick what fits your style and budget best.",
      },
      {
        q: "What kind of warranty do you provide?",
        a: "We back our work with a workmanship guarantee and offer manufacturer warranties on all materials. You'll know exactly what's covered.",
      },
    ],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    group: "Roofing",
    image: "/images/gallery/project-07.jpg",
    short:
      "Even small leaks can cause big problems. We handle everything from storm damage to missing shingles. Our emergency roof repair services are fast, thorough, and built to stop future issues.",
    hero: "When your roof starts showing signs of wear, leaks, or storm damage, you need a local team you can trust. We specialize in expert roof repair that restores your home's protection, performance, and peace of mind — whether it's a small leak or major storm damage. Schedule a free roof inspection today and let's protect your home from the top down.",
    includesTitle: "What Our Roof Repair Services Include",
    includesIntro:
      "Roof damage can escalate quickly if left unaddressed. Our repairs are designed to catch problems early and fix them right the first time. We work with all roofing types — shingle, metal, flat, and more — and provide both emergency and scheduled repairs.",
    includes: [
      "Emergency roof repair",
      "Roof leak repair",
      "Shingle replacement",
      "Flashing and vent boot repairs",
      "Flat roof patching (EPDM and TPO)",
      "Storm damage restoration",
      "Detailed roof inspections with photo reports",
    ],
    benefits: [
      {
        title: "Prevent Costly Damage",
        text: "Fixing a small leak now can save you thousands in interior repairs, mold remediation, or full roof replacement later.",
      },
      {
        title: "Extend Roof Lifespan",
        text: "Routine maintenance and timely repairs can add years to your roof's life, delaying the need for a full replacement.",
      },
      {
        title: "Protect Home Value",
        text: "A well-maintained roof boosts curb appeal and reassures potential buyers if you plan to sell.",
      },
      {
        title: "Improve Energy Efficiency",
        text: "Sealing leaks and replacing damaged insulation helps regulate indoor temperatures and reduce energy bills.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my roof needs repair?",
        a: "Look for signs like missing or curled shingles, water stains on ceilings, granules in gutters, or visible sagging. If you're unsure, we offer free inspections to assess your roof's condition.",
      },
      {
        q: "What's the average cost of roof repair in Chittenden County?",
        a: "Costs vary based on the extent of damage and materials used. Minor repairs may range from $300–$800, while more complex jobs can exceed $1,500. We provide free, detailed estimates.",
      },
      {
        q: "Do you offer emergency roof repair?",
        a: "Yes. We provide emergency roof repair services for storm damage, active leaks, and other urgent issues. Call us for immediate assistance.",
      },
      {
        q: "How long does a typical roof repair take?",
        a: "Most repairs are completed in one day. Larger or more complex jobs may take 2–3 days. We'll provide a clear timeline before we begin.",
      },
      {
        q: "Will my repair be covered by insurance?",
        a: "If your roof was damaged by a covered event (like a storm), your homeowner's insurance may cover the repair. We can assist with documentation and claims support.",
      },
    ],
  },
  {
    slug: "roof-coating",
    title: "Roof Coating",
    group: "Roofing",
    image: "/images/gallery/project-08.jpg",
    short:
      "Adding a roof coating can help your roof last longer and stay cooler in the summer. It's a great option for both homes and commercial buildings.",
    hero: "Roof coatings extend the life of your roof by improving weather resistance and energy performance. This service works especially well for the flat and low-slope roofs found throughout Chittenden County — a smart, cost-effective alternative to early replacement for both homes and commercial buildings.",
    includesTitle: "What Our Roof Coating Service Includes",
    includesIntro:
      "A properly applied coating seals small cracks, reflects summer heat, and adds a waterproof layer that shields your roof from Vermont's freeze-thaw cycles.",
    includes: [
      "Full roof inspection and prep",
      "Cleaning and priming of the existing surface",
      "Seam and penetration sealing",
      "Elastomeric, silicone, or acrylic coating systems",
      "Flat and low-slope specialty applications",
      "Final inspection and maintenance guidance",
    ],
    benefits: [
      {
        title: "Extend Roof Life",
        text: "A quality coating can add 10+ years to an aging roof at a fraction of replacement cost.",
      },
      {
        title: "Stay Cooler in Summer",
        text: "Reflective coatings reduce heat absorption, keeping buildings cooler and cutting cooling costs.",
      },
      {
        title: "Seal Out Moisture",
        text: "Coatings form a seamless waterproof membrane that stands up to snow melt and spring rain.",
      },
      {
        title: "Homes & Commercial",
        text: "A great option for residences, shops, and commercial buildings alike — especially flat or low-slope roofs.",
      },
    ],
    faqs: [
      {
        q: "Is a roof coating right for my roof?",
        a: "Coatings work best on structurally sound roofs with minor wear. We'll inspect your roof for free and tell you honestly whether a coating or a repair is the smarter investment.",
      },
      {
        q: "How long does a roof coating last?",
        a: "Depending on the system, coatings typically last 10–20 years and many can be recoated to extend protection even further.",
      },
      {
        q: "Can you coat commercial buildings?",
        a: "Yes. We coat flat and low-slope roofs on both homes and commercial buildings across our Vermont service area.",
      },
    ],
  },
  {
    slug: "siding-replacement",
    title: "Siding Replacement",
    group: "Siding",
    image: "/images/gallery/project-03.jpg",
    short:
      "New siding doesn't just make your home look better—it helps with insulation, too. We offer vinyl, fiber cement, and wood siding, installed with care for long-term performance.",
    hero: "Siding protects your home's structure and shapes its overall appearance. We install strong, weather-resistant siding that stands up to Vermont winters while improving both insulation and curb appeal — vinyl, fiber cement, or wood, installed with care for long-term performance.",
    includesTitle: "What Our Siding Replacement Service Includes",
    includesIntro:
      "From removal to the final trim detail, we treat your home's envelope as a system — moisture barrier, insulation, and siding working together.",
    includes: [
      "Removal and disposal of old siding",
      "Moisture barrier and house wrap installation",
      "Vinyl, fiber cement, and wood siding options",
      "Insulation upgrades for energy efficiency",
      "Trim, soffit, and fascia work",
      "Color and style guidance to match your home",
    ],
    benefits: [
      {
        title: "Better Insulation",
        text: "New siding with proper house wrap cuts drafts and helps regulate indoor temperatures year-round.",
      },
      {
        title: "Instant Curb Appeal",
        text: "Fresh siding transforms how your home looks — and how much it's worth.",
      },
      {
        title: "Weather-Tested Materials",
        text: "We install siding rated for Vermont's freeze-thaw cycles, snow, and summer sun.",
      },
      {
        title: "Low Maintenance",
        text: "Modern vinyl and fiber cement keep their color and shape without constant repainting.",
      },
    ],
    faqs: [
      {
        q: "Which siding material is best for Vermont homes?",
        a: "Vinyl offers great value and low maintenance; fiber cement adds durability and a premium look; wood delivers classic New England character. We'll walk you through the trade-offs for your home and budget.",
      },
      {
        q: "Can I hire you just for siding?",
        a: "Absolutely. We take on siding replacement as a stand-alone service. No need to bundle if you don't want to.",
      },
      {
        q: "Does new siding help with energy bills?",
        a: "Yes. Combined with proper house wrap and optional insulation upgrades, new siding reduces drafts and heat loss — many homeowners notice the difference the first winter.",
      },
    ],
  },
  {
    slug: "gutter-installation",
    title: "Gutter Installation",
    group: "Gutters",
    image: "/images/gallery/project-04.jpg",
    short:
      "Our seamless gutter systems protect your foundation and siding from water damage. We custom-fit each system to your home and offer gutter guards to reduce clogs.",
    hero: "Gutters play an important role in keeping water away from your home. We install seamless gutter systems that handle Vermont's heavy rainfall and snowmelt, helping prevent foundation issues and siding damage — every system custom-fit on site to your home.",
    includesTitle: "What Our Gutter Installation Service Includes",
    includesIntro:
      "A gutter system is only as good as its weakest joint. That's why we run seamless gutters custom-formed to your home, pitched correctly, and anchored to handle Vermont snow.",
    includes: [
      "Seamless aluminum gutters formed on site",
      "Custom fit, pitch, and downspout placement",
      "Gutter guards to reduce clogs",
      "Fascia inspection and repair",
      "Snow- and ice-rated hangers and fasteners",
      "Full cleanup and water-flow testing",
    ],
    benefits: [
      {
        title: "Protect Your Foundation",
        text: "Properly routed water prevents pooling, erosion, and basement moisture problems.",
      },
      {
        title: "Save Your Siding",
        text: "Controlled runoff keeps stains, rot, and ice sheets off your walls and walkways.",
      },
      {
        title: "Fewer Clogs",
        text: "Optional gutter guards keep leaves and debris out, cutting maintenance dramatically.",
      },
      {
        title: "Custom-Fit On Site",
        text: "Seamless runs formed to your exact measurements mean fewer joints and fewer leaks.",
      },
    ],
    faqs: [
      {
        q: "What are seamless gutters?",
        a: "Seamless gutters are formed on site from a single length of aluminum, custom cut to your home. Fewer seams mean fewer places for leaks to start.",
      },
      {
        q: "Are gutter guards worth it?",
        a: "If your home is near trees, yes — guards dramatically reduce clogs and the ladder time that comes with them. We'll give you an honest recommendation for your property.",
      },
      {
        q: "Can new gutters handle Vermont snow and ice?",
        a: "We install heavy-duty hangers rated for snow load and pitch systems to move meltwater fast, reducing ice buildup at the eaves.",
      },
    ],
  },
  {
    slug: "gutter-repair",
    title: "Gutter Repair",
    group: "Gutters",
    image: "/images/gallery/project-27.jpg",
    short:
      "Loose, leaking, or sagging gutters? We'll fix them fast. We use high-quality materials that blend well with your current setup.",
    hero: "When Vermont's unpredictable weather hits, your gutters are your home's first line of defense. We specialize in expert gutter repair that keeps your property protected from water damage, foundation erosion, and costly structural issues — whether you're dealing with a minor leak or a full system failure.",
    includesTitle: "What Our Gutter Repair Services Include",
    includesIntro:
      "Gutters may seem like a small part of your home's exterior, but they play a critical role in protecting your roof, siding, and foundation. We work with all types of systems, including seamless, aluminum, vinyl, and copper.",
    includes: [
      "Leak sealing and joint resealing",
      "Sagging section re-hanging and re-pitching",
      "Downspout clearing and replacement",
      "Storm and ice dam damage repair",
      "Fascia board repair",
      "Section replacement matched to your system",
    ],
    benefits: [
      {
        title: "Prevent Costly Water Damage",
        text: "Fixing a small leak now can save you thousands in foundation or roof repairs later.",
      },
      {
        title: "Improve Drainage Efficiency",
        text: "We restore proper water flow to prevent pooling, overflow, and ice buildup.",
      },
      {
        title: "Protect Curb Appeal",
        text: "Sagging or broken gutters are not only ineffective—they're unsightly. We restore both function and appearance.",
      },
      {
        title: "Extend Gutter Lifespan",
        text: "Our repairs help you get the most out of your existing system before needing a full replacement.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my gutters need repair?",
        a: "Common signs include sagging sections, visible cracks, water stains on siding, pooling near the foundation, or overflowing during rain. If you notice any of these, it's time for a professional inspection.",
      },
      {
        q: "What's the average cost of gutter repair in Chittenden County?",
        a: "Costs vary depending on the extent of damage and materials used. Minor repairs may cost $150–$400, while more extensive work could range from $500–$1,200. We provide free, transparent estimates.",
      },
      {
        q: "Do you offer emergency gutter repair?",
        a: "Absolutely. We provide emergency gutter repair services for storm damage, ice dam leaks, and other urgent issues.",
      },
      {
        q: "How often should I have my gutters inspected?",
        a: "We recommend at least twice a year—once in spring and once in fall. Regular inspections help catch small issues before they become major problems.",
      },
    ],
  },
  {
    slug: "deck-installation",
    title: "Deck Installation",
    group: "Decks & Outdoor",
    image: "/images/gallery/project-10.jpg",
    short:
      "We design and build decks that match your home and lifestyle. Whether it's a cozy space for morning coffee or a large deck for hosting guests, we build it to last through Vermont's seasons.",
    hero: "A new deck adds usable outdoor space to your home. We design and build decks and covered porches that match your home's style and your lifestyle — a cozy space for morning coffee or a large deck for hosting guests — built to last through every Vermont season.",
    includesTitle: "What Our Deck Installation Service Includes",
    includesIntro:
      "From frost-proof footings to the final railing cap, we build decks the Vermont way: over-engineered, properly flashed, and finished clean.",
    includes: [
      "Custom design matched to your home",
      "Helical and concrete footing options",
      "Pressure-treated framing, properly flashed",
      "Composite, PVC, or wood decking",
      "Railings, stairs, lighting, and skirting",
      "Covered porch and porch-roof construction",
    ],
    benefits: [
      {
        title: "Built for Four Seasons",
        text: "Frost-rated footings and weather-resistant materials mean your deck stays solid and level year after year.",
      },
      {
        title: "Composite or Wood",
        text: "Low-maintenance composite or classic wood — we help you weigh looks, upkeep, and cost.",
      },
      {
        title: "More Living Space",
        text: "A well-designed deck effectively adds a room to your home for a fraction of an addition's cost.",
      },
      {
        title: "Craftsmanship That Shows",
        text: "Clean lines, tight joinery, hidden fasteners — the details our clients rave about in reviews.",
      },
    ],
    faqs: [
      {
        q: "Can you build decks in winter?",
        a: "Yes — with helical footings we can build year-round. Winter builds often mean faster scheduling, and your deck is ready the moment spring arrives.",
      },
      {
        q: "Composite or wood — which should I choose?",
        a: "Composite costs more upfront but needs almost no maintenance. Wood is budget-friendly and classic but needs periodic staining. We'll walk you through both honestly.",
      },
      {
        q: "Do you build covered porches too?",
        a: "Absolutely. Covered porches with shingle or metal roofs are one of our specialties — take a look at the gallery to see recent porch projects.",
      },
    ],
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    group: "Remodeling & Additions",
    short:
      "Need more room? We frame, roof, and finish home additions that blend seamlessly with your existing structure — from bump-outs to full wings.",
    hero: "When your family outgrows your home, an addition lets you stay in the neighborhood you love. We handle home additions from foundation to finish — framing, roofing, siding, and weatherproofing that tie into your existing structure so cleanly it looks original.",
    includesTitle: "What Our Home Addition Service Includes",
    includesIntro:
      "An addition has to match your home structurally and visually. We manage the full exterior shell and coordinate the details that make it seamless.",
    includes: [
      "Design coordination and permitting support",
      "Foundation and helical footing options",
      "Framing and structural work",
      "Roof tie-ins matched to your existing roofline",
      "Siding and trim matched to your home",
      "Windows, doors, and full weatherproofing",
    ],
    benefits: [
      {
        title: "Stay Where You Love",
        text: "Add the space you need without leaving your street, your schools, or your view of the Greens.",
      },
      {
        title: "Seamless Tie-Ins",
        text: "Rooflines, siding, and trim matched so well the addition looks like it was always there.",
      },
      {
        title: "One Accountable Crew",
        text: "The same team that roofs and sides your addition builds it — no finger-pointing between trades.",
      },
      {
        title: "Weather-Tight Guarantee",
        text: "We build the shell right: flashed, wrapped, and sealed for Vermont's worst weather.",
      },
    ],
    faqs: [
      {
        q: "Do you handle permits for additions?",
        a: "We support the permitting process and build to all state and local codes. Every project is fully insured.",
      },
      {
        q: "How long does an addition take?",
        a: "It depends on scope — we'll give you a clear, honest timeline during your free consultation and keep you updated at every stage.",
      },
    ],
  },
  {
    slug: "basement-remodel",
    title: "Basement Remodel",
    group: "Remodeling & Additions",
    short:
      "Turn unused basement space into living space. We handle moisture control, framing, insulation, and finish work built for Vermont foundations.",
    hero: "Your basement is square footage you already own — put it to work. We remodel Vermont basements the right way: moisture control first, then insulation, framing, and clean finish work that turns cold storage into comfortable living space.",
    includesTitle: "What Our Basement Remodel Service Includes",
    includesIntro:
      "Vermont basements need more than drywall. We start with the moisture and insulation details that keep finished basements dry and warm.",
    includes: [
      "Moisture assessment and mitigation",
      "Insulation and vapor barrier systems",
      "Framing and layout design",
      "Egress windows for safety and code",
      "Electrical and lighting coordination",
      "Flooring, trim, and finish work",
    ],
    benefits: [
      {
        title: "Dry First, Finished Second",
        text: "We solve water and humidity issues before a single stud goes up — so your investment lasts.",
      },
      {
        title: "Instant Square Footage",
        text: "A finished basement is the most affordable way to add living space to your home.",
      },
      {
        title: "Warm Underfoot",
        text: "Proper insulation and vapor barriers make basements comfortable even in January.",
      },
      {
        title: "Code-Safe Spaces",
        text: "Egress, smoke protection, and ventilation handled to Vermont code.",
      },
    ],
    faqs: [
      {
        q: "My basement gets damp — can it still be finished?",
        a: "Usually yes, but moisture has to be solved first. We assess the source honestly and fix it before finishing. If a basement shouldn't be finished, we'll tell you.",
      },
    ],
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodel",
    group: "Remodeling & Additions",
    short:
      "From dated to daily-spa. We remodel bathrooms with quality fixtures, waterproofing done right, and the clean finish work we're known for.",
    hero: "A bathroom remodel is one of the best returns on investment in your home — and one of the least forgiving to get wrong. We handle waterproofing, tile, fixtures, and finish work with the same care we bring to every roof and deck we build.",
    includesTitle: "What Our Bathroom Remodel Service Includes",
    includesIntro:
      "Behind every beautiful bathroom is boring, careful prep: waterproofing, ventilation, and plumbing coordination done right.",
    includes: [
      "Design and fixture selection guidance",
      "Demolition and disposal",
      "Waterproofing and tile backer systems",
      "Tile, tub, and shower installation",
      "Vanity, lighting, and ventilation",
      "Plumbing and electrical coordination",
    ],
    benefits: [
      {
        title: "Waterproofed Right",
        text: "The parts you never see — membranes, slopes, seals — are the parts we're most careful with.",
      },
      {
        title: "High-ROI Upgrade",
        text: "Bathrooms consistently return more at resale than almost any other remodel.",
      },
      {
        title: "Fixtures That Last",
        text: "We install quality brands and explain the trade-offs at every price point.",
      },
      {
        title: "Clean, Fast Work",
        text: "Dust barriers, daily cleanup, and a schedule we actually keep.",
      },
    ],
    faqs: [
      {
        q: "How long does a bathroom remodel take?",
        a: "A typical full remodel runs 2–4 weeks depending on scope and material lead times. We give you an honest schedule up front and communicate daily.",
      },
    ],
  },
  {
    slug: "kitchen-remodel",
    title: "Kitchen Remodel",
    group: "Remodeling & Additions",
    short:
      "The heart of your home, rebuilt around how you actually live. Cabinets, counters, lighting, and layout — managed by one accountable local crew.",
    hero: "Your kitchen works hard — it should work beautifully too. We remodel kitchens around how your family actually lives: smarter layouts, quality cabinets and counters, and the kind of finish carpentry that makes a room feel custom, because it is.",
    includesTitle: "What Our Kitchen Remodel Service Includes",
    includesIntro:
      "From layout to the last piece of trim, we coordinate the full remodel so you're not managing five different contractors.",
    includes: [
      "Layout and design consultation",
      "Cabinet installation — stock, semi-custom, or custom",
      "Countertops, backsplash, and tile",
      "Lighting and electrical coordination",
      "Plumbing and appliance coordination",
      "Flooring, paint, and finish carpentry",
    ],
    benefits: [
      {
        title: "One Crew, One Schedule",
        text: "We coordinate every trade so your kitchen comes back online as fast as possible.",
      },
      {
        title: "Built Around You",
        text: "Storage, prep space, and flow designed for how your family actually cooks and gathers.",
      },
      {
        title: "Honest Budgeting",
        text: "Clear allowances and no surprise change orders — you approve everything first.",
      },
      {
        title: "Craftsman Finish",
        text: "Tight scribes, level runs, and trim details that separate custom from cookie-cutter.",
      },
    ],
    faqs: [
      {
        q: "Can I stay in my home during a kitchen remodel?",
        a: "Almost always, yes. We set up dust protection and help you plan a temporary kitchen space. Most families find it very manageable.",
      },
    ],
  },
  {
    slug: "helical-footings",
    title: "Helical Footings",
    group: "Remodeling & Additions",
    short:
      "Frost-proof steel foundations installed in hours, not days. The smart base for decks, porches, and additions in Vermont's freeze-thaw climate.",
    hero: "Vermont's deep frost line makes traditional concrete footings slow, seasonal, and prone to heaving. Helical footings — engineered steel piles screwed below the frost line — install in hours, work year-round, and hold load immediately. It's how we build decks and additions that never move.",
    includesTitle: "What Our Helical Footing Service Includes",
    includesIntro:
      "We size, install, and certify helical piles for decks, porches, additions, and repairs — with torque-verified load capacity on every pile.",
    includes: [
      "Site assessment and load calculations",
      "Engineered steel helical piles",
      "Installation below the frost line",
      "Torque-verified capacity on every pile",
      "Year-round installation — even winter",
      "Foundation repair and underpinning applications",
    ],
    benefits: [
      {
        title: "No Frost Heave",
        text: "Anchored below Vermont's frost line, helical piles stay put through every freeze-thaw cycle.",
      },
      {
        title: "Install in Hours",
        text: "No excavation, no concrete cure time — build on them the same day.",
      },
      {
        title: "Year-Round Building",
        text: "Winter deck or addition? Helical footings make off-season construction possible.",
      },
      {
        title: "Minimal Site Impact",
        text: "No heavy excavation means your lawn and landscaping survive the project.",
      },
    ],
    faqs: [
      {
        q: "Are helical footings as strong as concrete?",
        a: "Yes — each pile is torque-tested during installation to verify its load capacity, something poured concrete can't offer. They're widely used for decks, additions, and even foundation repair.",
      },
      {
        q: "Do helical footings work in winter?",
        a: "That's one of their biggest advantages. We install them year-round, which is how we can build decks and porches even in January.",
      },
    ],
  },
];

export const coreServiceSlugs = [
  "roof-replacement",
  "roof-repair",
  "roof-coating",
  "siding-replacement",
  "gutter-installation",
  "gutter-repair",
  "deck-installation",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
