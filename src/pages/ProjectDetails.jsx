import { Link, useParams } from "react-router-dom";
import logo from "../assets-optimized/images/logo.webp";

import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  MapPin,
  Maximize2,
  Layers3,
  Compass,
  LayoutGrid,
  Box,
  Palette,
  Hammer,
  ShieldCheck,
} from "lucide-react";

import living from "../assets-optimized/about/living.webp";
import kitchen from "../assets-optimized/about/kitchen.webp";
import bedroom from "../assets-optimized/about/bedroom.webp";
import tvunit from "../assets-optimized/about/tv-unit.webp";
import wardrobe from "../assets-optimized/about/bedroom.webp";

/*
  IMPORTANT:
  Office & Commercial image files path currently not confirmed.
  So temporarily using existing image to prevent Vite error.
  Once actual images are available, replace these two lines.
*/
const office = living;
const commercial = living;

const projects = {
  "1": {
    title: "Full Home",
    subtitle: "Interiors",
    category: "Residential",
    location: "Erode, Tamil Nadu",
    area: "2400 Sq.ft",
    scope: "Full Home Interior",

    hero: living,

    description:
      "A complete home interior designed with a perfect balance of aesthetics, functionality, and comfort. Every space is carefully crafted to reflect the personality and lifestyle of the client.",

    spaces: [
      {
        title: "Living Room",
        image: living,
      },
      {
        title: "Modular Kitchen",
        image: kitchen,
      },
      {
        title: "Bedroom",
        image: bedroom,
      },
      {
        title: "Wardrobe",
        image: wardrobe,
      },
      {
        title: "TV Unit",
        image: tvunit,
      },
      {
        title: "Pooja Unit",
        image: living,
      },
    ],
  },

  "2": {
    title: "Modular Kitchen",
    subtitle: "Interiors",
    category: "Modular Kitchen",
    location: "Erode, Tamil Nadu",
    area: "180 Sq.ft",
    scope: "Modular Kitchen",

    hero: kitchen,

    description:
      "A refined modular kitchen designed for effortless functionality, smart storage, and a timeless premium appearance.",

    spaces: [
      {
        title: "Main Kitchen",
        image: kitchen,
      },
      {
        title: "Kitchen Storage",
        image: kitchen,
      },
      {
        title: "Countertop",
        image: kitchen,
      },
      {
        title: "Overhead Cabinets",
        image: kitchen,
      },
      {
        title: "Utility Area",
        image: kitchen,
      },
      {
        title: "Kitchen Finish",
        image: kitchen,
      },
    ],
  },

  "3": {
    title: "Living Room",
    subtitle: "Interiors",
    category: "Living Room",
    location: "Erode, Tamil Nadu",
    area: "450 Sq.ft",
    scope: "Living Room Interior",

    hero: living,

    description:
      "A sophisticated living space combining warm materials, elegant lighting, comfortable furniture, and thoughtful detailing.",

    spaces: [
      {
        title: "Main Living Area",
        image: living,
      },
      {
        title: "Seating Area",
        image: living,
      },
      {
        title: "TV Wall",
        image: tvunit,
      },
      {
        title: "Display Unit",
        image: living,
      },
      {
        title: "Lighting",
        image: living,
      },
      {
        title: "Decor Details",
        image: living,
      },
    ],
  },

  "4": {
    title: "Bedroom",
    subtitle: "Interiors",
    category: "Bedroom",
    location: "Erode, Tamil Nadu",
    area: "220 Sq.ft",
    scope: "Bedroom Interior",

    hero: bedroom,

    description:
      "A calm and contemporary bedroom designed around comfort, storage, functionality, and a warm luxurious atmosphere.",

    spaces: [
      {
        title: "Master Bedroom",
        image: bedroom,
      },
      {
        title: "Bed Backdrop",
        image: bedroom,
      },
      {
        title: "Wardrobe",
        image: wardrobe,
      },
      {
        title: "Storage",
        image: wardrobe,
      },
      {
        title: "Lighting",
        image: bedroom,
      },
      {
        title: "Bedroom Details",
        image: bedroom,
      },
    ],
  },

  "5": {
    title: "Wardrobe",
    subtitle: "Interiors",
    category: "Wardrobe",
    location: "Erode, Tamil Nadu",
    area: "80 Sq.ft",
    scope: "Custom Wardrobe",

    hero: wardrobe,

    description:
      "A sleek custom wardrobe solution designed to maximize storage while maintaining a clean and sophisticated bedroom aesthetic.",

    spaces: [
      {
        title: "Full Wardrobe",
        image: wardrobe,
      },
      {
        title: "Open Storage",
        image: wardrobe,
      },
      {
        title: "Internal Storage",
        image: wardrobe,
      },
      {
        title: "Premium Finish",
        image: wardrobe,
      },
      {
        title: "Lighting Detail",
        image: wardrobe,
      },
      {
        title: "Bedroom Integration",
        image: bedroom,
      },
    ],
  },

  "6": {
    title: "TV Unit",
    subtitle: "Interiors",
    category: "TV Unit",
    location: "Erode, Tamil Nadu",
    area: "120 Sq.ft",
    scope: "TV Unit Interior",

    hero: tvunit,

    description:
      "A statement TV unit designed to bring together entertainment, storage, lighting, and refined visual balance.",

    spaces: [
      {
        title: "Main TV Unit",
        image: tvunit,
      },
      {
        title: "Display Shelves",
        image: tvunit,
      },
      {
        title: "Storage",
        image: tvunit,
      },
      {
        title: "Wall Panelling",
        image: tvunit,
      },
      {
        title: "Lighting",
        image: tvunit,
      },
      {
        title: "Living Integration",
        image: living,
      },
    ],
  },

  /* =========================
     8. OFFICE
  ========================= */

  "8": {
    title: "Office",
    subtitle: "Interiors",
    category: "Office",
    location: "Erode, Tamil Nadu",
    area: "500 Sq.ft",
    scope: "Office Interior",

    hero: office,

    description:
      "A modern office interior designed to create a productive, comfortable, and professional workspace with a refined contemporary aesthetic.",

    spaces: [
      {
        title: "Main Office",
        image: office,
      },
      {
        title: "Reception Area",
        image: office,
      },
      {
        title: "Workstation",
        image: office,
      },
      {
        title: "Meeting Area",
        image: office,
      },
      {
        title: "Storage",
        image: office,
      },
      {
        title: "Complete Office",
        image: office,
      },
    ],
  },

  /* =========================
     9. COMMERCIAL
  ========================= */

  "9": {
    title: "Commercial",
    subtitle: "Interiors",
    category: "Commercial",
    location: "Erode, Tamil Nadu",
    area: "1500 Sq.ft",
    scope: "Commercial Interior",

    hero: commercial,

    description:
      "A premium commercial interior designed to balance customer experience, functionality, brand identity, and contemporary aesthetics.",

    spaces: [
      {
        title: "Main Commercial Space",
        image: commercial,
      },
      {
        title: "Customer Area",
        image: commercial,
      },
      {
        title: "Display Area",
        image: commercial,
      },
      {
        title: "Seating Area",
        image: commercial,
      },
      {
        title: "Lighting Detail",
        image: commercial,
      },
      {
        title: "Complete Commercial Interior",
        image: commercial,
      },
    ],
  },
};

/* =========================
   PROJECT OVERVIEW
========================= */

const overview = [
  {
    icon: Compass,
    title: "Brief & Inspiration",
    description:
      "Understanding the client's needs, lifestyle and design preferences.",
  },
  {
    icon: Layers3,
    title: "Concept Design",
    description:
      "Creating mood boards, layouts and design concepts for every space.",
  },
  {
    icon: LayoutGrid,
    title: "Floor Plans",
    description:
      "Detailed planning to ensure efficient layouts and functional spaces.",
  },
  {
    icon: Box,
    title: "3D Renders",
    description:
      "High-quality 3D visualizations to bring the proposed design to life.",
  },
  {
    icon: Palette,
    title: "Materials & Finishes",
    description:
      "Carefully selected materials, textures and finishes for a premium look.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description:
      "Precision execution with quality craftsmanship and attention to detail.",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects[id] || projects["1"];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="border-b border-white/10 bg-[#0B0B0B]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Niebo Interiors"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">

            <Link
              to="/"
              className="transition hover:text-[#C8A96A]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition hover:text-[#C8A96A]"
            >
              About Us
            </Link>

            <Link
              to="/projects"
              className="text-[#C8A96A]"
            >
              Projects
            </Link>

            <Link
              to="/blog"
              className="transition hover:text-[#C8A96A]"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-[#C8A96A]"
            >
              Contact
            </Link>

          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#D9B978] md:flex"
          >
            Get Free Consultation
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </header>


      {/* =========================
          HERO
      ========================= */}

      <section className="relative overflow-hidden bg-[#0B0B0B]">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#C8A96A]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-20">

          {/* Back */}

          <Link
            to="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#C8A96A] transition hover:text-[#E0C27D]"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>


          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}

            <div>

              <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96A]">
                Project Details
              </p>

              <h1 className="mt-6 font-display text-5xl font-light leading-[0.95] md:text-7xl">

                {project.title}

                <span className="block text-[#C8A96A]">
                  {project.subtitle}
                </span>

              </h1>

              <div className="mt-8 h-px w-20 bg-[#C8A96A]" />

              <p className="mt-8 max-w-md text-base leading-7 text-zinc-400">
                {project.description}
              </p>


              {/* PROJECT DETAILS */}

              <div className="mt-10 space-y-5">

                <InfoRow
                  icon={Home}
                  label="Project Type"
                  value={project.category}
                />

                <InfoRow
                  icon={MapPin}
                  label="Location"
                  value={project.location}
                />

                <InfoRow
                  icon={Maximize2}
                  label="Area"
                  value={project.area}
                />

                <InfoRow
                  icon={Layers3}
                  label="Scope"
                  value={project.scope}
                />

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="relative">

              <div className="absolute -inset-2 rounded-[2rem] border border-[#C8A96A]/20" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#C8A96A]/40">

                <img
                  src={project.hero}
                  alt={project.title}
                  className="h-[420px] w-full object-cover md:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECT OVERVIEW
      ========================= */}

      <section className="bg-[#F8F6F1] py-20 text-zinc-900 md:py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs uppercase tracking-[0.4em] text-[#B18A45]">
              Project Overview
            </span>

            <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">
              Crafted With Purpose
            </h2>

            <p className="mt-6 leading-8 text-zinc-600">
              From the initial concept to final installation, every stage
              of this project was carefully planned and executed to create
              a refined and functional living experience.
            </p>

          </div>


          {/* OVERVIEW CARDS */}

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {overview.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96A]/60 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96A]/15 text-[#B18A45] transition group-hover:bg-[#C8A96A] group-hover:text-black">
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-zinc-300 transition group-hover:text-[#B18A45]"
                    />

                  </div>

                  <h3 className="mt-7 text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================
          SPACES
      ========================= */}

      <section className="bg-[#0B0B0B] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <span className="text-xs uppercase tracking-[0.4em] text-[#C8A96A]">
              Spaces Designed
            </span>

            <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">
              Every Space Has A Story
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {project.spaces.map((space, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10"
              >

                <img
                  src={space.image}
                  alt={space.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-white">
                    {space.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="bg-[#F8F6F1] py-20 text-center text-zinc-900 md:py-28">

        <div className="mx-auto max-w-3xl px-6">

          <ShieldCheck
            size={38}
            strokeWidth={1.3}
            className="mx-auto text-[#B18A45]"
          />

          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#B18A45]">
            Start Your Project
          </p>

          <h2 className="mt-5 font-display text-4xl font-light md:text-6xl">
            Let’s Create Your

            <span className="block text-[#B18A45]">
              Dream Interior.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-600">
            Tell us about your space and our design team will help you
            create an interior that feels uniquely yours.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9B978] hover:shadow-lg"
          >
            Get Free Consultation
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}


/* =========================
   INFO ROW
========================= */

function InfoRow({ icon: Icon, label, value }) {

  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/40 text-[#C8A96A]">
        <Icon size={17} />
      </div>

      <div className="flex items-center gap-4 text-sm">

        <span className="min-w-[90px] text-[#C8A96A]">
          {label}
        </span>

        <span className="text-zinc-300">
          {value}
        </span>

      </div>

    </div>
  );
}

