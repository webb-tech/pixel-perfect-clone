import { MailIcon, Phone, Pin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Contact = () => {
    return (
        <>
            <section
                className="pt-40 pb-16 text-white"
                style={{
                    backgroundImage: `url(${"/img/belysning.jpg"})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div className="section-container">
                    <div className="space-y-8">
                        <Breadcrumbs
                            currentPage="Om oss"
                            links={[{ label: "Start", href: "/" }]}
                        />
                        <h1 className="heading-lg">Kontakta oss</h1>
                        <p className="max-w-3xl">
                            Vill du kontakta oss? Inga problem! Du kan mejla,
                            ringa eller besöka oss. Du kan också fylla i
                            formuläret för att be om en offert.
                        </p>
                        <div className="flex gap-6 flex-wrap font-bold text-sm">
                            <a
                                href="tel:0701234567"
                                className="flex items-center gap-2"
                            >
                                <Phone size={18} /> 070-123 45 67
                            </a>
                            <a
                                href="mailto:info@mjelinstallationer.se"
                                className="flex items-center gap-2"
                            >
                                <MailIcon size={18} />
                                info@mjelinstallationer.se
                            </a>
                            <a href="" className="flex items-center gap-2">
                                <Pin size={18} />
                                Storgatan 1, 123 45
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container flex flex-col items-center">
                    <span className="slug-tag">Vi är MJ</span>
                    <h2 className="heading-md mb-16">Våra medarbetare</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-4">
                            <img
                                src="/img/personal/personal.jpg"
                                alt=""
                                className="rounded-sm"
                            />
                            <h3 className="text-lg font-bold">
                                Namn Efternamn
                            </h3>
                            <span className="font-medium">VD</span>
                            <span className="flex items-center gap-2 font-bold underline">
                                <MailIcon size={18} />{" "}
                                <a href="mailto:">Maila mig</a>
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <img
                                src="/img/personal/personal.jpg"
                                alt=""
                                className="rounded-sm"
                            />
                            <h3 className="text-lg font-bold">
                                Namn Efternamn
                            </h3>
                            <span className="font-medium">VD</span>
                            <span className="flex items-center gap-2 font-bold underline">
                                <MailIcon size={18} />
                                <a href="mailto:">Maila mig</a>
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <img
                                src="/img/personal/personal.jpg"
                                alt=""
                                className="rounded-sm"
                            />
                            <h3 className="text-lg font-bold">
                                Namn Efternamn
                            </h3>
                            <span className="font-medium">VD</span>
                            <span className="flex items-center gap-2 font-bold underline">
                                <MailIcon size={18} />
                                <a href="mailto:">Maila mig</a>
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <img
                                src="/img/personal/personal.jpg"
                                alt=""
                                className="rounded-sm"
                            />
                            <h3 className="text-lg font-bold">
                                Namn Efternamn
                            </h3>
                            <span className="font-medium">VD</span>
                            <span className="flex items-center gap-2 font-bold underline">
                                <MailIcon size={18} />
                                <a href="mailto:">Maila mig</a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
