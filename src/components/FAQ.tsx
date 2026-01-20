import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Kan ni lägga tak på vintern?",
    answer: "Ja, vi utför takläggning året runt. Vi har lång erfarenhet av takarbeten under alla väderförhållanden och vidtar nödvändiga åtgärder för att säkerställa kvaliteten på arbetet oavsett årstid.",
  },
  {
    question: "Hur lång tid tar ett takbyte?",
    answer: "Tiden för ett takbyte varierar beroende på takets storlek och komplexitet. Ett vanligt villatak tar normalt 1-2 veckor, medan större projekt för bostadsrättsföreningar kan ta 4-8 veckor.",
  },
  {
    question: "Vad kostar det att byta tak?",
    answer: "Priset beror på många faktorer såsom takets storlek, typ av material, takets skick och eventuella tillval. Kontakta oss för en kostnadsfri offert baserad på dina specifika behov.",
  },
  {
    question: "Vilka garantier ger ni?",
    answer: "Vi erbjuder 15 års garanti på alla våra takarbeten. Detta omfattar både material och utförande. Vi står för kvalitet och vill att våra kunder ska känna sig trygga.",
  },
  {
    question: "Jobbar ni med bostadsrättsföreningar?",
    answer: "Ja, vi är specialiserade på takarbeten för bostadsrättsföreningar. Vi har gedigen erfarenhet av att hantera större projekt och samarbeta med styrelser och förvaltare.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-card py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground mb-4">Vanliga frågor</h2>
          <p className="text-body max-w-2xl mx-auto">
            Här hittar du svar på några av de vanligaste frågorna vi får från våra kunder.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-body pb-6">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
