import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id="kontakt"
            className="section-beige py-20 lg:py-32"
        >
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="slug-tag mb-4">
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            KONTAKTA OSS
                        </div>
                        <h3 className="heading-lg text-foreground mb-6">
                            Begär en kostnadsfri offert
                        </h3>
                        <p className="text-body mb-8">
                            Tveka inte att kontakta oss för frågor eller en
                            kostnadsfri offert. Vi återkommer alltid inom 24
                            timmar.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="tel:+46812345678"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm">
                                        Ring oss
                                    </p>
                                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                                        08-123 456 78
                                    </p>
                                </div>
                            </a>

                            <a
                                href="mailto:info@dmtak.se"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm">
                                        Maila oss
                                    </p>
                                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                                        info@dmtak.se
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm">
                                        Besök oss
                                    </p>
                                    <p className="text-foreground font-semibold">
                                        Stockholm, Sverige
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card rounded-lg p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-foreground font-medium mb-2"
                                    >
                                        Namn *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                        placeholder="Ditt namn"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-foreground font-medium mb-2"
                                    >
                                        E-post *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                        placeholder="din@email.se"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-foreground font-medium mb-2"
                                >
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder="070-123 45 67"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-foreground font-medium mb-2"
                                >
                                    Meddelande *
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                                    placeholder="Beskriv ditt projekt..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full"
                            >
                                Skicka förfrågan
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
