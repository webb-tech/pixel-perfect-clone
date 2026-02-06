import { Breadcrumbs } from "@/components/Breadcrumbs";
import ReferenceCard from "@/components/ReferenceCard";
import { loadReferences } from "@/lib/loadReferences";
import heroImg from "@/assets/img/bygge.jpg";

const References = () => {
    const references = loadReferences();

    return (
        <>
            <section
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
                        currentPage="Våra referenser"
                        links={[{ label: "Start", href: "/" }]}
                    />

                    <h1 className="heading-lg">Våra referenser</h1>

                    <p className="max-w-3xl">
                        Vi hjälper till med alla typer av hustak och vill vara
                        med att bygga ett bättre Stockholm för alla. Här kan du
                        se bilder från och läsa om våra tidigare projekt
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="section-container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {references.map((ref, i) => (
                            <ReferenceCard
                                key={i}
                                title={ref.title}
                                description={ref.description}
                                image={ref.img}
                                index={i}
                                isInView={true}
                                href={`/referenser/${ref.slug}`}
                                linkText="Läs mer"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default References;
