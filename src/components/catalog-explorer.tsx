"use client";

import { useMemo, useState } from "react";
import { Button, EmptyState } from "@heroui/react";

import type { BusinessArea, Demo, Industry, Platform } from "@/data/demos";
import { businessAreas, industries, platformMeta } from "@/data/demos";
import { DemoCard } from "@/components/demo-card";

const ALL = "All" as const;

export function CatalogExplorer({ demos }: { demos: Demo[] }) {
  const [industry, setIndustry] = useState<Industry | typeof ALL>(ALL);
  const [businessArea, setBusinessArea] = useState<BusinessArea | typeof ALL>(ALL);
  const [platforms, setPlatforms] = useState<Set<Platform>>(new Set());

  const togglePlatform = (platform: Platform) => {
    setPlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(platform)) next.delete(platform);
      else next.add(platform);
      return next;
    });
  };

  const filtered = useMemo(() => {
    return demos.filter((demo) => {
      if (industry !== ALL && !demo.industries.includes(industry)) return false;
      if (businessArea !== ALL && demo.businessArea !== businessArea) return false;
      if (platforms.size > 0 && !platforms.has(demo.platform)) return false;
      return true;
    });
  }, [demos, industry, businessArea, platforms]);

  const hasActiveFilters = industry !== ALL || businessArea !== ALL || platforms.size > 0;

  const clearFilters = () => {
    setIndustry(ALL);
    setBusinessArea(ALL);
    setPlatforms(new Set());
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
          <Button
            size="sm"
            variant={industry === ALL ? "primary" : "outline"}
            onPress={() => setIndustry(ALL)}
          >
            All Industries
          </Button>
          {industries.map((item) => (
            <Button
              key={item}
              className="shrink-0"
              size="sm"
              variant={industry === item ? "primary" : "outline"}
              onPress={() => setIndustry(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-start justify-between gap-3 border-t border-separator pt-4">
          <div className="scrollbar-none flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={businessArea === ALL ? "secondary" : "ghost"}
              onPress={() => setBusinessArea(ALL)}
            >
              All Business Areas
            </Button>
            {businessAreas.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={businessArea === item ? "secondary" : "ghost"}
                onPress={() => setBusinessArea(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(Object.keys(platformMeta) as Platform[]).map((key) => {
              const meta = platformMeta[key];
              const active = platforms.has(key);
              return (
                <button
                  key={key}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "border-accent bg-accent-soft text-accent-soft-foreground"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                  type="button"
                  onClick={() => togglePlatform(key)}
                >
                  <span className={`h-2 w-2 rounded-full ${meta.dotClassName}`} />
                  {meta.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">
          {filtered.length} {filtered.length === 1 ? "demo" : "demos"}
        </p>
        {hasActiveFilters && (
          <Button size="sm" variant="ghost" onPress={clearFilters}>
            Clear filters
          </Button>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState className="rounded-2xl border border-dashed border-separator py-16 text-center">
          <p className="font-medium text-foreground">No demos match these filters</p>
          <p className="mt-1 text-sm text-muted">Try clearing a filter to see more results.</p>
          <Button className="mt-4" size="sm" variant="outline" onPress={clearFilters}>
            Clear filters
          </Button>
        </EmptyState>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((demo) => (
            <DemoCard key={demo.slug} demo={demo} />
          ))}
        </div>
      )}
    </div>
  );
}
