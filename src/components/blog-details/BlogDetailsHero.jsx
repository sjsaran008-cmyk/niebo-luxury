import { motion } from "framer-motion";

export default function BlogDetailsHero({ blog }) {
  return (
    <section className="bg-[#F7F5F2] pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative h-[70vh] min-h-[600px] overflow-hidden rounded-[36px]">

          {/* Background */}
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16"
          >
            {/* Category */}
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C8A96A] backdrop-blur">
              {blog.category}
            </span>

            {/* Title */}
            <h1 className="mt-6 max-w-5xl text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}