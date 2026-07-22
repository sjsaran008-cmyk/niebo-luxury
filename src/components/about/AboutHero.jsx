import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.webp";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}

      <img
        src={heroImage}
        alt="Luxury Interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96A]/10 blur-[180px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs uppercase tracking-[0.45em] text-[#C8A96A]"
        >
          ABOUT NIEBO INTERIORS
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 font-display text-5xl font-light leading-[1.05] text-white md:text-7xl lg:text-8xl"
        >
          Thoughtfully Designed.
          <br />
          Timelessly Crafted.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl"
        >
          We create interiors that blend thoughtful design,
          premium craftsmanship, and lasting quality—transforming
          every space into a timeless expression of your lifestyle.
        </motion.p>

        <motion.a
          href="#our-story"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-14 inline-flex rounded-full border border-[#C8A96A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96A] transition-all duration-300 hover:bg-[#C8A96A] hover:text-black"
        >
          Discover Our Story
        </motion.a>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">

          <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
            Scroll
          </span>

          <div className="h-12 w-[1px] bg-gradient-to-b from-[#C8A96A] to-transparent" />

        </div>
      </motion.div>

    </section>
  );
}