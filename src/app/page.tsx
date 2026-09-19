import type { Metadata } from "next";

import { AmenitiesShowcase } from "@/components/home/AmenitiesShowcase";
import { EventBanner } from "@/components/home/EventBanner";
import { FacilitiesBanner } from "@/components/home/FacilitiesBanner";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { LocationStrip } from "@/components/home/LocationStrip";

export const metadata: Metadata = {
  title: "Domů",
  description:
    "Kemp Caramba u Hamerského jezera – kempování u vody, sportovní půjčovna, dětský ráj a programy pro školy a rodiny.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocationStrip />
      <Highlights />
      <AmenitiesShowcase />
      <EventBanner />
      <FacilitiesBanner />
      <GalleryTeaser />
    </>
  );
}
