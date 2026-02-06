import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowRight } from "lucide-react";

const faqs = [
    {
        question: "Vilka typer av fastighetsprojekt kan ni ta på er? ",
        answer: "",
    },
    {
        question:
            "Ansvarar ni för hela entreprenaden eller bara delar av projektet? ",
        answer: "",
    },
    {
        question: "Vilka områden arbetar ni i?",
        answer: "",
    },
    {
        question: "Erbjuder ni uppföljning och service efter projektets slut? ",
        answer: "",
    },
    {
        question: "Hur går det till att begära en offert? ",
        answer: "",
    },
];

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section ref={ref} className="section-white py-20 lg:py-32">
            <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-12"
                >
                    <div className="slug-tag justify-center mb-4">
                        Frågor & Svar
                    </div>
                    <h2 className="heading-lg text-foreground mb-4">
                        Undrar du något?
                    </h2>
                    <p className="text-body">
                        Det är vanligt att ha frågor kring elinstallationer i
                        fastigheter. Här besvarar vi några av de vanligaste
                        frågorna från bostadsrättsföreningar och beställare. Om
                        din fråga inte besvaras här, tveka inte att kontakta oss
                        så hjälper vi gärna till.
                    </p>
                    <a
                        href="#"
                        className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-4"
                    >
                        Frågor & svar
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.4,
                                delay: 0.3 + index * 0.1,
                            }}
                            className="border-b border-border"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index,
                                    )
                                }
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-body pb-6">{faq.answer}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
