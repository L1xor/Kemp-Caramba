import {
  Flame,
  ShieldCheck,
  Soup,
  Tent,
  Trophy,
  Users,
} from "lucide-react";

import type { GroupBenefit, GroupPackage } from "@/types";

/**
 * Skupinové a školní balíčky – výlety, sportovní kurzy, letní tábory a adaptační pobyty.
 */
export const groupPackages: GroupPackage[] = [
  {
    id: "skolni-vylet",
    title: "Školní výlet",
    audience: "Základní a střední školy",
    description:
      "Jednodenní nebo víkendový výlet s programem plným her, sportu a poznávání okolní přírody Máchova kraje. Vhodné pro třídy od 15 do 60 dětí.",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Skupina školáků s batohy na výletě v lese",
    durationLabel: "1–3 dny",
    capacityLabel: "15–60 dětí",
    includes: [
      "Ubytování v chatkách nebo vlastních stanech",
      "Plná penze v areálu kempu",
      "Sportovní a poznávací program s animátorem",
      "Dohled pedagogického doprovodu zdarma",
    ],
    icon: Users,
  },
  {
    id: "sportovni-soustredeni",
    title: "Sportovní soustředění",
    audience: "Sportovní kluby a oddíly",
    description:
      "Ideální zázemí pro letní přípravu sportovních týmů – volejbalové a víceúčelové hřiště, otevřená vodní plocha pro kondiční tréninky a prostor pro regeneraci.",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sportovní týmový trénink na venkovním hřišti",
    durationLabel: "3–10 dní",
    capacityLabel: "10–40 sportovců",
    includes: [
      "Vyhrazená sportoviště pro denní tréninky",
      "Možnost pronájmu vybavení na vodní tréninky",
      "Stravování dle individuálních požadavků",
      "Ubytování v chatkách s blízkostí k hřištím",
    ],
    icon: Trophy,
  },
  {
    id: "letni-tabor",
    title: "Letní táborový pobyt",
    audience: "Dětské letní tábory",
    description:
      "Týdenní táborové turnusy s celodenním programem, tematickými hrami, koupáním a večerními táboráky. Zajišťujeme kompletní zázemí i bezpečný dohled.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Děti si užívají letní táborový program u ohně",
    durationLabel: "5–14 dní",
    capacityLabel: "30–100 dětí",
    includes: [
      "Kompletní stravování 5x denně",
      "Denní i večerní animační program",
      "Zdravotnický dohled po celou dobu turnusu",
      "Uzavřený a bezpečný areál s ostrahou",
    ],
    icon: Tent,
  },
  {
    id: "adaptacni-kurz",
    title: "Adaptační kurz",
    audience: "Nové třídní kolektivy",
    description:
      "Krátký intenzivní program zaměřený na stmelení nového třídního kolektivu formou týmových her, komunikačních aktivit a zážitkové pedagogiky.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Skupina studentů při týmové aktivitě v přírodě",
    durationLabel: "2–3 dny",
    capacityLabel: "15–35 studentů",
    includes: [
      "Program veden zkušeným lektorem",
      "Ubytování a plná penze v areálu",
      "Venkovní i vnitřní prostory pro aktivity za deště",
      "Závěrečné shrnutí a zpětná vazba pro pedagogy",
    ],
    icon: ShieldCheck,
  },
];

/**
 * Přehled výhod pobytu pro školy a organizované skupiny.
 */
export const groupBenefits: GroupBenefit[] = [
  {
    title: "Kompletní stravování",
    description:
      "Plná penze nebo polopenze přímo v areálu, možnost přizpůsobit jídelníček dietním požadavkům.",
    icon: Soup,
  },
  {
    title: "Uzavřený bezpečný areál",
    description:
      "Areál je oplocený a přehledný, s jasně vymezenými prostory pro spánek, sport i volný čas.",
    icon: ShieldCheck,
  },
  {
    title: "Kompletní sportoviště",
    description:
      "Beach volejbal, víceúčelové hřiště a vodní plocha jezera přímo v dosahu ubytování.",
    icon: Trophy,
  },
  {
    title: "Večerní ohniště",
    description:
      "Vyhrazené ohniště s posezením pro táborové večery, opékání a společné zpívání.",
    icon: Flame,
  },
];
