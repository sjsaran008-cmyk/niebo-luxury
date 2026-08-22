import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Truck,
  Hammer,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Project Planning",
    description:
      "Every installation begins with detailed planning, site verification, and careful scheduling to ensure a smooth execution.",
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    description:
      "Manufactured components are securely packed, transported, and delivered with complete care to your location.",
  },
  {
    icon: Hammer,
    title: "Professional Installation",
    description:
      "Our experienced installation team ensures precise fitting, flawless alignment, and a clean finish with attention to every detail.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Support",
    description:
      "Even after project completion, our dedicated support team is available to provide warranty assistance and long-term service whenever required.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
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

export default function InstallationProcess() {
  return (
    <section
      id="installation"
      className="relative overflow-hidden bg-[#0B0B0B] py-20 md:py-24 lg:py-32"
    >
      {/* Gold Glow */}

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            INSTALLATION PROCESS
          </span>

          <h2 className="mt-6 font-display text-4xl font-light leading-tight text-white md:text-5xl">
            From Installation
            <br />
            To Lifetime Support.
          </h2>

          <p className="mt-8 text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
            Every project is completed with precision,
            professionalism, and dependable after-sales
            support to ensure lasting satisfaction.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 transition-all duration-500 hover:border-[#C8A96A]/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-[#C8A96A]/10 transition-all duration-300 group-hover:bg-[#C8A96A]">

                  <Icon
                    size={28}
                    className="text-[#C8A96A] group-hover:text-black"
                  />

                </div>

                <h3 className="mt-8 text-xl md:text-2xlfont-medium text-white">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {step.description}
                </p>

                <div className="mt-8 h-px w-16 bg-[#C8A96A]/40 transition-all duration-300 group-hover:w-24 group-hover:bg-[#C8A96A]" />

              </motion.div>
            );
          })}
        </motion.div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-4xl border-t border-white/10 pt-12 text-center"
        >
          <p className="font-display text-2xl font-light italic leading-relaxed text-white md:text-4xl">
            "Our commitment doesn't end
            <br />
            when the installation is complete.
            <br />
            It continues for years to come."
          </p>
        </motion.div>

      </div>
    </section>
  );
}


