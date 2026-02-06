import { loadNews } from "@/lib/loadNews";
import { NewsCard } from "./NewsCard";

export const NewsSection = () => {
    const latestNews = loadNews().slice(0, 3);

    return (
        <section className="py-20">
            <div className="section-container">
                <div className="slug-tag flex justify-center mb-4 text-center">
                    Nyheter
                </div>
                <h2 className="heading-lg text-center mb-4">
                    Senaste nytt hos MJ
                </h2>
                <p className="mb-12 text-center">
                    Läs våra senaste nyheter och ta del av vår utveckling!
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {latestNews.map((item, i) => (
                        <NewsCard
                            key={item.slug ?? i}
                            slug={item.slug}
                            thumbnailImg={item.thumbnailImg}
                            date={item.date}
                            title={item.title}
                            excerpt={item.excerpt}
                        />
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <a href="/nyheter" className="btn-primary">
                        Alla nyheter
                    </a>
                </div>
            </div>
        </section>
    );
};
