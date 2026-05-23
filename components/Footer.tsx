/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, footerContent, navLinks } from "@/lib/content";

export default function Footer() {
  const { about, services, motto, developer } = footerContent;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.1]"
        style={{ backgroundImage: "url('/brand/background-pattern-thin.svg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-primary/82" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_1.1fr_1fr] lg:items-start">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex">
              <img
                src="/brand/Compact logo lockup - White.trimmed.svg"
                alt={`${brand.name} ${brand.tagline}`}
                className="h-auto w-36 max-w-full"
              />
            </Link>
            <p className="mt-7 text-sm leading-relaxed text-white/68">{about}</p>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-white/45">
              {motto}
            </p>
          </div>

          <div className="lg:pl-2">
            <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Menu
            </h2>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex text-sm leading-relaxed text-white/68 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Services
            </h2>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group relative inline-flex text-sm leading-relaxed text-white/68 transition-colors hover:text-white"
                  >
                    {service.label}
                    <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Contact
            </h2>
            <ul className="space-y-3.5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-white/68">{brand.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="group flex gap-3 text-sm leading-relaxed text-white/68 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{brand.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.phoneHref}
                  className="group flex gap-3 text-sm leading-relaxed text-white/68 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{brand.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 md:flex-row md:items-center md:justify-between">
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
