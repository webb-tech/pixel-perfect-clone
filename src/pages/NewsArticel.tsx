import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { findNewsBySlug } from "@/lib/loadNews";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

                    <div className="pt-6">
                        <h3 className="font-bold mb-4">
                            Följ våra sociala medier
                        </h3>
                        <div className="flex items-center flex-wrap gap-3">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-3 rounded-full bg-primary"
                            >
                                <FaFacebook size={20} color="white" />
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-3 rounded-full bg-primary"
                            >
                                <FaXTwitter size={20} color="white" />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-3 rounded-full bg-primary"
                            >
                                <FaLinkedinIn size={20} color="white" />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-3 rounded-full bg-primary"
                            >
                                <FaInstagram size={20} color="white" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsArticel;
