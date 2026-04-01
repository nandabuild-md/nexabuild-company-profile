import { Facebook, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1c2c] w-full py-16 px-8 md:px-24 flex flex-col items-start border-t-2 border-amber-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 w-full mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-headline text-white mb-4">NEXABUILD</h2>
          <p className="text-slate-400 font-sans leading-relaxed max-w-sm">
            Integritas arsitektur terjamin. Kami menetapkan standar industri global untuk manajemen konstruksi dan keunggulan desain.
          </p>
        </div>
        <div>
          <h4 className="font-headline text-amber-500 tracking-widest uppercase mb-6">Direktori</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-400 font-sans hover:text-amber-400 transition-colors" href="#">Standar Industri</a></li>
            <li><a className="text-slate-400 font-sans hover:text-amber-400 transition-colors" href="#">Kantor Global</a></li>
            <li><a className="text-slate-400 font-sans hover:text-amber-400 transition-colors" href="#">Protokol Keamanan</a></li>
            <li><a className="text-slate-400 font-sans hover:text-amber-400 transition-colors" href="#">Hubungan Investor</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-amber-500 tracking-widest uppercase mb-6">Informasi</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-400 font-sans hover:text-amber-400 transition-colors" href="#">Kebijakan Privasi</a></li>
            <li><a className="text-slate-400 font-sans hover:text-amber-400 transition-colors" href="#">Syarat & Ketentuan</a></li>
            <li><a className="text-slate-400 font-sans hover:text-amber-400 transition-colors" href="#">Karir</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px bg-white/5 mb-8"></div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 font-headline tracking-widest text-xs uppercase">
          © 2024 NEXABUILD CORP. INTEGRITAS ARSITEKTUR TERJAMIN.
        </p>
        <div className="flex gap-6">
          <Facebook className="w-5 h-5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors" />
          <Globe className="w-5 h-5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors" />
          <Share2 className="w-5 h-5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}
