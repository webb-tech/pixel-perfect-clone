import { ArrowRight } from "lucide-react";
import ctaImg from "@/assets/img/cta.jpg";

export const CTA = () => {
    return (
        <section
            className="h-96"
            style={{
                backgroundImage: `url(${ctaImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="section-container bg-neutral-300/30 backdrop-blur-2xl p-10 lg:p-16 rounded-md border border-white/30 flex flex-col lg:flex-row gap-8 lg:gap-32 lg:items-center text-white translate-y-[30%] lg:translate-y-[110%]">
                <div className="space-y-2">
                    <h2 className="heading-md">Begär en offert</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt voluptate sapiente, in vel eum praesentium labore
                        animi, rem porro delectus harum quas, mollitia explicabo
                        cumque voluptatibus dolorem quia! Cumque, ea.
                    </p>
                </div>
                <a href="#kontakt" className="btn-primary lg:w-96">
                    Be om offert
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
};
