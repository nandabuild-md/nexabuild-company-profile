import { motion } from "motion/react";

export default function CTA() {
  return (
    <section id="contact" className="bg-primary-container py-24 border-t-8 border-tertiary-container">
      <div className="container mx-auto px-8 md:px-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-headline text-6xl md:text-8xl text-white mb-10 tracking-tight"
        >
          MARI BANGUN BERSAMA
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/60 max-w-2xl mx-auto mb-12 text-lg"
        >
          Siap untuk merealisasikan proyek prestisius Anda? Hubungi tim ahli kami sekarang untuk konsultasi teknis mendalam.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-primary-container px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-tertiary-container hover:text-on-tertiary-container transition-all"
        >
          Mulai Diskusi Proyek
        </motion.button>
      </div>
    </section>
  );
}
