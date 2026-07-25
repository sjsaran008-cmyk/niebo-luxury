import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/contact/contact-hero.webp";

export default function ContactHero() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-[32px]">
      {/* Background Image */}
      <div className="relative min-h-[100svh] md:min-h-[700px]">
        <img
  src={heroImage}
  alt="Luxury Interior"
  fetchPriority="high"
  loading="eager"
  decoding="async"
  className="h-full w-full object-cover"
/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                <Link
                  to="/"
                  className="transition hover:text-[#C8A96A]"
                >
                  Home
                </Link>

                <span>/</span>

                <span className="text-[#C8A96A]">
                  Contact Us
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
                Let's Create
                <br />
                Your Dream Space
              </h1>

              {/* Gold Line */}
              <div className="mt-8 h-[2px] w-20 bg-[#C8A96A]" />

              {/* Description */}
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
                From luxury modular kitchens to complete home interiors,
                our expert designers are ready to transform your vision
                into a timeless living experience.
              </p>

              {/* CTA */}
              <Link
                to="#contact-form"
                className="mt-10 inline-flex items-center rounded-full bg-[#C8A96A] px-8 py-4 text-sm font-medium text-black transition duration-300 hover:scale-105 hover:bg-[#D7B77A]"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}