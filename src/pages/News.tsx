import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../styles/animations';
import { newsPosts } from '../data/newsPosts';

function Carousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-md">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-8 rounded-sm ${
              currentIndex === index ? 'bg-[#36a0d0]' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default function News() {
  return (
    <>
      <Helmet>
        <title>News - Smart National Solutions</title>
        <meta
          name="description"
          content="Stay updated with the latest news, events, and milestones from Smart National Solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
              Latest News & Events
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl">
              Discover the latest updates, partnerships, and achievements from SNS.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsPosts.map((news, index) => (
              <motion.article
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Carousel */}
                <Carousel images={[news.imageUrl]} />
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-sm text-[#36a0d0] font-semibold mb-2 uppercase tracking-wide">
                      {news.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{news.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <a
                      href={`/news/${news.slug}`}
                      className="inline-block px-4 py-2 bg-[#36a0d0] text-white text-sm font-semibold rounded-md shadow-md hover:bg-[#5bb6bb] transition-colors duration-200"
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
