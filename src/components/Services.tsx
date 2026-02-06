import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import elinstallationImg from "@/assets/img/elinstallation.jpg";
import belysningImg from "@/assets/img/belysning.jpg";
import felsokningImg from "@/assets/img/felsokning.jpg";
import elcentralImg from "@/assets/img/elcentral.jpg";

const services = [
    {
        title: "Elinstallation",
        description:
            "Professionell och fackmannamässig takläggning av erfarna takläggare.",
        image: elinstallationImg,
        href: "#",
    },
    {
        title: "Belysning",
        description:
            "I vår plåtverkstad förbereder vi den plåt som vi sedan monterar på ditt tak.",
        image: belysningImg,
        href: "#",
    },
    {
        title: "Smarta hem",
        description:
            "Taksäkerhet innebär att kunna beträda och arbeta på taket med hjälp av taksäkerhetsanordningar.",
        image: "",
        href: "#",
    },
    {
        title: "Felsökning",
        description:
            "Vi rekommenderar att taket ses över varje år för maximal livslängd.",
        image: felsokningImg,
        href: "#",
    },
    {
        title: "Elcentral",
        description:
            "En takmålning kan ge taket ett nytt liv och ett extra skydd mot rost och slitage.",
        image: elcentralImg,
        href: "#",
    },
    {
        title: "Ugn/spishäll",
        description:
            "Var ute i god tid med snöskottning innan skador uppstår på tak och omgivning.",
        image: "",
        href: "#",
    },
];

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id="tjanster"
            className="section-white py-20 lg:py-32"
        >
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="slug-tag justify-center mb-4">
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                        </svg>
                        VÅRA TJÄNSTER
                    </div>
                    <h2 className="heading-lg text-foreground mb-4">
                        De tjänster vi erbjuder
                    </h2>
                    <p className="text-body max-w-3xl mx-auto text-left">
                        Vi erbjuder flera olika tjänster inom tak. Så oavsett om
                        du behöver ett helt nytt tak, en ommålning av ditt
                        plåttak, modern taksäkerhet eller snöskottning av ditt
                        tak, finns vi här för dig!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.a
                            key={service.title}
                            href={service.href}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="service-card group aspect-square"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="service-card-overlay" />
                            <h4 className="absolute bottom-0 left-0 right-0 p-6 text-xl font-semibold text-white transition-all duration-500 group-hover:-translate-y-28">
                                {service.title}
                            </h4>
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                                <p className="text-white/80 line-clamp-2 mb-4 text-[20px]">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-white text-sm group-hover:text-primary transition-colors text-[20px] font-semibold">
                                    Läs mer
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a href="#tjanster" className="btn-primary">
                        Alla våra tjänster
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
