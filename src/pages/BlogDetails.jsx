import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import BlogDetailsHero from "../components/blog-details/BlogDetailsHero";
import BlogContent from "../components/blog-details/BlogContent";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] px-6 py-32 text-center text-white">
        <h1 className="text-3xl">Blog Not Found</h1>
        <p className="mt-4 text-zinc-400">
          Slug: {slug}
        </p>
      </div>
    );
  }

  const seoTitle = `${blog.title} | Niebo Interiors`;

  const seoDescription =
    blog.metaDescription ||
    blog.excerpt ||
    blog.description ||
    `Explore ${blog.title} and discover interior design ideas from Niebo Interiors, Erode.`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={`/blog/${slug}`}
      />

      <Navbar />

      <main>
        <BlogDetailsHero blog={blog} />
        <BlogContent blog={blog} />
      </main>

      <Footer />
    </>
  );
}
