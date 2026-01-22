import Hero from "@/components/Hero";
import References from "@/components/References";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { CTA } from "@/components/CTA";
import Careers from "@/components/Careers";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Contact />
            <References />
            <FAQ />
            <Careers />
            <CTA />
        </>
    );
};

export default Home;
