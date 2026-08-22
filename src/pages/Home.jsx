import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import TrustedBrands from "../components/TrustedBrands";
import HomeCTA from "../components/HomeCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProcessTimeline />
      <TrustedBrands />
      <HomeCTA />
      <Footer />
    </>
  );
}

