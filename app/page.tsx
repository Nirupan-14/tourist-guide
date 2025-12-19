'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const leopardBg =
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1600&q=80&sat=-10&exp=-5";
const forestPng = "https://pngimg.com/d/leaves_PNG3640.png";
const leopardPng = "https://pngimg.com/d/leopard_PNG14652.png";

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <section
        className="relative isolate min-h-[80vh] overflow-hidden rounded-[32px] px-6 py-20 sm:px-10 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(125deg, rgba(27,67,50,0.9), rgba(27,67,50,0.65), rgba(88,129,87,0.55)), url(${leopardBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(247,243,233,0.15),transparent_25%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 text-[#F7F3E9] lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6 lg:max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-[#F7F3E9]" />
              {t("hero.badge")}
            </div>
            <h1 className="heading-font text-4xl font-semibold leading-tight drop-shadow-2xl sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="typing text-lg font-medium text-[#F7F3E9]/90 sm:text-xl">
              {t("hero.subtitle")}
            </p>
            <p className="text-sm text-[#F7F3E9]/80">{t("hero.highlight")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-[#F7F3E9] to-[#dcd3c0] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#1B4332] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {t("hero.book")}
              </Link>
              <a
                href="#highlights"
                className="rounded-full border border-[#F7F3E9]/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#F7F3E9] backdrop-blur-md transition hover:bg-white/10"
              >
                {t("hero.discover")}
              </a>
            </div>
          </div>
          <div className="relative mt-10 grid max-w-md grid-cols-2 gap-4 self-end rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:mt-0">
            {[
              { label: "Private drives", value: "2 daily" },
              { label: "Cuisine", value: "Chef-led" },
              { label: "Wellness", value: "Forest spa" },
              { label: "Transfers", value: "Heli / sea plane" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 * idx }}
                className="rounded-2xl bg-white/15 px-4 py-5 text-sm text-[#F7F3E9] shadow-inner shadow-black/10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#F7F3E9]/70">{item.label}</p>
                <p className="mt-1 text-lg font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="pointer-events-none absolute -left-8 bottom-0 opacity-70 sm:-left-16">
            <Image src={forestPng} alt="" width={320} height={320} className="animate-float" />
          </div>
          <div className="pointer-events-none absolute -right-10 top-10 w-40 opacity-70 sm:w-56 lg:w-64">
            <Image src={leopardPng} alt="" width={420} height={420} className="drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <section id="highlights" className="relative z-20 mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl border border-[#1B4332]/10 bg-white/80 p-8 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4F3F]">
              {t("hero.badge")}
            </p>
            <h2 className="heading-font mt-2 text-3xl font-semibold text-[#1B4332] sm:text-4xl">
              {t("highlights.title")}
            </h2>
            <p className="mt-4 text-base text-[#2B2B2B]/80">{t("about.story")}</p>
            <div className="mt-6 grid gap-3">
              {["about.bullets.0", "about.bullets.1", "about.bullets.2"].map((key) => (
                <div key={key} className="flex items-start gap-3 rounded-2xl bg-[#F7F3E9] px-4 py-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1B4332]" />
                  <p className="text-sm text-[#2B2B2B]/80">{t(key)}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {t("highlights.cards.0") && [0, 1, 2].map((idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-[#1B4332]/10 bg-white/80 p-6 shadow-md shadow-[#1B4332]/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/6 via-transparent to-[#588157]/8 opacity-0 transition group-hover:opacity-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B4F3F]">0{idx + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#1B4332]">{t(`highlights.cards.${idx}.title`)}</h3>
                <p className="mt-2 text-sm text-[#2B2B2B]/80">{t(`highlights.cards.${idx}.body`)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative mt-16 bg-[#1B4332] px-6 py-16 text-[#F7F3E9]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 lg:max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F7F3E9]/80">{t("services.title")}</p>
            <h2 className="heading-font text-3xl font-semibold sm:text-4xl">{t("services.intro")}</h2>
            <p className="text-sm text-[#F7F3E9]/80">{t("cta.body")}</p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-[#F7F3E9] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#1B4332] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("hero.discover")}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="rounded-2xl bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{t(`services.list.${idx}.title`)}</h3>
                <p className="mt-2 text-sm text-[#F7F3E9]/80">{t(`services.list.${idx}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-16 max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-[#1B4332]/10 bg-white/80 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl"
        >
          <div className="relative h-64 w-full bg-gradient-to-r from-[#1B4332] via-[#588157] to-[#6B4F3F]">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&sat=-10"
              alt="Forest canopy"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/70 via-[#1B4332]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-xl space-y-2 text-[#F7F3E9]">
              <p className="text-sm uppercase tracking-[0.2em]">{t("cta.button")}</p>
              <h3 className="heading-font text-3xl font-semibold">{t("cta.title")}</h3>
              <p className="text-sm text-[#F7F3E9]/80">{t("cta.body")}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
            <div className="flex gap-4 text-sm text-[#2B2B2B]/80">
              <span className="rounded-full bg-[#1B4332]/10 px-3 py-1 text-[#1B4332]">Wildlife-first</span>
              <span className="rounded-full bg-[#6B4F3F]/10 px-3 py-1 text-[#6B4F3F]">Solar powered</span>
              <span className="rounded-full bg-[#588157]/10 px-3 py-1 text-[#588157]">Chef crafted</span>
            </div>
            <Link
              href="/service-fees"
              className="rounded-full bg-[#1B4332] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#F7F3E9] shadow-lg shadow-[#1B4332]/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("nav.fees")}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
