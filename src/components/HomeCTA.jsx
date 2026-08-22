import { motion } from "framer-motion";
import ctaImage from "../assets-optimized/images/hero.webp";

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

export default function HomeCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background */}

      <img loading="lazy" decoding="async"
        src={ctaImage}
        alt="Luxury Interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96A]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.45em] text-[#C8A96A]">
            LET'S CREATE SOMETHING EXCEPTIONAL
          </span>

          <h2 className="mt-8 font-display text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
            Transform Your
            <br />
            Dream Space Into
            <br />
            Reality.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            Whether it's a modern home, luxury villa, apartment,
            or commercial workspace, our experts are ready to
            design interiors that perfectly match your lifestyle
            with premium craftsmanship and timeless elegance.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <motion.a
              href="/contact"
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="rounded-full bg-[#C8A96A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-[#D7B878]"
            >
              Book Free Consultation
            </motion.a>

            <motion.a
              href="/projects"
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="rounded-full border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-[#C8A96A] hover:text-[#C8A96A]"
            >
              View Our Projects
            </motion.a>

          </div>

          {/* Stats */}

          <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-12 md:grid-cols-4">

            {[
              ["500+", "Projects"],
              ["12+", "Years Experience"],
              ["100%", "In-House Production"],
              ["Lifetime", "Support"],
            ].map(([value, label]) => (
              <div key={label}>
                <h3 className="font-display text-4xl text-[#C8A96A]">
                  {value}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
                  {label}
                </p>
              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}


