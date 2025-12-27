'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Category = "all" | "mountain" | "safari" | "river";

const categories: Category[] = ["all", "mountain", "safari", "river"];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    category: "mountain",
    titleKey: "gallery.items.0.title",
    captionKey: "gallery.items.0.caption",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "safari",
    titleKey: "gallery.items.1.title",
    captionKey: "gallery.items.1.caption",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    category: "river",
    titleKey: "gallery.items.2.title",
    captionKey: "gallery.items.2.caption",
  },
  {
    src: "https://images.unsplash.com/photo-1500534319936-95f76c808563",
    category: "mountain",
    titleKey: "gallery.items.3.title",
    captionKey: "gallery.items.3.caption",
  },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4F3F]">
          {t("gallery.title")}
        </p>
        <h1 className="heading-font text-4xl font-semibold text-[#1B4332]">
          {t("gallery.intro")}
        </h1>
      </div>

      {/* Category Buttons */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition
              ${
                activeCategory === cat
                  ? "bg-[#1B4332] text-[#F7F3E9]"
                  : "border border-[#1B4332]/30 text-[#1B4332] hover:bg-[#1B4332]/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-[#1B4332]/10 bg-white shadow-lg"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={`${img.src}?auto=format&fit=crop&w=1000&q=80&sat=-10`}
                  alt={t(img.titleKey)}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent" />
              </div>

              {/* Hover Text */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 transition group-hover:opacity-100">
                <div className="text-[#F7F3E9]">
                  <p className="text-sm uppercase tracking-[0.2em]">
                    {t(img.titleKey)}
                  </p>
                  <p className="text-xs text-[#F7F3E9]/80">
                    {t(img.captionKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
