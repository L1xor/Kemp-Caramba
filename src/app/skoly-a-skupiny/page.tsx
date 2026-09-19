import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, Mail, Phone } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactInfo } from "@/data/siteConfig";
import { groupBenefits, groupPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Školy a tábory",
  description:
    "Školní výlety, sportovní soustředění, letní tábory a adaptační kurzy v kempu Caramba u Hamerského jezera. Bezpečné zázemí pro školy a organizované skupiny.",
};

export default function SkolyASkupinyPage() {
  return (
    <div>
      <section className="bg-forest-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Školy a organizované skupiny"
          title="Důstojné zázemí pro školní výlety a letní tábory"
          subtitle="Připravili jsme kompletní programy pro učitele, vedoucí táborů i trenéry sportovních oddílů – s bezpečným zázemím a jasnou organizací."
          align="center"
          light
          className="mx-auto"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nabídka programů"
          title="Vyberte si program pro vaši skupinu"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {groupPackages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <article
                key={pkg.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {pkg.audience}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-stone-900">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {pkg.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-stone-500">
                    <span>Délka: {pkg.durationLabel}</span>
                    <span>Kapacita: {pkg.capacityLabel}</span>
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-stone-100 pt-5 text-sm text-stone-700">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-lake-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Výhody pobytu"
            title="Proč zvolit Carambu pro vaši skupinu"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groupBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center rounded-xl bg-lake-100 p-3 text-lake-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-forest-200 bg-forest-50 p-8 sm:p-12">
          <div className="inline-flex items-center justify-center rounded-xl bg-forest-800 p-3 text-white">
            <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold text-stone-900">
            Jak nezávazně poptat termín pro vaši skupinu
          </h3>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed text-stone-700 sm:text-base">
            <li>
              <strong className="text-stone-900">1. Kontaktujte nás</strong> telefonicky nebo e-mailem
              s předběžným termínem, počtem účastníků a typem programu.
            </li>
            <li>
              <strong className="text-stone-900">2. Domluvíme podrobnosti</strong> ubytování, stravování
              a programu na míru vaší skupině.
            </li>
            <li>
              <strong className="text-stone-900">3. Zašleme nezávaznou nabídku</strong> s cenovou
              kalkulací a rezervačními podmínkami.
            </li>
            <li>
              <strong className="text-stone-900">4. Potvrdíte rezervaci</strong> a my se postaráme
              o kompletní organizaci vašeho pobytu.
            </li>
          </ol>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phoneDisplay}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-800 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
