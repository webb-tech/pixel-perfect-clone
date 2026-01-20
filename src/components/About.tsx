import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="om-oss" className="section-beige py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground">Vi är DM TAK</h2>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 lg:p-12 relative"
            >
              {/* Guarantee badge - positioned top right */}
              <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 flex flex-col items-center justify-center text-center shadow-lg border-4 border-yellow-300">
                  <span className="text-[8px] font-bold text-yellow-900">DM TAK AB 15 ÅRS GARANTI</span>
                  <span className="text-lg font-bold text-yellow-900">15 ÅRS</span>
                  <span className="text-xs font-bold text-yellow-900">GARANTI</span>
                </div>
              </div>

              <h3 className="heading-lg text-foreground mb-6 max-w-md">
                Rekommenderade takläggare i Stockholm
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vi är DM TAK – takläggare i hela storstockholm som arbetar med att byta tak i form av 
                  tegelpannor, betong och plåttak. Vi tar oss an stora som små projekt åt både företag, 
                  bostadsrättsföreningar samt fastighetsägare.
                </p>

                <p>
                  Vår erfarenhet sträcker sig över 20 år bakåt i tiden och vi är högt rekommenderade av nöjda kunder runt om i hela Stockholm. Allt arbete dokumenteras för att du som kund ska ha en tydlig inblick under arbetets gång och känna dig trygg i ditt val av takläggare.
                </p>

                <p>
                  Året om lägger vi tak som är av högsta kvalitet och perfekt anpassade för att klara av det svenska klimatet. 15 års garanti lämnas på utfört arbete och vi jobbar tidseffektivt och utvecklar våra metoder utifrån de senaste rönen och metoderna.
                </p>

                <p>
                  Takläggning bygger på ett hantverk som är gammalt, men det är också en bransch där utvecklingen går snabbt framåt. Vi är därför noga med att vidareutbilda våra takläggare. Det är en av anledningarna till att vårt arbete har uppmärksammats: DM TAK utsågs till Årets Hantverkare 2016 i kategorin Större Byggföretag.
                </p>

                <p>
                  Att ha ett tryggt och tätt tak ovanför huvudet är viktigt. På DM TAK tar vi oss an den uppgiften varje dag, för det som är viktigt för er är också viktigt för oss.
                </p>
              </div>

              <ul className="space-y-3 mt-8 mb-8">
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <Check className="w-5 h-5 text-primary" />
                  20+ års erfarenhet
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <Check className="w-5 h-5 text-primary" />
                  15 års garanti på utfört arbete
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <Check className="w-5 h-5 text-primary" />
                  Högt betyg från verifierade kunder
                </li>
              </ul>

              <a href="#om-oss" className="btn-primary inline-flex">
                Lär känna DM TAK
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-rows-2"
            >
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                  alt="DM TAK takläggare"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="DM TAK team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
