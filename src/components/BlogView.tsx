import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blog";

export default function BlogPostView() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section with Enhanced Background */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-16">
        <div className="absolute inset-0 bg-[#36a0d0]/5 pattern-grid-lg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center text-[#36a0d0] hover:text-[#2b80a5] mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>

            {/* Category & Meta with Enhanced Styling */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center bg-white shadow-sm rounded-full px-4 py-2">
                <Tag className="w-4 h-4 mr-2 text-[#36a0d0]" />
                <span className="text-[#36a0d0] text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center bg-white shadow-sm rounded-full px-4 py-2">
                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-600 text-sm">{post.date}</span>
              </div>
            </div>

            {/* Enhanced Title with Fixed Line Position */}
            <div className="relative">
              {/* Decorative line behind the text */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute -left-4 top-1/2 h-1 bg-[#36a0d0]/10 transform -translate-y-1/2 -z-10"
              />
              <h1 className="relative text-5xl font-black text-gray-900 mb-8 leading-tight z-10 px-4">
                <span className="bg-gradient-to-r from-[#36a0d0] to-[#2b80a5] bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h1>
            </div>

            {/* Excerpt with Enhanced Styling */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-2xl overflow-hidden mb-16 shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#36a0d0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Article Content with Enhanced Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none [&>h2]:relative [&>h2]:pl-6 [&>h2]:font-extrabold [&>h2]:text-3xl [&>h2]:mb-6 [&>h2]:bg-gradient-to-r [&>h2]:from-[#36a0d0] [&>h2]:to-[#2b80a5] [&>h2]:bg-clip-text [&>h2]:text-transparent [&>h2]:before:content-[''] [&>h2]:before:absolute [&>h2]:before:left-0 [&>h2]:before:top-1/2 [&>h2]:before:-translate-y-1/2 [&>h2]:before:w-1 [&>h2]:before:h-8 [&>h2]:before:bg-[#36a0d0] [&>h2]:before:rounded-full [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#36a0d0] prose-a:no-underline hover:prose-a:text-[#2b80a5] prose-strong:text-gray-900 prose-strong:font-bold prose-blockquote:border-l-[#36a0d0] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
          >
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="space-y-8"
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
}