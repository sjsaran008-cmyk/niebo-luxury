import { Link } from "react-router-dom";
import blogs from "../../data/blogs";

export default function RelatedBlogs({ currentBlogId }) {
  const relatedBlogs = blogs
    .filter((blog) => blog.id !== currentBlogId)
    .slice(0, 3);

  return (
    <section className="py-20 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-12">
          Related Blogs
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-medium">
                  {blog.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-block mt-6 text-[#C8A96A]"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}