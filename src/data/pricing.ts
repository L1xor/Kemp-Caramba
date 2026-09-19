import {
  BadgeEuro,
  Ban,
  Clock,
  Home,
  PawPrint,
  Sailboat,
  Sparkles,
} from "lucide-react";

import type { GuestPolicy, OpeningHoursBlock, PricingCategory } from "@/types";

/**
 * Kompletní strukturovaný ceník kempu – ubytování, půjčovna a doplňkové služby.
 */
export const pricingCategories: PricingCategory[] = [
  {
    id: "ubytovani",
    title: "Ubytování",
    description: "Chatky, stany, karavany a rekreační poplatky.",
    icon: Home,
    rows: [
      {
        label: "Chatka 2–4 osoby",
        price: "690 Kč",
        unit: "/ noc",
        note: "Vlastní terasa, elektřina",
      },
      {
        label: "Chatka 5–6 osob",
        price: "890 Kč",
        unit: "/ noc",
        note: "Vlastní terasa, elektřina",
      },
      {
        label: "Stanové místo",
        price: "150 Kč",
        unit: "/ noc / stan",
        note: "Bez ohledu na velikost stanu",
      },
      {
        label: "Karavan / obytný vůz",
        price: "220 Kč",
        unit: "/ noc",
        note: "Vč. přípojky na elektřinu",
      },
      {
        label: "Dospělá osoba",
        price: "120 Kč",
        unit: "/ noc",
        note: "Rekreační poplatek",
      },
      {
        label: "Dítě 3–15 let",
        price: "60 Kč",
        unit: "/ noc",
        note: "Rekreační poplatek",
      },
    ],
  },
  {
    id: "pujcovna",
    title: "Půjčovna sportovních potřeb",
    description: "Paddleboardy, šlapadla, kánoe a plážový sport.",
    icon: Sailboat,
    rows: [
      {
        label: "Paddleboard",
        price: "150 Kč",
        unit: "/ hod",
      },
      {
        label: "Šlapadlo (2–4 osoby)",
        price: "200 Kč",
        unit: "/ hod",
      },
      {
        label: "Kánoe",
        price: "180 Kč",
        unit: "/ hod",
      },
      {
        label: "Sada na plážový volejbal",
        price: "100 Kč",
        unit: "/ den",
        note: "Míč a síť zdarma pro hosty kempu",
      },
      {
        label: "Kolo",
        price: "250 Kč",
        unit: "/ den",
      },
    ],
  },
  {
    id: "doplnkove-sluzby",
    title: "Doplňkové služby",
    description: "Elektřina, sprchy, parkování a další zázemí.",
    icon: Sparkles,
    rows: [
      {
        label: "Elektrická přípojka",
        price: "80 Kč",
        unit: "/ noc",
      },
      {
        label: "Sprcha s teplou vodou",
        price: "Zdarma",
        unit: "pro hosty",
        note: "V ceně ubytování",
      },
      {
        label: "Parkování osobní automobil",
        price: "80 Kč",
        unit: "/ noc",
      },
      {
        label: "Praní prádla",
        price: "100 Kč",
        unit: "/ cyklus",
      },
      {
        label: "Pes",
        price: "60 Kč",
        unit: "/ noc",
        note: "Na vodítku a se známkou o očkování",
      },
    ],
  },
];

/**
 * Provozní doba kempu v hlavní sezóně a mimo sezónu.
 */
export const openingHoursBlocks: OpeningHoursBlock[] = [
  {
    id: "sezona",
    title: "Hlavní sezóna",
    icon: Clock,
    period: "1. května – 30. září",
    rows: [
      { label: "Recepce", hours: "8:00 – 20:00" },
      { label: "Půjčovna sportovních potřeb", hours: "9:00 – 19:00" },
      { label: "Noční klid", hours: "22:00 – 7:00", note: "Prosíme o ohleduplnost" },
    ],
  },
  {
    id: "mimosezona",
    title: "Mimo sezónu",
    icon: BadgeEuro,
    period: "Říjen – duben",
    rows: [
      { label: "Recepce", hours: "Po telefonické dohodě" },
      { label: "Půjčovna sportovních potřeb", hours: "Uzavřena" },
    ],
  },
];

/**
 * Informační pravidla pro hosty – příjezd, odjezd, mazlíčci.
 */
export const guestPolicies: GuestPolicy[] = [
  {
    title: "Příjezd a odjezd",
    description:
      "Check-in od 14:00, check-out do 10:00. Dřívější příjezd je možný po dohodě s recepcí dle obsazenosti.",
    icon: Clock,
  },
  {
    title: "Domácí mazlíčci",
    description:
      "Psy vítáme za poplatek 60 Kč/noc. Na celém areálu platí povinnost vodítka a úklidu po zvířeti.",
    icon: PawPrint,
  },
  {
    title: "Zákaz volného pohybu psů",
    description:
      "Volné pobíhání psů bez vodítka je na pláži a v okolí dětského hřiště zakázáno z bezpečnostních důvodů.",
    icon: Ban,
  },
];
