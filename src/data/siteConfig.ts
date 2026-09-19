import { Facebook, Instagram, Phone } from "lucide-react";

import type { ContactInfo, NavItem, SeasonBadge, SocialLink } from "@/types";

/**
 * Základní metadata webu použitá v <head> a na více místech UI.
 */
export const siteConfig = {
  name: "Kemp Caramba",
  title: "Kemp Caramba – Pohoda a zážitky u Hamerského jezera",
  description:
    "Kemp Caramba u Hamerského jezera v Hamru na Jezeře nabízí bazén, saunu a vířivku, sportovní půjčovnu, letní kino i programy pro školy a skupiny. Rezervujte si letní pobyt plný pohody.",
  url: "https://www.kempcaramba.cz",
  locale: "cs_CZ",
} as const;

/**
 * Hlavní navigace webu – sjednocená do 5 přehledných položek.
 */
export const mainNavItems: NavItem[] = [
  {
    label: "Areál a služby",
    href: "/areal-a-sluzby",
    description: "Ubytování, pláž, půjčovna sportu a dětský ráj",
  },
  {
    label: "Školy a tábory",
    href: "/skoly-a-skupiny",
    description: "Školní výlety, adaptační kurzy a letní táborové pobyty",
  },
  {
    label: "Ceník a provoz",
    href: "/cenik-a-provoz",
    description: "Ceny ubytování, půjčovny a provozní doba sezóny",
  },
  {
    label: "Galerie",
    href: "/galerie",
    description: "Fotky areálu, vodních sportů a táborového života",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    description: "Adresa, telefon, mapa a informace k příjezdu",
  },
];

/**
 * Sezónní odznak zobrazený v pravé části navigační lišty.
 */
export const seasonBadge: SeasonBadge = {
  label: "Sezóna květen – září",
  icon: Phone,
};

/**
 * Kontaktní údaje kempu.
 */
export const contactInfo: ContactInfo = {
  phone: "+420602123456",
  phoneDisplay: "+420 602 123 456",
  email: "info@kempcaramba.cz",
  address: {
    street: "Hamr na Jezeře",
    city: "Stráž pod Ralskem",
    zip: "471 27",
    country: "Česká republika",
  },
  operator: "Caramba Camping s.r.o.",
  responsiblePerson: "Petr Novák, provozní manažer kempu",
  googleMapsUrl: "https://maps.app.goo.gl/un1b1Amombd2KhFs7",
  coordinates: {
    lat: 50.701123,
    lng: 14.838456,
  },
};

/**
 * Odkazy na sociální sítě zobrazené v patičce.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/kempcaramba",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kempcaramba",
    icon: Instagram,
  },
];

/**
 * Rychlé odkazy v patičce (podmnožina hlavní navigace).
 */
export const footerQuickLinks: NavItem[] = mainNavItems;
