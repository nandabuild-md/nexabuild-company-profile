import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama rata-rata durasi proyek?",
    answer: "Mengklarifikasi proses, jaminan, and standar layanan kami bagi calon mitra.",
  },
  {
    question: "Apakah NexaBuild melayani proyek luar kota?",
    answer: "Mengklarifikasi proses, jaminan, and standar layanan kami bagi calon mitra.",
  },
  {
    question: "Apakah ada garansi struktur?",
    answer: "Mengklarifikasi proses, jaminan, and standar layanan kami bagi calon mitra.",
  },
  {
    question: "Bagaimana proses desain & engineering?",
    answer: "Mengklarifikasi proses, jaminan, and standar layanan kami bagi calon mitra.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-5xl text-primary-container mb-8"
            >
              PERTANYAAN YANG SERING DIAJUKAN
            </motion.h2>
            <div className="h-1 w-24 bg-tertiary-container mb-8"></div>
            <p className="text-on-surface-variant">Mengklarifikasi proses, jaminan, and standar layanan kami bagi calon mitra.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-outline-variant pb-6">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex justify-between items-center w-full text-left group"
                >
                  <h4 className="font-bold uppercase tracking-wider text-sm">{faq.question}</h4>
                  <ChevronDown className={`w-5 h-5 text-tertiary-container transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-on-surface-variant text-sm pt-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
