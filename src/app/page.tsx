import type { Metadata } from "next";

import { EventBanner } from "@/components/home/EventBanner";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";

export const metadata: Metadata = {
  title: "Domů",
  description:
    "Kemp Caramba u Hamerského jezera – kempování u vody, sportovní půjčovna, dětský ráj a programy pro školy a rodiny.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <EventBanner />
      <GalleryTeaser />
    </>
  );
}
