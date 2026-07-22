import { FaHouzz } from "react-icons/fa";

import hafele from "../assets/brands/hafele.png";
import hettich from "../assets/brands/hettich.png";
import blum from "../assets/brands/blum.png";
import falmec from "../assets/brands/falmec.png";
import asko from "../assets/brands/asko.png";
import greenlam from "../assets/brands/greenlam.png";
import merino from "../assets/brands/merino.png";
import philips from "../assets/brands/philips.png";
import rehau from "../assets/brands/rehau.png";


const brands = [
  { name: "Hafele", logo: hafele },
  { name: "Hettich", logo: hettich },
  { name: "Blum", logo: blum },
  { name: "Falmec", logo: falmec },
  { name: "Asko", logo: asko },
  { name: "Greenlam", logo: greenlam },
  { name: "Merino", logo: merino },
  { name: "Philips", logo: philips },
  { name: "Rehau", logo: rehau },
];

export default function TrustedBrands() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] py-28">

      {/* Decorative Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A45C]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Divider */}

        <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-[#C8A45C] to-transparent" />

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#B48A3A]">
            TRUSTED BRANDS
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#161616]">
            Global Partners.
          </h2>

          <h3 className="mt-2 font-serif text-5xl italic text-[#B48A3A]">
            Exceptional Interiors.
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Every Niebo Interior is crafted using premium materials,
            world-class fittings, and internationally trusted brands to
            ensure lasting beauty, durability, and flawless performance.
          </p>

        </div>

        {/* Brand Grid */}

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

          {brands.map((brand) => (

            <div
              key={brand.name}
              className="group flex h-36 items-center justify-center rounded-3xl border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A45C]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,.08)]"
            >

              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-14 w-auto grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />

            </div>

          ))}

        </div>

        {/* Bottom Quote */}

        <div className="mt-24 text-center">

          <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-[#C8A45C] to-transparent" />

          <p className="mx-auto max-w-3xl font-serif text-2xl italic leading-10 text-[#222]">

            "Luxury begins with exceptional craftsmanship and is completed
            with the world's most trusted brands."

          </p>

        </div>

      </div>
    </section>
  );
}