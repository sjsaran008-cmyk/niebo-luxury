import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogDetailsHero from "../components/blog-details/BlogDetailsHero";
import BlogContent from "../components/blog-details/BlogContent";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <>
      <Navbar />
      <BlogDetailsHero blog={blog} />
      <BlogContent blog={blog} />
      <Footer />
    </>
  );
}