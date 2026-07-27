import type { BusinessArea } from "@/data/demos";

export const businessAreaTheme: Record<BusinessArea, { glow: string; initials: string }> = {
  "Sales & Commercial": { glow: "oklch(0.605 0.215 25.5)", initials: "SC" },
  "Supply Chain & Operations": { glow: "oklch(0.62 0.16 250)", initials: "SO" },
  "Finance & Shared Services": { glow: "oklch(0.65 0.16 155)", initials: "FS" },
  HR: { glow: "oklch(0.75 0.15 80)", initials: "HR" },
  Compliance: { glow: "oklch(0.58 0.19 300)", initials: "CO" },
  "IT & Digital": { glow: "oklch(0.7 0.13 210)", initials: "IT" },
};
