import { useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import References from "@/components/References";
import NotFound from "@/pages/NotFound";

import content from "@/content/service-pages.json";

import img from "@/assets/img/belysning.jpg";

const Service = () => {
    const { slug } = useParams();
    const serviceContent = content.find((item) => item.slug === slug);

    if (!serviceContent) {
        return <NotFound />;
    }

    return (
        <>
            <section
                className="py-40 text-white"
                style={{
                    backgroundImage: `url(${serviceContent.heroImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div className="section-container space-y-8">
                    <Breadcrumbs
                        currentPage={serviceContent.title}
                        links={[
                            { label: "Start", href: "/" },
                            { label: "Tjänster", href: "/tjanster" },
                        ]}
                    />

                    <h1 className="heading-lg">{serviceContent.title}</h1>

                    <p className="text-xl max-w-3xl">
                        {serviceContent.heroText}
                    </p>

                    <a href="" className="btn-primary">
                        Be om offert
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <section className="section-white py-20 lg:py-32">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <img
                                src={img}
                                alt="Jobba hos oss"
                                className="w-full rounded-lg shadow-lg object-cover aspect-4/3"
                            />
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="heading-lg text-foreground mb-6">
                                Lorem ipsum dolor sit.
                            </h2>

                            <p className="text-body mb-6">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Perferendis quos
                                reprehenderit, nihil officia cum non libero
                                adipisci. Error animi eius nisi, fuga atque
                                numquam qui incidunt, commodi enim quibusdam
                                praesentium!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-beige py-20 lg:py-32">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="order-1 lg:order-1">
                            <h2 className="heading-lg text-foreground mb-6">
                                Lorem ipsum dolor sit.
                            </h2>

                            <p className="text-body mb-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nisi quae, in cum dolore
                                voluptates rem libero aliquam dignissimos
                                dolores blanditiis.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="order-2 lg:order-2">
                            <img
                                src={img}
                                alt="Jobba hos oss"
                                className="w-full rounded-lg shadow-lg object-cover aspect-4/3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <References />
            <CTA />
        </>
    );
};

export default Service;
