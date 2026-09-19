import type { Metadata } from "next";
import { Car, Mail, MapPin, Phone, TrainFront, User } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactInfo } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte kemp Caramba u Hamerského jezera. Adresa, telefon, e-mail, mapa a informace k příjezdu autem i veřejnou dopravou.",
};

const contactCards = [
  {
    title: "Adresa kempu",
    value: `${contactInfo.address.street}, ${contactInfo.address.zip} ${contactInfo.address.city}`,
    icon: MapPin,
    href: contactInfo.mapLinkUrl,
  },
  {
    title: "Telefon",
    value: contactInfo.phoneDisplay,
    icon: Phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    title: "E-mail",
    value: contactInfo.email,
    icon: Mail,
    href: `mailto:${contactInfo.email}`,
  },
  {
    title: "Odpovědná osoba",
    value: contactInfo.responsiblePerson,
    icon: User,
  },
];

export default function KontaktPage() {
  return (
    <div>
      <section className="bg-forest-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Kontakt"
          title="Ozvěte se nám nebo nás navštivte"
          subtitle="Jsme k dispozici po telefonu i e-mailu. Rádi vám poradíme s výběrem ubytování i programu pro vaši skupinu."
          align="center"
          light
          className="mx-auto"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="inline-flex items-center justify-center rounded-xl bg-forest-100 p-3 text-forest-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{card.value}</p>
              </>
            );

            if (card.href) {
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-2xl border border-stone-200 p-6 transition-shadow hover:shadow-card"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={card.title} className="rounded-2xl border border-stone-200 p-6">
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-lake-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Jak se k nám dostanete"
              title="Informace k příjezdu"
            />
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-white p-3 text-forest-700 shadow-sm">
                  <Car className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-stone-900">
                    Příjezd autem
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Z Prahy po dálnici D8 a silnici č. 9 směr Stráž pod Ralskem, dále
                    na Hamr na Jezeře. Cesta trvá přibližně 70 minut. Vyhrazené
                    parkování je přímo u vjezdu do areálu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-white p-3 text-forest-700 shadow-sm">
                  <TrainFront className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-stone-900">
                    MHD a vlak
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Nejbližší vlakové i autobusové spojení je ve Stráži pod Ralskem
                    (cca 5 km), kde najdete i obchody a bankomat. Na vyžádání
                    zajistíme i vyzvednutí skupin z nádraží.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-white p-3 text-forest-700 shadow-sm">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-stone-900">
                    Parkování
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Hlídané parkoviště přímo v areálu kempu, kapacita cca 80 vozidel,
                    poplatek dle platného ceníku.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                src={contactInfo.mapEmbedUrl}
                title="Mapa – Kemp Caramba, Hamr na Jezeře"
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-forest-700">
              <a href={contactInfo.mapLinkUrl} target="_blank" rel="noreferrer" className="hover:text-forest-900">
                Otevřít na Mapy.cz
              </a>
              <a href={contactInfo.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-forest-900">
                Otevřít na Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
