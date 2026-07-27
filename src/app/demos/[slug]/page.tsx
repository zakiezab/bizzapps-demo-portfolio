import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { Button, Card, Chip, ProgressBar } from "@heroui/react";

import { demos, getDemoBySlug, getRelatedDemos, platformMeta } from "@/data/demos";
import { businessAreaTheme } from "@/lib/business-area-theme";
import { DemoCard } from "@/components/demo-card";
import { ArrowLeft, Download, Play } from "lucide-react";

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) return {};
  return { title: demo.title, description: demo.tagline };
}

export default async function DemoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) notFound();

  const platform = platformMeta[demo.platform];
  const theme = businessAreaTheme[demo.businessArea];
  const related = getRelatedDemos(demo);
  const modules = [
    ...(demo.modules.d365fo ?? []).map((name) => ({ name, group: "Dynamics 365 F&O" })),
    ...(demo.modules.crmpp ?? []).map((name) => ({ name, group: "CRM / Power Platform" })),
  ];

  return (
    <div>
      <div className="border-b border-separator bg-surface/40">
        <div className="mx-auto max-w-[1400px] px-6 py-10">
          <nav className="mb-4 text-sm text-muted">
            <NextLink className="hover:text-foreground" href="/">
              Demo Portal
            </NextLink>
            <span className="mx-2">/</span>
            <span className="text-foreground">{demo.title}</span>
          </nav>

          <div className="mb-4 flex flex-wrap gap-2">
            {demo.industries.map((industry) => (
              <Chip key={industry} color="default" size="sm" variant="soft">
                {industry}
              </Chip>
            ))}
            <Chip color="danger" size="sm" variant="soft">
              {demo.businessArea}
            </Chip>
            <Chip color="accent" size="sm" variant="soft">
              {platform.label}
            </Chip>
          </div>

          <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            {demo.title}
          </h1>
          <p className="mt-3 max-w-2xl text-muted">{demo.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button isDisabled size="md" variant="primary">
              <Play className="h-4 w-4" />
              Open Demo
            </Button>
            <Button isDisabled size="md" variant="outline">
              <Download className="h-4 w-4" />
              Download one-pager
            </Button>
            <p className="text-xs text-muted">Demo environments are provisioned on request.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-3">
        <div className="flex flex-col gap-10 lg:col-span-2">
          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              About this demo
            </h2>
            <p className="leading-relaxed text-foreground/90">{demo.description}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Platform &amp; modules used
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {demo.modules.d365fo && (
                <Card variant="secondary">
                  <Card.Content className="flex flex-col gap-2 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="h-2 w-2 rounded-full bg-[oklch(0.62_0.19_295)]" />
                      Dynamics 365 F&amp;O
                    </div>
                    <ul className="flex flex-col gap-1.5 text-sm text-muted">
                      {demo.modules.d365fo.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
              )}
              {demo.modules.crmpp && (
                <Card variant="secondary">
                  <Card.Content className="flex flex-col gap-2 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      CRM / Power Platform
                    </div>
                    <ul className="flex flex-col gap-1.5 text-sm text-muted">
                      {demo.modules.crmpp.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
              )}
              {modules.length === 0 && (
                <p className="text-sm text-muted">No modules listed for this demo yet.</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Gallery / {demo.galleryCount} photos
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: demo.galleryCount }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-xl border border-separator"
                  style={{
                    backgroundImage: `radial-gradient(circle at ${20 + ((index * 17) % 60)}% ${
                      15 + ((index * 23) % 50)
                    }%, color-mix(in oklab, ${theme.glow} 45%, transparent), transparent 65%)`,
                    backgroundColor: "var(--surface)",
                  }}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-6">
          <Card variant="secondary">
            <Card.Content className="flex flex-col gap-4 p-5">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
                KPIs impacted
              </h2>
              {demo.kpis.map((kpi) => (
                <div key={kpi.label} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span>{kpi.label}</span>
                    <span className="font-semibold text-accent">{kpi.value}%</span>
                  </div>
                  <ProgressBar aria-label={kpi.label} color="danger" size="sm" value={kpi.value}>
                    <ProgressBar.Track>
                      <ProgressBar.Fill />
                    </ProgressBar.Track>
                  </ProgressBar>
                </div>
              ))}
            </Card.Content>
          </Card>

          <Card variant="secondary">
            <Card.Content className="flex flex-col gap-3 p-5 text-sm">
              <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                Fact sheet
              </h2>
              <FactRow label="Type" value={demo.factSheet.type} />
              <FactRow label="Platform" value={platform.label} />
              <FactRow label="Business area" value={demo.businessArea} />
              <FactRow label="Industries" value={demo.industries.join(", ")} />
              <FactRow label="Updated" value={demo.factSheet.updated} />
            </Card.Content>
          </Card>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mx-auto max-w-[1400px] px-6 pb-16">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
            Related demos
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <DemoCard key={item.slug} demo={item} />
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1400px] px-6 pb-16">
        <NextLink className="inline-flex items-center gap-1.5 text-sm font-medium text-accent" href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to all demos
        </NextLink>
      </div>
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-separator pt-3 first:border-t-0 first:pt-0">
      <span className="text-muted">{label}</span>
      <span className="text-right font-medium">{value}</span>
    </div>
  );
}
