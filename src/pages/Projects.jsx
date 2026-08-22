import { useState } from "react";

import Navbar from "../components/Navbar";
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

