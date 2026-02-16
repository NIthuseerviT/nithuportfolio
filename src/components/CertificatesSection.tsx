import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import digitalEngCert from "@/assets/certificates/digital-engineering.png";
import frontendCert from "@/assets/certificates/frontend-developer.jpg";
import html5Cert from "@/assets/certificates/html5-course.jpg";

const certificates = [
  {
    title: "Digital Engineering",
    issuer: "NASSCOM / Future Skills Prime",
    date: "October 2025",
    badge: "Gold 🥇",
    image: digitalEngCert,
    pdfUrl: undefined,
  },
  {
    title: "Front End Web Developer",
    issuer: "Infosys Springboard",
    date: "January 2026",
    badge: "Certified ✅",
    image: frontendCert,
    pdfUrl: "/certificates/certificate-1.pdf",
  },
  {
    title: "HTML5 - The Language",
    issuer: "Infosys Springboard",
    date: "January 2026",
    badge: "Completed 📜",
    image: html5Cert,
    pdfUrl: "/certificates/certificate-2.pdf",
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-20 sm:py-28 px-4 bg-gradient-section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary mb-2">My achievements</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gradient">Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              onClick={() => setSelected(i)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-300 sparkle-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{cert.title}</h3>
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  <span className="text-xs font-medium text-primary">{cert.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-3xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={certificates[selected].image}
              alt={certificates[selected].title}
              className="w-full"
            />
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">{certificates[selected].title}</h3>
                <p className="text-sm text-muted-foreground">{certificates[selected].issuer} · {certificates[selected].date}</p>
              </div>
              {certificates[selected].pdfUrl && (
                <a
                  href={certificates[selected].pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View PDF <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
