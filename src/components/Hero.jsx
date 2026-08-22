import { motion } from "framer-motion";
import heroImage from "../assets-optimized/images/hero.webp";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] w-full items-end overflow-hidden bg-obsidian lg:min-h-screen"
    >
      <picture>
  <source srcSet={heroImage} type="image/webp" />
  <img
    src={heroImage}
    loading="eager"
    fetchPriority="high"
    decoding="async"
    alt="Luxury Interior"
    className="absolute inset-0 h-full w-full object-cover object-center md:object-[65%_center]"
  />
</picture>
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-12 sm:pb-16 md:pb-28 lg:pb-40"
      >
        <motion.div variants={item} className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeInOut" }}
            className="h-px bg-gold"
          />
          <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            OWN MANUFACTURING • PREMIUM INTERIORS
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl font-display text-[2.9rem] font-light italic leading-[1.02] text-ivory sm:text-5xl lg:text-7xl"
        >
          Crafting Interiors
          <br />
          That Feel Like Home
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-[340px] font-body text-sm font-light leading-7 text-stone sm:max-w-lg sm:text-base md:max-w-xl lg:mt-6 lg:text-lg"
        >
          At Niebo Interiors, every project is thoughtfully designed and crafted in our own manufacturing facility using premium materials, precision engineering, and timeless aesthetics—creating spaces that are elegant, functional, and built to last.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex w-full max-w-[340px] flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4"
        >
          <a
  href="/projects"
  className="w-full border border-gold bg-gold px-6 py-3.5 text-center font-body text-sm uppercase tracking-[0.2em] text-obsidian transition-all duration-300 hover:bg-transparent hover:text-gold sm:w-auto sm:px-8"
>
  Explore the Collection
</a>

<a
  href="/contact"
  className="w-full border border-ivory/30 px-6 py-3.5 text-center font-body text-sm uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-gold hover:text-gold sm:w-auto sm:px-8"
>
  Book a Consultation
</a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-stone">
          Scroll
        </span>
        <motion.span
          animate={{
    y:[0,10,0]
}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gold-dim"
        />
      </motion.div>
    </section>
  );
};

export default Hero;


