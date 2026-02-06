import heroImg from "@/assets/img/omoss.png";
import bannerImg from "@/assets/img/felsokning.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import img from "@/assets/img/elinstallation.jpg";
import { NewsSection } from "@/components/NewsSection";

const Career = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        fornamn: "",
        efternamn: "",
        telefon: "",
        epost: "",
        meddelande: "",
        cv: null as File | null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({
            ...prev,
            cv: file,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Add your form submission logic here
            console.log("Form submitted:", formData);
            // Reset form
            setFormData({
                fornamn: "",
                efternamn: "",
                telefon: "",
                epost: "",
                meddelande: "",
                cv: null,
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <section
                id="hero"
                className="py-40 text-white"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div className="section-container space-y-8">
                    <Breadcrumbs
                        currentPage="Karriär"
                        links={[{ label: "Start", href: "/" }]}
                    />

                    <h1 className="heading-lg">Jobba hos oss</h1>

                    <p className="max-w-3xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Non obcaecati debitis veritatis omnis asperiores
                        sapiente.
                    </p>
                </div>
            </section>

            <section
                ref={ref}
                id="video"
                className="section-white py-20 lg:py-32"
            >
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={bannerImg}
                                    alt="Felsökning"
                                />
                            </AspectRatio>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="slug-tag mb-4">Jobba hos oss</div>
                            <h3 className="heading-lg text-foreground mb-6">
                                Bli en del av MJ
                            </h3>
                            <p className="text-body mb-8">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Provident ad itaque neque illo
                                corporis dolore rem, sint temporibus earum vel
                                quaerat deleniti iste assumenda nemo aliquam
                                alias doloremque quia suscipit?
                            </p>

                            <a
                                href="/om-oss"
                                className="btn-primary inline-flex"
                            >
                                Se lediga tjänster
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: 400,
                }}
            ></div>

            <section className="section-beige py-16">
                <div className="section-container max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="slug-tag mb-4 inline-block">
                            Spontanansökan
                        </div>
                        <h2 className="heading-lg text-foreground mb-4">
                            Skicka spontanansökan idag
                        </h2>
                        <p className="max-w-2xl mx-auto">
                            Vi är ett elinstallationsföretag som jobbar med
                            företagskunder i hela Stockholm. Vi söker alltid
                            efter duktiga elektriker som vill jobba med oss.
                            Skicka in en spontanansökan så hör vi av oss när det
                            finns en tjänst som passar dig!
                        </p>
                    </div>

                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 max-w-2xl mx-auto"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Label
                                        htmlFor="fornamn"
                                        className="text-foreground mb-2 block"
                                    >
                                        Förnamn *
                                    </Label>
                                    <Input
                                        id="fornamn"
                                        name="fornamn"
                                        value={formData.fornamn}
                                        onChange={handleChange}
                                        required
                                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor="efternamn"
                                        className="text-foreground mb-2 block"
                                    >
                                        Efternamn *
                                    </Label>
                                    <Input
                                        id="efternamn"
                                        name="efternamn"
                                        value={formData.efternamn}
                                        onChange={handleChange}
                                        required
                                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Label
                                        htmlFor="telefon"
                                        className="text-foreground mb-2 block"
                                    >
                                        Telefon *
                                    </Label>
                                    <Input
                                        id="telefon"
                                        name="telefon"
                                        type="tel"
                                        value={formData.telefon}
                                        onChange={handleChange}
                                        required
                                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor="epost"
                                        className="text-foreground mb-2 block"
                                    >
                                        E-post *
                                    </Label>
                                    <Input
                                        id="epost"
                                        name="epost"
                                        type="email"
                                        value={formData.epost}
                                        onChange={handleChange}
                                        required
                                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label
                                    htmlFor="meddelande"
                                    className="text-foreground mb-2 block"
                                >
                                    Kort beskrivning om dig *
                                </Label>
                                <Textarea
                                    id="meddelande"
                                    name="meddelande"
                                    value={formData.meddelande}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="bg-white border-border text-foreground placeholder:text-muted-foreground resize-none"
                                />
                            </div>

                            <div>
                                <Label
                                    htmlFor="cv"
                                    className="text-foreground mb-2 block"
                                >
                                    CV (PDF) *
                                </Label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <label
                                            htmlFor="cv"
                                            className="btn-primary cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
                                        >
                                            Välj fil
                                        </label>
                                        <Input
                                            id="cv"
                                            name="cv"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            required
                                            className="hidden"
                                        />
                                        <span className="text-sm text-muted-foreground">
                                            {formData.cv
                                                ? formData.cv.name
                                                : "Ingen fil vald"}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Godkända filformat: PDF, DOC, DOCX
                                    </p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto btn-primary"
                            >
                                {isSubmitting ? "Skickar..." : "Skicka ansökan"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <NewsSection />

            <CTA />
        </>
    );
};

export default Career;
