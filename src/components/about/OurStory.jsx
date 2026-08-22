import { motion } from "framer-motion";
import storyImage from "../../assets-optimized/images/hero.webp";

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

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="bg-white py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
            OUR STORY
          </span>

          <h2 className="mt-6 font-display text-4xl font-light leading-tight text-[#111] md:text-5xl">
            Thoughtfully Designed.
            <br />
            Creating Timeless Interiors.
          </h2>

          <div className="mt-10 space-y-6 text-base md:text-lg leading-8 md:leading-9 text-gray-600">

            <p>
              At <strong>Niebo Interiors</strong>, we believe exceptional
              interior design is more than just creating beautiful
              spaces—it's about understanding how people live,
              work, and experience their surroundings.
            </p>

            <p>
              From concept development to final installation,
              every project is carefully planned and executed
              with precision, premium materials, and expert
              craftsmanship.
            </p>

            <p>
              Our commitment to quality, transparency, and
              customer satisfaction ensures every space reflects
              elegance, functionality, and lasting value.
            </p>

          </div>

          <motion.a
            href="#why-niebo"
            whileHover={{ y: -2 }}
            className="mt-12 inline-flex rounded-full border border-[#C8A96A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A96A] transition hover:bg-[#C8A96A] hover:text-black"
          >
            Why Choose Niebo
          </motion.a>
        </motion.div>

        {/* Right Image */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="hidden md:block h-full w-full rounded-[32px] border border-[#C8A96A]/20" />

          <img
  src={storyImage}
  alt="Our Story"
  loading="lazy"
  decoding="async"
  className="relative h-[500px] md:h-[650px] w-full rounded-[32px] object-cover shadow-2xl"
/>

          {/* Floating Badge */}

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 px-5 py-4 md:px-8 md:py-5 shadow-xl backdrop-blur">

            <h3 className="font-display text-3xl text-[#C8A96A]">
              Quality
            </h3>

            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gray-600">
              Precision • Craftsmanship • Trust
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

