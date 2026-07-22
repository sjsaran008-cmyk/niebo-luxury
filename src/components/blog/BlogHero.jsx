import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/blog/hero.webp";
import thumbImage from "../../assets/images/blog/blog-1.webp";

export default function BlogHero() {
  return (
    <section className="bg-[#F7F5F2] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="relative overflow-hidden rounded-[36px] bg-black"
        >
          {/* Background */}
          <img
            src={heroImage}
            alt="Luxury Interior"
            className="h-[780px] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">

            <div className="max-w-3xl px-12 lg:px-20">

              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C8A96A] backdrop-blur">
                NIEBO INTERIORS JOURNAL
              </span>

              <h1 className="mt-8 text-6xl font-light leading-[1.05] text-white lg:text-8xl">
                Design
                <br />

                <span className="italic text-[#C8A96A]">
                  Beyond
                </span>

                <br />

                Imagination
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
                Discover timeless interiors, luxury kitchens,
                elegant wardrobes and inspiring design stories
                crafted by our expert designers.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <a
                  href="#blogs"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:scale-105"
                >
                  Explore Journal

                  <ArrowRight size={18} />
                </a>

                <button
  type="submit"
  className="inline-flex items-center justify-center rounded-full bg-[#0B0B0B] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#C8A96A] hover:text-black"
>
  Book Consultation
</button>

              </div>

            </div>

          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .5 }}
            className="absolute bottom-10 left-10 hidden w-[360px] rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:block"
          >

            <img
              src={thumbImage}
              alt=""
              className="h-48 w-full rounded-2xl object-cover"
            />

            <div className="mt-5 flex items-center justify-between">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                  Featured Story
                </p>

                <h3 className="mt-2 text-xl font-light text-white">
                  Luxury Modular
                  Kitchen Ideas
                </h3>
              </div>

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Play size={18} fill="currentColor" />
              </button>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}