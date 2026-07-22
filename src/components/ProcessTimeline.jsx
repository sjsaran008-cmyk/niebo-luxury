"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Ruler,
  PenTool,
  Factory,
  Wrench,
  Home,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Consultation",
    subtitle: "Understanding Your Vision",
    icon: ClipboardCheck,
    description:
      "We begin with an in-depth discussion to understand your lifestyle, preferences, space, and expectations before planning every detail.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    id: "02",
    title: "Site Measurement",
    subtitle: "Precision Planning",
    icon: Ruler,
    description:
      "Our experts visit your location to capture accurate dimensions and prepare the perfect execution plan.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
  },
  {
    id: "03",
    title: "3D Design",
    subtitle: "Visualize Before We Build",
    icon: PenTool,
    description:
      "Experience realistic 3D renders, material selections, and layout planning before production begins.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
  },
  {
    id: "04",
    title: "Factory Manufacturing",
    subtitle: "Precision Crafted",
    icon: Factory,
    description:
      "Every module is manufactured inside our own factory using CNC precision machinery and premium materials.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  },
  {
    id: "05",
    title: "Installation",
    subtitle: "Perfect Execution",
    icon: Wrench,
    description:
      "Our professional installation team ensures every detail is finished with accuracy and premium workmanship.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    id: "06",
    title: "Final Reveal",
    subtitle: "Luxury Delivered",
    icon: Home,
    description:
      "Walk into your beautifully finished home with a final quality inspection and complete project handover.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#080808] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-40 h-[420px] w-[420px] rounded-full bg-amber-500/5 blur-[150px]" />

        <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-white/5 blur-[160px]" />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-500/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-28 max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-5">
            <div className="h-px w-16 bg-amber-500/40" />

            <span className="text-xs uppercase tracking-[0.45em] text-amber-400">
              How We Works
            </span>

            <div className="h-px w-16 bg-amber-500/40" />
          </div>

          <h2 className="font-serif text-5xl font-light leading-tight md:text-6xl">
            Your Dream Home
            <br />

            <span className="bg-gradient-to-r from-[#C7A15C] via-[#E4C17D] to-[#C7A15C] bg-clip-text italic text-transparent">
              in 7 Simple Steps
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Every exceptional interior begins with a thoughtful process.
            From concept to completion, we craft every space with precision,
            transparency, and uncompromising attention to detail.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C7A15C]/40 to-transparent lg:block" />

          {/* Timeline Items Start Here */}
                    {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.id}
                variants={fadeUp}
                className={`relative mb-32 flex items-center ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col gap-12 lg:gap-16`}
              >
                {/* ========================= */}
                {/* Timeline Dot */}
                {/* ========================= */}

                <div className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#C7A15C]/40 bg-[#111111]">

                    <div className="absolute h-10 w-10 rounded-full bg-[#C7A15C]/10 blur-xl" />

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C7A15C]/40 bg-black">
                      <Icon className="h-4 w-4 text-[#D7B36A]" />
                    </div>

                  </div>
                </div>

                {/* ========================= */}
                {/* Content Card */}
                {/* ========================= */}

                <motion.div
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: .35,
                    },
                  }}
                  className="group relative w-full lg:w-[44%]"
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] p-10 transition-all duration-500 hover:border-[#C7A15C]/30">

                    {/* Background Glow */}

                    <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#C7A15C]/10 blur-3xl" />
                    </div>

                    {/* Step Number */}

                    <span className="font-serif text-6xl text-[#C7A15C]/25">
                      {step.id}
                    </span>

                    <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#D7B36A]">
                      {step.subtitle}
                    </p>

                    <h3 className="mt-4 font-serif text-4xl leading-tight">
                      {step.title}
                    </h3>

                    <p className="mt-6 leading-8 text-zinc-400">
                      {step.description}
                    </p>

                    <button className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#D7B36A] transition group-hover:gap-5">

                      Learn More

                      <ArrowRight className="h-4 w-4" />

                    </button>

                  </div>
                </motion.div>

                {/* ========================= */}
                {/* Image Block */}
                {/* ========================= */}

                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: .4,
                  }}
                  className="group relative w-full lg:w-[44%]"
                >
                  <div className="relative overflow-hidden rounded-[30px]">

                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Gold Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-br from-[#C7A15C]/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                    {/* Floating Badge */}

                    <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">

                      <p className="text-xs uppercase tracking-[0.35em] text-[#D7B36A]">
                        Step {step.id}
                      </p>

                    </div>

                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Part 3 Starts Below */}
                    {/* ========================================= */}
          {/* Luxury Bottom Connector */}
          {/* ========================================= */}

          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
            <div className="relative h-full w-px">

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C7A15C]/30 to-transparent" />

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0 w-px bg-gradient-to-b from-[#DDB96D] via-[#F4D78D] to-[#C7A15C]"
              />

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}