'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { languages } from "@/lib/translations";

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

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 px-4"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-3xl border border-white/30 bg-[#F7F3E9]/80 px-4 py-3 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#1B4332] md:text-xl">
          Lux Canopy
        </Link>
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
                {active && <span className="absolute -bottom-2 left-0 h-0.5 w-6 rounded-full bg-[#588157]" />}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full bg-white/70 px-1 py-1 text-xs font-semibold text-[#2B2B2B] shadow-inner shadow-[#1B4332]/10">
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
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#1B4332] to-[#588157] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#F7F3E9] shadow-lg shadow-[#1B4332]/30 transition hover:-translate-y-0.5 hover:shadow-xl md:inline-block"
          >
            {t("hero.book")}
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

