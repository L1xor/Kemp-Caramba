import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

/**
 * Velké hero úvodní stránky s fotografií Hamerského jezera, tmavým gradientem,
 * hlavním claimem a rychlými rozcestníky.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden sm:min-h-[92vh]">
      <Image
        src="https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&q=80"
        alt="Klidná hladina Hamerského jezera obklopená lesem při ranním slunci"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-100">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          Hamry na Jezeře, Máchův kraj
        </span>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Pohoda a zážitky u Hamerského jezera
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
          Kempování přímo u vody, bohatá sportovní půjčovna, dětský ráj a programy
          pro školy i rodiny. Kemp Caramba je vaše letní základna v srdci přírody.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/areal-a-sluzby"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-700"
          >
            Prozkoumat areál
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/cenik-a-provoz"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Zobrazit ceník
          </Link>
        </div>
      </div>
    </section>
  );
}
