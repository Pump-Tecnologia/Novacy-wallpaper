/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, footerContent, navLinks } from "@/lib/content";

export default function Footer() {
  const { about, services, motto, developer } = footerContent;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#002E7D] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center md:[background-attachment:fixed]"
        style={{ backgroundImage: "url('/brand/background-pattern-footer.svg')" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.15fr_0.75fr_1.1fr_1fr] lg:items-start">
          <div className="col-span-2 max-w-sm md:col-span-1">
            <Link href="/" className="inline-flex">
              <img
                src="/brand/Compact logo lockup - White.trimmed.svg"
                alt={`${brand.name} ${brand.tagline}`}
                className="h-auto w-24 max-w-full md:w-36"
              />
            </Link>
            <p className="mt-3 text-[11px] leading-5 text-white/68 md:mt-7 md:text-sm md:leading-relaxed">
              {about}
            </p>
            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 md:mt-7 md:text-xs md:tracking-[0.24em]">
              {motto}
            </p>
          </div>

          <div className="lg:pl-2">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent md:mb-6 md:text-xs md:tracking-[0.24em]">
              Menu
            </h2>
            <ul className="space-y-1.5 md:space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex text-xs leading-relaxed text-white/68 transition-colors hover:text-white md:text-sm"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent md:mb-6 md:text-xs md:tracking-[0.24em]">
              Services
            </h2>
            <ul className="space-y-1.5 md:space-y-3.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group relative inline-flex text-xs leading-relaxed text-white/68 transition-colors hover:text-white md:text-sm"
                  >
                    {service.label}
                    <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent md:mb-6 md:text-xs md:tracking-[0.24em]">
              Contact
            </h2>
            <ul className="grid gap-1.5 md:block md:space-y-3.5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-xs leading-relaxed text-white/68 md:text-sm">{brand.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="group flex gap-3 text-xs leading-relaxed text-white/68 transition-colors hover:text-white md:text-sm"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{brand.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.phoneHref}
                  className="group flex gap-3 text-xs leading-relaxed text-white/68 transition-colors hover:text-white md:text-sm"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{brand.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/12 pt-4 text-[8px] font-bold uppercase tracking-[0.14em] text-white/45 md:mt-12 md:flex-row md:items-center md:justify-between md:pt-7 md:text-[10px] md:tracking-[0.18em]">
          <p>© {year} {brand.name} {brand.tagline}</p>
          <p>
            Site crafted by{" "}
            <a
              href={developer.href}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition-colors hover:text-accent"
            >
              {developer.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
