import { ArrowRight } from "lucide-react";

interface NewsCardProps {
    slug: string;
    thumbnailImg: string;
    date: string;
    title: string;
    excerpt: string;
}

export const NewsCard = ({
    slug,
    thumbnailImg,
    date,
    title,
    excerpt,
}: NewsCardProps) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.boxShadow = "0px 12px 30px rgba(0, 0, 0, 0.25)";
        const overlay = e.currentTarget.querySelector(
            "[data-overlay]",
        ) as HTMLElement;
        const arrow = e.currentTarget.querySelector(
            "[data-arrow]",
        ) as HTMLElement;
        if (overlay) overlay.style.opacity = "0.5";
        if (arrow) arrow.style.opacity = "1";
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.boxShadow = "0px 8px 24px rgba(0, 0, 0, 0.2)";
        const overlay = e.currentTarget.querySelector(
            "[data-overlay]",
        ) as HTMLElement;
        const arrow = e.currentTarget.querySelector(
            "[data-arrow]",
        ) as HTMLElement;
        if (overlay) overlay.style.opacity = "0";
        if (arrow) arrow.style.opacity = "0";
    };

    return (
        <a href={`/nyheter/${slug}`}>
            <div
                className="p-3 bg-white flex flex-col gap-2 rounded-lg transition-shadow duration-300 hover:shadow-lg"
                style={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="rounded-sm relative"
                    style={{
                        height: "220px",
                        backgroundImage: `url(${thumbnailImg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div
                        data-overlay
                        className="absolute inset-0 rounded-sm bg-black transition-opacity duration-300"
                        style={{ opacity: "0" }}
                    ></div>
                    <div
                        data-arrow
                        className="absolute inset-0 rounded-sm flex items-center justify-center transition-opacity duration-300"
                        style={{ opacity: "0" }}
                    >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-2">
                    <span className="text-sm font-medium">{date}</span>

                    <h2 className="text-lg font-bold">{title}</h2>

                    <p>{excerpt}</p>
                </div>
            </div>
        </a>
    );
};
