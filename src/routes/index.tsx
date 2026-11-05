import { createFileRoute } from "@tanstack/react-router";
import { useRehydrateJournal } from "@/lib/journal";
import { FACTS } from "@/data/guide";
import { JournalPanel } from "@/components/journal-panel";
import { Method } from "@/components/method";
import { Planner } from "@/components/planner";
import { Troubles } from "@/components/troubles";
import { Varieties } from "@/components/varieties";

const LINKS = [
  { href: "#planner", label: "When" },
  { href: "#varieties", label: "Varieties" },
  { href: "#method", label: "Method" },
  { href: "#troubles", label: "Troubles" },
  { href: "#journal", label: "Journal" },
];

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useRehydrateJournal();

  return (
    <div id="top">
      <header className="sticky top-0 z-20 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <a href="#top" className="font-display text-xl text-ink">
            Pea Plot
          </a>
          <nav aria-label="Guide" className="flex flex-wrap gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex h-11 items-center rounded-md px-3 text-sm font-medium text-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-5 pt-12 pb-4">
          <p className="font-display text-lg text-pea italic">
            A field guide · <span className="text-ink">Pisum sativum</span>
          </p>
          <h1 className="mt-3 max-w-3xl text-5xl text-ink sm:text-6xl">Growing peas</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Shelling, snap, and snow peas want cool weather, a trellis put in early, and a picker who does
            not wait. Sugar starts turning to starch the hour the pod comes off the vine.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {FACTS.slice(0, 4).map((fact) => (
              <div key={fact.label} className="bg-card px-4 py-4">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Planner />
        <Varieties />
        <Method />
        <Troubles />
        <JournalPanel />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-8">
          <p className="max-w-2xl text-sm text-muted">
            Pea Plot is a field guide, not a substitute for a local extension frost table. Zone dates are
            typical, and variety days follow common catalog listings. Your soil, the week’s weather, and the
            seed lot will move the harvest.
          </p>
        </div>
      </footer>
    </div>
  );
}
