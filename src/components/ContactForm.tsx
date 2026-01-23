import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        namn: "",
        amne: "",
        epost: "",
        telefon: "",
        adress: "",
        meddelande: "",
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Add your form submission logic here
            console.log("Form submitted:", formData);
            // Reset form
            setFormData({
                namn: "",
                amne: "",
                epost: "",
                telefon: "",
                adress: "",
                meddelande: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-lg p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <Label
                        htmlFor="namn"
                        className="text-foreground mb-2 block"
                    >
                        Namn *
                    </Label>
                    <Input
                        id="namn"
                        name="namn"
                        value={formData.namn}
                        onChange={handleChange}
                        required
                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                    />
                </div>

                <div>
                    <Label
                        htmlFor="amne"
                        className="text-foreground mb-2 block"
                    >
                        Ämne *
                    </Label>
                    <Input
                        id="amne"
                        name="amne"
                        value={formData.amne}
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

                <div>
                    <Label
                        htmlFor="telefon"
                        className="text-foreground mb-2 block"
                    >
                        Telefon
                    </Label>
                    <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        value={formData.telefon}
                        onChange={handleChange}
                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                    />
                </div>

                <div>
                    <Label
                        htmlFor="adress"
                        className="text-foreground mb-2 block"
                    >
                        Adress
                    </Label>
                    <Input
                        id="adress"
                        name="adress"
                        value={formData.adress}
                        onChange={handleChange}
                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                    />
                </div>

                <div>
                    <Label
                        htmlFor="meddelande"
                        className="text-foreground mb-2 block"
                    >
                        Meddelande *
                    </Label>
                    <Textarea
                        id="meddelande"
                        name="meddelande"
                        value={formData.meddelande}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 btn-primary"
                >
                    {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                </Button>
            </form>
        </div>
    );
};
