import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { cinemaPromo as eventPromo } from "@/data/campInfo";

/**
 * Zvýrazněná promo karta pro sezónní událost, např. víkendový program pro děti.
 */
export function EventBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-forest-900">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative order-2 aspect-[16/10] lg:order-1 lg:aspect-auto">
            <Image
              src={eventPromo.image}
              alt={eventPromo.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="order-1 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:order-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-terracotta-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {eventPromo.dateLabel}
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
              {eventPromo.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-200 sm:text-base">
              {eventPromo.description}
            </p>
            <Link
              href={eventPromo.ctaHref}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-white"
            >
              {eventPromo.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
