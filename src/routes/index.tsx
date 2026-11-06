import { createFileRoute } from "@tanstack/react-router";
import { useRehydrateJournal } from "@/lib/journal";
import { FACTS } from "@/data/guide";
import { JournalPanel } from "@/components/journal-panel";
import { Method } from "@/components/method";
import { Planner } from "@/components/planner";
import { Troubles } from "@/components/troubles";
import { Varieties } from "@/components/varieties";

const LINKS = [
  { href: "#start", label: "Start" },
  { href: "#safe", label: "Stay safe" },
  { href: "#planner", label: "When" },
  { href: "#varieties", label: "Varieties" },
  { href: "#method", label: "Method" },
  { href: "#troubles", label: "Troubles" },
  { href: "#journal", label: "Journal" },
  { href: "#glossary", label: "Glossary" },
  { href: "#about", label: "About" },
];

const START_STEPS = [
  "Sow in cool weather, as soon as the soil can be worked.",
  "Use fresh seed and pea/vetch inoculant on new ground.",
  "Plant 1 inch deep, every 1 to 2 inches.",
  "Put the trellis in the same day.",
  "Water evenly once they flower.",
  "Pick every other day.",
  "Never eat ornamental sweet pea.",
];

const GLOSSARY: { term: string; meaning: string }[] = [
  { term: "Shelling pea", meaning: "Eat the peas; discard the fibrous pod." },
  { term: "Snap pea", meaning: "Eat the whole plump pod." },
  { term: "Snow pea", meaning: "Eat the flat pod before seeds swell." },
  { term: "Inoculant", meaning: "Helpful Rhizobium bacteria coated on the seed." },
  { term: "Nodules", meaning: "Pink bumps on roots that fix nitrogen." },
  { term: "Bush", meaning: "Short plants; pea sticks are often enough." },
  { term: "Vine / pole", meaning: "Tall plants that need a trellis." },
  { term: "Powdery mildew", meaning: "White dust on leaves late in the season." },
  { term: "Open-pollinated (OP)", meaning: "Seed that grows true." },
  { term: "F1 hybrid", meaning: "A cross. Saved seed won't grow true." },
  { term: "Pea weevil", meaning: "Beetle whose larva eats inside the dry seed." },
  {
    term: "Sweet pea (Lathyrus odoratus)",
    meaning: "Poisonous flower plant — not a garden pea.",
  },
];

function StartHere() {
  return (
    <section id="start" className="mx-auto max-w-5xl px-5 py-12">
      <p className="font-display text-lg text-pea italic">Start here</p>
      <h2 className="mt-2 text-3xl text-ink sm:text-4xl">New to peas?</h2>
      <ol className="mt-6 grid max-w-2xl gap-3">
        {START_STEPS.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="w-6 shrink-0 font-medium tabular-nums text-pea">{index + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function StaySafe() {
  return (
    <section id="safe" className="mx-auto max-w-5xl px-5 pb-4">
      <div className="max-w-3xl rounded-2xl border border-danger bg-card p-5">
        <h2 className="text-2xl text-ink">Stay safe — sweet pea look-alike</h2>
        <p className="mt-3 text-ink">
          Ornamental sweet pea (<span className="italic">Lathyrus odoratus</span>) is a different plant from
          garden peas (<span className="italic">Pisum sativum</span>). Sweet pea is grown for fragrant
          flowers. Its seeds, flowers, and pods are POISONOUS. Never eat them, and never cook them 'by
          mistake.' Garden peas have edible pods (snap and snow) or edible seeds (shelling). If a packet or
          plant is sold as a flower sweet pea, do not eat any part of it. If someone may have eaten sweet pea
          seeds, call Poison Control at{" "}
          <a className="font-medium text-pea underline-offset-2 hover:underline" href="tel:18002221222">
            1-800-222-1222
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function Glossary() {
  return (
    <section id="glossary" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <p className="font-display text-lg text-pea italic">Words in this guide</p>
        <h2 className="mt-2 text-3xl text-ink sm:text-4xl">Glossary</h2>
        <dl className="mt-6 grid max-w-3xl gap-4">
          {GLOSSARY.map((entry) => (
            <div key={entry.term}>
              <dt className="font-medium text-ink">{entry.term}</dt>
              <dd className="text-muted">{entry.meaning}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <p className="font-display text-lg text-pea italic">About and disclaimer</p>
        <h2 className="mt-2 text-3xl text-ink sm:text-4xl">About this guide</h2>
        <p className="mt-4 max-w-2xl text-muted">
          This pocket guide is for learning. Check your local county extension office for frost dates and
          advice in your area. Never eat a plant sold as ornamental sweet pea. Blue and the Awesome Dudes are
          not responsible for illness, injury, or crop loss. Part of The Education Revolution pocket guide
          series.
        </p>
      </div>
    </section>
  );
}

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
          <h1 className="mt-3 max-w-3xl text-5xl text-ink sm:text-6xl">Pea Plot</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink">
            The Education Revolution Pocket Guide, Volume 22: Peas
          </p>
          <p className="mt-1 max-w-2xl text-lg text-muted">by Blue and the Awesome Dudes</p>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Shelling, snap, and snow peas want cool weather, a trellis put in early, and a picker who does
            not wait. Peas lose sweetness and quality quickly after harvest. Cool them promptly.
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

        <StartHere />
        <StaySafe />
        <Planner />
        <Varieties />
        <Method />
        <Troubles />
        <JournalPanel />
        <Glossary />
        <About />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-8">
          <p className="max-w-2xl text-sm text-muted">
            Pea Plot is a field guide, not a substitute for a local extension frost table. Zone dates are
            typical, and variety days follow common catalog listings. Your soil, the week’s weather, and the
            seed lot will move the harvest.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Privacy: This guide does not collect your name, email, or any personal information. Your plot
            journal is saved only on your own device.
          </p>
        </div>
      </footer>
    </div>
  );
}
