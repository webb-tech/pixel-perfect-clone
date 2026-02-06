import heroImg from "@/assets/img/omoss.png";
import bannerImg from "@/assets/img/felsokning.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import img from "@/assets/img/elinstallation.jpg";
import { NewsSection } from "@/components/NewsSection";

const Career = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <>
            <section
                id="hero"
                className="py-40 text-white"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div className="section-container space-y-8">
                    <Breadcrumbs
                        currentPage="Karriär"
                        links={[{ label: "Start", href: "/" }]}
                    />

                    <h1 className="heading-lg">Jobba hos oss</h1>

                    <p className="max-w-3xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Non obcaecati debitis veritatis omnis asperiores
                        sapiente.
                    </p>
                </div>
            </section>

            <section
                ref={ref}
                id="video"
                className="section-white py-20 lg:py-32"
            >
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={bannerImg}
                                    alt="Felsökning"
                                />
                            </AspectRatio>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="slug-tag mb-4">Jobba hos oss</div>
                            <h3 className="heading-lg text-foreground mb-6">
                                Bli en del av MJ
                            </h3>
                            <p className="text-body mb-8">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Provident ad itaque neque illo
                                corporis dolore rem, sint temporibus earum vel
                                quaerat deleniti iste assumenda nemo aliquam
                                alias doloremque quia suscipit?
                            </p>

                            <a
                                href="/om-oss"
                                className="btn-primary inline-flex"
                            >
                                Se lediga tjänster
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: 400,
                }}
            ></div>

            {/* Formulär här */}

            <NewsSection />

            <CTA />
        </>
    );
};

export default Career;
