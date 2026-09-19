import { ShieldCheck } from "lucide-react";

import { amenityGroups } from "@/data/campInfo";
import { SectionHeading } from "@/components/shared/SectionHeading";

/**
 * Sekce "O kempu" – přehled vybavení a aktivit areálu (relax, půjčovna,
 * letní kino, program pro děti, sportovní a herní zábava).
 */
export function AmenitiesShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="O kempu"
          title="Moderní a bezpečný areál pro celou rodinu"
          subtitle="Rodinná pohoda se tu potkává se sportovním vyžitím a zábavou. Celý areál je oplocen a střežen kamerami."
        />
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-forest-200 bg-forest-50 px-4 py-2 text-sm font-medium text-forest-700">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Oplocený a hlídaný areál
        </span>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {amenityGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.id}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-card"
            >
              <div className="inline-flex w-fit items-center justify-center rounded-xl bg-terracotta-50 p-3 text-terracotta-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-stone-900">
                {group.title}
              </h3>
              {group.description ? (
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {group.description}
                </p>
              ) : null}
              <ul className="mt-4 space-y-2 border-t border-stone-100 pt-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
