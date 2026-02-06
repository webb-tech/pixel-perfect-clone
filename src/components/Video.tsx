import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import heroVid from "../assets/video/hero-vid-cut.mp4";

const Video = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="video" className="section-white py-20 lg:py-32">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="slug-tag mb-4">Om oss</div>
                        <h3 className="heading-lg text-foreground mb-6">
                            Elinstallationer, elservice och entreprenad
                        </h3>
                        <p className="text-body mb-8">
                            MJ El & Entreprenad tar ansvar för hela projekt,
                            från noggrann planering och professionell
                            installation till service och underhåll. Med högsta
                            fokus på kvalitet, säkerhet och hållbara lösningar
                            levererar vi kompletta elinstallationer och
                            entreprenader som står sig över tid.
                        </p>

                        <a href="/om-oss" className="btn-primary inline-flex">
                            Om oss
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <AspectRatio ratio={16 / 9}>
                            <video
                                className="w-full h-full object-cover rounded-lg"
                                controls
                                src={heroVid}
                            />
                        </AspectRatio>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Video;
