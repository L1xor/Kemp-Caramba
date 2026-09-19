import Link from "next/link";
import { Mail, MapPin, Phone, Tent } from "lucide-react";

import { contactInfo, footerQuickLinks, siteConfig, socialLinks } from "@/data/siteConfig";

/**
 * Patička webu se souhrnem o kempu, kontaktními údaji, provozovatelem
 * a rychlým navigačním rozcestníkem.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-700 text-amber-50">
              <Tent className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
            Kemp Caramba leží přímo u břehu Hamerského jezera v Hamru na Jezeře,
            obklopený borovými lesy. Nabízíme kempování u vody,
            bohatou sportovní půjčovnu, dětský ráj i programy pro školy a skupiny.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-300 transition-colors hover:bg-forest-700 hover:text-white"
              >
                <social.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone-100">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta-400" aria-hidden="true" />
              <span>
                {contactInfo.address.street}
                <br />
                {contactInfo.address.zip} {contactInfo.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-terracotta-400" aria-hidden="true" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white">
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 flex-shrink-0 text-terracotta-400" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                {contactInfo.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-stone-500">
            Provozovatel: {contactInfo.operator}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone-100">
            Rychlé odkazy
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-stone-500">
          © {year} {siteConfig.name} – {contactInfo.operator}. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
