import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVid from "../assets/video/hero-vid-cut.mp4";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={heroVid} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(325deg,rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.75) 60%)",
                }}
            />

            <div className="section-container relative z-10 py-32 lg:py-48">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="heading-xl text-white mb-4">
                            We make the
                            <br />
                            future brighter
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                    >
                        MJ El & Entreprenad är en pålitlig partner inom
                        elinstallationer och entreprenad för
                        bostadsrättsföreningar, fastighetsägare och företag.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a href="#kontakt" className="btn-primary-hero">
                            Kontakta oss
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#tjanster"
                            className="btn-secondary-hero text-white hover:text-primary"
                        >
                            Våra tjänster
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Floating contact button */}
            <motion.a
                href="#kontakt"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            </motion.a>
        </section>
    );
};

export default Hero;
