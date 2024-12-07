import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../styles/animations";
import { newsPosts } from "../../../data/newsPosts";

export default function NewsSection() {
  const itemsPerPage = 3; // Show 3 items per slide
  const totalPages = Math.ceil(newsPosts.length / itemsPerPage); // Calculate total pages
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate current items to display
  const currentItems = newsPosts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Auto-move every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 8000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  return (
    <section>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-5xl font-extrabold text-white tracking-tight"
            >
              SNS News & Events
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-white mt-4"
            >
              Explore the milestones and updates that define our journey of
              success.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="flex flex-nowrap w-full"
                    style={{ minWidth: "100%" }}
                  >
                    {newsPosts
                      .slice(
                        pageIndex * itemsPerPage,
                        pageIndex * itemsPerPage + itemsPerPage
                      )
                      .map((event, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                        >
                          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                            {event.imageUrl && event.imageUrl.trim() ? (
                              <img
                                src={event.imageUrl}
                                alt={event.title}
                                className="w-full h-48 object-cover"
                              />
                            ) : (
                              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">
                                  No Image
                                </span>
                              </div>
                            )}
                            <div className="p-4 flex flex-col justify-between flex-grow">
                              <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {event.title}
                              </h3>
                              <p className="text-gray-600 text-sm flex-grow">
                                {event.excerpt}
                              </p>
                              <a
                                href={`/news/${event.slug}`}
                                className="inline-block px-4 py-2 bg-[#36a0d0] text-white rounded-full text-sm font-medium shadow-md hover:bg-blue-600 mt-4 self-start"
                              >
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors"
                aria-label="Previous"
              >
                &larr;
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentPage
                        ? "bg-[#36a0d0]"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors"
                aria-label="Next"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
