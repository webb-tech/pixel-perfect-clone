import logo from "@/assets/img/logo.svg";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        tjanster: [
            { name: "Takläggning", href: "#" },
            { name: "Plåtslageri", href: "#" },
            { name: "Taksäkerhet", href: "#" },
            { name: "Takservice", href: "#" },
            { name: "Takmålning", href: "#" },
            { name: "Snöskottning", href: "#" },
        ],
        foretag: [
            { name: "Om oss", href: "#om-oss" },
            { name: "Referenser", href: "#referenser" },
            { name: "Karriär", href: "#" },
            { name: "Kontakt", href: "#kontakt" },
        ],
        kontakt: [
            { name: "08-123 456 78", href: "tel:+46812345678" },
            { name: "info@dmtak.se", href: "mailto:info@dmtak.se" },
            { name: "Stockholm, Sverige", href: "#" },
        ],
    };

    return (
        <footer className="bg-foreground text-background">
            <div className="section-container py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <img src={logo} alt="Logo" width={300} />
                        </div>
                        <p className="text-background/70 text-sm leading-relaxed mb-6">
                            DM TAK är ett familjeföretag med över 20 års
                            erfarenhet av takläggning i Stockholm. Vi erbjuder
                            kvalitetsarbete med 15 års garanti.
                        </p>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 text-yellow-400 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                            <span className="text-background/70 text-sm ml-2">
                                600+ omdömen
                            </span>
                        </div>
                    </div>

                    {/* Tjänster */}
                    <div>
                        <h4 className="text-background font-semibold mb-6">
                            Tjänster
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.tjanster.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-background/70 hover:text-background transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Företag */}
                    <div>
                        <h4 className="text-background font-semibold mb-6">
                            Företag
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.foretag.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-background/70 hover:text-background transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontakt */}
                    <div>
                        <h4 className="text-background font-semibold mb-6">
                            Kontakt
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.kontakt.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-background/70 hover:text-background transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-background/70 text-sm">
                        © {currentYear} MJ ELINSTALLATIONER. Alla rättigheter
                        förbehållna.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-background/70 hover:text-background transition-colors text-sm"
                        >
                            Integritetspolicy
                        </a>
                        <a
                            href="#"
                            className="text-background/70 hover:text-background transition-colors text-sm"
                        >
                            Villkor
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
