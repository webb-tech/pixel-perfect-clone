import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import ReferenceCard from "./ReferenceCard";

import gymImg from "@/assets/img/gym.jpg";
import byggeImg from "@/assets/img/bygge.jpg";

const references = [
    {
        id: 1,
        title: "Kundberättelse: Ett tryggt och professionellt takbyte",
        description:
            "I den här videon möter du Johan Ingberg, ordförande för BRF Ånghästen på Södermalm i Stockholm. Johan berättar om föreningens upplevelse av MJ Elinstallationer och den elinstallation som...",
        image: gymImg,
    },
    {
        id: 2,
        title: "Kundberättelse: Bostadsrättsföreningen Menglöd",
        description:
            "Ordförande Bengt Jansson och boende på Bostadsrättsföreningen Menglöd 2, berättar själva om en mycket lyckad upphandling och genomförande av en stor...",
        image: byggeImg,
    },
];

const References = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="section-beige py-20 lg:py-32 border-t border-border/50"
        >
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="slug-tag justify-center mb-4">
                        Kundreferenser
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
                        <ReferenceCard
                            key={item.id}
                            {...item}
                            index={index}
                            isInView={isInView}
                        />
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
