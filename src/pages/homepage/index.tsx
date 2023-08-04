import Footer from "../../components/footer";
import About from "./components/about";
import CallUs from "./components/call_us";
import Hero from "./components/hero";
import LocateUs from "./components/locate_us";
import WhyChooseUs from "./components/why_choose_us";

export default function Homepage() {
    return (
        <div>
            <Hero />
            <About />
            <WhyChooseUs />
            <CallUs />
            <LocateUs />
            <Footer />
        </div>
    );
}
