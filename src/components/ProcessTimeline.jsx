"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Ruler,
  PenTool,
  Palette,
  Factory,
  Wrench,
  Home,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    subtitle: "Understanding Your Vision",
    icon: ClipboardCheck,
    description:
      "Meet our design experts to discuss your lifestyle, space requirements, design preferences and budget before starting the project.",
    span: "col-span-12 lg:col-span-7",
    height: "min-h-[320px]",
  },
  {
    id: "02",
    title: "Site Measurement",
    subtitle: "Precision Planning",
    icon: Ruler,
    description:
      "Our experts visit your site to take accurate measurements and prepare the perfect execution plan.",
    span: "col-span-12 lg:col-span-5",
    height: "min-h-[320px]",
  },
  {
    id: "03",
    title: "Design & 3D Visualization",
    subtitle: "Experience Before Execution",
    icon: PenTool,
    description:
      "Receive detailed layouts, realistic 3D renders and material selections before production begins.",
    span: "col-span-12",
    height: "min-h-[260px]",
  },
  {
    id: "04",
    title: "Material Selection",
    subtitle: "Premium Finishes",
    icon: Palette,
    description:
      "Choose laminates, hardware, colours and finishes that perfectly complement your dream home.",
    span: "col-span-12 md:col-span-6 lg:col-span-4",
    height: "min-h-[280px]",
  },
  {
    id: "05",
    title: "Production",
    subtitle: "Factory Crafted",
    icon: Factory,
    description:
      "Your interiors are manufactured using precision machinery inside our own factory with strict quality control.",
    span: "col-span-12 md:col-span-6 lg:col-span-8",
    height: "min-h-[280px]",
  },
  {
    id: "06",
    title: "Execution & Installation",
    subtitle: "Perfect Delivery",
    icon: Wrench,
    description:
      "Our experienced installation team executes every detail with precision and premium workmanship.",
    span: "col-span-12 lg:col-span-8",
    height: "min-h-[300px]",
  },
  {
    id: "07",
    title: "Move In & Celebrate",
    subtitle: "Luxury Delivered",
    icon: Home,
    description:
      "Walk into your beautifully crafted home with complete satisfaction and lifetime support from Niebo Interiors.",
    span: "col-span-12 lg:col-span-4",
    height: "min-h-[300px]",
  },
];
export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#080808] py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-32 h-[420px] w-[420px] rounded-full bg-[#C7A15C]/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C7A15C]">

            HOW WE WORK

          </p>

          <h2 className="font-serif text-5xl font-light leading-tight md:text-6xl">

            Your Dream Home

          </h2>

          <h3 className="mt-4 bg-gradient-to-r from-[#C7A15C] via-[#E7C985] to-[#C7A15C] bg-clip-text text-4xl font-serif italic text-transparent md:text-5xl">

            in 7 Simple Steps

          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

            Every exceptional interior begins with a thoughtful process.
            From consultation to final handover, every step is executed
            with transparency, precision and premium craftsmanship.

          </p>

        </motion.div>

        {/* Apple Bento Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: .1,
          }}
          className="grid grid-cols-12 gap-6 lg:gap-8"
        >
{/* ===========================
      STEP 01
=========================== */}

{(() => {
  const Icon = processSteps[0].icon;

  return (
    <motion.div
      variants={fadeUp}
      className={`${processSteps[0].span}`}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] p-8 md:p-10 ${processSteps[0].height}`}
      >
        {/* Gold Glow */}

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C7A15C]/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        {/* Number */}

        <span className="absolute right-8 top-5 font-serif text-8xl text-white/5">
          {processSteps[0].id}
        </span>

        {/* Icon */}

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C7A15C]/30 bg-black">
          <Icon className="h-7 w-7 text-[#D7B36A]" />
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#D7B36A]">
          {processSteps[0].subtitle}
        </p>

        <h3 className="mt-4 font-serif text-4xl">
          {processSteps[0].title}
        </h3>

        <p className="mt-6 max-w-xl leading-8 text-zinc-400">
          {processSteps[0].description}
        </p>
      </motion.div>
    </motion.div>
  );
})()}

{/* ===========================
      STEP 02
=========================== */}

{(() => {
  const Icon = processSteps[1].icon;

  return (
    <motion.div
      variants={fadeUp}
      className={`${processSteps[1].span}`}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] p-8 ${processSteps[1].height}`}
      >
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C7A15C]/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        <span className="absolute right-6 top-5 font-serif text-7xl text-white/5">
          {processSteps[1].id}
        </span>

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#C7A15C]/30 bg-black">
          <Icon className="h-6 w-6 text-[#D7B36A]" />
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#D7B36A]">
          {processSteps[1].subtitle}
        </p>

        <h3 className="mt-3 font-serif text-3xl">
          {processSteps[1].title}
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          {processSteps[1].description}
        </p>
      </motion.div>
    </motion.div>
  );
})()}
{/* ===========================
      STEP 03
=========================== */}

{(() => {
  const Icon = processSteps[2].icon;

  return (
    <motion.div
      variants={fadeUp}
      className={`${processSteps[2].span}`}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#101010] p-10 lg:p-14 ${processSteps[2].height}`}
      >
        {/* Premium Glow */}

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C7A15C]/10 blur-[120px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

        {/* Watermark */}

        <span className="absolute right-10 top-8 font-serif text-[120px] leading-none text-white/5">
          {processSteps[2].id}
        </span>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Left */}

          <div className="max-w-2xl">

            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#C7A15C]/30 bg-black">

              <Icon className="h-9 w-9 text-[#D7B36A]" />

            </div>

            <p className="text-xs uppercase tracking-[0.45em] text-[#D7B36A]">

              {processSteps[2].subtitle}

            </p>

            <h3 className="mt-5 font-serif text-4xl md:text-5xl leading-tight">

              {processSteps[2].title}

            </h3>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">

              {processSteps[2].description}

            </p>

          </div>

          {/* Right */}

          <div className="flex items-center justify-center">

            <div className="flex h-44 w-44 items-center justify-center rounded-full border border-[#C7A15C]/20 bg-gradient-to-br from-[#C7A15C]/10 to-transparent">

              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C7A15C]/30 bg-black">

                <Icon className="h-14 w-14 text-[#D7B36A]" />

              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </motion.div>
  );
})()}
{/* ===========================
      STEP 04
=========================== */}

{(() => {
  const Icon = processSteps[3].icon;

  return (
    <motion.div
      variants={fadeUp}
      className={processSteps[3].span}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101010] p-8 ${processSteps[3].height}`}
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C7A15C]/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        <span className="absolute right-6 top-5 font-serif text-7xl text-white/5">
          {processSteps[3].id}
        </span>

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#C7A15C]/30 bg-black">
          <Icon className="h-6 w-6 text-[#D7B36A]" />
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#D7B36A]">
          {processSteps[3].subtitle}
        </p>

        <h3 className="mt-4 font-serif text-3xl leading-tight">
          {processSteps[3].title}
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          {processSteps[3].description}
        </p>
      </motion.div>
    </motion.div>
  );
})()}

{/* ===========================
      STEP 05
=========================== */}

{(() => {
  const Icon = processSteps[4].icon;

  return (
    <motion.div
      variants={fadeUp}
      className={processSteps[4].span}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] p-10 ${processSteps[4].height}`}
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C7A15C]/10 blur-[120px] opacity-0 transition duration-700 group-hover:opacity-100" />

        <span className="absolute right-8 top-6 font-serif text-8xl text-white/5">
          {processSteps[4].id}
        </span>

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C7A15C]/30 bg-black">
          <Icon className="h-8 w-8 text-[#D7B36A]" />
        </div>

        <p className="text-xs uppercase tracking-[0.4em] text-[#D7B36A]">
          {processSteps[4].subtitle}
        </p>

        <h3 className="mt-4 font-serif text-4xl">
          {processSteps[4].title}
        </h3>

        <p className="mt-6 max-w-xl leading-8 text-zinc-400">
          {processSteps[4].description}
        </p>
      </motion.div>
    </motion.div>
  );
})()}
{/* ===========================
      STEP 06
=========================== */}

{(() => {
  const Icon = processSteps[5].icon;

  return (
    <motion.div
      variants={fadeUp}
      className={processSteps[5].span}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#101010] p-10 lg:p-12 ${processSteps[5].height}`}
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C7A15C]/10 blur-[140px] opacity-0 transition duration-700 group-hover:opacity-100" />

        <span className="absolute right-8 top-6 font-serif text-8xl text-white/5">
          {processSteps[5].id}
        </span>

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C7A15C]/30 bg-black">
          <Icon className="h-8 w-8 text-[#D7B36A]" />
        </div>

        <p className="text-xs uppercase tracking-[0.4em] text-[#D7B36A]">
          {processSteps[5].subtitle}
        </p>

        <h3 className="mt-4 font-serif text-4xl md:text-5xl">
          {processSteps[5].title}
        </h3>

        <p className="mt-6 max-w-2xl text-lg leading-9 text-zinc-400">
          {processSteps[5].description}
        </p>
      </motion.div>
    </motion.div>
  );
})()}

{/* ===========================
      STEP 07
=========================== */}

{(() => {
  const Icon = processSteps[6].icon;

  return (
    <motion.div
      variants={fadeUp}
      className={processSteps[6].span}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[34px] border border-[#C7A15C]/20 bg-gradient-to-br from-[#101010] to-[#161616] p-10 ${processSteps[6].height}`}
      >
        <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-[#C7A15C]/15 blur-[120px] opacity-0 transition duration-700 group-hover:opacity-100" />

        <span className="absolute right-6 top-5 font-serif text-8xl text-white/5">
          {processSteps[6].id}
        </span>

        <div className="relative z-10">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C7A15C]/30 bg-black">
            <Icon className="h-8 w-8 text-[#D7B36A]" />
          </div>

          <p className="text-xs uppercase tracking-[0.4em] text-[#D7B36A]">
            {processSteps[6].subtitle}
          </p>

          <h3 className="mt-4 font-serif text-4xl">
            {processSteps[6].title}
          </h3>

          <p className="mt-6 leading-8 text-zinc-400">
            {processSteps[6].description}
          </p>
        </div>

        <div className="relative z-10 mt-10">
  <p className="text-xs uppercase tracking-[0.4em] text-[#D7B36A]">
    Dream Delivered
  </p>
</div>
      </motion.div>
    </motion.div>
  );
})()}
        </motion.div>
      </div>
    </section>
  );
}