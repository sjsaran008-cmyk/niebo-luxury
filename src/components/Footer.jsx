import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets-optimized/images/logo.webp";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/niebo.interiors/",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/people/Niebo-Interiors/61581901694030/?rdid=JsVTThkHR8FKpbLW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CyJtLmakX%2F",
    label: "Facebook",
  },
  {
    icon: BsYoutube,
    href: "https://www.youtube.com/@NIEBOINTERIORS",
    label: "YouTube",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] text-white">

      {/* Luxury Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A96A]/5 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C8A96A]/5 blur-[150px]" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/[0.02] blur-[160px]" />

      </div>

      <div className="relative">

        {/* Gold Divider */}

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent" />

      

        {/* Footer Grid Starts Here */}
                {/* Main Footer */}

        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

          <div className="grid gap-14 border-t border-white/10 pt-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* Brand */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <img loading="lazy" decoding="async"
                  src={logo}
                  alt="Niebo Interiors"
                className="w-44"
              />

              <div className="mt-9 h-px w-24 bg-[#C8A96A]" />

              <p className="mt-8 max-w-md leading-8 text-zinc-400">
                Premium residential and commercial interiors
                designed with timeless elegance, factory precision,
                and world-class craftsmanship.
              </p>

            </motion.div>

            {/* Quick Links */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <h3 className="mb-8 text-sm uppercase tracking-[0.3em] text-white">
                Quick Links
              </h3>

              <ul className="space-y-5">

                {quickLinks.map((link) => (

                  <li key={link.name}>

                    <a
                      href={link.href}
                      className="text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-[#C8A96A]"
                    >
                      {link.name}
                    </a>

                  </li>

                ))}

              </ul>

            </motion.div>

            {/* Contact */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <h3 className="mb-8 text-sm uppercase tracking-[0.3em] text-white">
                Contact
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">

                  <Phone
                    size={18}
                    className="mt-1 text-[#C8A96A]"
                  />

                  <span className="leading-7 text-zinc-400">
                    +91 83007 66241
                  </span>

                </div>

                <div className="flex items-start gap-4">

                  <Mail
                    size={18}
                    className="mt-1 text-[#C8A96A]"
                  />

                  <span className="leading-7 text-zinc-400">
                    niebo.interiors@gmail.com
                  </span>

                </div>

                <div className="flex items-start gap-4">

                  <MapPin
                    size={18}
                    className="mt-1 text-[#C8A96A]"
                  />

                  <span className="leading-7 text-zinc-400">
                    Nanjaiuthukuli, Erode,
                    <br />
                    Tamilnadu-638104
                  </span>

                </div>

              </div>

            </motion.div>

            {/* Social */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <h3 className="mb-8 text-sm uppercase tracking-[0.3em] text-white">
                Follow Us
              </h3>

              <div className="flex gap-4">

                {socialLinks.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A]/10 hover:text-[#C8A96A]"
                    >

                      <Icon size={18} />

                    </motion.a>

                  );

                })}

              </div>

            </motion.div>

          </div>
        </div>

        {/* Bottom Bar Starts Here */}
                {/* Bottom Bar */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">

            <p className="text-sm tracking-wide text-zinc-500">
              © {new Date().getFullYear()}{" "}
              <span className="text-white">
                Niebo Interiors
              </span>
              . All Rights Reserved.
            </p>

            <div className="hidden h-px w-24 bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent md:block" />

            <p className="text-sm tracking-wide text-zinc-500">
              Crafted with
              <span className="mx-2 text-[#C8A96A]">Precision</span>
              & Luxury.
            </p>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}


