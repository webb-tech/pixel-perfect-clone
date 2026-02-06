import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ReferenceCardProps {
    title: string;
    description: string;
    image: string;
    index: number;
    isInView: boolean;
    href?: string;
    linkText?: string;
}

const ReferenceCard = ({
    title,
    description,
    image,
    index,
    isInView,
    href = "#",
    linkText = "Läs mer",
}: ReferenceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
            }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
        >
            <div className="relative aspect-video w-full h-56">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="p-8">
                <h3 className="text-foreground font-bold text-lg mb-3">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                    {description}
                </p>
                <a
                    href={href}
                    className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                >
                    {linkText}
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </motion.div>
    );
};

export default ReferenceCard;
