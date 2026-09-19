import { Facebook, Instagram, Phone } from "lucide-react";

import type { ContactInfo, NavItem, SeasonBadge, SocialLink } from "@/types";

/**
 * Základní metadata webu použitá v <head> a na více místech UI.
 */
export const siteConfig = {
  name: "Kemp Caramba",
  title: "Kemp Caramba – Pohoda a zážitky u Hamerského jezera",
  description:
    "Kemp Caramba na Hamerském jezeře v Hamrech na Jezeře nabízí kempování u vody, půjčovnu paddleboardů a šlapadel, dětský ráj i programy pro školy a skupiny. Rezervujte si letní pobyt plný pohody.",
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
    street: "Hamry na Jezeře 88",
    city: "Doksy",
    zip: "472 01",
    country: "Česká republika",
  },
  operator: "Caramba Camping s.r.o.",
  responsiblePerson: "Petr Novák, provozní manažer kempu",
  mapEmbedUrl:
    "https://mapy.cz/zakladni?vlastni-body&x=14.6580000&y=50.5510000&z=15&source=coor&id=14.658%2C50.551",
  mapLinkUrl: "https://mapy.cz/zakladni?q=Hamry%20na%20Jeze%C5%99e",
  coordinates: {
    lat: 50.551,
    lng: 14.658,
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
