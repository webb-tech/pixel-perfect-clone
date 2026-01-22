import Header from "@/components/Header";
import Hero from "@/components/Hero";
import References from "@/components/References";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { CTA } from "@/components/CTA";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Contact />
            <References />
            <FAQ />
            <Careers />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;
