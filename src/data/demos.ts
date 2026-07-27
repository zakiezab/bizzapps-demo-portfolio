export type Platform = "d365fo" | "crmpp" | "both";

export type Industry =
  | "Retail"
  | "Manufacturing"
  | "Healthcare"
  | "Financial Services"
  | "Agribusiness"
  | "Oil & Gas"
  | "Utilities";

export type BusinessArea =
  | "Sales & Commercial"
  | "Supply Chain & Operations"
  | "Finance & Shared Services"
  | "HR"
  | "Compliance"
  | "IT & Digital";

export interface Kpi {
  label: string;
  value: number;
}

export interface Demo {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  industries: Industry[];
  businessArea: BusinessArea;
  platform: Platform;
  modules: {
    d365fo?: string[];
    crmpp?: string[];
  };
  kpis: Kpi[];
  factSheet: {
    type: string;
    updated: string;
  };
  featured?: boolean;
  galleryCount: number;
}

export const platformMeta: Record<Platform, { label: string; dotClassName: string }> = {
  d365fo: { label: "Dynamics 365 F&O", dotClassName: "bg-[oklch(0.62_0.19_295)]" },
  crmpp: { label: "CRM / Power Platform", dotClassName: "bg-accent" },
  both: { label: "Both platforms combined", dotClassName: "bg-gradient-to-r from-[oklch(0.62_0.19_295)] to-accent" },
};

export const industries: Industry[] = [
  "Retail",
  "Manufacturing",
  "Healthcare",
  "Financial Services",
  "Agribusiness",
  "Oil & Gas",
  "Utilities",
];

export const businessAreas: BusinessArea[] = [
  "Sales & Commercial",
  "Supply Chain & Operations",
  "Finance & Shared Services",
  "HR",
  "Compliance",
  "IT & Digital",
];

export const demos: Demo[] = [
  {
    slug: "customer-onboarding-portal",
    title: "Customer Onboarding Portal",
    tagline: "Self-service onboarding with live incident status dashboards.",
    description:
      "This application reduces the time and manual effort required to onboard a customer, and gives account teams a live status report of onboarding incidents through powerful dashboards.",
    industries: ["Retail", "Healthcare", "Financial Services"],
    businessArea: "Sales & Commercial",
    platform: "crmpp",
    modules: {
      crmpp: ["CRM / Power Platform", "Power BI / Dataverse", "Power BI / CRM"],
    },
    kpis: [
      { label: "Onboarding Time Reduced", value: 80 },
      { label: "Manual Effort Reduced", value: 80 },
      { label: "Live Status Visibility Improved", value: 95 },
      { label: "Incident Tracking Improved", value: 90 },
      { label: "Data Entry Errors Reduced", value: 70 },
      { label: "Process Transparency Improved", value: 95 },
    ],
    factSheet: { type: "Built in-house", updated: "Jul/2026" },
    featured: true,
    galleryCount: 8,
  },
  {
    slug: "opportunity-tracker-oil-gas-drilling",
    title: "Opportunity Tracker for Oil & Gas (Drilling)",
    tagline: "CRM-envisioned pipeline tracking for drilling program bids.",
    description:
      "A CRM-envisioned solution that gives drilling program sales teams a single pipeline view of opportunities, bid stages, and rig assignments from qualification through contract award.",
    industries: ["Oil & Gas"],
    businessArea: "Sales & Commercial",
    platform: "crmpp",
    modules: {
      crmpp: ["CRM / Power Platform", "Power BI / Dataverse"],
    },
    kpis: [
      { label: "Bid Cycle Time Reduced", value: 65 },
      { label: "Pipeline Visibility Improved", value: 92 },
      { label: "Forecast Accuracy Improved", value: 78 },
      { label: "Manual Reporting Reduced", value: 85 },
    ],
    factSheet: { type: "Envisioned solution", updated: "Jun/2026" },
    featured: true,
    galleryCount: 6,
  },
  {
    slug: "production-planning-cockpit",
    title: "Production Planning Cockpit",
    tagline: "Shop-floor scheduling and capacity view for plant managers.",
    description:
      "Gives plant managers a real-time cockpit over production schedules, machine capacity, and material availability, sourced directly from Dynamics 365 Finance & Operations.",
    industries: ["Manufacturing"],
    businessArea: "Supply Chain & Operations",
    platform: "d365fo",
    modules: {
      d365fo: ["Production Control", "Master Planning", "Warehouse Management"],
    },
    kpis: [
      { label: "Schedule Adherence Improved", value: 88 },
      { label: "Planning Time Reduced", value: 72 },
      { label: "Downtime Visibility Improved", value: 90 },
      { label: "Material Shortages Reduced", value: 60 },
    ],
    factSheet: { type: "Built in-house", updated: "May/2026" },
    galleryCount: 7,
  },
  {
    slug: "claims-intake-automation",
    title: "Claims Intake Automation",
    tagline: "Automated intake and triage for regulated claims workflows.",
    description:
      "Digitises first-notice-of-loss and prior-authorisation intake with automated document capture, compliance checks, and case routing for regulated claims teams.",
    industries: ["Financial Services", "Healthcare"],
    businessArea: "Compliance",
    platform: "crmpp",
    modules: {
      crmpp: ["Power Automate", "CRM / Power Platform", "AI Builder"],
    },
    kpis: [
      { label: "Intake Time Reduced", value: 75 },
      { label: "Compliance Exceptions Reduced", value: 68 },
      { label: "Case Routing Accuracy Improved", value: 91 },
      { label: "Audit Prep Time Reduced", value: 80 },
    ],
    factSheet: { type: "Envisioned solution", updated: "Apr/2026" },
    galleryCount: 5,
  },
  {
    slug: "crop-yield-trade-reference",
    title: "Crop Yield & Trade Reference Dashboard",
    tagline: "Yield forecasting joined with live commodity trade references.",
    description:
      "Combines field-level yield forecasts with live commodity trade reference pricing so agribusiness trading desks can plan procurement and hedging in one view.",
    industries: ["Agribusiness"],
    businessArea: "Supply Chain & Operations",
    platform: "both",
    modules: {
      d365fo: ["Commodity Trading & Risk Management"],
      crmpp: ["Power BI / Dataverse"],
    },
    kpis: [
      { label: "Forecast Turnaround Reduced", value: 70 },
      { label: "Pricing Data Freshness Improved", value: 95 },
      { label: "Manual Reconciliation Reduced", value: 66 },
    ],
    factSheet: { type: "Built in-house", updated: "Mar/2026" },
    galleryCount: 6,
  },
  {
    slug: "field-technician-dispatch",
    title: "Field Technician Dispatch",
    tagline: "Skill-based dispatch and live crew tracking for outage response.",
    description:
      "Routes field technicians to outage and maintenance jobs based on skill, location, and priority, with a live map view for dispatch supervisors.",
    industries: ["Utilities"],
    businessArea: "Sales & Commercial",
    platform: "crmpp",
    modules: {
      crmpp: ["Field Service", "CRM / Power Platform"],
    },
    kpis: [
      { label: "Dispatch Time Reduced", value: 62 },
      { label: "First-Time Fix Rate Improved", value: 74 },
      { label: "Crew Utilization Improved", value: 58 },
    ],
    factSheet: { type: "Envisioned solution", updated: "Jul/2026" },
    galleryCount: 5,
  },
  {
    slug: "employee-onboarding-hub",
    title: "Employee Onboarding Hub",
    tagline: "Guided new-hire journeys synced with core HR records.",
    description:
      "A guided new-hire journey covering documentation, equipment requests, and training sign-off, kept in sync with core HR records in Dynamics 365 F&O.",
    industries: ["Retail", "Manufacturing", "Utilities"],
    businessArea: "HR",
    platform: "d365fo",
    modules: {
      d365fo: ["Human Resources", "Talent"],
    },
    kpis: [
      { label: "Time to Productivity Reduced", value: 55 },
      { label: "Paperwork Reduced", value: 82 },
      { label: "New-Hire Satisfaction Improved", value: 76 },
    ],
    factSheet: { type: "Built in-house", updated: "Feb/2026" },
    galleryCount: 4,
  },
  {
    slug: "it-asset-ticket-tracker",
    title: "IT Asset & Ticket Tracker",
    tagline: "Unified asset registry with self-service ticketing.",
    description:
      "Gives IT teams a unified view of hardware and software assets alongside a self-service ticketing experience for end users, cutting resolution times.",
    industries: ["Financial Services", "Healthcare", "Retail"],
    businessArea: "IT & Digital",
    platform: "crmpp",
    modules: {
      crmpp: ["CRM / Power Platform", "Power Automate"],
    },
    kpis: [
      { label: "Ticket Resolution Time Reduced", value: 68 },
      { label: "Asset Data Accuracy Improved", value: 84 },
      { label: "Duplicate Tickets Reduced", value: 71 },
    ],
    factSheet: { type: "Envisioned solution", updated: "Jan/2026" },
    galleryCount: 5,
  },
  {
    slug: "financial-close-automation",
    title: "Financial Close Automation",
    tagline: "Faster period-end close with automated reconciliations.",
    description:
      "Automates account reconciliations, journal reviews, and close-task tracking to shorten period-end close cycles for finance shared-services teams.",
    industries: ["Financial Services"],
    businessArea: "Finance & Shared Services",
    platform: "d365fo",
    modules: {
      d365fo: ["General Ledger", "Financial Reporting"],
    },
    kpis: [
      { label: "Close Cycle Time Reduced", value: 58 },
      { label: "Reconciliation Effort Reduced", value: 73 },
      { label: "Reporting Errors Reduced", value: 64 },
    ],
    factSheet: { type: "Built in-house", updated: "Dec/2025" },
    galleryCount: 6,
  },
  {
    slug: "retail-replenishment-planner",
    title: "Retail Store Replenishment Planner",
    tagline: "Demand-driven replenishment across the store network.",
    description:
      "Generates store-level replenishment recommendations from point-of-sale demand signals and current inventory positions across the network.",
    industries: ["Retail"],
    businessArea: "Supply Chain & Operations",
    platform: "d365fo",
    modules: {
      d365fo: ["Inventory Management", "Master Planning", "Retail"],
    },
    kpis: [
      { label: "Stockouts Reduced", value: 61 },
      { label: "Planning Time Reduced", value: 70 },
      { label: "Excess Inventory Reduced", value: 54 },
    ],
    factSheet: { type: "Built in-house", updated: "Nov/2025" },
    galleryCount: 5,
  },
];

export function getDemoBySlug(slug: string): Demo | undefined {
  return demos.find((demo) => demo.slug === slug);
}

export function getRelatedDemos(demo: Demo, limit = 3): Demo[] {
  return demos
    .filter((candidate) => candidate.slug !== demo.slug)
    .map((candidate) => {
      let score = 0;
      if (candidate.businessArea === demo.businessArea) score += 2;
      if (candidate.platform === demo.platform) score += 1;
      if (candidate.industries.some((industry) => demo.industries.includes(industry))) score += 1;
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
