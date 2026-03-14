import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer } from "../styles/animations";
import { blogPosts } from "../data/blog";
import { Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog - Smart National Solutions</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on digital transformation, SAP solutions, and technology trends from Smart National Solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold mb-6 leading-tight"
            >
              Latest Insights
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg leading-relaxed max-w-3xl mx-auto"
            >
              Expert perspectives on digital transformation and technology trends to inspire your innovation journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.article
              variants={fadeIn}
              className="relative bg-white rounded-lg shadow-xl overflow-hidden group"
            >
              {/* Image Section */}
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="h-64 lg:h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-[#36a0d0]" />
                        <span className="text-sm font-semibold text-[#36a0d0]">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 relative">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#36a0d0] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-[#36a0d0] hover:text-[#2b80a5] font-semibold transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Regular Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-48 w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#36a0d0]">
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#36a0d0] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#36a0d0] hover:text-[#2b80a5] font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
