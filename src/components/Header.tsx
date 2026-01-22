import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/img/logo.svg";

const Header = ({ darkInitially = false }: { darkInitially?: boolean }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (Math.abs(currentScrollY - lastScrollY) > 1) {
                if (currentScrollY > lastScrollY) {
                    setScrollDirection("down");
                } else {
                    setScrollDirection("up");
                }
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: "Våra tjänster", href: "#tjanster", hasDropdown: true },
        { name: "Nyheter", href: "#nyheter", hasDropdown: true },
        { name: "Jobba hos oss", href: "#jobb", hasDropdown: true },
        { name: "Referenser", href: "#referenser", hasDropdown: false },
        { name: "Om oss", href: "#om-oss", hasDropdown: false },
        { name: "Begär en offert", href: "#kontakt", hasDropdown: false },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{
                y: lastScrollY < 50 ? 0 : scrollDirection === "down" ? -120 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled || darkInitially
                    ? "bg-background/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-[1400px] w-[90%] mx-auto">
                <div className="flex items-center justify-between py-8">
                    {/* Left: Logo + Phone */}
                    <div className="flex items-center gap-8 relative">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <img src={logo} alt="Logo" width={300} />
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:08-6047445"
                            className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors absolute -bottom-7 ${
                                isScrolled || darkInitially
                                    ? "text-transparent"
                                    : "text-primary-foreground"
                            }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span className="underline">08 – 604 74 45</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`nav-link text-sm font-semibold transition-colors ${
                                    isScrolled || darkInitially
                                        ? "text-foreground/80 hover:text-foreground"
                                        : "text-primary-foreground/90 hover:text-primary-foreground"
                                }`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown className="w-4 h-4" />
                                )}
                            </a>
                        ))}

                        {/* CTA Button + Hamburger */}
                        <div className="flex items-center gap-4">
                            <a
                                href="#kontakt"
                                className={`hidden lg:inline-flex btn-primary text-sm py-2 px-4 ${
                                    isScrolled || darkInitially
                                        ? ""
                                        : "bg-white/20 backdrop-blur-sm hover:bg-muted-foreground"
                                }`}
                            >
                                Kontakta oss
                            </a>
                        </div>
                    </nav>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 transition-colors xl:hidden ${
                            isScrolled || darkInitially
                                ? "text-foreground"
                                : "text-primary-foreground"
                        }`}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-background border-t border-border shadow-lg"
                >
                    <div className="section-container py-6 flex flex-col gap-4">
                        <a
                            href="tel:08-6047445"
                            className="flex items-center gap-2 text-foreground font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Phone className="w-4 h-4" />
                            <span className="underline">08 – 604 74 45</span>
                        </a>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link text-base py-2 text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown className="w-4 h-4" />
                                )}
                            </a>
                        ))}
                        <a
                            href="#kontakt"
                            className="btn-primary text-sm mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Kontakta oss
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
