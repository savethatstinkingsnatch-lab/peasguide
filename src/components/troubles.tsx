import { useMemo, useState } from "react";
import { SEVERITY_LABEL, TROUBLES } from "@/data/guide";

export function Troubles() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(TROUBLES[0]?.id ?? null);
  const needle = query.trim().toLowerCase();

  const matches = useMemo(() => {
    if (!needle) return TROUBLES;
    return TROUBLES.filter((item) =>
      [item.name, item.signs, item.fix, item.prevent].join(" ").toLowerCase().includes(needle),
    );
  }, [needle]);

  return (
    <section id="troubles" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="max-w-2xl">
          <p className="font-display text-lg text-pea italic">When something looks wrong</p>
          <h2 className="mt-2 text-3xl text-ink sm:text-4xl">Troubles, named plainly</h2>
          <p className="mt-3 text-muted">
            Most pea problems are timing, water, or a pest you can see. Wilt from the base is the one to
            take seriously and remove.
          </p>
        </div>

        <label className="mt-8 block max-w-md text-sm font-medium text-ink">
          Search signs or names
          <input
            className="mt-2 h-11 w-full rounded-md border border-line bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Aphids, mildew, empty pods"
            type="search"
          />
        </label>

        {matches.length === 0 ? (
          <p className="mt-6 text-muted">Nothing matches. Try aphid, mildew, or wilt.</p>
        ) : (
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {matches.map((item) => {
              const open = openId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-4 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span>
                      <span className="block font-medium text-ink">{item.name}</span>
                      <span
                        className={
                          "mt-1 block text-sm " + (item.severity === "serious" ? "font-medium text-danger" : "text-muted")
                        }
                      >
                        {SEVERITY_LABEL[item.severity]}
                      </span>
                    </span>
                    <span className="pt-1 text-sm font-medium text-pea">{open ? "Close" : "Read"}</span>
                  </button>
                  {open ? (
                    <div className="grid gap-3 pb-5 sm:grid-cols-3">
                      <p>
                        <span className="block text-sm font-medium text-ink">What you see</span>
                        <span className="mt-1 block text-sm text-muted">{item.signs}</span>
                      </p>
                      <p>
                        <span className="block text-sm font-medium text-ink">What to do</span>
                        <span className="mt-1 block text-sm text-muted">{item.fix}</span>
                      </p>
                      <p>
                        <span className="block text-sm font-medium text-ink">Next time</span>
                        <span className="mt-1 block text-sm text-muted">{item.prevent}</span>
                      </p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
