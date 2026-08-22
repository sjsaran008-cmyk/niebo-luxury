import { motion } from "framer-motion";
import ctaImage from "../../assets-optimized/images/hero.webp";
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

export default function AboutCTA() {
  return (
    <section
      id="about-cta"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}

      <img
        src={ctaImage}
        alt="Luxury Interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96A]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <span className="text-xs uppercase tracking-[0.4em] text-[#C8A96A]">
            LET'S BUILD TOGETHER
          </span>

          <h2 className="mt-8 font-display text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
            Ready To Transform
            <br />
            Your Dream Space?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            Whether you're planning a new home, renovating an
            existing space, or designing a commercial project,
            our team is ready to turn your vision into reality
            with precision, creativity, and unmatched craftsmanship.
          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                y: -4,
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
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="rounded-full border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-[#C8A96A] hover:text-[#C8A96A]"
            >
              View Our Projects
            </motion.a>

          </div>

          {/* Bottom Divider */}

          <div className="mx-auto mt-20 h-px w-32 bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent" />

        </motion.div>

      </div>
    </section>
  );
}


