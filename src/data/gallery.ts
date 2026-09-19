import type { GalleryFilterOption, GalleryImage } from "@/types";

/**
 * Filtrovací štítky zobrazené nad galerií.
 */
export const galleryFilters: GalleryFilterOption[] = [
  { id: "vse", label: "Vše" },
  { id: "areal", label: "Areál & Kemp" },
  { id: "voda", label: "Voda & Sport" },
  { id: "deti", label: "Děti & Akce" },
];

/**
 * Fotogalerie kempu – minimálně 12 tematických položek s Unsplash placeholdery.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "img-01",
    category: "areal",
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    alt: "Stany na travnaté ploše u jezera při zapadajícím slunci",
    caption: "Stanové kempování u jezera",
  },
  {
    id: "img-02",
    category: "voda",
    src: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1200&q=80",
    alt: "Paddleboardy na klidné hladině jezera za rozbřesku",
    caption: "Ranní paddleboarding na jezeře",
  },
  {
    id: "img-03",
    category: "deti",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    alt: "Děti si hrají na dětském hřišti s prolézačkami",
    caption: "Dětské hřiště v areálu kempu",
  },
  {
    id: "img-04",
    category: "voda",
    src: "https://images.unsplash.com/photo-1612872087720-bb8005b1cc75?auto=format&fit=crop&w=1200&q=80",
    alt: "Beach volejbalové hřiště s pískem obklopené stromy",
    caption: "Turnaj v plážovém volejbalu",
  },
  {
    id: "img-05",
    category: "areal",
    src: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?auto=format&fit=crop&w=1200&q=80",
    alt: "Letecký pohled na jezero obklopené lesem",
    caption: "Letecký pohled na Hamerské jezero",
  },
  {
    id: "img-06",
    category: "deti",
    src: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?auto=format&fit=crop&w=1200&q=80",
    alt: "Rodina s dětmi u táboráku během letního večera",
    caption: "Večerní táborák s rodinami",
  },
  {
    id: "img-07",
    category: "areal",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Dřevěné chatky mezi stromy v kempu",
    caption: "Chatky obklopené borovicemi",
  },
  {
    id: "img-08",
    category: "voda",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    alt: "Kánoe na tiché vodní hladině mezi kopci",
    caption: "Projížďka na kánoi",
  },
  {
    id: "img-09",
    category: "deti",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    alt: "Děti si užívají letní táborový program u ohně",
    caption: "Letní táborový program pro děti",
  },
  {
    id: "img-10",
    category: "areal",
    src: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1200&q=80",
    alt: "Písčitá pláž s lehátky u jezera za slunečného dne",
    caption: "Písčitá pláž kempu",
  },
  {
    id: "img-11",
    category: "voda",
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    alt: "Šlapadla kotvící u dřevěného mola na jezeře",
    caption: "Šlapadla u mola",
  },
  {
    id: "img-12",
    category: "deti",
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80",
    alt: "Skupina školáků s batohy na výletě v lese",
    caption: "Školní výlet v okolní přírodě",
  },
  {
    id: "img-13",
    category: "areal",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Lesní cesta obklopená vysokými stromy v ranní mlze",
    caption: "Turistické trasy v okolí kempu",
  },
  {
    id: "img-14",
    category: "voda",
    src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Klidná vodní hladina jezera s odrazem stromů při úsvitu",
    caption: "Klidná ranní hladina jezera",
  },
];
