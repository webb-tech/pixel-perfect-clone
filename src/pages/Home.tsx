import Hero from "@/components/Hero";
import References from "@/components/References";
import Video from "@/components/Video";
import CustomerBanner from "@/components/CustomerBanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { CTA } from "@/components/CTA";
import Careers from "@/components/Careers";
import ImageBlock from "@/components/ImageBlock";

import img from "@/assets/img/elinstallation.jpg";
import { NewsSection } from "@/components/NewsSection";

const Home = () => {
    return (
        <>
            <Hero />
            <CustomerBanner />
            <Video />
            <References />
            <ImageBlock
                backgroundImg={img}
                title="Smart och trygg elbilsladdning"
                text="Med hjälp av vårt skalbara helhetserbjudande Assemblin Charge kan ni erbjuda problemfri elbilsladdning för era medarbetare, hyresgäster eller brf-medlemmar."
                btnLabel="Läs mer"
                btnHref="#"
            />
            <NewsSection />
            <ImageBlock
                backgroundImg={img}
                title="Solceller - framtidens energiproduktion"
                text="Vi hjälper dig att fånga och lagra solenergi genom installation av moderna och effektiva solpaneler eller solfångare med tillhörande lagring."
                btnLabel="Läs mer"
                btnHref="#"
            />

            <FAQ />
            <Careers />
            <CTA />
        </>
    );
};

export default Home;
