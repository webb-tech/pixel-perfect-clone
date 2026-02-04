import news from "@/content/news.json";

export const NewsSection = () => {
    const latestNews = [...news]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="py-20">
            <div className="section-container">
                <h2 className="heading-lg mb-12 text-center">Nyheter</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {latestNews.map((item, i) => (
                        <a
                            key={i}
                            href={`/nyheter/${item.slug}`}
                            className="group"
                        >
                            <div className="space-y-4">
                                <div
                                    className="w-full rounded-lg overflow-hidden bg-gray-200"
                                    style={{
                                        aspectRatio: "16/10",
                                        backgroundImage: `url(${item.thumbnailImg})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                />
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-600">
                                        {item.date}
                                    </p>
                                    <h3 className="text-xl font-bold text-black leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-gray-700">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </div>
                        </a>
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
