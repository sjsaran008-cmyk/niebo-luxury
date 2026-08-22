import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogDetailsHero({ blog }) {
  return (
    <section className="bg-[#F8F6F1] pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Back to Journal */}

        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 transition-colors duration-300 hover:text-[#B18A45]"
          >
            <ArrowLeft size={15} />
            Back to Journal
          </Link>
        </motion.div>


        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-zinc-200 md:min-h-[650px] lg:min-h-[700px]"
        >

          {/* Image */}

          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 h-full w-full object-cover"
          />


          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />


          {/* Top Label */}

          <div className="absolute left-5 top-5 md:left-8 md:top-8">

            <span className="inline-flex rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#D7AE62] backdrop-blur-md md:px-5 md:py-2.5 md:text-xs">
              {blog.category}
            </span>

          </div>


          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12 lg:p-16"
          >

            {/* Eyebrow */}

            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#D7AE62] md:text-xs">
              Niebo Interiors Journal
            </p>


            {/* Title */}

            <h1 className="max-w-5xl font-display text-4xl font-light leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {blog.title}
            </h1>


            {/* Excerpt */}

            {blog.excerpt && (
              <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                {blog.excerpt}
              </p>
            )}


            {/* Meta */}

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-zinc-300 md:text-sm">

              <span>
                By{" "}
                <span className="text-white">
                  {blog.author}
                </span>
              </span>

              <span className="text-zinc-500">•</span>

              <span>{blog.date}</span>

              <span className="text-zinc-500">•</span>

              <span className="inline-flex items-center gap-2">
                <Clock size={14} />
                {blog.readTime}
              </span>

            </div>

          </motion.div>

        </motion.div>


        {/* Intro */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-3xl text-center md:mt-16"
        >

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B18A45] md:text-xs">
            Design • Inspiration • Expertise
          </span>

          <div className="mx-auto mt-5 h-px w-16 bg-[#C8A96A]" />

        </motion.div>

      </div>

    </section>
  );
}