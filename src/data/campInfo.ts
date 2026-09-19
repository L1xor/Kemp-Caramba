import {
  Bike,
  Fence,
  Gamepad2,
  Landmark,
  MapPin,
  PartyPopper,
  ShoppingBag,
  Sparkles,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";

import type { EventPromo, HighlightItem } from "@/types";

/**
 * Krátká fakta o okolí kempu zobrazená pod hero sekcí (vzdálenost jezera,
 * GPS, doplňkové služby v okolí).
 */
export interface LocationFact {
  label: string;
  value: string;
  icon: HighlightItem["icon"];
}

export const locationFacts: LocationFact[] = [
  {
    label: "Hamerské jezero",
    value: "Písčitá pláž jen 800 m od kempu",
    icon: Waves,
  },
  {
    label: "Lanový park a cyklostezka",
    value: "V bezprostředním okolí kempu",
    icon: Bike,
  },
  {
    label: "Obchody a bankomat",
    value: "Stráž pod Ralskem, 5 km",
    icon: ShoppingBag,
  },
  {
    label: "GPS souřadnice",
    value: "50.701123, 14.838456",
    icon: MapPin,
  },
];

/**
 * 4 pilíře kempu zobrazené na úvodní stránce – odpovídají reálné nabídce
 * areálu (bazén a wellness, půjčovna, zábava, bezpečí).
 */
export const highlights: HighlightItem[] = [
  {
    id: "bazen",
    title: "Bazén, sauna a vířivka",
    description:
      "Bazén 3,5 × 7 m s chill zónou, saunou a luxusní venkovní vířivkou pro dokonalý odpočinek.",
    icon: Waves,
  },
  {
    id: "pujcovna",
    title: "Sportovní půjčovna",
    description:
      "Skútry Vespa, e-koloběžky, odrážedla i jízdní kola – vyrazte objevovat okolí Hamerského jezera.",
    icon: Bike,
  },
  {
    id: "zabava",
    title: "Letní kino a zábava",
    description:
      "Promítání pod širým nebem každý čtvrtek, karaoke, koncerty a dvě prázdninové oldies party.",
    icon: PartyPopper,
  },
  {
    id: "bezpeci",
    title: "Bezpečný hlídaný areál",
    description:
      "Celý areál je oplocený a monitorovaný kamerami – klidná dovolená pro celou rodinu.",
    icon: Fence,
  },
];

/**
 * Skupina vybavení/aktivit pro sekci "O kempu" na úvodní stránce.
 */
export interface AmenityGroup {
  id: string;
  title: string;
  icon: HighlightItem["icon"];
  description?: string;
  items: string[];
}

export const amenityGroups: AmenityGroup[] = [
  {
    id: "relax",
    title: "Relax",
    icon: Sparkles,
    description: "Bazén 3,5 × 7 m s chill zónou, saunou a venkovní vířivkou.",
    items: ["Bazén s chill zónou", "Finská sauna", "Venkovní vířivka"],
  },
  {
    id: "pujcovna",
    title: "Sportovní půjčovna",
    icon: Bike,
    items: [
      "Skútry Vespa",
      "E-koloběžky",
      "Odrážecí koloběžky",
      "Jízdní kola",
    ],
  },
  {
    id: "kino",
    title: "Letní kino",
    icon: Landmark,
    description: "Pravidelné promítání pod širým nebem každý čtvrtek.",
    items: ["Promítání každý čtvrtek", "Posezení na dekách i lehátkách"],
  },
  {
    id: "deti",
    title: "Pro děti",
    icon: PartyPopper,
    items: [
      "Animační programy Honzy Poplety (St + Pá od 17 h)",
      "Pěnová a bublinová show",
      "Nafukovací trampolína (50 Kč/den)",
      "Šlapací motokáry",
    ],
  },
  {
    id: "aktivity",
    title: "Aktivita a zábava",
    icon: Gamepad2,
    items: [
      "Beach volejbal, ping-pong, badminton",
      "Herní zóna: air-hockey, fotbálek, šipky, biliard, flipper",
      "Karaoke a koncerty",
      "2 prázdninové oldies party",
    ],
  },
];

/**
 * Promo banner pro letní kino – pravidelnou večerní akci konající se
 * každý čtvrtek pod širým nebem.
 */
export const cinemaPromo: EventPromo = {
  title: "Letní kino pod širým nebem",
  description:
    "Každý čtvrtek večer promítáme pod hvězdami přímo v areálu kempu. Vezměte si deku nebo lehátko a přijďte si užít filmový večer s rodinou i přáteli.",
  dateLabel: "Každý čtvrtek večer",
  ctaLabel: "Zjistit více o programu",
  ctaHref: "/kontakt",
  image: "/images/hero-kemp.jpg",
  imageAlt: "Areál kempu Caramba s dřevěnými chatkami a sportovištěm za slunečného dne",
};

/**
 * Informace o občerstvení a zázemí kempu.
 */
export const refreshmentInfo = {
  title: "Cyklozahrádka a občerstvení",
  description:
    "Naše cyklozahrádka nabízí 200g zvěřinové burgery, pizzu a další dobroty, točené pivo, limo, kávu, zmrzlinu i ledovou tříšť. K dispozici je Free Wi-Fi a přijímáme platby kartou.",
  items: ["200g zvěřinové burgery a pizza", "Točené pivo, limo, káva", "Zmrzlina a ledová tříšť", "Free Wi-Fi a platby kartou"],
  icon: Utensils,
  wifiIcon: Wifi,
};

/**
 * Informace o pronájmu areálu pro soukromé akce.
 */
export const rentalInfo = {
  title: "Pronájmy a akce",
  description:
    "Celý areál nebo Caramba Stodolu s gastro kuchyní a Grande grilem s pípou lze pronajmout pro svatby, oslavy, rozlučky se svobodou, teambuildingy, tábory i školní pobyty.",
  items: [
    "Svatby, oslavy a rozlučky se svobodou",
    "Teambuilding, tábory a školní pobyty",
    "Caramba Stodola s gastro kuchyní",
    "Grande gril s pípou",
  ],
  ctaLabel: "Poptat pronájem areálu",
  ctaHref: "/kontakt",
  icon: PartyPopper,
};
