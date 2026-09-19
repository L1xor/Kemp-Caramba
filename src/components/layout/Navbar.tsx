"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, Tent, X } from "lucide-react";

import { contactInfo, mainNavItems, seasonBadge, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

/**
 * Responzivní navigace webu. Na desktopu zobrazuje 5 hlavních odkazů a
 * sezónní odznak, na mobilu se sbaluje do hamburger menu.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-800 text-amber-50">
            <Tent className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-stone-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavní navigace">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-forest-800 text-white"
                    : "text-stone-700 hover:bg-forest-50 hover:text-forest-800",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-terracotta-200 bg-terracotta-50 px-4 py-2 text-sm font-semibold text-terracotta-700 transition-colors hover:bg-terracotta-100"
          >
            <seasonBadge.icon className="h-4 w-4" aria-hidden="true" />
            {seasonBadge.label}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          className="inline-flex items-center justify-center rounded-lg p-2 text-stone-700 hover:bg-stone-100 lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stone-200 bg-stone-50 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobilní navigace">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-forest-800 text-white"
                      : "text-stone-700 hover:bg-forest-50",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={`tel:${contactInfo.phone}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-terracotta-600 px-4 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
        </div>
      ) : null}
    </header>
  );
}
