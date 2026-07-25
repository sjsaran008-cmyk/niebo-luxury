import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import logo from "../assets/images/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">

        <nav
          className={`mt-3 md:mt-6 flex h-16 md:h-[72px] items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-black/70 shadow-2xl backdrop-blur-2xl"
              : "border-white/10 bg-black/25 backdrop-blur-xl"
          }`}
        >

          {/* LOGO */}

          <div className="flex items-center pl-4 md:pl-8">

  <img
    src={logo}
    alt="Niebo Interiors"
    className="h-10 md:h-16 w-auto object-contain"
  />

</div>
          {/* DESKTOP MENU */}

          <ul className="hidden items-center gap-12 lg:flex">
  {navLinks.map((item) => (
    <li key={item.name}>
      <Link
        to={item.path}
        className="relative text-[15px] font-medium text-white transition duration-300 hover:text-[#D7AE62]"
      >
        {item.name}

        <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D7AE62] transition-all duration-300 hover:w-full"></span>
      </Link>
    </li>
  ))}
</ul>

          {/* RIGHT */}

          <div className="flex items-center gap-5 pr-4 md:pr-8">

            <Link
  to="/contact"
  className="hidden rounded-full bg-[#D7AE62] px-8 py-4 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#E7C172] lg:block"
>
  Get Free Consultation
</Link>
            <button
              className="mr-3 text-white lg:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <HiXMark size={30} />
              ) : (
                <HiBars3BottomRight size={30} />
              )}
            </button>

          </div>

        </nav>

        {/* MOBILE MENU */}

       <AnimatePresence>
  {mobileMenu && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="mt-3 rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-2xl lg:hidden"
    >
      {navLinks.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setMobileMenu(false)}
          className="block border-b border-white/10 py-4 text-base font-medium text-white transition hover:text-[#D7AE62] last:border-b-0"
        >
          {item.name}
        </Link>
      ))}

      <Link
  to="/contact"
  onClick={() => {
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="mt-5 block w-full rounded-full bg-[#D7AE62] py-3 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#E7C172]"
>
  Get Free Consultation
</Link>
    </motion.div>
  )}
</AnimatePresence>

      </div>

    </header>
  );
}