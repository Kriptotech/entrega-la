import Footer from "../../components/footer";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import Hero from "./components/hero";
import Questions from "./components/question";

export default function Faqspage() {
    return (
        <div>
            <Hero />
            <Questions />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
