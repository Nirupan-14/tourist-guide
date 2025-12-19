'use client';

import { useLanguage } from "./LanguageProvider";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/20 bg-[#1B4332] px-6 py-10 text-[#F7F3E9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Lux Canopy</h3>
          <p className="text-sm text-[#F7F3E9]/80">{t("footer.tagline")}</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about" className="hover:text-white/80">
            {t("nav.about")}
          </Link>
          <Link href="/services" className="hover:text-white/80">
            {t("nav.services")}
          </Link>
          <Link href="/contact" className="hover:text-white/80">
            {t("nav.contact")}
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl text-xs text-[#F7F3E9]/70">
        © {year} Lux Canopy. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;

