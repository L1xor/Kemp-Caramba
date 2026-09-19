import {
  Ban,
  PartyPopper,
  Sailboat,
  ShieldCheck,
  Tent,
  Trees,
  Users,
  Volleyball,
  Waves,
} from "lucide-react";

import type { EventPromo, HighlightItem, ServiceItem } from "@/types";

/**
 * Kompletní přehled služeb a prvků areálu – kempování, sport, půjčovna a dětský ráj.
 * Data pokrývají a nahrazují původní rozdrobenou strukturu 11 samostatných stránek.
 */
export const services: ServiceItem[] = [
  {
    id: "kempovani-u-plaze",
    category: "areal",
    title: "Kempování přímo u pláže",
    description:
      "Travnaté i stinné parcely pro stany, karavany a chatky jen pár metrů od písčité pláže Hamerského jezera. Elektrické přípojky, pitná voda a moderní sociální zařízení v celém areálu.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stany rozestavěné na travnaté ploše u jezera při zapadajícím slunci",
    tags: ["Ubytování", "Stany", "Karavany"],
    icon: Tent,
    features: [
      "Parcely pro stany i karavany s elektřinou",
      "Chatky s vlastní terasou a výhledem na jezero",
      "Moderní hygienické zázemí a sprchy s teplou vodou",
      "Vyhrazená místa pro ohniště a grilování",
    ],
  },
  {
    id: "pujcovna-paddleboardu",
    category: "sport",
    title: "Půjčovna paddleboardů a šlapadel",
    description:
      "Vyrazte na hladinu Hamerského jezera na paddleboardu, šlapadle nebo kánoi. Půjčovna je otevřená denně v sezóně a nabízí vybavení pro začátečníky i pokročilé.",
    image:
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Paddleboardy připravené na klidné hladině jezera za rozbřesku",
    tags: ["Sport", "Půjčovna", "Vodní sporty"],
    icon: Sailboat,
    features: [
      "Paddleboardy a šlapadla pro 2–4 osoby",
      "Kánoe a pedálová plavidla se zapůjčením vest",
      "Hodinové i celodenní sazby",
      "Instruktáž pro začátečníky zdarma",
    ],
  },
  {
    id: "plazovy-volejbal",
    category: "sport",
    title: "Plážový volejbal a sportoviště",
    description:
      "Oficiální beach volejbalové hřiště s kvalitním pískem, stolní tenis a víceúčelové sportovní hřiště pro nohejbal, badminton nebo malý fotbal.",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb8005b1cc75?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Beach volejbalové hřiště s pískem obklopené stromy",
    tags: ["Sport", "Volejbal", "Turnaje"],
    icon: Volleyball,
    features: [
      "Beach volejbalové hřiště s večerním osvětlením",
      "Stoly na stolní tenis v areálu",
      "Víceúčelové hřiště na nohejbal a badminton",
      "Zapůjčení míčů a sítí na recepci",
    ],
  },
  {
    id: "detske-hriste-animace",
    category: "deti",
    title: "Dětské hřiště a animační programy",
    description:
      "Bezpečné dětské hřiště s prolézačkami, pískoviště a pravidelné animační programy pro nejmenší i školáky během celé letní sezóny.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Děti si hrají na dětském hřišti s prolézačkami v letním kempu",
    tags: ["Děti", "Animace", "Rodiny"],
    icon: PartyPopper,
    features: [
      "Hlídané dětské hřiště s bezpečným povrchem",
      "Denní animační programy a soutěže",
      "Večerní táboráky s kytarou pro celé rodiny",
      "Mini klub pro děti od 4 do 12 let",
    ],
  },
  {
    id: "pronajem-arealu",
    category: "akce",
    title: "Pronájem areálu pro soukromé akce",
    description:
      "Uzavřená část areálu s přístřeškem, ohništěm a zázemím je ideální pro firemní teambuildingy, oslavy narozenin nebo rodinné sjezdy u vody.",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Skupina lidí u ohně během večerní soukromé akce v přírodě",
    tags: ["Akce", "Teambuilding", "Oslavy"],
    icon: Users,
    features: [
      "Krytý přístřešek s posezením pro až 60 osob",
      "Ohniště a možnost cateringu na míru",
      "Zajištění sportovního vybavení a animátorů",
      "Parkování přímo u vyhrazené části areálu",
    ],
  },
  {
    id: "lesni-okoli",
    category: "areal",
    title: "Lesní okolí a turistické trasy",
    description:
      "Kemp obklopují borové lesy Máchova kraje s hustou sítí značených turistických i cyklistických tras vhodných pro celodenní výlety.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Lesní cesta obklopená vysokými stromy v ranní mlze",
    tags: ["Turistika", "Cyklistika", "Příroda"],
    icon: Trees,
    features: [
      "Přímé napojení na značené turistické trasy",
      "Půjčovna kol na recepci",
      "Doporučené výlety do okolí Máchova jezera",
      "Mapy a tipy na výlety k dispozici na recepci",
    ],
  },
];

/**
 * 4 pilíře kempu zobrazené na úvodní stránce v sekci Highlights.
 */
export const highlights: HighlightItem[] = [
  {
    id: "voda",
    title: "Kempování přímo u vody",
    description:
      "Parcely a chatky jen kousek od písčité pláže s čistou vodou Hamerského jezera.",
    icon: Waves,
  },
  {
    id: "zazemi",
    title: "Bohatá sportovní půjčovna",
    description:
      "Paddleboardy, šlapadla, kánoe i volejbalové hřiště – vyžití pro celý den.",
    icon: Sailboat,
  },
  {
    id: "deti",
    title: "Rodinné a dětské zázemí",
    description:
      "Hřiště, animace a bezpečný uzavřený areál pro klidnou dovolenou s dětmi.",
    icon: ShieldCheck,
  },
  {
    id: "skoly",
    title: "Programy pro školy a party",
    description:
      "Školní výlety, adaptační kurzy a soukromé akce s kompletním zázemím.",
    icon: PartyPopper,
  },
];

/**
 * Promo banner pro sezónní událost na úvodní stránce.
 */
export const eventPromo: EventPromo = {
  title: "Víkendový kemp s programem pro děti",
  description:
    "Přijeďte na prodloužený víkend plný animačních her, večerního táboráku s kytarou a sportovních turnajů pro celou rodinu. Kapacita omezena, doporučujeme včasnou rezervaci.",
  dateLabel: "14. – 16. června 2025",
  ctaLabel: "Zjistit více a rezervovat",
  ctaHref: "/kontakt",
  image:
    "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Rodina s dětmi u táboráku během letního večera v kempu",
};

/**
 * Zákaz volně pobíhajících psů mimo vodítko – využito v pravidlech pobytu.
 */
export const petsPolicyIcon = Ban;
