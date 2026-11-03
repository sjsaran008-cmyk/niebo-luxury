
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import TrustedBrands from "../components/TrustedBrands";
import HomeCTA from "../components/HomeCTA";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Interior Designers in Erode | Niebo Interiors"
        description="Niebo Interiors is a premium interior design company in Erode, specializing in modular kitchens, custom wardrobes, elegant living spaces and complete home interiors."
        path="/"
      />

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
