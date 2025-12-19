'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";

const canopyImg =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80&sat=-5";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-[28px] border border-[#1B4332]/10 bg-white/80 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl"
      >
        <div className="relative h-72 w-full overflow-hidden rounded-t-[28px]">
          <Image src={canopyImg} alt="Forest" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#F7F3E9]">
              <p className="text-sm uppercase tracking-[0.2em]">{t("about.title")}</p>
              <h1 className="heading-font text-4xl font-semibold">{t("hero.title")}</h1>
            </div>
          </div>
        </div>
        <div className="grid gap-10 p-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="heading-font text-3xl font-semibold text-[#1B4332]">{t("about.title")}</h2>
            <p className="text-base text-[#2B2B2B]/85">{t("about.story")}</p>
            <div className="grid gap-4">
              {["about.bullets.0", "about.bullets.1", "about.bullets.2"].map((key, idx) => (
                <div
                  key={key}
                  className="flex items-start gap-3 rounded-2xl bg-[#F7F3E9] px-4 py-3 text-sm text-[#2B2B2B]/85"
                >
                  <span className="mt-1 rounded-full bg-[#1B4332] px-2 py-1 text-[10px] font-semibold text-[#F7F3E9]">
                    0{idx + 1}
                  </span>
                  <p>{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#1B4332]/10 bg-gradient-to-br from-white to-[#F7F3E9] p-6 shadow-inner shadow-[#1B4332]/10">
            <h3 className="text-lg font-semibold text-[#1B4332]">Promises</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#2B2B2B]/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#588157]" />
                Conservation-first, community-positive stays.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#6B4F3F]" />
                Tailored itineraries with expert naturalists.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#1B4332]" />
                Seamless logistics from airstrip to nightcaps.
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-[#1B4332]/10 bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6B4F3F]">Sustainability</p>
              <p className="mt-2 text-sm text-[#2B2B2B]/85">
                Solar energy, grey-water reuse, and every stay funding wildlife corridors.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

