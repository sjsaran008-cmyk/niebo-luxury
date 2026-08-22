import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Jayaprakash",
    location: "Coimbatore",
    review:
      "Working with Niebo Interiors was more than just hiring an interior company. It felt like working with a team that genuinely cared about delivering something meaningful. Their professionalism, creativity, and commitment were visible in every stage of the project. We are extremely happy with the final result and would gladly recommend them to others.",
  },
  {
    name: "Nandhini priya",
    location: "Erode",
    review:
      "The best part of working with Niebo Interiors was how easy they made everything feel. Home interiors can usually become stressful, but their team handled each step with calmness and professionalism. They answered our questions without hesitation and kept us informed throughout the project. That level of communication made us trust them even more.",
  },
  {
    name: "Vignesh vickey",
    location: "Salem",
    review:
      "Our kitchen was one of the biggest concerns for us, and Niebo Interiors did a fantastic job. They created a design that looks clean while also giving us more storage than before. The workflow in the kitchen now feels much easier. It has made everyday cooking more enjoyable.",
  },
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Happy Clients" },
  { value: "100%", label: "Quality Commitment" },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-20 md:py-24 lg:py-32">
      {/* Gold Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            CLIENT EXPERIENCES
          </span>

          <h2 className="mt-5 text-3xl font-light text-white md:text-5xl">
            Trusted By Families.
            <br />
            Crafted With Excellence.
          </h2>
        </motion.div>

        {/* Testimonials */}

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md"
            >
              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#C8A96A] text-[#C8A96A]"
                  />
                ))}
              </div>

              <p className="text-sm md:text-base leading-7 md:leading-8 text-zinc-300">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-lg font-medium text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-zinc-500">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-light text-[#C8A96A]">
                {item.value}
              </h3>

              <p className="mt-3 uppercase tracking-[0.2em] text-sm text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
        {/* More Testimonials Button */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-16 flex justify-center"
>
  <a
  href="https://www.google.com/maps/place/HAFELE+STUDIO+PARTNER+-+NIEBO+INTERIORS/@11.260758,77.7672245,17z/data=!4m8!3m7!1s0x3ba97b00207ef3d7:0x2bf8548495de381f!8m2!3d11.260758!4d77.7720954!9m1!1b1!16s%2Fg%2F11wnvhslfm?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 rounded-full border border-[#C8A96A] px-6 py-3 md:px-8 md:py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#C8A96A] transition-all duration-300 hover:bg-[#C8A96A] hover:text-black"
>
  Explore Testimonials
</a>
</motion.div>

      </div>
    </section>
  );
}

