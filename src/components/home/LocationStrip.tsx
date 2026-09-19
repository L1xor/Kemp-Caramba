import { locationFacts } from "@/data/campInfo";

/**
 * Pruh s krátkým úvodním textem o okolí kempu a rychlými fakty (jezero,
 * lanový park, obchody), umístěný hned pod hero sekcí.
 */
export function LocationStrip() {
  return (
    <section className="bg-forest-50">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">
          Kemp Caramba se nachází v malebném Hamru na Jezeře
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Nádherné Hamerské jezero s písčitou pláží je od kempu vzdáleno pouhých
          800 m. Přímo na jezeře si můžete užít pohodu na šlapadlech, lodičkách
          či paddleboardech. V blízkosti najdete také lanový park, cyklostezku,
          vodní lyžování a kompletní zázemí obce.
        </p>

        <dl className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          {locationFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lake-100 text-lake-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-stone-800">{fact.value}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
