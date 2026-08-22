import Navbar from "../components/Navbar";
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


