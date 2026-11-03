
import { useState } from "react";

import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsShowcase from "../components/projects/ProjectsShowcase";
import Testimonials from "../components/projects/Testimonials";
import ProjectsFAQ from "../components/projects/ProjectsFAQ";
import ProjectsCTA from "../components/projects/ProjectsCTA";
import Footer from "../components/Footer";

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  return (
    <>
      <SEO
        title="Interior Design Projects in Erode | Niebo Interiors"
        description="Explore Niebo Interiors' residential interior design projects in Erode, featuring premium modular kitchens, wardrobes and thoughtfully designed living spaces."
        path="/projects"
      />

      <Navbar />

      <ProjectsHero />

      <ProjectsShowcase
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <Testimonials />

      <ProjectsFAQ />

      <ProjectsCTA />

      <Footer />
    </>
  );
}
