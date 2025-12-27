'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { languages } from "@/lib/translations";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/service-fees", key: "nav.fees" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "/contact", key: "nav.contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 px-4"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-3xl border border-white/30 bg-[#F7F3E9]/80 px-4 py-3 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#1B4332] md:text-xl">
          Leopard
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#2B2B2B] md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition hover:text-[#1B4332] ${
                  active ? "text-[#1B4332]" : "text-[#2B2B2B]"
                }`}
              >
                {t(item.key)}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-6 rounded-full bg-[#588157]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language + Button + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="hidden md:flex rounded-full bg-white/70 px-1 py-1 text-xs font-semibold text-[#2B2B2B] shadow-inner shadow-[#1B4332]/10">
            {(Object.keys(languages) as (keyof typeof languages)[]).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1 transition ${
                  lang === code ? "bg-[#1B4332] text-white shadow" : "hover:bg-[#F7F3E9]"
                }`}
              >
                {languages[code]}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#1B4332] to-[#588157] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#F7F3E9] shadow-lg shadow-[#1B4332]/30 transition hover:-translate-y-0.5 hover:shadow-xl md:inline-block"
          >
            {t("hero.book")}
          </Link>

          {/* Mobile Menu Icon */}
          <button
            className="inline-block md:hidden text-2xl text-[#1B4332]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed left-0 right-0 top-[72px] z-40 rounded-b-3xl bg-[#F7F3E9]/95 px-4 py-6 shadow-lg shadow-[#1B4332]/20 backdrop-blur-md"
          >
            <ul className="flex flex-col gap-4 text-lg font-medium text-[#1B4332]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block w-full transition hover:text-[#588157] ${
                      pathname === item.href ? "text-[#588157]" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Language Switcher */}
            <div className="mt-6 flex gap-2">
              {(Object.keys(languages) as (keyof typeof languages)[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-4 py-1 text-sm font-semibold transition ${
                    lang === code ? "bg-[#1B4332] text-white shadow" : "bg-white/70 hover:bg-[#EBD9B4]"
                  }`}
                >
                  {languages[code]}
                </button>
              ))}
            </div>

            {/* Mobile Book Button */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block w-full rounded-full bg-gradient-to-r from-[#1B4332] to-[#588157] px-4 py-2 text-center text-xs font-semibold uppercase text-[#F7F3E9] shadow-lg shadow-[#1B4332]/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("hero.book")}
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
