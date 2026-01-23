import { Breadcrumbs } from "@/components/Breadcrumbs";
import ReferenceCard from "@/components/ReferenceCard";
import references from "@/content/references.json";

const References = () => {
    return (
        <>
            <section className="pt-40">
                <div className="section-container space-y-4">
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
