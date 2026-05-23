"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/lib/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updateHeaderState() {
      setIsScrolled(window.scrollY > 24);
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  const isSolid = isScrolled || isOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSolid
          ? "border-b border-gray-100 bg-white shadow-sm"
          : "border-b border-white/10 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isSolid ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <img
              src="/brand/Logomark.trimmed.svg"
              alt=""
              aria-hidden="true"
              className={`h-7 w-7 flex-shrink-0 transition-all duration-300 ${
                isSolid ? "brightness-0" : ""
              }`}
            />
            <span className="flex flex-col">
              <span
                className={`font-display text-2xl font-bold leading-none transition-colors duration-300 ${
                  isSolid ? "text-primary" : "text-white"
                }`}
              >
                {brand.name}
              </span>
              <span
                className={`font-sans text-[8px] font-bold tracking-[0.3em] transition-colors duration-300 ${
                  isSolid ? "text-accent" : "text-white/72"
                }`}
              >
                {brand.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            className={`hidden space-x-7 text-xs font-bold uppercase tracking-widest transition-colors duration-300 md:flex ${
              isSolid ? "text-primary" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 transition-colors duration-300 ${
                  isSolid ? "hover:text-accent" : "hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    isSolid ? "bg-accent" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className={`flex flex-col gap-1.5 p-2 transition-colors duration-300 md:hidden ${
              isSolid ? "text-primary" : "text-white"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-6 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative w-fit text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-accent"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
