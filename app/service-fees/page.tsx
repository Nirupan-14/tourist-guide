'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const accents = ["#1B4332", "#588157", "#6B4F3F"];

export default function ServiceFeesPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <div className="rounded-[28px] border border-[#1B4332]/10 bg-white/80 p-8 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4F3F]">{t("fees.title")}</p>
        <h1 className="heading-font mt-2 text-4xl font-semibold text-[#1B4332]">{t("fees.intro")}</h1>
        <p className="mt-3 text-sm text-[#2B2B2B]/80">{t("cta.body")}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-[#1B4332]/12 bg-gradient-to-br from-white to-[#F7F3E9] p-6 shadow-md shadow-[#1B4332]/10"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `radial-gradient(circle at 20% 20%, ${accents[idx]} , transparent 45%)`,
                }}
              />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6B4F3F]">0{idx + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-[#1B4332]">{t(`fees.packages.${idx}.name`)}</h3>
                <p className="text-lg font-semibold text-[#6B4F3F]">{t(`fees.packages.${idx}.price`)}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#2B2B2B]/85">
                  {[0, 1, 2].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#588157]" />
                      {t(`fees.packages.${idx}.perks.${p}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#2B2B2B]/80">{t("fees.note")}</p>
      </div>
    </div>
  );
}

