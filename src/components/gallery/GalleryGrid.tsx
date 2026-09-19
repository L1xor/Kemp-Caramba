"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { LightboxModal } from "@/components/shared/LightboxModal";
import type { GalleryCategory, GalleryImage } from "@/types";
import { cn } from "@/lib/utils";
import { galleryFilters } from "@/data/gallery";

export interface GalleryGridProps {
  images: GalleryImage[];
}

/**
 * Interaktivní grid fotogalerie s filtrováním podle kategorie a lightboxem
 * pro zvětšení fotky na kliknutí.
 */
export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("vse");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "vse") {
      return images;
    }
    return images.filter((image) => image.category === activeFilter);
  }, [images, activeFilter]);

  const activeImage = activeIndex !== null ? filteredImages[activeIndex] ?? null : null;

  function handleClose() {
    setActiveIndex(null);
  }

  function handlePrev() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }
      return (current - 1 + filteredImages.length) % filteredImages.length;
    });
  }

  function handleNext() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }
      return (current + 1) % filteredImages.length;
    });
  }

  function handleFilterChange(filter: GalleryCategory) {
    setActiveFilter(filter);
    setActiveIndex(null);
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {galleryFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => handleFilterChange(filter.id)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              activeFilter === filter.id
                ? "border-forest-800 bg-forest-800 text-white"
                : "border-stone-300 bg-white text-stone-700 hover:border-forest-400 hover:text-forest-800",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              {image.caption}
            </span>
          </button>
        ))}
      </div>

      {filteredImages.length === 0 ? (
        <p className="mt-12 text-center text-stone-500">
          V této kategorii momentálně nejsou žádné fotky.
        </p>
      ) : null}

      <LightboxModal
        image={activeImage}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
