import { motion } from "framer-motion";
import ctaImage from "../assets/images/cta.webp";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
      className="relative overflow-hidden min-h-[620px] lg:min-h-[720px]"
    >
      {/* Background Image */}
      <img
        src={ctaImage}
        alt="Luxury Interior"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Very subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CTA Card */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1500px] items-end justify-end px-6 pb-8 sm:px-10 sm:pb-12 lg:min-h-[720px] lg:px-16 lg:pb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="
            w-full
            max-w-[430px]
            rounded-[24px]
            bg-[#11100f]/95
            p-8
            shadow-2xl
            backdrop-blur-md
            sm:p-10
            lg:max-w-[470px]
            lg:p-11
          "
        >
          {/* Small Label */}
          <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#C8A96A]">
            LET'S CREATE
          </span>

          {/* Heading */}
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.15] text-white sm:text-5xl">
            Something{" "}
            <span className="text-[#C8A96A]">Exceptional</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[380px] text-base leading-7 text-zinc-300">
            Have a project in mind? Get in touch with us and let's bring your
            vision to life.
          </p>

          {/* Button */}
          <motion.a
            href="/contact"
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#C8A96A]
              px-8
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-black
              transition-all
              duration-300
              hover:bg-[#D7B878]
            "
          >
            Get Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}