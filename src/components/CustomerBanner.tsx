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
                // Wait a frame to ensure layout is complete
                requestAnimationFrame(() => {
                    if (!trackRef.current) return;

                    // Measure the actual rendered width by getting the position of the 7th logo
                    // (which is the start of the second set, i.e., one full cycle)
                    const firstLogo = trackRef.current
                        .children[0] as HTMLElement;
                    const seventhLogo = trackRef.current.children[
                        logos.length
                    ] as HTMLElement;

                    if (firstLogo && seventhLogo) {
                        // Use getBoundingClientRect for pixel-perfect measurement
                        const firstRect = firstLogo.getBoundingClientRect();
                        const seventhRect = seventhLogo.getBoundingClientRect();
                        const width = Math.round(
                            seventhRect.left - firstRect.left
                        );

                        if (width > 0) {
                            setCycleWidth(width);
                        }
                    } else {
                        // Fallback: calculate manually
                        let width = 0;
                        for (let i = 0; i < logos.length; i++) {
                            const child = trackRef.current.children[
                                i
                            ] as HTMLElement;
                            if (child) {
                                width += child.offsetWidth;
                            }
                        }
                        const gap = window.getComputedStyle(
                            trackRef.current
                        ).gap;
                        const gapValue = parseInt(gap) || 32;
                        width += gapValue * (logos.length - 1);
                        if (width > 0) {
                            setCycleWidth(Math.round(width));
                        }
                    }
                });
            }
        };

        // Wait for images to load before measuring
        const timer = setTimeout(measure, 200);
        const resizeObserver = new ResizeObserver(measure);
        if (trackRef.current) resizeObserver.observe(trackRef.current);

        // Also measure when images load
        const checkImages = () => {
            if (trackRef.current) {
                const images = trackRef.current.querySelectorAll("img");
                let loadedCount = 0;
                const totalImages = images.length;

                if (totalImages === 0) {
                    measure();
                    return;
                }

                images.forEach((img) => {
                    if (img.complete) {
                        loadedCount++;
                        if (loadedCount === totalImages) {
                            measure();
                        }
                    } else {
                        img.addEventListener(
                            "load",
                            () => {
                                loadedCount++;
                                if (loadedCount === totalImages) {
                                    measure();
                                }
                            },
                            { once: true }
                        );
                    }
                });
            }
        };

        checkImages();

        return () => {
            clearTimeout(timer);
            resizeObserver.disconnect();
        };
    }, []);

    // Create CSS animation style for seamless infinite scroll
    useEffect(() => {
        if (cycleWidth > 0) {
            const styleId = "seamless-scroll-animation";
            let styleElement = document.getElementById(
                styleId
            ) as HTMLStyleElement;

            if (!styleElement) {
                styleElement = document.createElement("style");
                styleElement.id = styleId;
                document.head.appendChild(styleElement);
            }

            styleElement.textContent = `
                @keyframes seamlessScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${cycleWidth}px);
                    }
                }
            `;

            return () => {
                const element = document.getElementById(styleId);
                if (element) {
                    element.remove();
                }
            };
        }
    }, [cycleWidth]);

    return (
        <section ref={ref} className="bg-primary">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative w-full"
                >
                    <div
                        ref={trackRef}
                        className="flex gap-8 lg:gap-16"
                        style={{
                            width: "max-content",
                            animation:
                                cycleWidth > 0 && isInView
                                    ? "seamlessScroll 45s linear infinite"
                                    : "none",
                        }}
                    >
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
