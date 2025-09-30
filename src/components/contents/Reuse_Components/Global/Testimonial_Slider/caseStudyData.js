// caseStudyData.js
// Structured dataset for Case Study Details page
// Usage: import caseStudyData from "./caseStudyData";

const caseStudyData = [
  {
    id: "cs-invocare",
    slug: "invocare",
    client: "Invocare",
    industry: ["Funeral Services", "Memorial Parks"],
    title: "How Did Invocare Pull Off the Flawless E‑Commerce Upgrade? 100% Compliant, Zero Downtime",
    subtitle: "End‑to‑end Adobe Commerce migration with real‑time integrations, airtight security, and zero service disruption.",
    heroImage: "/case-study-asset/invocare.jpg",
    logo: "/images/case-studies/invocare/invocare.jpg",
    publishedOn: "2025-08-20",
    location: "Australia & New Zealand",
    tags: ["Adobe Commerce", "Migration", "Compliance", "Zero Downtime", "Integrations"],

    executiveSummary: "Invocare, a leading provider of funeral services and memorial park operations, faced mounting challenges in managing and modernizing its e-commerce platform. To stay ahead, they needed a reliable partner who could handle real-time system integrations, ongoing compliance, and a full Adobe Commerce migration without disrupting sensitive customer-facing operations.",

    challenges: {
      subHeading: "Before DLUX stepped in, Invocare struggled with:",
      items: [
        "Security Risks & Compliance Pressure – Outdated patches and delayed updates left the platform exposed, risking both cyber threats and compliance failures.",
        "Upgrade Complexity – Migrating to the latest Adobe Commerce version was daunting, with limited maintenance windows and multiple custom integrations increasing the risk of downtime and data loss.",
      ]
    },

    turningPoint: "That’s when DLUX came in. By designing a tailored transformation strategy, DLUX set the stage for Invocare to overcome its biggest bottlenecks and achieve a seamless upgrade.",
    quote: "Curious how Invocare achieved zero downtime, 100% compliance, and improved efficiency?",

    approach: [
      {
        heading: "Pre‑Migration Hardening",
        bullets: [
          "Patched core + extensions; dependency audit & SBOM generation",
          "WAF rules and rate‑limiting for critical endpoints",
        ],
      },
      {
        heading: "Integration Strategy",
        bullets: [
          "Event‑driven sync with webhooks + queues (retry & idempotency)",
          "Sandbox mirrors for ERP/CRM to validate message contracts",
        ],
      },
      {
        heading: "Zero‑Downtime Cutover",
        bullets: [
          "Blue‑green deployment with health checks & progressive traffic shift",
          "Read replica for catalog; write gate with queue drain pre‑switch",
        ],
      },
      {
        heading: "Continuous Compliance",
        bullets: [
          "Automated patch pipelines; weekly CVE scans",
          "CIS‑aligned hardening & audit logs shipped to SIEM",
        ],
      },
    ],

    outcomes: [
      { label: "Downtime During Migration", value: "0 minutes" },
      { label: "Compliance", value: "100% patch currency" },
      { label: "Incident Reduction", value: "−78% P1/P2 after go‑live" },
      { label: "Release Frequency", value: "2× faster" },
    ],

    metricsBadges: [
      { text: "Zero Downtime" },
      { text: "100% Compliant" },
      { text: "Faster Releases" },
    ],

    timeline: [
      { phase: "Discovery & Audit", duration: "3 weeks" },
      { phase: "Hardening & Sandboxes", duration: "2 weeks" },
      { phase: "Migration & Integrations", duration: "5 weeks" },
      { phase: "Cutover & Hypercare", duration: "1 week" },
    ],

    ctaText: "Download",
    downloadUrl: "/case-study-asset/pdf/invocare.pdf",

    seo: {
      metaTitle: "Invocare Adobe Commerce Migration – 100% Compliance, Zero Downtime | DLUX Case Study",
      metaDescription: "See how DLUX delivered a flawless Adobe Commerce upgrade for Invocare with zero downtime, airtight compliance, and real‑time integrations.",
    },
  },


  {
    id: "cs-luxury-eyewear",
    slug: "luxury-fashion",
    client: "Luxury Eyewear Brand",
    industry: ["Retail", "Luxury", "Fashion"],
    title: "How DLUX Delivered a 25% Sales Surge for Australia’s Top Retailer",
    subtitle: "Personalized shopping, sub‑second pages, and integrated ops—crafting a premium Adobe Commerce experience.",
    heroImage: "/case-study-asset/fasion.jpg",
    logo: "/images/case-studies/eyewear/logo.png",
    publishedOn: "2025-08-20",
    location: "Australia",
    tags: ["Adobe Commerce", "Personalization", "Performance", "Retail"],

    executiveSummary: "A global leader in luxury eyewear retail needed more than a functional online store — they wanted an e-commerce experience that reflected exclusivity and precision, worthy of their high-end customer base.",

    challenges: {
      subHeading: "Their platform was falling short with:",
      items: [
        "Lack of Personalization – Customers received the same generic shopping journey, with no tailored recommendations.",
        "Slow Performance – 4–5 second page loads and downtime risks frustrated shoppers and drove cart abandonment.",
        "Disconnected Systems – Inventory, CRM, and logistics weren’t integrated, leading to errors and fulfillment delays.",
        "Brand Experience Gap – The site lacked the premium look and feel expected in luxury fashion retail.",
      ]
    },

    stakes: "In luxury retail, every second and every detail matter. A poor online experience could damage not only sales, but also the brand’s reputation.",

    turningPoint: "That’s when DLUX stepped in with a tailored Adobe Commerce strategy designed to elevate both performance and brand identity.",
    quote: "Want to know how DLUX helped this eyewear giant achieve a 25% surge in sales, boost customer satisfaction, and launch with zero downtime?",

    approach: [
      {
        heading: "Personalization Engine",
        bullets: [
          "Behavioral segments + affinity‑based recommendations",
          "Dynamic PDP bundles & clienteling widgets",
        ],
      },
      {
        heading: "Performance Tuning",
        bullets: [
          "Media optimization (AVIF/WebP, responsive images)",
          "Edge caching & full‑page cache warming",
        ],
      },
      {
        heading: "Systems Integration",
        bullets: [
          "Two‑way sync with ERP/CRM; stock accuracy < 60s",
          "Fulfillment SLA tracking within admin",
        ],
      },
      {
        heading: "Brand Experience",
        bullets: [
          "Luxury‑grade design system, micro‑interactions",
          "ADA/WCAG‑aware components for accessibility",
        ],
      },
    ],

    outcomes: [
      { label: "Sales Uplift", value: "+25%" },
      { label: "Page Load", value: "< 1.5s avg" },
      { label: "Cart Abandonment", value: "−18%" },
      { label: "Downtime During Launch", value: "0 minutes" },
    ],

    metricsBadges: [
      { text: "+25% Sales" },
      { text: "<1.5s Pages" },
      { text: "Zero Downtime" },
    ],

    timeline: [
      { phase: "Discovery & CX Mapping", duration: "2 weeks" },
      { phase: "Build & Integrations", duration: "6 weeks" },
      { phase: "Perf & UAT", duration: "2 weeks" },
    ],

    ctaText: "Download",
    downloadUrl: "/case-study-asset/pdf/fashion.pdf",

    seo: {
      metaTitle: "Luxury Eyewear – 25% Sales Surge with Adobe Commerce | DLUX Case Study",
      metaDescription: "Discover how DLUX delivered personalization, sub‑second performance, and integrated ops to drive +25% sales for a luxury eyewear retailer.",
    },
  },

  {
    id: "cs-oil-painting-reproductions",
    slug: "oil-painting",
    client: "Renowned Oil Painting Reproductions",
    industry: ["Fine Art", "E‑Commerce"],
    title: "Renowned Oil Painting Reproductions: Driving 45% Growth in Global Art Accessibility",
    subtitle: "Gallery‑grade UX, performance for high‑res art, and seamless Adobe Commerce migration.",
    heroImage: "/case-study-asset/oil-paint.jpg",
    logo: "/images/case-studies/fine-art/logo.png",
    publishedOn: "2025-08-20",
    location: "Global",
    tags: ["Adobe Commerce", "Performance", "Personalization", "Zero Downtime"],

    executiveSummary: "A leading retailer of hand-painted oil painting reproductions partnered with DLUX to reimagine its digital storefront. The goal was clear: deliver a luxury-grade e-commerce experience that could match the artistry of their products while driving measurable business growth.",

    challenges: {
      subHeading: "The existing platform couldn’t keep up with customer expectations:",
      items: [
        "No Personalization – Buyers were treated to generic product views, missing opportunities to connect through curated recommendations.",
        "Slow Performance – High-resolution artwork slowed pages to 4–5 seconds, driving cart abandonment.",
        "Disconnected Systems – Lack of integration across CRM, logistics, and inventory caused order delays and errors.",
        "Brand Experience Gap – The online store lacked the premium gallery-inspired design art collectors expect.",
      ]
    },

    stakes: "For a retailer selling timeless, luxury masterpieces, the digital storefront had to inspire the same exclusivity and elegance as an in-person gallery visit. Without a modernized platform, the brand risked lost engagement, declining sales, and weakened customer trust in an already competitive fine art market.",

    turningPoint: "DLUX partnered with the retailer to modernize their platform, delivering gallery-grade UX, high-performance pages for high-res assets, and a zero-downtime Adobe Commerce migration.",
    quote: "Discover how DLUX helped them achieve a +12% increase in sales, a +20% rise in customer satisfaction, and a zero-downtime migration",

    approach: [
      {
        heading: "Art‑Aware Performance",
        bullets: [
          "Smart thumbnails, AVIF/WebP, adaptive streaming for zoom",
          "CDN edge resizing & cache invalidation strategy",
        ],
      },
      {
        heading: "Curated Discovery",
        bullets: [
          "Collections by style/era/artist with dynamic facets",
          "Personalized recommendations and recently‑viewed trails",
        ],
      },
      {
        heading: "Operations Integration",
        bullets: [
          "Tight CRM/logistics sync with status webhooks",
          "Admin dashboards for SLA and error monitoring",
        ],
      },
      {
        heading: "Zero‑Downtime Migration",
        bullets: [
          "Blue‑green rollout and database shadow reads",
          "Queue drain and integrity checks pre‑switch",
        ],
      },
    ],

    outcomes: [
      { label: "Sales Uplift", value: "+12%" },
      { label: "Customer Satisfaction", value: "+20%" },
      { label: "Downtime During Migration", value: "0 minutes" },
    ],

    metricsBadges: [
      { text: "+12% Sales" },
      { text: "+20% CSAT" },
      { text: "Zero Downtime" },
    ],

    timeline: [
      { phase: "Audit & Design", duration: "2 weeks" },
      { phase: "Build & Integrations", duration: "5 weeks" },
      { phase: "Cutover & Hypercare", duration: "1 week" },
    ],

    ctaText: "Download",
    downloadUrl: "/public/case-study-asset/pdf/oil-paint.pdf",

    seo: {
      metaTitle: "Fine Art E‑Commerce: Zero‑Downtime Migration & +12% Sales | DLUX Case Study",
      metaDescription: "How DLUX delivered gallery‑grade UX, performance for high‑res art, and a zero‑downtime Adobe Commerce migration for a fine art retailer.",
    },
  },

];

// Optional helper to safely fetch a case study by slug
export const getCaseStudyBySlug = (slug) =>
  caseStudyData.find((cs) => cs.slug === slug);

export default caseStudyData;
