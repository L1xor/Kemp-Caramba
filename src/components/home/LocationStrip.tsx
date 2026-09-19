import { locationFacts } from "@/data/campInfo";

/**
 * Pruh s krátkým úvodním textem o okolí kempu a rychlými fakty (jezero,
 * lanový park, obchody, GPS), umístěný hned pod hero sekcí.
 */
export function LocationStrip() {
  return (
    <section className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-stone-900 sm:text-2xl">
            Kemp Caramba se nachází v malebném Hamru na Jezeře
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
            Nádherné Hamerské jezero s písčitou pláží je od kempu vzdáleno pouhých
            800 m. Přímo na jezeře si můžete užít pohodu na šlapadlech, lodičkách
            či paddleboardech. V blízkosti najdete také lanový park, cyklostezku,
            vodní lyžování a kompletní zázemí obce.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {locationFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-lake-100 text-lake-700">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-stone-800">{fact.value}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
