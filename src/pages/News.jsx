
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../styles/animations';
import { newsPosts } from '../data/newsPosts';
const NewsCard = ({ post }) => {
    return (<div className="group h-[480px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
      {/* Image Container with Fixed Height */}
      <div className="relative h-48 w-full shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
        {post.imageUrl ? (<img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>) : (<div className="w-full h-full bg-gradient-to-br from-[#36a0d0]/10 to-[#6ec6ab]/10 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>)}
        {/* Category Badge */}
        {post.category && (<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md z-20">
            <span className="text-sm font-medium bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] bg-clip-text text-transparent">
              {post.category}
            </span>
          </div>)}
        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md z-20">
          <span className="text-sm font-medium text-gray-700">{post.date}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#36a0d0] transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{post.excerpt}</p>

        {/* Button - Auto-positioned at bottom of flex container */}
        <div className="mt-auto">
          <Link to={`/news/${post.slug}`} className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] text-white rounded-lg text-sm font-medium shadow-md hover:from-[#2f8bb4] hover:to-[#5ba892] transition-all duration-300">
            Read More
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>);
};
const News = () => {
    // Sort posts by date (newest first)
    const sortedPosts = [...newsPosts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
    return (<>
      <Helmet>
        <title>News & Updates - Smart National Solutions</title>
        <meta name="description" content="Stay updated with the latest news, partnerships, and achievements of Smart National Solutions in AI, SAP, and digital transformation in Saudi Arabia."/>
        <meta name="keywords" content="SNS news, Smart National Solutions updates, SAP Partner news, digital transformation, AI solutions in KSA, business innovation"/>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]"/>
        <div className="absolute inset-0 bg-grid-white/[0.1]"/>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#36a0d0] opacity-10 rounded-full blur-3xl"/>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#6ec6ab] opacity-10 rounded-full blur-3xl"/>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-3xl mx-auto">
            <motion.h1 variants={fadeIn} className="text-5xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
              Latest News & Events
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-white/90 drop-shadow">
              Discover the latest updates, partnerships, and achievements from SNS.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post, index) => (<motion.div key={index} variants={fadeIn} initial="hidden" animate="visible" viewport={{ once: true }}>
                <NewsCard post={post}/>
              </motion.div>))}
          </motion.div>
        </div>
      </section>
    </>);
};
export default News;
