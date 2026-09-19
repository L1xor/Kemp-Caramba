import { ExternalLink } from "lucide-react";

import { locationFacts } from "@/data/campInfo";
import { contactInfo } from "@/data/siteConfig";

/**
 * Pruh s rychlými fakty o okolí kempu (jezero, lanový park, obchody, GPS)
 * a odkazy na mapy, umístěný hned pod hero sekcí.
 */
export function LocationStrip() {
  return (
    <section className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl font-semibold text-stone-900 sm:text-2xl">
              Kemp Caramba se nachází v malebném Hamru na Jezeře
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base">
              Nádherné Hamerské jezero s písčitou pláží je od kempu vzdáleno pouhých
              800 m. Přímo na jezeře si můžete užít pohodu na šlapadlech, lodičkách
              či paddleboardech. V blízkosti najdete také lanový park, cyklostezku,
              vodní lyžování a kompletní zázemí obce.
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium text-forest-700">
              <a
                href={contactInfo.mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-forest-900"
              >
                Zobrazit na Mapy.cz
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-forest-900"
              >
                Zobrazit na Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:w-auto lg:flex-shrink-0">
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
                    <dd className="text-sm font-medium text-stone-800">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
