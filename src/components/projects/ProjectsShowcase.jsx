import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.webp";
import kitchen from "../../assets/about/kitchen.webp";
import tvunit from "../../assets/about/tv-unit.webp";
import bedroom from "../../assets/about/bedroom.webp";
import living from "../../assets/about/living.webp";
import wardrobe from "../../assets/about/wardrobe.webp";
import office from "../../assets/about/office.webp";

const categories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Modular Kitchen",
  "Living Room",
  "Bedroom",
  "Wardrobe",
  "TV Unit",
  "Pooja Unit",
];

const projects = [
  {
    id: 1,
    
    title: "Full Home",
    category: "Full Home",
    image: living,
  },
  {
    id: 2,
    category: "Modular Kitchen",
    title: "Modular Kitchen",
    image: kitchen,
  },
  {
    id: 3,
    category: "Living Room",
    title: "Living Room",
    image: living,
  },
  {
    id: 4,
    category: "Bedroom",
    title: "Bedroom",
    image: bedroom,
  },
  {
    id: 5,
    category: "Wardrobe",
    title: "Wardrobe",
    image: wardrobe,
  },
  {
    id: 6,
    category: "TV Unit",
    title: "TV Unit",
    image: tvunit,
  },
  {
    id: 8,
    category: "Office",
    title: "Office",
    image: heroImage,
  },
  {
    id: 9,
    category: "Commercial",
    title: "Commercial",
    image: office,
  },
];

export default function ProjectsShowcase({
  activeCategory,
  setActiveCategory,
}) {
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    
    <section
  id="showcase"
  className="bg-white py-20 lg:py-24"
>
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            Our Portfolio
          </span>

          <h2 className="mt-5 text-4xl font-light text-zinc-900 md:text-5xl">
            Explore Our
            <br />
            Luxury Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-600">
            Browse our completed interiors crafted with premium materials,
            timeless aesthetics, and meticulous attention to detail.
          </p>
        </motion.div>

        {/* Category Tabs */}

        <div className="mb-16 flex gap-4 scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#C8A96A] bg-[#C8A96A] text-black shadow-lg"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-[#C8A96A] hover:text-[#C8A96A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
  src={project.image}
  alt={project.category}
  loading="lazy"
  decoding="async"
  className="h-64 md:h-80 w-full object-cover transition duration-700 group-hover:scale-110"
/>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-8 opacity-0 transition duration-500 group-hover:opacity-100">
                 <Link
  to={`/projects/${project.slug}`}
  className="inline-flex items-center gap-2 rounded-full bg-[#C8A96A] px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#D9B978]"
>
  View Project
  <ArrowUpRight size={18} />
</Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-light text-zinc-900">
                  {project.category}
                </h3>

                <p className="mt-3 text-zinc-600">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-light text-zinc-900">
              No Projects Found
            </h3>

            <p className="mt-4 text-zinc-600">
              Please choose another category.
            </p>
          </div>
        )}
       </div>
</section>
  );
}