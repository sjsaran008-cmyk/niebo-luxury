import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets-optimized/images/hero.webp"; // Replace with a dedicated Projects Hero image later

export default function ProjectsHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img loading="lazy" decoding="async"
  src={heroImage}
  alt="Luxury Interior Projects"
  fetchPriority="high"
  loading="eager"
  decoding="async"
  className="absolute inset-0 h-full w-full object-cover"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">

          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.45em] text-[#C8A96A]"
          >
            OUR PROJECTS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 font-display text-4xl font-light leading-tight text-white md:text-7xl"
          >
            Spaces Designed
            <br />
            To Be Lived In.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300"
          >
            Explore a curated collection of luxury interiors crafted with
            precision, premium materials, and timeless design. Every project
            reflects our commitment to quality and attention to detail.
          </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
>
  <a
  href="#showcase"
  className="inline-flex items-center justify-center rounded-full bg-[#C8A96A] px-6 py-3 md:px-8 md:py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#D9B978]"
>
  Explore Gallery
</a>

  <Link
    to="/contact"
    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 md:px-8 md:py-4 font-medium text-white transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-black"
  >
    Book Consultation
  </Link>
</motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs tracking-[0.45em] text-[#C8A96A]">
          SCROLL
        </p>

        <div className="mx-auto mt-3 h-14 w-px bg-gradient-to-b from-[#C8A96A] to-transparent" />
      </div>
    </section>
  );
}


