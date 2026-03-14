import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../styles/animations";
import { newsPosts as unsortedNewsPosts } from "../../../data/newsPosts";

interface NewsPost {
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  slug: string;
}

// Sort posts by date in descending order (newest first)
const newsPosts = [...unsortedNewsPosts].sort((a: NewsPost, b: NewsPost) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function NewsSection() {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsPosts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  
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
    <section className="relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#36a0d0] opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#6ec6ab] opacity-10 rounded-full blur-3xl" />
      </div>

      {/* Header Section with 3D Effect */}
      <div className="relative bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg"
            >
              SNS News & Events
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-white mt-4 max-w-2xl mx-auto drop-shadow"
            >
              Explore the milestones and updates that define our journey of success.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Carousel Section with Glass Effect */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-xl backdrop-blur-sm">
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
                        <motion.div
                          key={index}
                          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex flex-col h-full relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            {event.imageUrl && event.imageUrl.trim() ? (
                              <div className="relative w-full h-64 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                <img
                                  src={event.imageUrl}
                                  alt={event.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              </div>
                            ) : (
                              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">No Image</span>
                              </div>
                            )}
                            <div className="flex flex-col flex-grow p-6">
                              <div className="flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3 font-medium">
                                  {event.date}
                                </p>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                  {event.excerpt}
                                </p>
                              </div>
                              <div className="pt-6">
                                <a
                                  href={`/news/${event.slug}`}
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] text-white rounded-lg text-sm font-medium shadow-md hover:from-[#2f8bb4] hover:to-[#4ca0a5] transition-all duration-300"
                                >
                                  Read More
                                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Controls */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <button
                onClick={handlePrev}
                className="group flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-[#36a0d0] transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? "bg-[#36a0d0] scale-125"
                        : "bg-gray-300 hover:bg-[#36a0d0]/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="group flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-1"
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-[#36a0d0] transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}