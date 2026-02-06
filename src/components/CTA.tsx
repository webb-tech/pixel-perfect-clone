import { ArrowRight } from "lucide-react";
import ctaImg from "@/assets/img/cta2.png";

export const CTA = () => {
    return (
        <section>
            <div
                className="h-96"
                style={{
                    backgroundImage: `url(${ctaImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="section-container bg-neutral-400/30 backdrop-blur-3xl p-10 lg:p-16 rounded-md border border-white/30 flex flex-col lg:flex-row gap-8 lg:gap-32 lg:items-center text-white translate-y-[30%] lg:translate-y-[110%]">
                    <div className="space-y-2">
                        <h2 className="heading-md">Kom i kontakt med oss</h2>
                        <p>
                            Vill du ha en offert för elinstallation eller
                            entreprenadtjänster? Kontakta oss så kopplar vi dig
                            direkt till en av våra projektledare.
                        </p>
                    </div>
                    <a href="#kontakt" className="btn-primary lg:w-96">
                        Be om offert
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
            <div className="w-full bg-foreground h-40"></div>
        </section>
    );
};
