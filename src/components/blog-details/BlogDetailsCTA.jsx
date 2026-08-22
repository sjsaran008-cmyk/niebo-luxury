import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogDetailsCTA() {
  return (
    <section className="bg-[#F7F5F2] pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[36px] bg-[#111111] px-8 py-16 text-center text-white md:px-16 md:py-20"
        >
          {/* Tag */}
          <span className="inline-flex rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            Let's Build Your Dream Home
          </span>

          {/* Heading */}
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Ready to Transform
            <span className="italic text-[#C8A96A]">
              {" "}
              Your Living Space?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Whether you're planning a modular kitchen, wardrobe, TV unit,
            pooja room, or complete home interiors, our design experts are
            here to bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-[#C8A96A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Book Free Consultation
            </Link>

            <Link
              to="/portfolio"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
            >
              View Our Projects
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-light text-[#C8A96A]">500+</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-400">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-[#C8A96A]">10+</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-400">
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-[#C8A96A]">100%</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-400">
                Premium Craftsmanship
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


