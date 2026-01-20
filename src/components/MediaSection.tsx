import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const mediaLogos = [
  { name: "Svensk Byggtidning", initial: "SB" },
  { name: "Finanstid", initial: "FT" },
  { name: "Byggahus", initial: "BH" },
  { name: "Tak & Fasad", initial: "TF" },
];

const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-20 lg:py-32 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground mb-4">DM TAK i media</h2>
          <p className="text-body">Vi har blivit uppmärksammade av flera branschledande publikationer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {mediaLogos.map((media, index) => (
            <motion.a
              key={media.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {media.initial}
                </span>
              </div>
              <p className="text-muted-foreground text-sm text-center group-hover:text-foreground transition-colors">
                {media.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;
