import { demos } from "@/data/demos";
import { DemoCard } from "@/components/demo-card";
import { CatalogExplorer } from "@/components/catalog-explorer";

export default function Home() {
  const featured = demos.filter((demo) => demo.featured);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold text-accent">MOBIZ</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
          Business Applications Demo Portal
        </h1>
        <p className="mt-3 text-muted">
          Explore ready-to-show Dynamics 365 Finance &amp; Operations and CRM/Power Platform
          demos across every industry we serve — filter by industry, business area, or platform
          to find the right story for your next conversation.
        </p>
      </div>

      {featured.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
            Trending demos
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((demo) => (
              <DemoCard key={demo.slug} demo={demo} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
          All demos
        </h2>
        <CatalogExplorer demos={demos} />
      </section>
    </div>
  );
}
