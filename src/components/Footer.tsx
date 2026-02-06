import logo from "@/assets/img/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
            { name: "Om oss", href: "/om-oss" },
            { name: "Referenser", href: "/referenser" },
            { name: "Karriär", href: "#" },
            { name: "Kontakt", href: "/kontakt" },
        ],
        kontakt: [
            {
                name: "info@mjelinstallationer.com",
                href: "mailto:info@mjelinstallationer.com",
            },
            { name: "Råsundavägen 4, 168 67 Solna", href: "#" },
        ],
    };

    return (
        <footer className="bg-foreground text-background">
            <div className="section-container py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <img src={logo} alt="Logo" width={100} />
                        </div>
                        <p className="text-background/70 text-sm leading-relaxed mb-6">
                            MJ El & Entreprenad levererar professionella
                            elinstallationer och entreprenadtjänster med fokus
                            på kvalitet, säkerhet och långsiktighet.
                        </p>
                    </div>

                    {/* Tjänster */}
                    <div></div>

                    {/* Om oss */}
                    <div>
                        <h4 className="text-background font-semibold mb-6">
                            Om oss
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
                        <div className="mt-6">
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.facebook.com"
                                    aria-label="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-background/70 hover:text-background transition-colors"
                                >
                                    <FaFacebookF
                                        className="w-5 h-5"
                                        aria-hidden
                                    />
                                </a>

                                <a
                                    href="https://www.instagram.com"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-background/70 hover:text-background transition-colors"
                                >
                                    <FaInstagram
                                        className="w-5 h-5"
                                        aria-hidden
                                    />
                                </a>

                                <a
                                    href="https://www.linkedin.com"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-background/70 hover:text-background transition-colors"
                                >
                                    <FaLinkedinIn
                                        className="w-5 h-5"
                                        aria-hidden
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-background/70 text-sm">
                    © {currentYear} MJ El & Entreprenad AB. Alla rättigheter
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
        </footer>
    );
};

export default Footer;
