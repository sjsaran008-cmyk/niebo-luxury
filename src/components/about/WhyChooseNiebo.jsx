import { motion } from "framer-motion";
import {
  Layers3,
  Compass,
  Factory,
  Gem,
  Hammer,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "End-to-End Interior Solutions",
    description:
      "From concept planning and space design to manufacturing and installation, every stage is managed under one roof for a seamless experience.",
  },
  {
    icon: Compass,
    title: "Personalized Design Consultation",
    description:
      "Our designers understand your lifestyle, preferences, and budget to create interiors that truly reflect your vision.",
  },
  {
    icon: Factory,
    title: "Precision Factory Finishing",
    description:
      "Every component is manufactured with advanced machinery to ensure superior quality, consistency, and flawless finishing.",
  },
  {
    icon: Gem,
    title: "Premium Materials & Branded Hardware",
    description:
      "We use carefully selected materials and trusted hardware brands to ensure durability, elegance, and long-term performance.",
  },
  {
    icon: Hammer,
    title: "Professional Installation",
    description:
      "Our experienced installation team delivers every project with precision, cleanliness, and attention to every detail.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Warranty & After-Sales Support",
    description:
      "Even after project completion, we continue to support you with dependable warranty coverage and responsive service.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function WhyChooseNiebo() {
  return (
    <section
      id="why-niebo"
      className="bg-[#0B0B0B] py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#C8A96A]">
            WHY CHOOSE NIEBO
          </span>

          <h2 className="mt-6 font-display text-4xl font-light leading-tight text-white md:text-5xl">
            Every Detail.
            <br />
            Every Decision.
            <br />
            Crafted With Purpose.
          </h2>

          <p className="mt-8 text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
            Our commitment to quality, innovation, and precision
            ensures that every interior we create reflects timeless
            elegance and lasting value.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
  key={index}
  variants={item}
  whileHover={{
    y: -5,
  }}
  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[#C8A96A]/40 hover:bg-white/[0.05] md:p-8"
>
  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C8A96A]/10 transition-all duration-300 group-hover:bg-[#C8A96A] md:h-16 md:w-16">
    <Icon
      size={28}
      className="text-[#C8A96A] group-hover:text-black"
    />
  </div>

  <h3 className="mt-8 text-xl font-medium leading-snug text-white md:text-2xl">
    {feature.title}
  </h3>

  <p className="mt-5 flex-1 leading-7 text-zinc-400 md:leading-8">
    {feature.description}
  </p>

  <div className="mt-8 h-px w-16 shrink-0 bg-[#C8A96A]/40 transition-all duration-300 group-hover:w-24 group-hover:bg-[#C8A96A]" />
</motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
export default WhyChooseNiebo;