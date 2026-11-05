import { useEffect, useState, type FormEvent } from "react";
import { VARIETIES, varietyById } from "@/data/guide";
import { TASKS, useJournal, type Planting } from "@/lib/journal";
import { addDays } from "date-fns";
import { daysFromSow, formatShort, parseISODateLocal, phaseLabel, toDateInputValue } from "@/lib/plan";

const fieldClass =
  "h-11 w-full rounded-md border border-line bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea";

export function JournalPanel() {
  const plantings = useJournal((state) => state.plantings);
  const addPlanting = useJournal((state) => state.addPlanting);
  const [today, setToday] = useState<Date | null>(null);
  const [varietyId, setVarietyId] = useState(VARIETIES[0].id);
  const [sowDate, setSowDate] = useState("");
  const [bed, setBed] = useState("");
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setSowDate(toDateInputValue(now));
  }, []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!varietyById(varietyId)) {
      setFormError("Choose a variety.");
      return;
    }
    if (!parseISODateLocal(sowDate)) {
      setFormError("Choose a sowing date.");
      return;
    }
    if (plantings.length >= 24) {
      setFormError("The journal holds 24 sowings. Remove one to add another.");
      return;
    }
    addPlanting({ varietyId, sowDate, bed, notes });
    setBed("");
    setNotes("");
    setFormError("");
  }

  return (
    <section id="journal" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="max-w-2xl">
          <p className="font-display text-lg text-pea italic">Your rows</p>
          <h2 className="mt-2 text-3xl text-ink sm:text-4xl">A journal that stays on this device</h2>
          <p className="mt-3 text-muted">
            Log a sowing and the page counts days to the catalog harvest. Nothing is sent anywhere. Clearing
            this browser clears the notes.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border border-line bg-card p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              Variety
              <select
                className={`${fieldClass} mt-2`}
                value={varietyId}
                onChange={(event) => setVarietyId(event.target.value)}
              >
                <optgroup label="Shelling">
                  {VARIETIES.filter((item) => item.type === "shelling").map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Snap">
                  {VARIETIES.filter((item) => item.type === "snap").map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Snow">
                  {VARIETIES.filter((item) => item.type === "snow").map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </label>
            <label className="text-sm font-medium text-ink">
              Sowing date
              <input
                className={`${fieldClass} mt-2`}
                type="date"
                value={sowDate}
                onChange={(event) => setSowDate(event.target.value)}
                required
              />
            </label>
          </div>
          <label className="text-sm font-medium text-ink">
            Bed or pot
            <input
              className={`${fieldClass} mt-2`}
              value={bed}
              onChange={(event) => setBed(event.target.value)}
              placeholder="North row, east fence"
              maxLength={80}
            />
          </label>
          <label className="text-sm font-medium text-ink">
            Note
            <textarea
              className="mt-2 min-h-24 w-full rounded-md border border-line bg-paper px-3 py-2 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Inoculant batch, how thick you sowed, what the soil felt like."
              maxLength={400}
            />
          </label>
          {formError ? (
            <p className="text-sm font-medium text-danger" role="alert">
              {formError}
            </p>
          ) : null}
          <button
            type="submit"
            className="h-11 rounded-md bg-pea px-4 text-sm font-medium text-paper outline-none hover:bg-pea-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea"
          >
            Log this sowing
          </button>
        </form>

        {plantings.length === 0 ? (
          <p className="mt-6 max-w-2xl text-muted">
            No sowings yet. Add the row the day you plant it. The harvest estimate uses the variety’s catalog
            days, counted from that date.
          </p>
        ) : today ? (
          <ul className="mt-6 grid gap-3">
            {plantings.map((planting) => (
              <PlantingCard key={planting.id} planting={planting} today={today} />
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-muted">Opening the journal.</p>
        )}
      </div>
    </section>
  );
}

function PlantingCard({ planting, today }: { planting: Planting; today: Date }) {
  const variety = varietyById(planting.varietyId);
  const removePlanting = useJournal((state) => state.removePlanting);
  const toggleTask = useJournal((state) => state.toggleTask);
  const setNotes = useJournal((state) => state.setNotes);
  const [confirming, setConfirming] = useState(false);
  const elapsed = daysFromSow(planting.sowDate, today);
  const sow = parseISODateLocal(planting.sowDate);

  if (!variety || elapsed === null || !sow) {
    return (
      <li className="rounded-2xl border border-line bg-card p-5">
        <p className="text-muted">This entry is missing its variety or date.</p>
        <button
          type="button"
          className="mt-3 h-11 rounded-md px-3 text-sm font-medium text-danger"
          onClick={() => removePlanting(planting.id)}
        >
          Remove it
        </button>
      </li>
    );
  }

  const harvest = addDays(sow, variety.days);
  const done = TASKS.filter((task) => planting.tasks?.[task.id]).length;

  return (
    <li className="rounded-2xl border border-line bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium capitalize text-pea">{variety.type}</p>
          <h3 className="text-2xl text-ink">{variety.name}</h3>
          <p className="mt-1 text-sm text-muted">
            {planting.bed ? `${planting.bed} · ` : ""}
            Sown {formatShort(sow, today)}
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-medium tabular-nums text-ink">
            {elapsed > 0 ? `Day ${elapsed}` : phaseLabel(elapsed, variety.days)}
          </p>
          {elapsed > 0 ? <p className="text-sm text-muted">{phaseLabel(elapsed, variety.days)}</p> : null}
          <p className="mt-1 text-sm text-ink">Pods around {formatShort(harvest, today)}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted">
        {done} of {TASKS.length} done
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {TASKS.map((task) => {
          const on = Boolean(planting.tasks?.[task.id]);
          return (
            <li key={task.id}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggleTask(planting.id, task.id)}
                className={
                  "h-11 rounded-md border px-3 text-sm font-medium outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " +
                  (on ? "border-pea bg-pea text-paper" : "border-line bg-paper text-ink")
                }
              >
                {task.label}
              </button>
            </li>
          );
        })}
      </ul>

      <label className="mt-4 block text-sm font-medium text-ink">
        Note
        <textarea
          className="mt-2 min-h-20 w-full rounded-md border border-line bg-paper px-3 py-2 font-normal text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea"
          defaultValue={planting.notes}
          key={planting.notes}
          maxLength={400}
          onBlur={(event) => {
            if (event.target.value !== planting.notes) setNotes(planting.id, event.target.value);
          }}
        />
      </label>

      {confirming ? (
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            className="h-11 rounded-md bg-ink px-4 text-sm font-medium text-paper"
            onClick={() => removePlanting(planting.id)}
          >
            Remove this sowing
          </button>
          <button
            type="button"
            className="h-11 rounded-md border border-line px-4 text-sm font-medium text-ink"
            onClick={() => setConfirming(false)}
          >
            Keep it
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="mt-3 h-11 rounded-md px-1 text-sm font-medium text-muted hover:text-ink"
          onClick={() => setConfirming(true)}
        >
          Remove
        </button>
      )}
    </li>
  );
}
