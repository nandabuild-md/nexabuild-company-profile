import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          alt="Modern Skyscraper" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3xZYUnTmsJ4LRy6XAQubM7cdrlAzLO8dPjWUEQfbFV2C8xZm3y8FGWpUo6VDVnExqOoMpwU-tSHd6IoBtimNDYhF0bj-ic3u0q_9wyaEb3Q8zdE-PjMZSeBmWQboDMDUdQCxx2iNOUdggQIDcVVLhO9T-QO2arjVdQz38UmTI0s0qWMKibEoK55iYU1WZx3647Zm27qKHHKgCDtQVLZafosuvryTp9Z1pJzKN0d-4YVQX-mvVb_akjucmI_t8DdWHTNXbpRleeMM"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-8 md:px-24 relative z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block border-l-4 border-tertiary-container pl-4 text-tertiary-container font-bold tracking-[0.2em] mb-6 text-sm uppercase"
          >
            INTEGRITAS ARSITEKTUR TERJAMIN
          </motion.span>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-headline text-7xl md:text-9xl text-white leading-[0.9] tracking-tight mb-8"
          >
            CONSTRUCTING<br/>THE FUTURE
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          >
            Rekayasa presisi berpadu dengan desain visioner. NexaBuild Corp menghadirkan keunggulan industri dari cetak biru hingga cakrawala kota.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-tertiary-container text-on-tertiary-container px-10 py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              KONSULTASI GRATIS
            </button>
            <button className="border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-primary-container transition-all">
              LIHAT PORTOFOLIO
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
