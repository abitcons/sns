import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../styles/animations';
import { blogPosts } from '../data/blog';

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
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Latest Insights
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600"
            >
              Expert perspectives on digital transformation and technology trends
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
              className="relative bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="h-64 lg:h-full w-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {featuredPost.date}
                    </span>
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="text-primary hover:text-primary/90 font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
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
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/90 font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}