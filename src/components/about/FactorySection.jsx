import { motion } from "framer-motion";
import factoryImage from "../../assets/images/hero.webp";
const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function FactorySection() {
  return (
    <section
      id="factory"
      className="bg-white py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Factory Image */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="hidden md:block absolute -right-6 -top-6 h-full w-full rounded-[32px] border border-[#C8A96A]/20" />

          <img
  src={factoryImage}
  alt="Niebo Factory"
  loading="lazy"
  decoding="async"
  className="relative h-[500px] md:h-[650px] w-full rounded-[32px] object-cover shadow-2xl"
/>

          <div className="absolute bottom-8 left-8 rounded-2xl bg-black/85 px-5 py-4 md:px-8 md:py-5 backdrop-blur-md">

            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
              OWN MANUFACTURING
            </p>

            <h3 className="mt-2 font-display text-3xl text-white">
              Precision
              <br />
              Crafted
            </h3>

          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            FACTORY EXCELLENCE
          </span>

          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-[#111] md:text-5xl">
            Precision Factory
            <br />
            Finishing.
          </h2>

          <p className="mt-8 text-base md:text-lg leading-8 md:leading-9 text-gray-600">
            Every interior component is manufactured in our own
            facility using advanced machinery and skilled
            craftsmanship, ensuring consistent quality, flawless
            finishes, and exceptional attention to detail.
          </p>

          {/* Highlights */}

          <div className="mt-12 space-y-6">

            <div className="flex items-start gap-3 md:gap-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#C8A96A]" />
              <p className="text-gray-700">
                Advanced machinery for accurate production.
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#C8A96A]" />
              <p className="text-gray-700">
                Premium finishing with strict quality inspection.
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#C8A96A]" />
              <p className="text-gray-700">
                Faster delivery through in-house manufacturing.
              </p>
            </div>

          </div>

          {/* Quote */}

          <div className="mt-14 border-l-2 border-[#C8A96A] pl-6">

            <p className="font-display text-xl md:text-2xl font-light italic leading-relaxed text-[#111]">
              "Designed with creativity.
              <br />
              Manufactured with precision.
              <br />
              Installed to perfection."
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
