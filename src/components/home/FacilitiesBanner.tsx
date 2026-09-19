import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";

import { refreshmentInfo, rentalInfo } from "@/data/campInfo";

/**
 * Dvoukolonová sekce s informacemi o občerstvení/zázemí a o možnostech
 * pronájmu areálu pro soukromé akce a skupiny.
 */
export function FacilitiesBanner() {
  const RefreshmentIcon = refreshmentInfo.icon;
  const RentalIcon = rentalInfo.icon;

  return (
    <section className="bg-amber-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="inline-flex items-center justify-center rounded-xl bg-terracotta-50 p-3 text-terracotta-600">
            <RefreshmentIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold text-stone-900">
            {refreshmentInfo.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
            {refreshmentInfo.description}
          </p>
          <ul className="mt-5 space-y-2">
            {refreshmentInfo.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-lake-50 px-3 py-1.5 text-xs font-medium text-lake-700">
            <Wifi className="h-3.5 w-3.5" aria-hidden="true" />
            Free Wi-Fi v celém areálu
          </div>
        </div>

        <div className="rounded-3xl bg-forest-900 p-8 text-white sm:p-10">
          <div className="inline-flex items-center justify-center rounded-xl bg-white/10 p-3 text-amber-100">
            <RentalIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold">{rentalInfo.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-200 sm:text-base">
            {rentalInfo.description}
          </p>
          <ul className="mt-5 space-y-2">
            {rentalInfo.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-stone-200">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-300" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={rentalInfo.ctaHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-white"
          >
            {rentalInfo.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
