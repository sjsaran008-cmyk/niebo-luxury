import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export default function BlogContent({ blog }) {
  return (
    <section className="bg-[#F7F5F2] py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-6">

       {blog.sections.map((section, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 1, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-14"
  >

            <h2 className="text-4xl font-light tracking-tight text-[#111]">
              {section.heading}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-neutral-600">

              {section.paragraphs.map((paragraph, i) => (
  <p key={i}>{paragraph}</p>
))}

              {section.points && (
                <ul className="space-y-4">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#C8A96A]" />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

            </div>

            {section.image && (
              <div className="mt-14 overflow-hidden rounded-[28px]">
                <img loading="lazy" decoding="async"
                  src={section.image}
                  alt={section.heading}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            )}

          </motion.div>
        ))}
                {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
         className="mt-6 rounded-[32px] border border-[#E8E3DA] bg-white px-8 py-16 text-center shadow-sm md:mt-8"  
        >
          <div className="mx-auto mb-8 h-px w-20 bg-[#C8A96A]" />

          <blockquote className="mx-auto max-w-3xl text-3xl font-light italic leading-relaxed text-[#111]">
            “Beautiful interiors begin with thoughtful planning and timeless
            craftsmanship.”
          </blockquote>

          <p className="mt-8 uppercase tracking-[0.3em] text-sm text-[#C8A96A]">
            — Niebo Interiors
          </p>
        </motion.div>
        {/* CTA */}
<div className="mt-12 rounded-[28px] bg-[#111] px-8 py-14 text-center text-white">
  <h3 className="text-3xl font-light">
    Ready to Transform Your Home?
  </h3>

  <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
    Let's create a space that reflects your lifestyle with premium
    craftsmanship and timeless interior design.
  </p>

  <Link
    to="/contact"
    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C8A96A] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7B878] hover:shadow-lg"
  >
    Book Free Consultation
  </Link>
</div>

      </div>
    </section>
  );
}


