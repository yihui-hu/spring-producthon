import "./App.css";
import "@fontsource-variable/epilogue";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProducthonBg from "./components/ProducthonBg";
import MobileNavbar from "./components/MobileNavbar";
import Countdown from "./components/Countdown";
import About from "./components/About";
import WhyProducthon from "./components/WhyProducthon";
import Themes from "./components/Themes";
import Schedule from "./components/Schedule";
import Sponsorships from "./components/Sponsorships";
import Updates from "./components/Updates";
import { useRef } from "react";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

function App() {
  const targetDate = new Date(2024, 1, 23);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const whyRef = useRef<null | HTMLDivElement>(null);
  const themesRef = useRef<null | HTMLDivElement>(null);
  const scheduleRef = useRef<null | HTMLDivElement>(null);
  const sponsorRef = useRef<null | HTMLDivElement>(null);
  const faqRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <ProducthonBg />
      <div className="Container">
        <Navbar
          aboutRef={aboutRef}
          whyRef={whyRef}
          themesRef={themesRef}
          scheduleRef={scheduleRef}
          sponsorRef={sponsorRef}
          faqRef={faqRef}
        />
        <MobileNavbar />
        <Hero />
        <Countdown targetDate={targetDate} />
        <div ref={aboutRef} style={{ scrollMarginTop: "72px"}}>
          <About />
        </div>
        <div ref={whyRef} style={{ scrollMarginTop: "72px"}}>
          <WhyProducthon />
        </div>
        <div ref={themesRef} style={{ scrollMarginTop: "72px"}}>
          <Themes />
        </div>
        <div ref={scheduleRef} style={{ scrollMarginTop: "72px"}}>
          <Schedule />
        </div>
        <div ref={sponsorRef} style={{ scrollMarginTop: "72px"}}>
          <Sponsorships />
        </div>
        <div ref={faqRef} style={{ scrollMarginTop: "72px"}}>
          <FAQ />
        </div>
        <Updates />
        <Footer />
      </div>
    </>
  );
}

export default App;
