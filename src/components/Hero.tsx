import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="section-container relative z-10 py-32 lg:py-40">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-white mb-4">
              Takläggning i Stockholm
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-6"
          >
            –Specialiserade på BRFer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
          >
            DM TAK är i grund och botten ett familjeföretag där kunskap om takläggning
            gått i arv i tre generationer. Vi är experter på takläggning i Stockholm och är alltid
            inriktade på att utföra ett arbete som bygger på yrkesstolthet och god känsla för våra kunders behov.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#kontakt" className="btn-primary">
              Kontakta oss
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#tjanster" className="btn-secondary text-white hover:text-white/80">
              Våra tjänster
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Reco Badges - positioned to the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-8 lg:right-20 top-1/3 hidden lg:flex items-center gap-4"
        >
          {/* 5 år i rad badge */}
          <div className="bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
            <span className="text-primary text-xs font-semibold">REKOMMENDERAT</span>
            <span className="text-primary text-2xl font-bold">5</span>
            <span className="text-primary text-xs">ÅR I RAD</span>
            <span className="text-green-600 text-[10px] font-bold">reco</span>
          </div>
          
          {/* Year badges */}
          <div className="flex gap-1">
            {[2025, 2024, 2023, 2022, 2021, 2017, 2016, 2015].map((year) => (
              <div 
                key={year} 
                className="bg-white rounded-full w-10 h-10 flex flex-col items-center justify-center shadow-md text-[8px]"
              >
                <span className="text-primary font-bold">{year}</span>
                <span className="text-green-600 font-bold">reco</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating contact button */}
      <motion.a
        href="#kontakt"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;
