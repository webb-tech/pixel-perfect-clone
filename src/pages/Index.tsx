import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import References from "@/components/References";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Testimonials />
      <About />
      <References />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
