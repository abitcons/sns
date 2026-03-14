import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NewsPostCard = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleViewMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (<div className="group h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Image Container with Overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
        {post.imageUrl ? (<img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>) : (<div className="w-full h-full bg-gradient-to-br from-[#36a0d0]/10 to-[#6ec6ab]/10 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>)}
        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md z-20">
          <p className="text-sm font-medium bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] bg-clip-text text-transparent">
            {post.date}
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
          {post.title}
        </h3>

        {/* Excerpt/Content */}
        <div className="flex-grow mb-6">
          <p className={`text-gray-600 text-sm transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
            {isExpanded ? (post.content || post.excerpt) : post.excerpt}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
          <Link to={`/news/${post.slug}`} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] text-white rounded-lg text-sm font-medium shadow-md hover:from-[#2f8bb4] hover:to-[#5ba892] transition-all duration-300">
            Read More
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
          <button onClick={handleViewMore} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center">
            {isExpanded ? (<>
                View Less
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
                </svg>
              </>) : (<>
                View More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </>)}
          </button>
        </div>
      </div>
    </div>);
};
export default NewsPostCard;
