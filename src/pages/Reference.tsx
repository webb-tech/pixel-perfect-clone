import { Breadcrumbs } from "@/components/Breadcrumbs";
import { findReferenceBySlug } from "@/lib/loadReferences";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Reference = () => {
    const { slug } = useParams();
    const referenceContent = slug ? findReferenceBySlug(slug) : undefined;

    if (!referenceContent) {
        return <NotFound />;
    }

    return (
        <>
            <section
                className="pt-52 pb-16 text-white"
                style={{
                    backgroundImage: `url(${referenceContent.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div className="section-container flex flex-col items-center space-y-4">
                    <Breadcrumbs
                        currentPage={referenceContent.title}
                        links={[
                            { label: "Start", href: "/" },
                            { label: "Våra referenser", href: "/referenser" },
                        ]}
                    />

                    <h1 className="heading-lg">{referenceContent.title}</h1>
                </div>
            </section>

            <section className="pt-8 pb-16">
                <div className="section-container">
                    <MarkdownRenderer content={referenceContent.content} />
                </div>
            </section>
        </>
    );
};

export default Reference;
