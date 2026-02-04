interface ImageBlockProps {
    backgroundImg: string;
    title: string;
    text: string;
    btnLabel: string;
    btnHref: string;
}

export default function ImageBlock({
    backgroundImg,
    title,
    text,
    btnLabel,
    btnHref,
}: ImageBlockProps) {
    return (
        <section
            className="py-20 text-white text-center"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "multiply",
            }}
        >
            <div className="section-container flex flex-col items-center gap-6">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="max-w-lg">{text}</p>
                <a href={btnHref} className="btn-primary">
                    {btnLabel}
                </a>
            </div>
        </section>
    );
}
