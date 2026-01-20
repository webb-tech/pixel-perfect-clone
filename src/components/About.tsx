import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Års erfarenhet" },
  { icon: Users, value: "1000+", label: "Nöjda kunder" },
  { icon: Shield, value: "15", label: "Års garanti" },
  { icon: Award, value: "3", label: "Generationer" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="om-oss" className="bg-card py-20 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold mb-4">Vi är DM TAK</h2>
            <h3 className="heading-lg text-foreground mb-6">
              Rekommenderade takläggare i Stockholm
            </h3>
            <p className="text-body mb-6">
              Vi är DM TAK – takläggare i hela storstockholm som arbetar med att byta tak i form av 
              tegelpannor, betong och plåttak. Vi tar oss an stora som små projekt åt både företag, 
              bostadsrättsföreningar samt fastighetsägare.
            </p>
            <p className="text-body mb-8">
              DM TAK är i grund och botten ett familjeföretag där kunskap om takläggning gått i arv 
              i tre generationer. Vi är experter på takläggning i Stockholm och är alltid inriktade 
              på att utföra ett arbete som bygger på yrkesstolthet och god känsla för våra kunders behov.
            </p>

            {/* Guarantee Badge */}
            <div className="inline-flex items-center gap-4 bg-background rounded-lg p-4 border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">15 års garanti</p>
                <p className="text-muted-foreground text-sm">På alla våra takarbeten</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-lg p-6 border border-border text-center hover:border-primary/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
