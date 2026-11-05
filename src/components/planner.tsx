import { useEffect, useState } from "react";
import { VARIETIES, varietyById } from "@/data/guide";
import { useJournal } from "@/lib/journal";
import {
  buildPlan,
  dateInputFromMonthDay,
  monthDayFromDateInput,
  ZONES,
  type ZoneId,
} from "@/lib/plan";

const fieldClass =
  "h-11 w-full rounded-md border border-line bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea";

export function Planner() {
  const zoneId = useJournal((state) => state.zoneId);
  const setZoneId = useJournal((state) => state.setZoneId);
  const lastFrost = useJournal((state) => state.lastFrost);
  const firstFrost = useJournal((state) => state.firstFrost);
  const setLastFrost = useJournal((state) => state.setLastFrost);
  const setFirstFrost = useJournal((state) => state.setFirstFrost);
  const plannerVarietyId = useJournal((state) => state.plannerVarietyId);
  const setPlannerVarietyId = useJournal((state) => state.setPlannerVarietyId);
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  const zone = ZONES.find((item) => item.id === zoneId) ?? ZONES[3];
  const variety = varietyById(plannerVarietyId);
  const plan = today
    ? buildPlan({
        zoneId,
        today,
        lastFrostMD: lastFrost,
        firstFrostMD: firstFrost,
        variety: variety ? { name: variety.name, days: variety.days } : null,
      })
    : null;
  const year = today?.getFullYear() ?? new Date().getFullYear();

  return (
    <section id="planner" className="mx-auto max-w-5xl px-5 py-12">
      <div className="max-w-2xl">
        <p className="font-display text-lg text-pea italic">When to sow</p>
        <h2 className="mt-2 text-3xl text-ink sm:text-4xl">A window, not a single date</h2>
        <p className="mt-3 text-muted">
          Peas are a cool-season crop. Pick the zone closest to home, or replace the typical frost date
          with yours. The page dates the sowing from that.
        </p>
      </div>

      <div className="mt-8">
        <p id="zone-label" className="text-sm font-medium text-ink">
          USDA zone
        </p>
        <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8" role="group" aria-labelledby="zone-label">
          {ZONES.map((item) => {
            const selected = item.id === zoneId;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setZoneId(item.id as ZoneId)}
                className={
                  "h-11 rounded-md border text-sm font-medium outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " +
                  (selected
                    ? "border-pea bg-pea text-paper"
                    : "border-line bg-card text-ink hover:border-pea")
                }
              >
                {item.id}
              </button>
            );
          })}
        </div>
      </div>

      {zone.winter ? (
        <p className="mt-4 max-w-2xl text-sm text-muted">
          In zones 9 and 10 the crop runs through the cool months. A last-frost date does not set the
          sowing window, so those fields stay hidden.
        </p>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-ink">
            Last spring frost
            <span className="mt-1 block font-normal text-muted">Optional. Month and day are what count.</span>
            <input
              className={`${fieldClass} mt-2`}
              type="date"
              value={dateInputFromMonthDay(lastFrost, year)}
              onChange={(event) => setLastFrost(monthDayFromDateInput(event.target.value))}
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            First fall frost
            <span className="mt-1 block font-normal text-muted">Optional. Used for the fall window.</span>
            <input
              className={`${fieldClass} mt-2`}
              type="date"
              value={dateInputFromMonthDay(firstFrost, year)}
              onChange={(event) => setFirstFrost(monthDayFromDateInput(event.target.value))}
            />
          </label>
          {(lastFrost || firstFrost) && (
            <button
              type="button"
              className="h-11 justify-self-start rounded-md px-3 text-sm font-medium text-pea underline-offset-2 hover:underline"
              onClick={() => {
                setLastFrost("");
                setFirstFrost("");
              }}
            >
              Use typical zone dates
            </button>
          )}
        </div>
      )}

      <label className="mt-4 block max-w-md text-sm font-medium text-ink">
        Estimate a harvest for
        <select
          className={`${fieldClass} mt-2`}
          value={plannerVarietyId}
          onChange={(event) => setPlannerVarietyId(event.target.value)}
        >
          <option value="">No variety selected</option>
          {VARIETIES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} · {item.days} days
            </option>
          ))}
        </select>
      </label>

      <div className="mt-8 rounded-2xl border border-line bg-card p-5" aria-live="polite">
        {plan ? (
          <>
            <h3 className="text-2xl text-ink">{plan.headline}</h3>
            <p className="mt-2 max-w-2xl text-muted">{plan.summary}</p>
            <p className="mt-2 max-w-2xl text-sm text-muted">{plan.placeNote}</p>
            <ul className="mt-5 grid gap-3">
              {plan.windows.map((item) => (
                <li key={item.id} className="rounded-md border border-line bg-paper px-4 py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium text-ink">{item.label}</p>
                    <p
                      className={
                        "text-sm font-medium " +
                        (item.status === "now" ? "text-pea" : item.status === "marginal" ? "text-muted" : "text-ink")
                      }
                    >
                      {item.statusLabel}
                    </p>
                  </div>
                  <p className="mt-1 font-display text-xl text-ink">{item.rangeLabel}</p>
                  <p className="mt-2 text-sm text-muted">{item.detail}</p>
                  {item.harvestNote ? <p className="mt-2 text-sm text-ink">{item.harvestNote}</p> : null}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl text-sm text-muted">{plan.soil}</p>
          </>
        ) : (
          <p className="text-muted">Checking the calendar for this zone.</p>
        )}
      </div>
    </section>
  );
}
