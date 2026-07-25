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
      className="bg-[#F7F5F2] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-[#C8A96A]">
            Editorial Collection
          </span>

          <h2 className="mt-5 text-4xl font-light tracking-tight text-black md:text-6xl">
            Stories Crafted
            <br />
            Around Luxury Interiors
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Explore curated articles, design inspirations and expert insights
            from the world of premium interiors.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-[1.8fr_0.9fr]">
          {/* Featured Card */}
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden rounded-[34px] bg-white shadow-sm"
          >
            <div className="relative overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <span className="absolute left-8 top-8 rounded-full bg-white/15 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-md">
                {featuredPost.category}
              </span>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-4 flex gap-4 text-sm text-neutral-300">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h3 className="max-w-3xl text-3xl font-light leading-tight text-white md:text-5xl">
                  {featuredPost.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 p-10 lg:flex-row lg:items-center">
             <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              {featuredPost.excerpt}
             </p>

              <Link
  to={`/blog/${featuredPost.slug}`}
  className="group inline-flex items-center gap-3 rounded-full border border-neutral-200 px-7 py-4 transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-white"
>
  Read Story

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
            </div>
          </motion.article>

          {/* Right Cards */}
          <div className="space-y-8">
            {sidePosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group overflow-hidden rounded-[30px] bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">
                    {post.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-light leading-snug text-black transition-colors duration-300 group-hover:text-[#C8A96A]">
                    {post.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {post.date}
                    </span>

                    <Link
  to={`/blog/${post.slug}`}
  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-[#C8A96A] group-hover:bg-[#C8A96A] group-hover:text-white"
>
  <ArrowRight size={18} />
</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        {/* =========================
    Luxury Statistics
========================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-28 grid grid-cols-2 gap-8 rounded-[34px] bg-black px-8 py-14 text-center text-white lg:grid-cols-4"
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
      <h3 className="text-5xl font-light text-[#C8A96A]">
        {item.number}
      </h3>

      <p className="mt-3 uppercase tracking-[0.25em] text-neutral-400 text-sm">
        {item.label}
      </p>
    </div>
  ))}
</motion.div>

{/* =========================
    Latest Journal Heading
========================= */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-28 mb-14"
>
  <span className="uppercase tracking-[0.35em] text-sm text-[#C8A96A]">
    Latest Journal
  </span>

  <h2 className="mt-4 text-5xl font-light leading-tight text-black">
    Explore More
    <br />
    Design Stories
  </h2>
</motion.div>

{/* =========================
    Editorial Magazine Grid
========================= */}

<div className="grid gap-10 lg:grid-cols-2">
  {blogs.map((blog, index) => (
    <motion.article
      key={blog.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      className={`group overflow-hidden rounded-[34px] bg-white shadow-sm ${
        index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-20"
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
            index % 2 === 0 ? "h-[520px]" : "h-[360px]"
          }`}
        />
      </div>

      <div className="p-8">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
          {blog.category}
        </span>

        <h3 className="mt-4 text-3xl font-light leading-snug text-black transition duration-300 group-hover:text-[#C8A96A]">
          {blog.title}
        </h3>

        <p className="mt-5 leading-8 text-neutral-600">
          {blog.excerpt}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm text-neutral-500">
            {blog.readTime}
          </span>

          <Link
            to={`/blog/${blog.slug}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  ))}
</div>
{/* =========================
    Load More
========================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-20 flex justify-center"
>
</motion.div>


{/* =========================
    Quote Block
========================= */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="mx-auto mt-24 max-w-5xl text-center"
>
  <p className="text-3xl font-light italic leading-relaxed text-neutral-700 md:text-5xl">
    "Luxury is not about excess —
    <span className="text-[#C8A96A]">
      {" "}it's about thoughtful design,
      timeless craftsmanship,
      and spaces that feel truly yours.
    </span>"
  </p>
</motion.div>

      </div>
    </section>
  );
}