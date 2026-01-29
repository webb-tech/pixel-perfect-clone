import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
    { id: 1, name: "Logo 1", src: null },
    { id: 2, name: "Logo 2", src: null },
    { id: 3, name: "Logo 3", src: null },
    { id: 4, name: "Logo 4", src: null },
    { id: 5, name: "Logo 5", src: null },
    { id: 6, name: "Logo 6", src: null },
];

export default function CustomerBanner() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="py-4
         bg-primary"
        >
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative w-full "
                >
                    <motion.div
                        className="flex gap-8 lg:gap-16"
                        animate={{ x: [0, -2000] }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg"
                            >
                                {logo.src ? (
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain px-4"
                                    />
                                ) : (
                                    <span className="text-gray-600 font-medium text-center px-4 text-sm">
                                        {logo.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
