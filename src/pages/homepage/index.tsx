import Footer from "../../components/footer";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import About from "./components/about";
import CallUs from "./components/call_us";
import Hero from "./components/hero";
import LocateUs from "./components/locate_us";
import Row from "./components/row";
import Row2 from "./components/row2";
import WhyChooseUs from "./components/why_choose_us";

export default function Homepage() {
    return (
        <div>
            <Hero />
            <About />
            <Row />
            <Row2 />
            <WhyChooseUs />
            <CallUs />
            <LocateUs />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
