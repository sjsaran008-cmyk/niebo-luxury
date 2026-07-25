import { motion } from "framer-motion";



export default function BlogContent({ blog }) {
  return (
    <section className="bg-[#F7F5F2] py-20">
      <div className="mx-auto max-w-4xl px-6">

        {blog.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
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
                <img
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
          className="my-24 rounded-[32px] border border-[#E8E3DA] bg-white px-8 py-16 text-center shadow-sm"
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

        {/* Building Trust */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-light tracking-tight text-[#111]">
            Building Trust Through Valuable Content
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-neutral-600">
            <p>
              Trust is earned when your content consistently helps readers solve
              real problems. Share practical tips, before-and-after project
              stories, design inspirations, and expert advice that homeowners
              can apply confidently.
            </p>

            <p>
              Including authentic project images, client testimonials, and
              transparent explanations of your design process strengthens your
              credibility and encourages readers to engage with your brand.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[28px]">
            <img
              src={image2}
              alt="Luxury Interior"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Growing Your Business */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-light tracking-tight text-[#111]">
            Growing Your Interior Design Business
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-neutral-600">
            <p>
              A professionally maintained blog improves search visibility,
              attracts organic traffic, and positions your company as a trusted
              authority in the interior design industry.
            </p>

            <p>
              Every helpful article creates another opportunity for homeowners
              to discover your expertise, explore your portfolio, and connect
              with your team for personalized design solutions.
            </p>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-light tracking-tight text-[#111]">
            Conclusion
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-neutral-600">
            <p>
              Creating a successful residential design blog requires consistency,
              creativity, and a genuine commitment to helping homeowners make
              informed design decisions. By publishing valuable, educational
              content, you build trust and establish lasting relationships with
              your audience.
            </p>

            <p>
              At Niebo Interiors, we combine thoughtful design, premium
              craftsmanship, and practical expertise to create homes that are
              both beautiful and functional. Every article we publish reflects
              our commitment to inspiring better living through exceptional
              interior design.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-[28px] bg-[#111] px-8 py-14 text-center text-white">
            <h3 className="text-3xl font-light">
              Ready to Transform Your Home?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              Let's create a space that reflects your lifestyle with premium
              craftsmanship and timeless interior design.
            </p>

            <button className="mt-8 rounded-full bg-[#C8A96A] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:opacity-90">
              Book Free Consultation
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}