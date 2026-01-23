// Hero, om oss, samarbetspartners, senaste nytt

import heroImg from "@/assets/img/jobba-hos-oss.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { NewsCard } from "@/components/NewsCard";
import news from "@/content/news.json";
import { ArrowRight } from "lucide-react";

const About = () => {
    return (
        <>
            <section
                id="hero"
                className="py-40 text-white"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div className="section-container space-y-8">
                    <Breadcrumbs
                        currentPage="Om oss"
                        links={[{ label: "Start", href: "/" }]}
                    />

                    <h1 className="heading-lg">Om oss</h1>

                    <p className="text-xl max-w-3xl">
                        Vi är ett takläggarföretag med över 20 års erfarenhet
                        inom takläggning, plåtslageri, takservice och takmålning
                        i Stockholm.
                    </p>
                </div>
            </section>

            <section id="about" className="pt-24">
                <div className="section-container flex flex-col items-center max-w-3xl space-y-4 mb-24">
                    <span className="slug-tag">Om MJ</span>

                    <h2 className="heading-md">
                        Löften, hantverk och tak som håller längre
                    </h2>

                    <p>
                        Vår grundläggande inställning är att alltid vara ärliga
                        och att med vårt eget beteende och hantverk visa vägen:
                        Om man är ärlig och stolt över sitt hantverk kan man
                        alltid gå med ryggen rak. I en bransch som ofta kantas
                        av oseriösa aktörer tar DM TAK uppgiften på allvar. Vårt
                        mål är att alltid leverera ett tak av högsta kvalitet
                        genom tydliga rutiner, eﬀektiviserat arbetsflöde och
                        genomgående yrkesstolthet.
                    </p>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${"/img/belysning.jpg"})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: 500,
                    }}
                ></div>
            </section>

            <section id="partners" className="py-24 section-beige">
                <div className="section-container flex flex-col items-center max-w-3xl">
                    <h2 className="heading-md mb-8">Våra samarbetspartners</h2>

                    <div className="flex items-center justify-evenly flex-wrap gap-8">
                        {/* bilder här */}
                    </div>
                </div>
            </section>

            <section id="news" className="py-24 section-white">
                <div className="section-container flex flex-col items-center">
                    <span className="slug-tag">Aktuellt</span>
                    <h2 className="heading-md mb-8">Senaste nytt hos oss</h2>

                    <p className="max-w-3xl mb-16">
                        Här kan du läsa om de senaste spännande nyheterna om vad
                        som händer hos oss! Du kan även hitta intressanta
                        artiklar och matnyttiga tips.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-16">
                        {news
                            .sort(
                                (a, b) =>
                                    new Date(b.date).getTime() -
                                    new Date(a.date).getTime(),
                            )
                            .slice(0, 3)
                            .map((item, i) => (
                                <NewsCard
                                    key={i}
                                    slug={item.slug}
                                    thumbnailImg={item.thumbnailImg}
                                    date={item.date}
                                    title={item.title}
                                    excerpt={item.excerpt}
                                />
                            ))}
                    </div>

                    <a href="/nyheter" className="btn-primary">
                        Alla nyheter <ArrowRight />
                    </a>
                </div>
            </section>

            <CTA />
        </>
    );
};

export default About;
