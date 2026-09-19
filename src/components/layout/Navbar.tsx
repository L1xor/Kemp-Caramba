"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { contactInfo, mainNavItems, seasonBadge, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 40;

/**
 * Responzivní navigace webu. Na vršku stránky je záhlaví vyšší a zobrazuje
 * velké logo kempu. Po scrollu se záhlaví zúží, logo zmizí a zůstane jen
 * kompaktní navigace s odkazy, aby nezabírala tolik místa.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur-sm transition-[height] duration-300 ease-out",
        isScrolled ? "h-16" : "h-24 sm:h-32",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="relative flex items-center overflow-hidden"
        >
          <span
            className={cn(
              "relative block w-auto shrink-0 transition-all duration-300 ease-out",
              isScrolled
                ? "h-10 w-10 opacity-0 -translate-y-2 scale-90"
                : "h-16 w-32 opacity-100 translate-y-0 scale-100 sm:h-24 sm:w-48",
            )}
          >
            <Image
              src="/images/logo-caramba.jpg"
              alt="Logo kempu Caramba"
              fill
              sizes="200px"
              className="object-contain"
              priority
            />
          </span>
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight text-forest-900 transition-all duration-300 ease-out",
              isScrolled
                ? "ml-0 max-w-xs opacity-100"
                : "-ml-10 max-w-0 overflow-hidden opacity-0",
            )}
          >
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
        <div className="absolute left-0 right-0 top-full border-t border-stone-200 bg-stone-50 px-4 pb-6 pt-2 shadow-lg lg:hidden">
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
