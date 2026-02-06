import { MailIcon, Phone, Pin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroImg from "@/assets/img/kontaktaoss.png";

const workers = [
    {
        name: "Madi Ellekvist",
        role: "VD",
        img: "/img/personal/madi-ellekvist.jpg",
        email: "madi@mjelinstallationer.com",
    },
    {
        name: "Joakim Adamsson",
        role: "Roll",
        img: "/img/personal/joakim-adamsson.jpg",
        email: "joakim@mjelinstallationer.com",
    },
    {
        name: "Vilmos Barta",
        role: "Roll",
        img: "/img/personal/vilmos-barta.jpg",
        email: "vilmos.barta@mjelinstallationer.com",
    },
    {
        name: "Dennis Dy",
        role: "Roll",
        img: "/img/personal/dennis-dy.jpg",
        email: "dennis.dy@mjelinstallationer.com",
    },
    {
        name: "Eric Paz Navas",
        role: "Roll",
        img: "/img/personal/eric-paz-navas.jpg",
        email: "eric.paznavas@mjelinstallationer.com",
    },
    {
        name: "Hampus Ryberg",
        role: "Roll",
        img: "/img/personal/hampus-ryberg.jpg",
        email: "hampus.ryberg@mjelinstallationer.com",
    },
    {
        name: "William Kjellberg",
        role: "Roll",
        img: "/img/personal/william-kjellberg.jpg",
        email: "william.kjellberg@mjelinstallationer.com",
    },
];

const Contact = () => {
    return (
        <>
            <section
                className="py-40 text-white"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div className="section-container">
                    <div className="space-y-8">
                        <Breadcrumbs
                            currentPage="Kontakta oss"
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
                                href="mailto:info@mjelinstallationer.com"
                                className="flex items-center gap-2"
                            >
                                <MailIcon size={18} />
                                info@mjelinstallationer.com
                            </a>
                            <a href="" className="flex items-center gap-2">
                                <Pin size={18} />
                                Råsundavägen 4, 169 67 Solna
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
                        {workers.map((w, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <img
                                    src={w.img}
                                    alt={w.name}
                                    className="w-full aspect-square object-cover rounded-sm"
                                />
                                <h3 className="text-lg font-bold">{w.name}</h3>
                                <span className="font-medium">{w.role}</span>
                                <span className="flex items-center gap-2 font-bold underline">
                                    <MailIcon size={18} />
                                    <a
                                        href={
                                            w.email ? `mailto:${w.email}` : "#"
                                        }
                                    >
                                        Maila mig
                                    </a>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
