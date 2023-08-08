import Footer from "../../components/footer";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import About from "./components/about";
import Hero from "./components/hero";
import Map from "./components/map";

export default function ContactPage() {
    return (
        <div>
            <Hero />
            <About />
            <Map />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
