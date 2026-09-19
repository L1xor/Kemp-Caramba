import type { LucideIcon } from "lucide-react";

/**
 * Jedna položka hlavní navigace webu.
 */
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

/**
 * Sociální síť nebo externí odkaz zobrazený v patičce.
 */
export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Kontaktní údaje kempu použité v patičce, na kontaktní stránce a ve strukturovaných datech.
 */
export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  operator: string;
  responsiblePerson: string;
  mapEmbedUrl: string;
  mapLinkUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

/**
 * Sezónní odznak zobrazený v navigaci ("Sezóna květen – září").
 */
export interface SeasonBadge {
  label: string;
  icon: LucideIcon;
}

/**
 * Kategorie služeb/areálu použitá pro filtrování a barevné odlišení karet.
 */
export type ServiceCategory = "areal" | "sport" | "deti" | "akce";

/**
 * Jedna nabízená služba nebo prvek areálu (ubytování, půjčovna, hřiště...).
 */
export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  icon: LucideIcon;
  features?: string[];
}

/**
 * Jedna karta v sekci "4 pilíře kempu" na úvodní stránce.
 */
export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Promo banner pro sezónní akci nebo speciální program.
 */
export interface EventPromo {
  title: string;
  description: string;
  dateLabel: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

/**
 * Skupinový/školní balíček (výlety, tábory, adaptační kurzy).
 */
export interface GroupPackage {
  id: string;
  title: string;
  audience: string;
  description: string;
  image: string;
  imageAlt: string;
  durationLabel: string;
  capacityLabel: string;
  includes: string[];
  icon: LucideIcon;
}

/**
 * Jedna výhoda pobytu pro školy a skupiny (stravování, bezpečí, sportoviště...).
 */
export interface GroupBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Jedna cenová položka (řádek) v ceníkové kategorii.
 */
export interface PriceRow {
  label: string;
  price: string;
  unit: string;
  note?: string;
}

/**
 * Kategorie v ceníku (ubytování, půjčovna, doplňkové služby...).
 */
export interface PricingCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  rows: PriceRow[];
}

/**
 * Jeden řádek provozní doby (dny, hodiny, poznámka).
 */
export interface OpeningHoursRow {
  label: string;
  hours: string;
  note?: string;
}

/**
 * Blok provozní doby (recepce, půjčovna, sezóna...).
 */
export interface OpeningHoursBlock {
  id: string;
  title: string;
  icon: LucideIcon;
  period: string;
  rows: OpeningHoursRow[];
}

/**
 * Informační pravidlo pro hosty (příjezd/odjezd, mazlíčci...).
 */
export interface GuestPolicy {
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Kategorie pro filtrování galerie.
 */
export type GalleryCategory = "areal" | "voda" | "deti" | "vse";

/**
 * Jedna fotografie v galerii.
 */
export interface GalleryImage {
  id: string;
  category: Exclude<GalleryCategory, "vse">;
  src: string;
  alt: string;
  caption: string;
}

/**
 * Štítek/filtr pro galerii zobrazovaný jako tlačítko.
 */
export interface GalleryFilterOption {
  id: GalleryCategory;
  label: string;
}
