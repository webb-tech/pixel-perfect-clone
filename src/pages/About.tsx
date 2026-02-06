import heroImg from "@/assets/img/omoss.png";
import bannerImg from "@/assets/img/felsökning.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { NewsCard } from "@/components/NewsCard";
import { loadNews } from "@/lib/loadNews";
import { ArrowRight } from "lucide-react";
import trygghansa from "@/assets/img/trygghansa.png";
import elsakerhetsverket from "@/assets/img/elsakerhetsverket.png";

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
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
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
                        Vi är ett erfaret företag inom elinstallation och
                        entreprenad, som levererar säkra, hållbara och
                        professionella lösningar till bostadsrättsföreningar,
                        fastighetsägare och företag.
                    </p>
                </div>
            </section>

            <section id="about" className="pt-24">
                <div className="section-container flex flex-col items-center max-w-3xl space-y-4 mb-24">
                    <span className="slug-tag">Om MJ</span>

                    <h2 className="heading-md">
                        Engagemang, kompetens och lösningar som håller
                    </h2>

                    <p>
                        På MJ El & Entreprenad tar vi ansvar för hela processen,
                        från första planering till färdig installation och
                        uppföljning. Vi kombinerar teknisk expertis med
                        strukturerad projektledning för att leverera lösningar
                        som fungerar både idag och i framtiden.
                    </p>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${bannerImg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: 500,
                    }}
                ></div>
            </section>

            <section id="partners" className="py-16 section-beige">
                <div className="section-container flex flex-col items-center max-w-3xl">
                    <h2 className="heading-md mb-8">
                        Vi är auktoriserade elinstallatörer
                    </h2>

                    <div className="flex items-center justify-evenly flex-wrap gap-8">
                        <img src={trygghansa} alt="Tygghansa" width={300} />
                        <img
                            src={elsakerhetsverket}
                            alt="Elsäkerhetsverket"
                            width={300}
                        />
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
                        {loadNews()
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
