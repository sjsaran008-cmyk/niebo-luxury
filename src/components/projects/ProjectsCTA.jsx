import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/hero.webp";

export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96A]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C8A96A]"
        >
          Start Your Dream Project
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-4xl font-light leading-tight text-white md:text-6xl"
        >
          Let's Design A Space
          <br />
          You'll Love For Years.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-zinc-300"
        >
          Whether you're building a new home or renovating your existing
          space, our design experts are ready to create interiors tailored to
          your lifestyle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
        >
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
    className="inline-flex items-center justify-center rounded-full bg-[#C8A96A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-[#D7B878]"
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
    className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-[#C8A96A] hover:text-[#C8A96A]"
  >
    View Our Projects
  </motion.a>

</div>
        </motion.div>
      </div>
    </section>
  );
}