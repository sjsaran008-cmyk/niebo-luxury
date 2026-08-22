import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogs from "../../data/blogs";

const featuredPost = blogs[0];
const sidePosts = blogs.slice(1, 3);

export default function BlogGrid() {
  return (
    <section
  id="blogs"
  className="bg-[#F7F5F2] py-10 md:py-14 lg:py-16"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            Editorial Collection
          </span>

          <h2 className="mt-5 font-display text-4xl font-light leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Stories Crafted
            <br />
            Around Luxury Interiors
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base md:leading-8">
            Explore curated articles, design inspirations and expert insights
            from the world of premium interiors.
          </p>
        </motion.div>


        {/* =====================================================
            FEATURED + SIDE STORIES
        ===================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1.65fr_0.85fr] lg:gap-8">

          {/* ================= FEATURED ================= */}

          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm"
          >
            <div className="relative overflow-hidden">

              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105] md:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Category */}

              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur-md md:left-7 md:top-7">
                {featuredPost.category}
              </span>

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                <div className="mb-3 flex items-center gap-3 text-xs text-zinc-300">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h3 className="max-w-3xl font-display text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                  {featuredPost.title}
                </h3>

              </div>
            </div>

            {/* Featured Description */}

            <div className="flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">

              <p className="max-w-2xl text-sm leading-7 text-zinc-600 md:text-base md:leading-8">
                {featuredPost.excerpt}
              </p>

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group/read inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-black"
              >
                Read Story

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover/read:translate-x-1"
                />
              </Link>

            </div>
          </motion.article>


          {/* ================= SIDE STORIES ================= */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">

            {sidePosts.map((post, index) => (

              <motion.article
                key={post.id || post.slug}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 md:h-60 lg:h-52"
                  />

                </div>

                <div className="p-6">

                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A96A]">
                    {post.category}
                  </span>

                  <h3 className="mt-3 text-xl font-light leading-snug text-zinc-900 transition-colors duration-300 group-hover:text-[#B18A45]">
                    {post.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-xs text-zinc-500">
                      {post.date}
                    </span>

                    <Link
                      to={`/blog/${post.slug}`}
                      aria-label={`Read ${post.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-black"
                    >
                      <ArrowRight size={16} />
                    </Link>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>


        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-y-10 rounded-[2rem] bg-[#0B0B0B] px-6 py-10 text-center text-white md:mt-24 md:grid-cols-4 md:gap-6 md:px-8 md:py-12"
        >
          {[
            {
              number: "250+",
              label: "Design Articles",
            },
            {
              number: "500+",
              label: "Luxury Projects",
            },
            {
              number: "12+",
              label: "Years Experience",
            },
            {
              number: "4.9★",
              label: "Client Rating",
            },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="font-display text-4xl font-light text-[#C8A96A] md:text-5xl">
                {item.number}
              </h3>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-zinc-400 md:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>


        {/* =====================================================
            LATEST JOURNAL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 mt-20 md:mb-12 md:mt-28"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            Latest Journal
          </span>

          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-zinc-900 md:text-5xl">
            Explore More
            <br />
            Design Stories
          </h2>
        </motion.div>


        {/* =====================================================
            BLOG GRID
        ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog, index) => (

            <motion.article
              key={blog.id || blog.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              </div>


              {/* Content */}

              <div className="p-6 md:p-7">

                <div className="flex items-center justify-between gap-4">

                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A96A]">
                    {blog.category}
                  </span>

                  <span className="text-xs text-zinc-400">
                    {blog.readTime}
                  </span>

                </div>

                <h3 className="mt-4 text-xl font-light leading-snug text-zinc-900 transition duration-300 group-hover:text-[#B18A45] md:text-2xl">
                  {blog.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-600">
                  {blog.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-xs text-zinc-500">
                    {blog.date}
                  </span>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition hover:text-[#B18A45]"
                  >
                    Read More
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* =====================================================
            QUOTE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-20 max-w-5xl text-center md:mt-28"
        >
          <p className="font-display text-3xl font-light italic leading-relaxed text-zinc-700 md:text-5xl">
            “Luxury is not about excess —
            <span className="text-[#B18A45]">
              {" "}it’s about thoughtful design,
              timeless craftsmanship,
              and spaces that feel truly yours.
            </span>”
          </p>
        </motion.div>

      </div>
    </section>
  );
}

