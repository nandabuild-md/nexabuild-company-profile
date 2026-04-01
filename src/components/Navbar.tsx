import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-slate-950/80 backdrop-blur-md rounded-full mt-4 mx-auto max-w-fit px-6 py-2 border border-amber-500/20 shadow-[0px_24px_48px_rgba(13,27,42,0.08)] flex items-center gap-8"
      >
        <a className="text-2xl font-headline tracking-wider text-white" href="#">NEXABUILD</a>
        <div className="hidden md:flex gap-6 items-center">
          <a className="text-slate-300 hover:text-white transition-colors font-sans text-sm uppercase tracking-wider" href="#projects">Proyek</a>
          <a className="text-slate-300 hover:text-white transition-colors font-sans text-sm uppercase tracking-wider" href="#services">Layanan</a>
          <a className="text-slate-300 hover:text-white transition-colors font-sans text-sm uppercase tracking-wider" href="#pricing">Investasi</a>
          <a className="text-slate-300 hover:text-white transition-colors font-sans text-sm uppercase tracking-wider" href="#about">Tentang Kami</a>
          <a className="text-slate-300 hover:text-white transition-colors font-sans text-sm uppercase tracking-wider" href="#contact">Kontak</a>
        </div>
        <button className="bg-tertiary-container text-on-tertiary-container px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all">
          Minta Penawaran
        </button>
      </motion.nav>
    </header>
  );
}
