import Footer from "../../components/footer";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import About from "./components/about";
import Goals from "./components/goals";
import Hero from "./components/hero";

export default function AboutPage() {
    return (
        <div>
            <Hero />
            <About />
            <Goals />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
