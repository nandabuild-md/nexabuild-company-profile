import { motion } from "motion/react";
import { Building2, HardHat, DraftingCompass } from "lucide-react";

const services = [
  {
    title: "Konstruksi Gedung",
    description: "Paket konsultasi dan perencanaan terstruktur yang disesuaikan untuk berbagai skala proyek.",
    icon: Building2,
    bgColor: "bg-surface-container-lowest",
  },
  {
    title: "Renovasi & Retrofit",
    description: "Paket konsultasi dan perencanaan terstruktur yang disesuaikan untuk berbagai skala proyek.",
    icon: HardHat,
    bgColor: "bg-surface-container-low",
  },
  {
    title: "Desain & Engineering",
    description: "Paket konsultasi dan perencanaan terstruktur yang disesuaikan untuk berbagai skala proyek.",
    icon: DraftingCompass,
    bgColor: "bg-surface-container-lowest",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-surface bg-blueprint">
      <div className="container mx-auto px-8 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-headline text-5xl md:text-6xl text-primary-container leading-none mb-6"
            >
              TIER INVESTASI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-on-surface-variant max-w-md"
            >
              Paket konsultasi dan perencanaan terstruktur yang disesuaikan untuk berbagai skala proyek.
            </motion.p>
          </div>
          <div className="h-px bg-tertiary-container flex-grow mx-12 hidden md:block opacity-30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group border-l-4 border-tertiary-container p-12 ${service.bgColor} hover:bg-primary-container transition-colors duration-500`}
            >
              <service.icon className="w-12 h-12 mb-8 text-tertiary-container" />
              <h3 className="font-headline text-3xl mb-4 text-primary-container group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-white/70 mb-8 transition-colors">{service.description}</p>
              <a className="text-tertiary-container font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 inline-block transition-transform" href="#">
                EKSPLORASI LAYANAN →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
