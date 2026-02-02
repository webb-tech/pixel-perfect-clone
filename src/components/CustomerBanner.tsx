import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const logos = [
    { id: 1, name: "Logo 1", src: "/img/loggor/bravida.png" },
    { id: 2, name: "Logo 2", src: "/img/loggor/castellum.png" },
    { id: 3, name: "Logo 3", src: "/img/loggor/fastpartner.png" },
    { id: 4, name: "Logo 4", src: "/img/loggor/ica.png" },
    { id: 5, name: "Logo 5", src: "/img/loggor/retta.png" },
    { id: 6, name: "Logo 6", src: "/img/loggor/sisab.png" },
];

export default function CustomerBanner() {
    const ref = useRef(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [cycleWidth, setCycleWidth] = useState(0);

    // Measure width of one set of logos so the loop resets seamlessly
    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                const totalWidth = trackRef.current.scrollWidth;
                setCycleWidth(totalWidth / 3); // 3 copies of logos in the track
            }
        };
        measure();
        const resizeObserver = new ResizeObserver(measure);
        if (trackRef.current) resizeObserver.observe(trackRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-primary">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative w-full"
                >
                    <motion.div
                        ref={trackRef}
                        className="flex gap-8 lg:gap-16"
                        animate={cycleWidth ? { x: [0, -cycleWidth] } : {}}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-36 h-20 flex items-center justify-center rounded-lg"
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
