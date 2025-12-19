'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const experiences = [
  { icon: "🌅", key: "services.list.0" },
  { icon: "🏕️", key: "services.list.1" },
  { icon: "🌿", key: "services.list.2" },
  { icon: "🧘", key: "services.list.3" },
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <div className="rounded-[28px] border border-[#1B4332]/10 bg-white/80 p-8 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4F3F]">{t("services.title")}</p>
          <h1 className="heading-font text-4xl font-semibold text-[#1B4332]">{t("services.intro")}</h1>
          <p className="text-base text-[#2B2B2B]/80">{t("about.story")}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-[#1B4332]/10 bg-gradient-to-br from-white to-[#F7F3E9] p-6 shadow-md shadow-[#1B4332]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/5 via-transparent to-[#588157]/8" />
              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B4332]/10 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1B4332]">{t(`${item.key}.title`)}</h3>
                  <p className="mt-2 text-sm text-[#2B2B2B]/80">{t(`${item.key}.description`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-[#1B4332]/10 bg-[#1B4332] p-6 text-[#F7F3E9]"
          >
            <h3 className="text-xl font-semibold">Logistics handled</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#F7F3E9]/85">
              <li>Luxury transfers: 4x4, heli, or seaplane options.</li>
              <li>Concierge for visas, dietary notes, and celebration setups.</li>
              <li>On-site wellness team with Ayurvedic practitioners.</li>
              <li>Photographers and astronomy hosts on request.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-[#1B4332]/10 bg-white/80 p-6 shadow-inner shadow-[#1B4332]/10"
          >
            <h3 className="text-xl font-semibold text-[#1B4332]">Add-on rituals</h3>
            <div className="mt-4 space-y-2 text-sm text-[#2B2B2B]/80">
              <p>• Sunrise hot-air ballooning over misty reserves.</p>
              <p>• Tea pairing dinners with estate sommeliers.</p>
              <p>• Firelit storytelling with Indigenous guides.</p>
              <p>• Night safaris with thermal scopes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

