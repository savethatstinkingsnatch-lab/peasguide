import { useState } from "react";
import { CHAPTERS, FACTS, STAGES } from "@/data/guide";

export function Method() {
  const [stageId, setStageId] = useState(STAGES[0].id);
  const stage = STAGES.find((item) => item.id === stageId) ?? STAGES[0];

  return (
    <section id="method" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="max-w-2xl">
          <p className="font-display text-lg text-pea italic">How to grow them</p>
          <h2 className="mt-2 text-3xl text-ink sm:text-4xl">From seed to the last picking</h2>
          <p className="mt-3 text-muted">
            Follow a stage if a row is already in the ground. Read the chapters if you are still choosing
            the bed.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Growth stage">
          {STAGES.map((item) => {
            const selected = item.id === stage.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setStageId(item.id)}
                className={
                  "h-11 rounded-md border px-3 text-sm font-medium outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " +
                  (selected
                    ? "border-pea bg-pea text-paper"
                    : "border-line bg-card text-ink hover:border-pea")
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <article className="mt-3 rounded-2xl border border-line bg-card p-5" aria-live="polite">
          <p className="text-sm font-medium text-pea">{stage.when}</p>
          <h3 className="mt-1 text-2xl text-ink">{stage.label}</h3>
          <p className="mt-2 max-w-2xl text-muted">{stage.watch}</p>
          <ul className="mt-4 grid gap-3">
            {stage.actions.map((action) => (
              <li key={action} className="flex gap-3 text-ink">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-pea" aria-hidden="true" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-12">
          {CHAPTERS.map((chapter, index) => (
            <article key={chapter.id} className="border-t border-line py-8 md:grid md:grid-cols-[11rem_1fr] md:gap-8">
              <p className="text-sm font-medium text-muted">
                {String(index + 1).padStart(2, "0")}
                <span className="mt-1 block font-display text-lg text-ink italic">{chapter.kicker}</span>
              </p>
              <div>
                <h3 className="text-2xl text-ink">{chapter.title}</h3>
                <p className="mt-3 max-w-2xl text-muted">{chapter.lead}</p>
                <ul className="mt-4 grid max-w-2xl gap-3">
                  {chapter.steps.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-pea" aria-hidden="true" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                {chapter.aside ? (
                  <div className="mt-5 max-w-2xl rounded-md border border-line bg-card px-4 py-3">
                    <p className="font-medium text-ink">{chapter.aside.title}</p>
                    <p className="mt-1 text-sm text-muted">{chapter.aside.body}</p>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-4 text-2xl text-ink">Numbers worth memorizing</h3>
        <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {FACTS.map((fact) => (
            <div key={fact.label} className="bg-card px-4 py-3">
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
