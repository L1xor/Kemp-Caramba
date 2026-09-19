import type { Metadata } from "next";

import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Areál a služby",
  description:
    "Kempování u pláže, půjčovna paddleboardů a šlapadel, plážový volejbal a dětský ráj v kempu Caramba u Hamerského jezera.",
};

export default function ArealASluzbyPage() {
  const arealServices = services.filter((service) => service.category === "areal" && service.features);
  const sportServices = services.filter((service) => service.category === "sport" && service.features);
  const detiServices = services.filter((service) => service.category === "deti" && service.features);
  const extraServices = services.filter((service) => service.category === "akce");

  return (
    <div>
      <section className="bg-forest-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Areál a služby"
          title="Vše, co potřebujete k pohodové dovolené u vody"
          subtitle="Kempování na pláži, sportovní půjčovna i dětský ráj – sloučili jsme celou nabídku areálu do jednoho přehledného místa."
          align="center"
          light
          className="mx-auto"
        />
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8">
        {arealServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

        {sportServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} reverse={index % 2 === 1} />
        ))}

        {detiServices.map((service) => (
          <ServiceCard key={service.id} service={service} reverse />
        ))}
      </section>

      {extraServices.length > 0 ? (
        <section className="bg-amber-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Doplňková nabídka"
              title="Pronájem areálu a soukromé akce"
              subtitle="Kemp Caramba je také ideálním místem pro firemní akce, oslavy a rodinné sjezdy."
              align="center"
              className="mx-auto"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {extraServices.map((service) => (
                <ServiceCard key={service.id} service={{ ...service, features: undefined }} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
