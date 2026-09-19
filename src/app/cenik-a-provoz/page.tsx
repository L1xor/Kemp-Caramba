import type { Metadata } from "next";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { guestPolicies, openingHoursBlocks, pricingCategories } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Ceník a provoz",
  description:
    "Kompletní ceník ubytování, půjčovny sportovních potřeb a doplňkových služeb v kempu Caramba. Provozní doba a informace pro hosty.",
};

export default function CenikAProvozPage() {
  return (
    <div>
      <section className="bg-forest-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Ceník a provoz"
          title="Přehledné ceny a provozní doba na jednom místě"
          subtitle="Kompletní ceník ubytování, půjčovny i doplňkových služeb – bez skrytých poplatků a s jasnou provozní dobou po celou sezónu."
          align="center"
          light
          className="mx-auto"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex w-fit items-center justify-center rounded-xl bg-forest-100 p-3 text-forest-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-stone-900">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-stone-600">{category.description}</p>

                <ul className="mt-5 flex-1 divide-y divide-stone-100">
                  {category.rows.map((row) => (
                    <li key={row.label} className="flex items-start justify-between gap-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-stone-800">{row.label}</p>
                        {row.note ? (
                          <p className="mt-0.5 text-xs text-stone-500">{row.note}</p>
                        ) : null}
                      </div>
                      <div className="whitespace-nowrap text-right">
                        <p className="text-sm font-semibold text-terracotta-700">{row.price}</p>
                        <p className="text-xs text-stone-500">{row.unit}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-lake-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Provozní doba"
            title="Kdy nás v kempu potkáte"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {openingHoursBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div key={block.id} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center rounded-xl bg-lake-100 p-3 text-lake-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-stone-900">
                        {block.title}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                        {block.period}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {block.rows.map((row) => (
                      <li key={row.label} className="flex items-baseline justify-between text-sm">
                        <span className="text-stone-700">{row.label}</span>
                        <span className="font-semibold text-stone-900">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Informace pro hosty"
          title="Než vyrazíte na cestu"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {guestPolicies.map((policy) => {
            const Icon = policy.icon;
            return (
              <div key={policy.title} className="rounded-2xl border border-stone-200 p-6">
                <div className="inline-flex items-center justify-center rounded-xl bg-amber-50 p-3 text-amber-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                  {policy.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {policy.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
