import Hero from "@/components/Hero";
import References from "@/components/References";
import Video from "@/components/Video";
import CustomerBanner from "@/components/CustomerBanner";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { CTA } from "@/components/CTA";
import Careers from "@/components/Careers";

const Home = () => {
    return (
        <>
            <Hero />
            <CustomerBanner />
            <Video />
            <Contact />
            <References />
            <FAQ />
            <Careers />
            <CTA />
        </>
    );
};

export default Home;
