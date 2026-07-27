import NextLink from "next/link";
import { Card, Chip } from "@heroui/react";

import type { Demo } from "@/data/demos";
import { platformMeta } from "@/data/demos";
import { businessAreaTheme } from "@/lib/business-area-theme";
import { ArrowRight } from "lucide-react";

export function DemoCard({ demo }: { demo: Demo }) {
  const theme = businessAreaTheme[demo.businessArea];
  const platform = platformMeta[demo.platform];

  return (
    <NextLink className="group block h-full" href={`/demos/${demo.slug}`}>
      <Card
        className="flex h-full flex-col overflow-hidden p-0 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_0_1px_var(--accent)]"
        variant="secondary"
      >
        <div
          className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-background"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 15%, color-mix(in oklab, ${theme.glow} 55%, transparent), transparent 60%), linear-gradient(color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)`,
            backgroundSize: "auto, 28px 28px, 28px 28px",
          }}
        >
          {demo.featured && (
            <Chip className="absolute left-3 top-3" color="danger" size="sm" variant="primary">
              Featured
            </Chip>
          )}
          <span
            className="text-6xl font-black tracking-tight opacity-90"
            style={{ color: theme.glow }}
          >
            {theme.initials}
          </span>
        </div>

        <Card.Content className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
            <span className={`h-2 w-2 rounded-full ${platform.dotClassName}`} />
            {platform.label}
          </div>

          <div>
            <Card.Title className="text-base leading-snug">{demo.title}</Card.Title>
            <Card.Description className="mt-1 line-clamp-2 text-sm">
              {demo.tagline}
            </Card.Description>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <Chip color="default" size="sm" variant="soft">
              {demo.businessArea}
            </Chip>
            {demo.industries.slice(0, 2).map((industry) => (
              <Chip key={industry} color="default" size="sm" variant="soft">
                {industry}
              </Chip>
            ))}
            {demo.industries.length > 2 && (
              <Chip color="default" size="sm" variant="soft">
                +{demo.industries.length - 2}
              </Chip>
            )}
          </div>
        </Card.Content>

        <Card.Footer className="flex items-center justify-between border-t border-separator px-5 py-3 text-sm font-medium text-accent">
          View demo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Card.Footer>
      </Card>
    </NextLink>
  );
}
