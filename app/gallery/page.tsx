'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const galleryImages = [
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80&sat=-10",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80&sat=-10",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80&sat=-10",
  "https://images.unsplash.com/photo-1500534319936-95f76c808563?auto=format&fit=crop&w=1000&q=80&sat=-10",
];

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <div className="mb-6 flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4F3F]">{t("gallery.title")}</p>
        <h1 className="heading-font text-4xl font-semibold text-[#1B4332]">{t("gallery.intro")}</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {[0, 1, 2, 3].map((idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-[#1B4332]/10 bg-white/80 shadow-lg shadow-[#1B4332]/10"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={galleryImages[idx]}
                alt={t(`gallery.items.${idx}.title`)}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent p-6 text-[#F7F3E9] opacity-0 transition group-hover:opacity-100">
              <div>
                <p className="text-sm uppercase tracking-[0.2em]">{t(`gallery.items.${idx}.title`)}</p>
                <p className="text-xs text-[#F7F3E9]/80">{t(`gallery.items.${idx}.caption`)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

