import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/shared/SectionHeading";

/**
 * Ochutnávka areálu – výběr 4 klíčových fotek s proklikem do plné galerie.
 */
export function GalleryTeaser() {
  const teaserImages = galleryImages.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Ochutnávka areálu"
          title="Nakoukněte do kempu"
          subtitle="Prohlédněte si atmosféru areálu, vodních sportů a táborového života ve fotogalerii."
        />
        <Link
          href="/galerie"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-forest-800 px-5 py-2.5 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-white"
        >
          Celá galerie
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {teaserImages.map((image, index) => (
          <Link
            key={image.id}
            href="/galerie"
            className={
              "group relative block aspect-square overflow-hidden rounded-2xl" +
              (index === 0 ? " col-span-2 aspect-[16/10] sm:col-span-2 sm:aspect-square" : "")
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </section>
  );
}
