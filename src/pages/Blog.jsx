
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import BlogCTA from "../components/blog/BlogCTA";

export default function Blog() {
  return (
    <>
      <SEO
        title="Interior Design Tips & Ideas | Niebo Interiors Erode"
        description="Explore interior design ideas, modular kitchen inspiration, wardrobe designs, material guides and home interior tips from Niebo Interiors in Erode."
        path="/blog"
      />

      <Navbar />

      <main className="overflow-hidden bg-white">
        <BlogHero />

        <BlogGrid />

        <BlogCTA />
      </main>

      <Footer />
    </>
  );
}
