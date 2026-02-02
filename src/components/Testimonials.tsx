import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Star,
    Check,
    ArrowRight,
} from "lucide-react";

const testimonials = [
    {
        id: 1,
        location: "BRF Ånghästen",
        description: "Elinstallation utfört av MJ Elinstallationer",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=720&h=480&fit=crop",
    },
    {
        id: 2,
        location: "BRF Menglod",
        description: "Komplett elinstallation",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=720&h=480&fit=crop",
    },
];

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section
            ref={ref}
            id="referenser"
            className="section-beige py-20 lg:py-32"
        >
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold">
                        REFERENSER
                    </span>
                    <h2 className="heading-lg text-foreground">
                        Våra kunder berättar
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Main image - workers */}
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                                alt="MJ Elinstallationer team"
                                className="w-full spect-4/3 object-cover"
                            />
                        </div>

                        {/* Carousel image */}
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].location}
                                className="w-full aspect-4/3 object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-md px-4 py-2">
                                <p className="text-foreground text-sm font-medium flex items-center gap-2">
                                    <span className="text-primary">📍</span>
                                    {testimonials[currentIndex].location}
                                </p>
                                <p className="text-muted-foreground text-xs">
                                    {testimonials[currentIndex].description}
                                </p>
                            </div>

                            {/* Navigation arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-foreground" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-foreground" />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 right-4 flex gap-1">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === currentIndex
                                                ? "bg-white"
                                                : "bg-white/50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Quote and Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        {/* Stars */}
                        <div className="flex gap-2 text-xl">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                            "Det finns inget som MJ Elinstallationer kunde ha
                            gjort bättre"
                        </blockquote>

                        <p className="text-muted-foreground">
                            — Johan Ingeberg, ordförande för BRF Ånghästen på
                            Södermalm i Stockholm.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            Johan beskriver samarbetet som smidigt och
                            professionellt och säger att han inte har några som
                            helst problem att rekommendera MJ Elinstallationer
                            till andra bostadsrättsföreningar.
                        </p>

                        <p className="text-foreground">
                            Han kan inte komma på något som MJ Elinstallationer
                            kunde gjort bättre!
                        </p>

                        <div className="flex justify-center">
                            <a
                                href="#referenser"
                                className="btn-primary inline-flex my-6"
                            >
                                Alla referenser
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Reco card */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
                            <h4 className="text-foreground font-bold text-xl mb-4">
                                Verifierade kundomdömen
                            </h4>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <Check className="w-5 h-5 text-green-500" />
                                    600+ verifierade kundomdömen
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <Check className="w-5 h-5 text-green-500" />
                                    Rekommenderad takläggare i Stockholm
                                </li>
                            </ul>

                            {/* Review cards */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="border border-border rounded-lg p-3">
                                    <p className="font-semibold text-foreground text-sm">
                                        MJ Elinstallationer
                                    </p>
                                    <div className="flex gap-0.5 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 bg-green-500 rounded-full"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        Bra bemött av MJ Elinstallationer.
                                        Arbetet blev försenat p.g. av
                                        personalproblem men ...
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Ivar E · 2 veckor
                                    </p>
                                </div>
                                <div className="border border-border rounded-lg p-3">
                                    <p className="font-semibold text-foreground text-sm">
                                        MJ Elinstallationer
                                    </p>
                                    <div className="flex gap-0.5 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 bg-green-500 rounded-full"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        Vi fick hjälp att ta bort ett stopp i
                                        ett stuprör. Stoppet satt längst upp
                                        och..
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Göran S · 3 veckor
                                    </p>
                                </div>
                            </div>

                            {/* Stats row */}
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <div className="text-center">
                                    <p className="text-xs text-muted-foreground">
                                        Omdömen totalt
                                    </p>
                                    <p className="text-xl font-bold text-foreground">
                                        625
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-muted-foreground">
                                        Snittbetyg
                                    </p>
                                    <p className="text-xl font-bold text-foreground">
                                        4.7
                                        <span className="text-sm font-normal">
                                            /5
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-600 font-bold text-xl">
                                        reco
                                    </span>
                                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
                                        i
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
