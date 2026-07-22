"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

type ComparisonItem = {
  category: string;
  niebo: string;
  traditional: string;
};

const comparisonData: ComparisonItem[] = [
  {
    category: "Design Excellence",
    niebo:
      "Free 3D visualization with personalized interior concepts tailored to your lifestyle.",
    traditional:
      "Basic layouts with limited visualization and design flexibility.",
  },
  {
    category: "Manufacturing",
    niebo:
      "Manufactured in our own factory using CNC precision technology.",
    traditional:
      "Mostly handcrafted on-site with inconsistent finishing quality.",
  },
  {
    category: "Materials",
    niebo:
      "Premium plywood, laminates and branded materials for long-lasting durability.",
    traditional:
      "Material quality depends on availability and project budget.",
  },
  {
    category: "Hardware",
    niebo:
      "International premium hardware brands like Hafele & Hettich.",
    traditional:
      "Standard hardware with limited warranty and finish options.",
  },
  {
    category: "Quality Control",
    niebo:
      "Multiple quality inspections from production to installation.",
    traditional:
      "Quality depends on individual workmanship.",
  },
  {
    category: "Installation",
    niebo:
      "Dedicated installation team ensuring clean and timely execution.",
    traditional:
      "Handled individually with inconsistent timelines.",
  },
  {
    category: "Warranty",
    niebo:
      "Lifetime warranty with dedicated after-sales support.",
    traditional:
      "Limited or no warranty after project completion.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#FAF8F4] py-28 lg:py-36"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-black/5 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <motion.span
            variants={item}
            className="text-xs uppercase tracking-[0.4em] text-[#C8A96A]"
          >
            WHY CHOOSE NIEBO
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-6 font-display text-5xl font-light leading-tight text-[#181818] lg:text-6xl"
          >
            The Difference
            <br />
            You Can Feel.
          </motion.h2>

          <motion.div
            variants={item}
            className="mx-auto mt-8 h-[2px] w-24 rounded-full bg-[#C8A96A]"
          />

          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-600"
          >
            Every project at Niebo Interiors is thoughtfully designed,
            precision manufactured, and professionally installed to deliver
            timeless interiors with exceptional craftsmanship.
          </motion.p>
        </motion.div>

        {/* Comparison Table Starts Here */}
                <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="overflow-hidden rounded-[32px] border border-[#E8E4DC] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
        >
          {/* Table Header */}

          <div className="hidden md:grid grid-cols-3 bg-[#1A1A1A]">

            <div className="border-r border-white/10 p-7 text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Category
              </span>
            </div>

            <div className="border-r border-white/10 bg-[#C8A96A] p-7 text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Niebo Interiors
              </span>
            </div>

            <div className="p-7 text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Traditional Carpenter
              </span>
            </div>

          </div>

          {/* Table Rows */}

          {comparisonData.map((row, index) => (

            <motion.div
              key={row.category}
              variants={item}
              whileHover={{ backgroundColor: "#FAF8F4" }}
              transition={{ duration: 0.25 }}
              className={`grid grid-cols-1 md:grid-cols-3 ${
                index !== comparisonData.length - 1
                  ? "border-b border-[#ECECEC]"
                  : ""
              }`}
            >

              {/* Category */}

              <div className="flex items-center border-b border-[#ECECEC] p-7 md:border-b-0 md:border-r">

                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {row.category}
                </h3>

              </div>

              {/* Niebo */}

              <div className="flex items-start gap-4 border-b border-[#ECECEC] p-7 md:border-b-0 md:border-r">

                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-[#C8A96A]"
                />

                <p className="leading-8 text-gray-700">
                  {row.niebo}
                </p>

              </div>

              {/* Traditional */}

              <div className="flex items-start gap-4 p-7">

                <XCircle
                  size={22}
                  className="mt-1 shrink-0 text-red-400"
                />

                <p className="leading-8 text-gray-600">
                  {row.traditional}
                </p>

              </div>

            </motion.div>

          ))}
        </motion.div>
                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >
          <div className="rounded-[32px] border border-[#E8E4DC] bg-white px-8 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:px-16">

            <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
              PREMIUM INTERIORS
            </span>

            <h3 className="mt-5 font-display text-4xl font-light leading-tight text-[#181818] lg:text-5xl">
              Experience the
              <br />
              Niebo Difference
            </h3>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-600">
              From thoughtful planning and premium materials to precision
              manufacturing and flawless installation, every detail is
              carefully crafted to create interiors that last for generations.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full bg-[#C8A96A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition-colors duration-300 hover:bg-[#B8944F]"
              >
                Book Free Consultation
              </motion.a>

              <motion.a
                href="/projects"
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full border border-[#C8A96A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A96A] transition-colors duration-300 hover:bg-[#C8A96A] hover:text-white"
              >
                View Our Projects
              </motion.a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}