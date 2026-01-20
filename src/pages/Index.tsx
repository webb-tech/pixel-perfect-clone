import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import About from "@/components/About";
import MediaSection from "@/components/MediaSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Testimonials />
      <Services />
      <About />
      <MediaSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
