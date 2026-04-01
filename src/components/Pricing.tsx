import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "STARTER",
    description: "Paket konsultasi dan perencanaan terstruktur yang disesuaikan untuk berbagai skala proyek.",
    price: "2.5JT",
    period: "/KONSULTASI",
    features: ["Inspeksi Lokasi (1 Kunjungan)", "Analisis Struktur Dasar", "Estimasi Anggaran"],
    popular: false,
  },
  {
    name: "GROWTH",
    description: "Comprehensive commercial planning.",
    price: "4.0JT",
    period: "/KONSULTASI",
    features: ["Desain Awal BIM", "Tinjauan Dampak Lingkungan", "Pemeriksaan Kepatuhan Regulasi"],
    popular: true,
  },
  {
    name: "EXECUTIVE",
    description: "Paket konsultasi dan perencanaan terstruktur yang disesuaikan untuk berbagai skala proyek.",
    price: "6.5JT",
    period: "/KONSULTASI",
    features: ["Cetak Biru Arsitektur Lengkap", "Manajemen Logistik & Situs", "Dukungan Prioritas 24/7"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-surface">
      <div className="container mx-auto px-8 md:px-24">
        <div className="max-w-xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-headline text-5xl text-primary-container mb-6"
          >
            TIER INVESTASI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-on-surface-variant"
          >
            Paket konsultasi dan perencanaan terstruktur yang disesuaikan untuk berbagai skala proyek.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`border border-outline-variant p-10 flex flex-col relative ${tier.popular ? "bg-primary-container" : ""}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-tertiary-container text-on-tertiary-container px-4 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  Recommended
                </div>
              )}
              <h3 className={`font-headline text-3xl mb-2 ${tier.popular ? "text-white" : ""}`}>{tier.name}</h3>
              <p className={`text-sm mb-8 ${tier.popular ? "text-white/60" : "text-on-surface-variant"}`}>{tier.description}</p>
              <div className="mb-10">
                <span className={`text-4xl font-headline ${tier.popular ? "text-tertiary-container" : "text-primary-container"}`}>Rp {tier.price}</span>
                <span className={`text-sm ${tier.popular ? "text-white/60" : "text-on-surface-variant"}`}>{tier.period}</span>
              </div>
              <ul className={`space-y-4 mb-12 flex-grow ${tier.popular ? "text-white/80" : ""}`}>
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-tertiary-container" /> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                tier.popular 
                  ? "bg-tertiary-container text-on-tertiary-container hover:brightness-110" 
                  : "border border-primary-container hover:bg-primary-container hover:text-white"
              }`}>
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
