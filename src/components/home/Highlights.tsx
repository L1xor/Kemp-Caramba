import { highlights } from "@/data/campInfo";
import { SectionHeading } from "@/components/shared/SectionHeading";

/**
 * Sekce se 4 pilíři kempu – voda, sportovní zázemí, dětský program a školy.
 */
export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Proč Caramba"
        title="Čtyři pilíře, na kterých stavíme"
        subtitle="Ať jedete se stanem, chatkou nebo jako celá školní třída, v kempu Caramba najdete kompletní zázemí pro pohodovou dovolenou u vody."
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((highlight) => {
          const Icon = highlight.icon;
          return (
            <div
              key={highlight.id}
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition-shadow hover:shadow-card"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-lake-100 p-3 text-lake-700 transition-colors group-hover:bg-forest-800 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-stone-900">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
