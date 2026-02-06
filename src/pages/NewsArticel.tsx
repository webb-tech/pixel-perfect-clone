import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { findNewsBySlug } from "@/lib/loadNews";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const NewsArticel = () => {
    const { slug } = useParams();
    const newsContent = slug ? findNewsBySlug(slug) : undefined;

    if (!newsContent) {
        return <NotFound />;
    }

    return (
        <>
            <section className="pt-40 pb-16">
                <div className="section-container flex flex-col items-center space-y-4">
                    <Breadcrumbs
                        currentPage={newsContent.title}
                        links={[
                            { label: "Start", href: "/" },
                            { label: "Nyheter", href: "/nyheter" },
                        ]}
                    />

                    <h1 className="heading-lg">{newsContent.title}</h1>
                </div>
            </section>

            <section className="pb-16">
                <div className="section-container flex flex-col gap-8 max-w-3xl">
                    <div className="flex justify-center">
                        <img
                            src={newsContent.thumbnailImg}
                            alt={"Bild för " + newsContent.title}
                            className="rounded-sm"
                        />
                    </div>

                    <span className="font-medium">{newsContent.date}</span>

                    <MarkdownRenderer content={newsContent.content} />
                </div>
            </section>
        </>
    );
};

export default NewsArticel;
