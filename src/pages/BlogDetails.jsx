import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCTA from "../components/blog/BlogCTA";

import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <>
        <Navbar />

        <section className="flex min-h-screen items-center justify-center bg-[#F7F5F2] px-6">
          <div className="text-center">
            <h1 className="text-6xl font-light text-black">
              404
            </h1>

            <p className="mt-5 text-neutral-600">
              The article you're looking for doesn't exist.
            </p>

            <Link
              to="/blog"
              className="mt-8 inline-flex rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800"
            >
              Back to Blogs
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#F7F5F2] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm tracking-wide text-neutral-600 transition hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Journal
          </Link>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
                {blog.category}
              </span>

              <h1 className="mt-8 text-5xl font-light leading-tight text-black md:text-6xl">
                {blog.title}
              </h1>

              <p className="mt-8 text-lg leading-8 text-neutral-600">
                {blog.description}
              </p>

              {/* Meta */}
              <div className="mt-10 flex flex-wrap gap-8 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {blog.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  {blog.readTime}
                </div>
              </div>

              {/* Author */}
              <div className="mt-12 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
                  N
                </div>

                <div>
                  <h4 className="font-medium text-black">
                    {blog.author}
                  </h4>

                  <p className="text-sm text-neutral-500">
                    Interior Design Expert
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-[40px]"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Part 2 Starts Here ===== */}

      <BlogCTA />

      <Footer />
    </>
  );
}
{/* =========================
    ARTICLE SECTION
========================= */}

<section className="bg-white py-24">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[280px_1fr] lg:px-8">

    {/* Sticky Sidebar */}
    <aside className="hidden lg:block">
      <div className="sticky top-32 rounded-[28px] border border-neutral-200 bg-[#FAFAFA] p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
          Table of Contents
        </p>

        <ul className="mt-8 space-y-5 text-sm text-neutral-600">
          <li>
            <a href="#overview" className="transition hover:text-black">
              Overview
            </a>
          </li>

          <li>
            <a href="#benefits" className="transition hover:text-black">
              Benefits
            </a>
          </li>

          <li>
            <a href="#materials" className="transition hover:text-black">
              Premium Materials
            </a>
          </li>

          <li>
            <a href="#tips" className="transition hover:text-black">
              Expert Tips
            </a>
          </li>
        </ul>
      </div>
    </aside>

    {/* Article */}
    <article className="max-w-4xl">

      {/* Overview */}
      <div id="overview">
        <h2 className="text-4xl font-light text-black">
          Creating Luxury Interiors That Stand The Test Of Time
        </h2>

        <p className="mt-8 text-lg leading-9 text-neutral-600">
          Luxury interiors are more than elegant finishes—they are a thoughtful
          combination of craftsmanship, functionality, and timeless aesthetics.
          Every element should work together to create a space that feels both
          sophisticated and comfortable.
        </p>

        <p className="mt-6 text-lg leading-9 text-neutral-600">
          From premium materials to intelligent space planning, investing in
          quality design ensures your home remains beautiful for years while
          enhancing everyday living.
        </p>
      </div>

      {/* Large Image */}
      <div className="my-16 overflow-hidden rounded-[32px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* Benefits */}
      <div id="benefits">
        <h2 className="text-4xl font-light text-black">
          Why Premium Interior Design Matters
        </h2>

        <p className="mt-8 text-lg leading-9 text-neutral-600">
          Professional interior planning maximizes storage, improves workflow,
          increases property value, and creates an environment tailored to your
          lifestyle.
        </p>
      </div>

      {/* Quote */}
      <div className="my-20 rounded-[36px] border-l-4 border-[#C8A96A] bg-[#F8F5F1] p-10">
        <p className="text-3xl font-light italic leading-relaxed text-black">
          “Luxury is not about excess. It is about creating spaces that feel
          timeless, functional, and deeply personal.”
        </p>

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#C8A96A]">
          NIEBO INTERIORS
        </p>
      </div>

      {/* Materials */}
      <div id="materials">
        <h2 className="text-4xl font-light text-black">
          Premium Materials Make The Difference
        </h2>

        <p className="mt-8 text-lg leading-9 text-neutral-600">
          Selecting high-quality plywood, durable hardware, premium laminates,
          and elegant finishes ensures long-lasting performance while
          maintaining a luxurious appearance.
        </p>
      </div>

      {/* Expert Tips */}
      <div
        id="tips"
        className="mt-20 rounded-[36px] bg-black p-10 text-white"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
          Expert Tips
        </span>

        <ul className="mt-8 space-y-5 text-lg leading-8 text-neutral-300">
          <li>✓ Invest in premium hardware for durability.</li>
          <li>✓ Prioritize functionality before aesthetics.</li>
          <li>✓ Use warm lighting to enhance luxury finishes.</li>
          <li>✓ Maintain a cohesive color palette throughout the home.</li>
        </ul>
      </div>

    </article>
  </div>
</section>
{/* =========================
    IMAGE GALLERY
========================= */}

<section className="bg-[#F7F5F2] py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="text-center">
      <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
        Inspiration Gallery
      </span>

      <h2 className="mt-5 text-5xl font-light text-black">
        Luxury Spaces That Inspire
      </h2>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[blog.image, blog.image, blog.image].map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="overflow-hidden rounded-[30px]"
        >
          <img
            src={img}
            alt=""
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-110"
          />
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* =========================
    FAQ
========================= */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">
      <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
        Frequently Asked Questions
      </span>

      <h2 className="mt-5 text-5xl font-light text-black">
        Everything You Need To Know
      </h2>
    </div>

    <div className="mt-16 space-y-8">

      <div className="rounded-[28px] border border-neutral-200 p-8">
        <h3 className="text-xl font-medium text-black">
          How long does a luxury interior project take?
        </h3>

        <p className="mt-4 leading-8 text-neutral-600">
          Depending on the project size, most premium residential interiors
          are completed within 45–90 days.
        </p>
      </div>

      <div className="rounded-[28px] border border-neutral-200 p-8">
        <h3 className="text-xl font-medium text-black">
          Which materials do you recommend?
        </h3>

        <p className="mt-4 leading-8 text-neutral-600">
          We recommend premium plywood, branded hardware, moisture-resistant
          finishes, and durable laminates for long-lasting performance.
        </p>
      </div>

      <div className="rounded-[28px] border border-neutral-200 p-8">
        <h3 className="text-xl font-medium text-black">
          Do you provide 3D designs?
        </h3>

        <p className="mt-4 leading-8 text-neutral-600">
          Yes. Every project includes realistic 3D visualization before
          execution begins.
        </p>
      </div>

    </div>
  </div>
</section>

{/* =========================
    SHARE
========================= */}

<section className="bg-[#F7F5F2] py-20">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">

    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-[#C8A96A]">
        Share This Article
      </p>

      <h3 className="mt-3 text-3xl font-light">
        Help Others Discover Luxury Design
      </h3>
    </div>

    <div className="flex gap-4">

      <button className="rounded-full border border-neutral-300 px-7 py-3 transition hover:bg-black hover:text-white">
        Facebook
      </button>

      <button className="rounded-full border border-neutral-300 px-7 py-3 transition hover:bg-black hover:text-white">
        LinkedIn
      </button>

      <button className="rounded-full border border-neutral-300 px-7 py-3 transition hover:bg-black hover:text-white">
        WhatsApp
      </button>

    </div>
  </div>
</section>

{/* =========================
    RELATED BLOGS
========================= */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="text-center">
      <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
        Related Articles
      </span>

      <h2 className="mt-5 text-5xl font-light">
        Continue Reading
      </h2>
    </div>

    <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

      {blogs
        .filter((item) => item.id !== blog.id)
        .slice(0, 3)
        .map((item) => (

          <Link
            key={item.id}
            to={`/blog/${item.slug}`}
            className="group overflow-hidden rounded-[30px] bg-[#F7F5F2]"
          >

            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">

              <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                {item.category}
              </span>

              <h3 className="mt-4 text-2xl font-light text-black">
                {item.title}
              </h3>

              <p className="mt-5 text-neutral-600">
                Read More →
              </p>

            </div>

          </Link>

        ))}

    </div>

  </div>
</section>