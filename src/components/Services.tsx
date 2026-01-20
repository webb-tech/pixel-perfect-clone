import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Takläggning",
    description: "Professionell och fackmannamässig takläggning av erfarna takläggare.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=720&h=720&fit=crop",
    href: "#",
  },
  {
    title: "Plåtslageri",
    description: "I vår plåtverkstad förbereder vi den plåt som vi sedan monterar på ditt tak.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=720&h=720&fit=crop",
    href: "#",
  },
  {
    title: "Taksäkerhet",
    description: "Taksäkerhet innebär att kunna beträda och arbeta på taket med hjälp av taksäkerhetsanordningar.",
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=720&h=720&fit=crop",
    href: "#",
  },
  {
    title: "Takservice",
    description: "Vi rekommenderar att taket ses över varje år för maximal livslängd.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=720&h=720&fit=crop",
    href: "#",
  },
  {
    title: "Takmålning",
    description: "En takmålning kan ge taket ett nytt liv och ett extra skydd mot rost och slitage.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=720&h=720&fit=crop",
    href: "#",
  },
  {
    title: "Snöskottning",
    description: "Var ute i god tid med snöskottning innan skador uppstår på tak och omgivning.",
    image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=720&h=720&fit=crop",
    href: "#",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="tjanster" className="bg-background py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">Våra tjänster</h2>
          <h3 className="heading-md text-muted-foreground mb-6">De tjänster vi erbjuder inom tak</h3>
          <p className="text-body max-w-3xl mx-auto">
            Vi erbjuder flera olika tjänster inom tak. Så oavsett om du behöver ett helt nytt tak, 
            en ommålning av ditt plåttak, modern taksäkerhet eller snöskottning av ditt tak, finns vi här för dig!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card aspect-square"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="service-card-overlay group-hover:from-black/95" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                  Läs mer
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#tjanster" className="btn-secondary">
            Våra tjänster
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
