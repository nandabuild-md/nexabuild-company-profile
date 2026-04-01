import { motion } from "motion/react";

const projects = [
  {
    title: "NEO VERTICAL TOWER",
    category: "Commercial",
    location: "Central District, Jakarta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0oMMBl1ukTiV1kOGfvYgxYpgRk9KHsap3soF9NSxpoYDl5We1SPkRMXswOjdkjeBPRG3XnkYbbSnkXuOw0jRVEdXeagpYABf-BGGwUI8UESMyFYy8pHGvTGd2uIUhNFWTGyDqQmp-OgWv6bQgzS9bwfL-A1DCSDaW2SgV-QRD_XM8pSLQtKYBtNxy6lv6arZ3s5QHpwwLN-FHYE-6jITzEGAIkvj42ZxYaSypWB3C1RFadE7b363HAiXLHF_LZQxGoOewQ4nvFCs",
  },
  {
    title: "AZURE RESIDENCES",
    category: "Residential",
    location: "Coastal Ridge, Bali",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUO0M4hdIX-pqnC9TJS0B4uuxiufYVg0WzhHPiYhaW1P1cPYYV9qKqlQBq38Tv-xoJt34ShVlkNjGnh4kWqUJ6xzAUSjSMJWPMZ_mAaSKzBXlICdAkKfBqa6k9PEsP5cShQudAb0NPjjknFPk59GEDYGuS0WgAk8HTBrhEGE_QDeTR7m-GzoeLci3fO4WgTaAnzu3eSADDS3rGuFMn2Pxxb19fdvfgiS3lTzqVRzUuyuopSQ2wOd2DikvQf1eeQCC-FguPfZBvSWw",
  },
  {
    title: "GRAND MALL EXT.",
    category: "Retail",
    location: "North Plaza, Surabaya",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNrS-gCvg4DG5IbwIW_gCjc7agc5fCU3pLS8Vcp_MeOVRa29piBiFRRM3sg5Cmm_AIS73Je0AqNQy11SNT90cN1_spxtbWEDp6D3cqjahJaVmSO1r9e7d22HI_e11rXofqwY7cUfNLBFEZ3bbC50nJxAf-rE5jXNiSTA5Xn9fi_HPzoSwlARIDNHVQuG4jrBNkOBDWxJou1nVIc3UVDrSNv0wej0nweBHu-eg_ty-dqndKCsn37ttbxRMuXdmdGsM4VcNTk7bEYa4",
  },
  {
    title: "CITY CARE HOSPITAL",
    category: "Medical",
    location: "West Wing Renovation",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZS1gbE98aOE3sEhhkXPC4vgaDDH16dmXwKHo3xvDVBKsu_WWTWsUQMtQBMvqWk0wbVGX5-_Ld2doPhFunhNj-7MwS5nrv109sWU9t6AnhoFWCSv81u3_co5J3iJmnfEiNjvUxfLiF0pskL9OQitQrmt0bD-TaR0PpgcK2okM4uX2_n9fJF8qGYZ7UpdWJoKKdPZcbhiYOTx8JMsarTeb5_dWMxgv7suENStD1gUL39Qof2CKnTdR8bWqntpiwtqCTVFFtXMD-rI",
  },
  {
    title: "CARGO HUB Z-9",
    category: "Industrial",
    location: "Tanjung Priok, Jakarta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuYYiFq_mwJWDBGq2Szu4cVicVmKn4YdaPuzbCwKm0f6LpYw2f_raaZ8ckw7A48lkjMo5ttutM7Z_2GpoVpqZTttpEpPAXjBttakrqXjGDTWVqegCPYywZ3c0XiyYTG-KISMWn-BBdV7oYcRXQ60Yj1TmlgjaF1McEB2WFGkv46lxIUXrYpQpX5vVZXoutz7rDjOaI6C4GiKokD8ydBMzuvz6HPuW9ApxMDKEkajs2e_5lD2Gfwo_CMD6bUnsIXor5JYpCGsgL-vQ",
  },
  {
    title: "STELARIS PLAZA",
    category: "Hospitality",
    location: "Downtown, Medan",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYik8c7pAYxHxTFwSH7gbFhUHUTQswduzpJkEbKzSBQNkTETBAIaF6dze1rpaZp61s439_6VU0bPa72OBqxKymr9kogKWM9c2dxdKGgej_0e208yNi8-oVZYCQE7P5BVaRL5WGAoe826N08FlsUO6wcYz19sF18FQbM3UvRTY4P2J2FsNNgLuy_xwm38oOMqCeaCR2Qzug2AhgmdhTDtKfzwDU4y1qQvxhka74tLKxhKYERat3gO6CbJYjakY3i4Un7489HEzCGto",
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-32 bg-surface-container-high">
      <div className="container mx-auto px-8 md:px-24">
        <div className="text-center mb-24">
          <p className="font-bold text-tertiary-container uppercase tracking-[0.4em] text-xs mb-4">The Nexus of Architecture</p>
          <h2 className="font-headline text-6xl text-primary-container">PILIH PORTOFOLIO</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img 
                alt={project.title} 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" 
                src={project.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary-container/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col justify-end">
                <p className="text-tertiary-container uppercase tracking-widest text-xs font-bold mb-2">{project.category}</p>
                <h4 className="font-headline text-4xl text-white mb-2">{project.title}</h4>
                <p className="text-white/60 text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
