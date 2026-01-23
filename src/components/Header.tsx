import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/img/logo.svg";
import servicePages from "@/content/service-pages.json";

const Header = ({ darkInitially = false }: { darkInitially?: boolean }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
        null,
    );

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
        {
            name: "Våra tjänster",
            href: "",
            hasDropdown: true,
            items: [
                ...servicePages.map((page) => ({
                    label: page.title,
                    href: `/tjanster/${page.slug}`,
                })),
            ],
        },
        {
            name: "Nyheter",
            href: "/nyheter",
        },
        {
            name: "Jobba hos oss",
            href: "#jobb",
        },
        { name: "Referenser", href: "/referenser", hasDropdown: false },
        { name: "Om oss", href: "/om-oss", hasDropdown: false },
    ];

    return (
        <motion.header
            animate={{
                y: lastScrollY < 50 ? 0 : scrollDirection === "down" ? -120 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled || darkInitially
                    ? "bg-background/95 backdrop-blur-md"
                    : "bg-transparent"
            } ${isScrolled ? "shadow-lg" : ""}`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between gap-4 py-8">
                    {/* Left: Logo + Phone */}
                    <div className="flex items-center gap-8 relative">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <img src={logo} alt="Logo" width={300} />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() =>
                                    link.hasDropdown &&
                                    setOpenDropdown(link.name)
                                }
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <a
                                    href={link.href}
                                    className={`nav-link text-sm font-semibold transition-colors flex items-center gap-1 ${
                                        isScrolled || darkInitially
                                            ? "text-foreground/80 hover:text-foreground"
                                            : "text-primary-foreground/90 hover:text-primary-foreground"
                                    }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                                        />
                                    )}
                                </a>

                                {link.hasDropdown &&
                                    openDropdown === link.name &&
                                    "items" in link && (
                                        <div className="absolute top-full left-0 mt-0 w-48">
                                            <div className="h-2 bg-transparent pointer-events-auto"></div>
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute top-2 left-0 w-48 bg-background border border-border rounded-lg shadow-lg p-2 pointer-events-auto"
                                            >
                                                {link.items?.map(
                                                    (item: {
                                                        label: string;
                                                        href: string;
                                                    }) => (
                                                        <a
                                                            key={item.label}
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-foreground hover:bg-neutral-100 hover:text-primary transition-colors rounded-sm"
                                                            onClick={() => {
                                                                setOpenDropdown(
                                                                    null,
                                                                );
                                                            }}
                                                        >
                                                            {item.label}
                                                        </a>
                                                    ),
                                                )}
                                            </motion.div>
                                        </div>
                                    )}
                            </div>
                        ))}

                        {/* CTA Button + Hamburger */}
                        <div className="flex items-center gap-4">
                            <a
                                href="/kontakt"
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
                            <div key={link.name}>
                                <button
                                    onClick={() => {
                                        if (link.hasDropdown) {
                                            setMobileOpenDropdown(
                                                mobileOpenDropdown === link.name
                                                    ? null
                                                    : link.name,
                                            );
                                        } else {
                                            setIsMobileMenuOpen(false);
                                            window.location.href = link.href;
                                        }
                                    }}
                                    className="w-full text-left nav-link text-base py-2 text-foreground flex items-center justify-between"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${
                                                mobileOpenDropdown === link.name
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </button>
                                {link.hasDropdown &&
                                    mobileOpenDropdown === link.name &&
                                    "items" in link && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="flex flex-col gap-2 ml-4 mt-2 pl-4 border-l border-border"
                                        >
                                            {link.items?.map(
                                                (item: {
                                                    label: string;
                                                    href: string;
                                                }) => (
                                                    <a
                                                        key={item.label}
                                                        href={item.href}
                                                        className="text-sm text-foreground/80 hover:text-foreground transition-colors py-2"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(
                                                                false,
                                                            );
                                                            setMobileOpenDropdown(
                                                                null,
                                                            );
                                                        }}
                                                    >
                                                        {item.label}
                                                    </a>
                                                ),
                                            )}
                                        </motion.div>
                                    )}
                            </div>
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
