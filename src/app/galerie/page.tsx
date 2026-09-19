import type { Metadata } from "next";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Fotogalerie",
  description:
    "Fotogalerie kempu Caramba – areál, kempování, vodní sporty, dětské programy a táborová atmosféra u Hamerského jezera.",
};

export default function GaleriePage() {
  return (
    <div>
      <section className="bg-forest-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Fotogalerie"
          title="Atmosféra kempu Caramba v obrazech"
          subtitle="Filtrujte fotky podle kategorie a klikněte pro zvětšení v celoobrazovkovém náhledu."
          align="center"
          light
          className="mx-auto"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
