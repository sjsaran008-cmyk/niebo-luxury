import { motion } from "framer-motion";
import materialsImage from "../../assets/about/Materials.webp";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function MaterialsSection() {
  return (
    <section
      id="materials"
      className="bg-[#F8F8F6] py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Content */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            PREMIUM MATERIALS
          </span>

          <h2 className="mt-6 font-display text-4xl font-light leading-tight text-[#111] md:text-5xl">
            Premium Materials &
            <br />
            Precision Hardware.
          </h2>

          <p className="mt-8 text-base md:text-lg leading-8 md:leading-9 text-gray-600">
           Every interior begins with the right materials. We carefully select durable boards, premium finishes, and reliable hardware to create spaces that look refined, perform effortlessly, and stand the test of time.
          </p>

          {/* Features */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-[#C8A96A]/20 bg-white p-5 md:p-6">
              <h3 className="font-semibold text-[#111]">
                Premium Boards
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Moisture-resistant, durable, and precision-cut
                boards for lasting performance.
              </p>
            </div>

            <div className="rounded-2xl border border-[#C8A96A]/20 bg-white p-5 md:p-6">
              <h3 className="font-semibold text-[#111]">
                Branded Hardware
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Smooth hinges, channels, and fittings from
                trusted premium brands.
              </p>
            </div>

          </div>

          {/* Brand Names */}

          <div className="mt-12">

            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">
              Trusted Hardware Partners
            </p>

            <div className="flex flex-wrap gap-4">

              {[
                "Häfele",
                "Hettich",
                "Ebco",
                "Greenply",
                "CenturyPly",
              ].map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-[#C8A96A]/30 px-4 py-2 text-xs text-gray-700 md:text-sm"
                >
                  {brand}
                </span>
              ))}

            </div>

          </div>

        </motion.div>

        {/* Image */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >

          <div className="hidden md:block absolute -left-6 -bottom-6 h-full w-full rounded-[32px] border border-[#C8A96A]/20" />

          <img
  src={materialsImage}
  alt="Premium interior materials and branded hardware at Niebo Interiors"
  loading="lazy"
  decoding="async"
  className="relative h-[500px] md:h-[650px] w-full rounded-[32px] object-cover shadow-2xl"
/>

          <div className="absolute right-8 top-8 rounded-2xl bg-black/85 px-4 py-3 md:px-6 md:py-4 backdrop-blur-md">

            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
              QUALITY FIRST
            </p>

            <h3 className="mt-2 font-display text-2xl text-white">
              Built To Last
            </h3>

          </div>

        </motion.div>

      </div>
    </section>
  );
}


