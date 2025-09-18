"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    date: "March 1, 2025",
    author: "Paul Anderson",
    title: "10 TIPS FOR SUCCESSFUL EVENT PLANNING",
    excerpt:
      "Successful event planning requires careful consideration of various factors, such as venue selection, budgeting, and marketing strategies.",
    image: "https://via.placeholder.com/600x400", // Replace with real images
  },
  {
    id: 2,
    date: "February 15, 2025",
    author: "Mary Vidal",
    title: "Why Events Matter: The Power of Face-to-Face Interaction",
    excerpt: "",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    date: "January 31, 2025",
    author: "Anthony Huges",
    title: "The Future of Event Technology: What to Expect in 2023",
    excerpt: "",
    image: "https://via.placeholder.com/600x400",
  },
];

const BlogSection = () => {
  return (
    <section className="relative bg-[#0c1a39] text-white py-20 overflow-hidden">
      {/* Background decorative lines */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a39] to-[#0c1a39] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/vertical-lines.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm tracking-widest uppercase font-medium">Blog</h2>
          <a
            href="#"
            className="text-sm text-purple-400 hover:text-purple-300 transition"
          >
            View All Blogs
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-md bg-gray-200">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-400">
                  {blog.date} <span className="mx-1">by</span>
                  <span className="text-purple-400">{blog.author}</span>
                </p>
                <h3 className="text-lg font-semibold leading-snug group-hover:text-purple-300 transition">
                  {blog.title}
                </h3>
                {blog.excerpt && (
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
