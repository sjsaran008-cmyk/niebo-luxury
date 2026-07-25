import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import contactImage from "../../assets/images/contact/contact-hero.webp";

export default function ContactSection() {
  return (
    <section
      id="contact-form"
      className="bg-[#FAFAFA] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* ========================= */}
          {/* LEFT - CONTACT FORM */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm lg:p-10"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl font-light leading-tight text-black">
              Book a Free
              <br />
              Consultation
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-600">
              Tell us about your dream home and our designers will
              connect with you to create a personalized interior
              solution.
            </p>

            {/* Form */}

            <form className="mt-10 space-y-6">
              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-14 w-full rounded-2xl border border-neutral-200 px-5 outline-none transition-all duration-300 focus:border-[#C8A96A]"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-2xl border border-neutral-200 px-5 outline-none transition-all duration-300 focus:border-[#C8A96A]"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="h-14 w-full rounded-2xl border border-neutral-200 px-5 outline-none transition-all duration-300 focus:border-[#C8A96A]"
                />
              </div>

              {/* Project Type */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Project Type
                </label>

                <select className="h-14 w-full rounded-2xl border border-neutral-200 px-5 outline-none transition-all duration-300 focus:border-[#C8A96A]">
                  <option>Select Project</option>
                  <option>Modular Kitchen</option>
                  <option>Wardrobe</option>
                  <option>TV Unit</option>
                  <option>Pooja Unit</option>
                  <option>Complete Home Interior</option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-2xl border border-neutral-200 p-5 outline-none transition-all duration-300 focus:border-[#C8A96A]"
                />
              </div>

              {/* Button */}

              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#C8A96A] px-8 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#D7B77A]"
              >
                Schedule Consultation
              </button>
            </form>
          </motion.div>

          {/* ========================= */}
          {/* RIGHT SIDE STARTS HERE */}
          {/* Part 2-la continue pannuvom */}
                    {/* ========================= */}
          {/* RIGHT CONTENT */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
              Get In Touch
            </span>

            <h2 className="mt-4 text-4xl font-light leading-tight text-black lg:text-5xl">
              Connect With
              <br />
              Our Design Team
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              Whether you're planning a luxury modular kitchen,
              wardrobe, TV unit, or a complete home interior,
              our experienced designers are here to guide you
              through every step of your journey.
            </p>

            {/* Image */}

            <div className="mt-10 overflow-hidden rounded-[28px]">
              <img
                src={contactImage}
                alt="Luxury Interior"
                className="h-[320px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">
              {/* Phone */}

              <div className="flex items-start gap-5 rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#C8A96A]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96A]/10">
                  <Phone
                    size={22}
                    className="text-[#C8A96A]"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Call Us
                  </p>

                  <h4 className="mt-2 text-lg font-medium text-black">
                    +91 82208 61165
                  </h4>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-5 rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#C8A96A]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96A]/10">
                  <Mail
                    size={22}
                    className="text-[#C8A96A]"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Email
                  </p>

                  <h4 className="mt-2 text-lg font-medium text-black">
                    info@niebointeriors.com
                  </h4>
                </div>
              </div>

              {/* Address */}

              <div className="flex items-start gap-5 rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#C8A96A]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96A]/10">
                  <MapPin
                    size={22}
                    className="text-[#C8A96A]"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Experience Centre
                  </p>

                  <h4 className="mt-2 text-lg font-medium text-black">
                    Nanjaiuthukuli, Erode,
                    <br />
                    Tamil Nadu
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}