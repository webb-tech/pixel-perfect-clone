import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsCard } from "@/components/NewsCard";
import news from "@/content/news.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CTA } from "@/components/CTA";

const News = () => {
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const sortedNews = [...news].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    const totalPages = Math.ceil(sortedNews.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedNews = sortedNews.slice(
        startIndex,
        startIndex + postsPerPage,
    );

    return (
        <>
            <section className="pt-40 pb-16">
                <div className="section-container flex flex-col items-center space-y-4">
                    <Breadcrumbs
                        currentPage="Nyheter"
                        links={[{ label: "Start", href: "/" }]}
                    />

                    <h1 className="heading-lg">Senaste nytt hos oss</h1>

                    <p className="max-w-3xl">
                        Följ med oss i vår vardag! Här hittar du de senaste
                        nyheterna från MJ Elinstallationer. Du kan också läsa
                        intressanta artiklar med matnyttig information.
                    </p>
                </div>
            </section>

            <section className="py-16 section-beige">
                <div className="section-container">
                    <div className="flex justify-center mb-16">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSortOrder("newest")}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                        sortOrder === "newest"
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-white text-foreground hover:bg-muted/80"
                                    }`}
                                >
                                    Nyaste först
                                </button>
                                <button
                                    onClick={() => setSortOrder("oldest")}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                        sortOrder === "oldest"
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-white text-foreground hover:bg-muted/80"
                                    }`}
                                >
                                    Äldsta först
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {paginatedNews.length > 0 && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <NewsCard
                                    slug={paginatedNews[0].slug}
                                    thumbnailImg={paginatedNews[0].thumbnailImg}
                                    date={paginatedNews[0].date}
                                    title={paginatedNews[0].title}
                                    excerpt={paginatedNews[0].excerpt}
                                />
                                <NewsCard
                                    slug={paginatedNews[1].slug}
                                    thumbnailImg={paginatedNews[1].thumbnailImg}
                                    date={paginatedNews[1].date}
                                    title={paginatedNews[1].title}
                                    excerpt={paginatedNews[1].excerpt}
                                />
                            </div>
                        )}
                        {paginatedNews.length > 1 && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {paginatedNews.slice(2).map((item, i) => (
                                    <NewsCard
                                        key={i + 1}
                                        slug={item.slug}
                                        thumbnailImg={item.thumbnailImg}
                                        date={item.date}
                                        title={item.title}
                                        excerpt={item.excerpt}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-16">
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.max(1, prev - 1),
                                    )
                                }
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                aria-label="Previous page"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }).map(
                                    (_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() =>
                                                setCurrentPage(i + 1)
                                            }
                                            className={`w-10 h-10 rounded-lg font-medium transition-all ${
                                                currentPage === i + 1
                                                    ? "bg-primary text-primary-foreground"
                                                    : "border border-border hover:bg-muted"
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ),
                                )}
                            </div>

                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(totalPages, prev + 1),
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                aria-label="Next page"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <CTA />
        </>
    );
};

export default News;
