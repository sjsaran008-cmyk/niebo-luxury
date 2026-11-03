
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import WhyChooseNiebo from "../components/about/WhyChooseNiebo";
import FactorySection from "../components/about/FactorySection";
import MaterialsSection from "../components/about/MaterialsSection";
import InstallationProcess from "../components/about/InstallationProcess";
import AboutCTA from "../components/about/AboutCTA";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <SEO
        title="About Niebo Interiors | Premium Interior Designers in Erode"
        description="Discover Niebo Interiors, an Erode-based interior design company focused on thoughtful designs, premium materials, precision manufacturing and quality installation."
        path="/about"
      />

      <Navbar />
      <AboutHero />
      <OurStory />
      <WhyChooseNiebo />
      <FactorySection />
      <MaterialsSection />
      <InstallationProcess />
      <AboutCTA />
      <Footer />
    </>
  );
}
