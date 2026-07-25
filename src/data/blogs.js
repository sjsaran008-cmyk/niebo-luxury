// src/data/blogs.js

import blog1 from "../assets/images/blog/blog-1.webp";
import blog2 from "../assets/images/blog/blog-2.webp";
import blog3 from "../assets/images/blog/blog-3.webp";

const blogs = [
  {
    id: 1,
    slug: "creating-a-successful-residential-design-blog",

    category: "Luxury Living",

    title:
      "Creating a Successful Residential Design Blog in India: Residential Design Blog Tips",

    excerpt:
      "Learn how to build a successful residential design blog in India with practical strategies, expert insights, and content ideas that inspire homeowners.",

    author: "Niebo Interiors",

    date: "18 July 2026",

    readTime: "6 Min Read",

    image: blog1,

    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Starting a residential design blog in India is an excellent way to share design expertise while helping homeowners make informed decisions. High-quality content builds trust and establishes your brand as an industry expert.",
          "Whether you're an interior designer or a home improvement specialist, publishing consistent and valuable content strengthens your online presence and attracts potential clients.",
        ],
      },

      {
        heading: "Understanding Your Audience",
        paragraphs: [
          "Knowing your audience is the foundation of every successful blog. Focus on the challenges homeowners face and provide practical, easy-to-understand solutions.",
        ],
        points: [
          "Space optimization",
          "Affordable luxury interiors",
          "Storage solutions",
          "Modern Indian home trends",
          "Material selection",
        ],
        image: blog2,
      },

      {
        heading: "Planning Your Content Strategy",
        paragraphs: [
          "Create a monthly publishing calendar with educational articles, project showcases, and expert guides. Consistency helps improve SEO and builds reader trust.",
        ],
      },

      {
        heading: "Crafting Engaging Blog Posts",
        paragraphs: [
          "Use clear headings, professional images, and actionable advice. Focus on solving real homeowner problems instead of simply promoting services.",
        ],
      },

      {
        heading: "Building Trust Through Content",
        paragraphs: [
          "Showcase completed projects, client testimonials, and before-and-after transformations. Transparency and expertise help convert readers into clients.",
        ],
        image: blog3,
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "A successful residential design blog combines creativity, consistency, and genuine value. By publishing informative articles regularly, you establish credibility and attract homeowners looking for trusted interior design professionals.",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "modular-kitchen-design-guide",

    category: "Kitchen Design",

    title: "Modern Modular Kitchen Design Guide",

    excerpt:
      "Discover the latest modular kitchen trends, layouts, storage ideas, and premium finishes for modern Indian homes.",

    author: "Niebo Interiors",

    date: "10 July 2026",

    readTime: "5 Min Read",

    image: blog2,

    sections: [],
  },

  {
    id: 3,
    slug: "wardrobe-design-ideas",

    category: "Wardrobes",

    title: "Luxury Wardrobe Design Ideas for Modern Homes",

    excerpt:
      "Explore stylish wardrobe layouts, finishes, lighting ideas, and storage solutions that maximize both functionality and elegance.",

    author: "Niebo Interiors",

    date: "02 July 2026",

    readTime: "4 Min Read",

    image: blog3,

    sections: [],
  },
];
export default blogs;