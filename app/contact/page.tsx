'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-6">
      <div className="rounded-[28px] border border-[#1B4332]/10 bg-white/80 shadow-lg shadow-[#1B4332]/10 backdrop-blur-xl">
        <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4F3F]">{t("contact.title")}</p>
            <h1 className="heading-font text-4xl font-semibold text-[#1B4332]">{t("contact.subtitle")}</h1>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-[#1B4332]/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#1B4332]" placeholder={t("contact.form.name")} />
                <input className="rounded-xl border border-[#1B4332]/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#1B4332]" placeholder={t("contact.form.email")} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-[#1B4332]/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#1B4332]" placeholder={t("contact.form.phone")} />
                <input className="rounded-xl border border-[#1B4332]/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#1B4332]" placeholder={t("contact.form.date")} />
              </div>
              <input className="rounded-xl border border-[#1B4332]/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#1B4332]" placeholder={t("contact.form.guests")} />
              <textarea
                rows={4}
                className="rounded-xl border border-[#1B4332]/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#1B4332]"
                placeholder={t("contact.form.message")}
              />
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-2 w-full rounded-full bg-gradient-to-r from-[#1B4332] to-[#588157] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#F7F3E9] shadow-lg shadow-[#1B4332]/30"
                type="button"
              >
                {t("contact.form.submit")}
              </motion.button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-[#1B4332]/15 shadow-inner shadow-[#1B4332]/10">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507478.00270229107!2d80.18120198808671!3d6.384358829511452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1dd53b2f2d8af%3A0x4a3597c3bc2aafdd!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-2xl border border-[#1B4332]/10 bg-[#1B4332] p-6 text-[#F7F3E9] shadow-lg shadow-[#1B4332]/20">
              <h3 className="text-lg font-semibold">{t("contact.details.socials")}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                {["Instagram", "Facebook", "YouTube", "Tripadvisor"].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-2 text-sm text-[#F7F3E9]/85">
                <p>{t("contact.details.address")}</p>
                <p>{t("contact.details.phone")}</p>
                <p>{t("contact.details.email")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

