import Hero from "@/components/Hero";
import References from "@/components/References";
import Video from "@/components/Video";
import CustomerBanner from "@/components/CustomerBanner";
import FAQ from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import Careers from "@/components/Careers";
import ImageBlock from "@/components/ImageBlock";
import { NewsSection } from "@/components/NewsSection";

import img from "@/assets/img/elinstallation.jpg";
import billaddarImg from "@/assets/img/billaddare.png";

const Home = () => {
    return (
        <>
            <Hero />
            <CustomerBanner />
            <Video />
            <References />
            <ImageBlock
                backgroundImg={billaddarImg}
                title="Skalbara lösningar för elbilsladdning"
                text="Som en ledande leverantör erbjuder vi skräddarsydda, skalbara lösningar för elbilsladdning till företag, fastighetsägare och bostadsrättsföreningar. Vi ansvarar för design, installation, drift och service med hög säkerhet och driftsäkerhet."
            />
            <NewsSection />
            <ImageBlock
                backgroundImg={img}
                title="Entreprenad för större projekt"
                text="Vi tar hand om hela entreprenaden för nybyggnationer, ombyggnationer och större fastighetsprojekt. Vi ansvarar för projektering, samordning, installation och uppföljning, alltid med fokus på kvalitet och säkerhet!"
            />

            <FAQ />
            <Careers />
            <CTA />
        </>
    );
};

export default Home;
