import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const references = [
  {
    id: 1,
    title: "Kundberättelse: Ett tryggt och professionellt takbyte",
    description: "I den här videon möter du Johan Ingberg, ordförande för BRF Ånghästen på Södermalm i Stockholm. Johan berättar om föreningens upplevelse av DM TAK och den takomläggning som...",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    overlayText: "Ordföranden berättar SÅ NÖJDA!",
  },
  {
    id: 2,
    title: "Kundberättelse: Bostadsrättsföreningen Menglöd",
    description: "Ordförande Bengt Jansson och boende på Bostadsrättsföreningen Menglöd 2, berättar själva om en mycket lyckad upphandling och genomförande av en stor...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    overlayText: "BOSTADSRÄTTSFÖRENINGEN MENGLÖD",
  },
];

const References = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-beige py-20 lg:py-32 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="slug-tag justify-center mb-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"/>
            </svg>
            KUNDREFERENSER
          </div>
          <h2 className="heading-lg text-foreground mb-4">
            Ett urval av våra kundreferenser
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vi har utfört takarbeten runt om i hela Stockholm, från innerstad till förort, så kika gärna in 
            på våra referensbilder för att hitta bilder från just ditt område.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {references.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 right-4">
                  {index === 0 && (
                    <div className="mb-2">
                      <div className="bg-primary px-3 py-1 rounded inline-block mb-1">
                        <span className="text-white text-sm font-bold">DM<span className="mx-1">•</span>TAK</span>
                      </div>
                      <p className="text-white text-xl font-bold">
                        Ordföranden<br />berättar<br />
                        <span className="text-2xl">SÅ NÖJDA!</span>
                      </p>
                    </div>
                  )}
                  {index === 1 && (
                    <div>
                      <p className="text-white/80 text-sm uppercase tracking-wider">Bostadsrättsföreningen</p>
                      <p className="text-white text-2xl font-bold">MENGLÖD</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-foreground font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <a href="#" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Läs mer
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a href="#referenser" className="btn-primary inline-flex">
            Alla referenser
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
