import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    location: "BRF Ånghästen",
    description: "Takbyte utfört av DM TAK",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=720&h=480&fit=crop",
  },
  {
    id: 2,
    location: "BRF Menglod",
    description: "Komplett takläggning",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=720&h=480&fit=crop",
  },
  {
    id: 3,
    location: "Alpstigen Stocksund",
    description: "Plåttak renovering",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=720&h=480&fit=crop",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} id="referenser" className="bg-background py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground mb-4">Våra kunder berättar</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-card">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].location}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-md px-3 py-2">
                <p className="text-foreground text-sm font-medium flex items-center gap-2">
                  <span className="text-primary">📍</span>
                  {testimonials[currentIndex].location}
                </p>
                <p className="text-muted-foreground text-xs">{testimonials[currentIndex].description}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-relaxed">
              "Det finns inget som DM TAK kunde ha gjort bättre"
            </blockquote>
            <p className="text-muted-foreground mb-6">
              ─ Johan Ingeberg, ordförande för BRF Ånghästen på Södermalm i Stockholm.
            </p>
            <p className="text-body mb-8">
              Johan beskriver samarbetet som smidigt och professionellt och säger att han inte har några som helst problem att rekommendera DM TAK till andra bostadsrättsföreningar. Han kan inte komma på något som DM TAK kunde gjort bättre!
            </p>
            <a href="#referenser" className="text-foreground font-semibold hover:text-primary transition-colors">
              Alla referenser →
            </a>

            {/* Stats */}
            <div className="mt-10 p-6 bg-card rounded-lg border border-border">
              <h4 className="text-foreground font-semibold mb-4">Verifierade kundomdömen</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  600+ verifierade kundomdömen
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Rekommenderad takläggare i Stockholm
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
