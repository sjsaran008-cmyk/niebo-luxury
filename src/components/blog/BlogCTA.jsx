import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCTA() {
  return (
    <section className="bg-[#F7F5F2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full min-w-0 overflow-hidden rounded-[32px] bg-black px-5 py-14 sm:px-8 sm:py-20 lg:rounded-[40px] lg:px-20"
        >
          {/* Background Glow */}
          <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-[#C8A96A]/20 blur-[120px]" />

          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/5 blur-[150px]" />

          <div className="relative z-10 grid w-full min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
                DESIGN YOUR DREAM HOME
              </span>

              <h2 className="mt-8 text-4xl font-light leading-tight text-white md:text-6xl">
                Ready To Create
                <br />
                A Home That
                <span className="text-[#C8A96A]">
                  {" "}Reflects You?
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
                Every luxury home begins with a conversation. Let our
                designers craft elegant interiors tailored to your
                lifestyle, taste and vision.
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
  <Link
    to="/contact"
    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C8A96A] px-6 py-4 font-medium text-black transition-all duration-300 hover:scale-105 sm:w-auto sm:px-8"
  >
    Book Free Consultation
    <ArrowRight size={18} />
  </Link>

  <a
    href="tel:+918220861165"
    className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-white transition-all duration-300 hover:border-[#C8A96A] sm:w-auto sm:px-8"
  >
    <PhoneCall size={18} />
    Call Now
  </a>
</div>
            </div>

            {/* Right */}
            <div className="grid w-full min-w-0 grid-cols-2 gap-3 sm:gap-6">
              {[
                {
                  value: "500+",
                  label: "Luxury Projects",
                },
                {
                  value: "12+",
                  label: "Years Experience",
                },
                {
                  value: "4.9★",
                  label: "Client Rating",
                },
                {
                  value: "100%",
                  label: "Custom Design",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 overflow-hidden rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-[28px] sm:p-8"
                >
                  <h3 className="whitespace-nowrap text-2xl font-light text-[#C8A96A] sm:text-4xl">
                    {item.value}
                  </h3>

                  <p className="mt-3 break-words text-[10px] uppercase tracking-[0.18em] leading-4 text-neutral-400 sm:text-sm sm:tracking-[0.25em] sm:leading-normal">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="relative z-10 mt-20 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <p className="w-full min-w-0 max-w-2xl break-words text-sm leading-7 text-neutral-500 sm:text-base">
                From modular kitchens and wardrobes to complete home
                interiors, we transform ideas into timeless living
                spaces with premium craftsmanship.
              </p>

              <span className="text-sm uppercase tracking-[0.35em] text-[#C8A96A]">
                NIEBO INTERIORS • LUXURY DESIGN STUDIO
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

