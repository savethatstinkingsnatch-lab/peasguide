import { useState } from "react";
import { TYPES, VARIETIES, type PeaType } from "@/data/guide";

export function Varieties() {
  const [filter, setFilter] = useState<PeaType | "all">("all");
  const shown = filter === "all" ? VARIETIES : VARIETIES.filter((item) => item.type === filter);

  return (
    <section id="varieties" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="max-w-2xl">
          <p className="font-display text-lg text-pea italic">What to grow</p>
          <h2 className="mt-2 text-3xl text-ink sm:text-4xl">Three peas, eaten three ways</h2>
          <p className="mt-3 text-muted">
            Days are what seed catalogs usually print. Your season will move them. Habit matters more than
            the name: a 6-foot vine on a 4-foot fence is a wasted packet.
          </p>
          <p className="mt-3 text-muted">
            These varieties are usually sold as open-pollinated, including Sugar Snap, but seed companies
            sometimes sell hybrids. Check that the packet says OP or heirloom, not F1, before you save seed.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {TYPES.map((type) => {
            const selected = filter === type.id;
            return (
              <button
                key={type.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(selected ? "all" : type.id)}
                className={
                  "rounded-2xl border p-5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " +
                  (selected ? "border-pea bg-pea text-paper" : "border-line bg-card text-ink")
                }
              >
                <span className={"block text-sm " + (selected ? "text-paper" : "text-muted")}>{type.aka}</span>
                <span className="mt-1 block font-display text-2xl">{type.label}</span>
                <span className={"mt-2 block text-sm " + (selected ? "text-paper" : "text-muted")}>{type.eat}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-muted">Select a type to filter the list. Select it again to show all.</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {shown.map((item) => {
            const type = TYPES.find((entry) => entry.id === item.type);
            return (
              <li key={item.id} className="rounded-2xl border border-line bg-card p-5">
                <p className="text-sm font-medium text-pea">{type?.label}</p>
                <h3 className="mt-1 text-2xl text-ink">{item.name}</h3>
                <p className="mt-2 text-sm font-medium tabular-nums text-ink">
                  {item.days} days · {item.habit === "bush" ? "Bush" : "Vine"} · {item.height}
                </p>
                <p className="mt-3 text-sm text-muted">{item.note}</p>
              </li>
            );
          })}
        </ul>

        {filter !== "all" ? (
          <p className="mt-4 max-w-2xl text-sm text-muted">
            {TYPES.find((type) => type.id === filter)?.detail}
          </p>
        ) : null}
      </div>
    </section>
  );
}
