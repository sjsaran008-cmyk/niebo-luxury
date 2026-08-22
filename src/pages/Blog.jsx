import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import BlogCTA from "../components/blog/BlogCTA";

export default function Blog() {
  return (
    <>
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


