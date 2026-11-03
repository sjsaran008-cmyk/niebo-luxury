
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import ContactHero from "../components/contact/ContactHero";
import ContactSection from "../components/contact/ContactSection";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Niebo Interiors | Interior Designers in Erode"
        description="Get in touch with Niebo Interiors in Erode for premium home interiors, modular kitchens, wardrobes and personalized interior design consultations."
        path="/contact"
      />

      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
