import Image from "next/image";
import { Check } from "lucide-react";

import type { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  reverse?: boolean;
}

/**
 * Karta služby s fotkou, tagy a popisem. V rozšířeném režimu (reverse) se
 * chová jako velká sekce se seznamem vybavení, jinak jako kompaktní karta v gridu.
 */
export function ServiceCard({ service, className, reverse = false }: ServiceCardProps) {
  const Icon = service.icon;

  if (service.features && service.features.length > 0) {
    return (
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
          className,
        )}
      >
        <div className={cn("relative order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-card", reverse && "lg:order-2")}>
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className={cn("order-2", reverse && "lg:order-1")}>
          <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-forest-100 p-3 text-forest-700">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-stone-600">
            {service.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-stone-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta-600" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 inline-flex w-fit items-center justify-center rounded-lg bg-forest-100 p-2 text-forest-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="font-display text-lg font-semibold text-stone-900">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
          {service.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
