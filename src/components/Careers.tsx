import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import img from "@/assets/img/jobba-hos-oss.jpg";

const Careers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id="karriar"
            className="section-beige py-20 lg:py-32"
        >
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <img
                            src={img}
                            alt="Jobba hos oss"
                            className="w-full rounded-lg shadow-lg object-cover aspect-4/3"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="slug-tag mb-4">Jobba hos oss</div>

                        <h2 className="heading-lg text-foreground mb-6">
                            Vill du jobba hos oss?
                        </h2>

                        <p className="text-body mb-6">
                            Vi söker behöriga elektriker och montörer för
                            entreprenad och service. Är du kundfokuserad? Hör av
                            dig.
                        </p>

                        <a href="#kontakt" className="btn-primary">
                            Jobba hos oss
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
