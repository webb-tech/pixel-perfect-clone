import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import gymImg from "@/assets/img/gym.jpg";
import byggeImg from "@/assets/img/bygge.jpg";

const references = [
    {
        id: 1,
        title: "Kundberättelse: Ett tryggt och professionellt takbyte",
        description:
            "I den här videon möter du Johan Ingberg, ordförande för BRF Ånghästen på Södermalm i Stockholm. Johan berättar om föreningens upplevelse av DM TAK och den takomläggning som...",
        image: gymImg,
        overlayText: "Ordföranden berättar SÅ NÖJDA!",
    },
    {
        id: 2,
        title: "Kundberättelse: Bostadsrättsföreningen Menglöd",
        description:
            "Ordförande Bengt Jansson och boende på Bostadsrättsföreningen Menglöd 2, berättar själva om en mycket lyckad upphandling och genomförande av en stor...",
        image: byggeImg,
        overlayText: "BOSTADSRÄTTSFÖRENINGEN MENGLÖD",
    },
];

const References = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="section-white py-20 lg:py-32 border-t border-border/50"
        >
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="slug-tag justify-center mb-4">
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                        </svg>
                        KUNDREFERENSER
                    </div>
                    <h2 className="heading-lg text-foreground mb-4">
                        Ett urval av våra kundreferenser
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-left">
                        Vi har utfört takarbeten runt om i hela Stockholm, från
                        innerstad till förort, så kika gärna in på våra
                        referensbilder för att hitta bilder från just ditt
                        område.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {references.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + index * 0.1,
                            }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg"
                        >
                            <div className="relative aspect-video w-full h-56">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-foreground font-bold text-lg mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {item.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
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
