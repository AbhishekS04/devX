import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
// import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import "@/sections/Features";
import Features from "@/sections/Features";
// import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import {Footer} from "@/components/footer";
import Content  from "@/components/content-6";
import ContentSection from "@/components/content-5";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <Hero />
            {/* <LogoTicker /> */}
            <Introduction />
            <Features />
            {/* <Integrations /> */}
            <ContentSection/>
            <Faqs />
            
            <Content/>
            <CallToAction />
            <Footer/>
            <TextHoverEffect text={"DevX"}/>

        </>
    );
}
