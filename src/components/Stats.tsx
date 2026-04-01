import { motion } from "motion/react";

const stats = [
  { label: "Tahun Pengalaman", value: "15+" },
  { label: "Proyek Selesai", value: "500+" },
  { label: "Klien Korporat", value: "200+" },
  { label: "Kantor Regional", value: "3" },
];

export default function Stats() {
  return (
    <section className="bg-primary-container py-20 border-b border-tertiary-container/20">
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="font-headline text-6xl md:text-7xl text-tertiary-container mb-2">{stat.value}</h2>
              <p className="text-white/60 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
