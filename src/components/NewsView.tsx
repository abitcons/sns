
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { newsPosts } from '../data/newsPosts';

const NewsView: React.FC = () => {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const news = newsPosts.find((post) => post.slug === slug);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">News post not found.</h1>
        <button
          onClick={() => navigate('/news')}
          className="px-6 py-3 bg-[#36a0d0] text-white rounded-lg hover:bg-[#2f8bb4] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Back to News
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{news.title} - Smart National Solutions</title>
        <meta name="description" content={news.excerpt} />
        <meta name="keywords" content={`${news.category}, SNS news, Smart National Solutions`} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            {news.category && (
              <span className="px-4 py-1.5 bg-gradient-to-r from-[#36a0d0]/20 to-[#36a0d0]/10 text-[#36a0d0] rounded-full text-sm font-semibold backdrop-blur-sm">
                {news.category}
              </span>
            )}
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm font-medium">{news.readTime}</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{news.title}</h1>
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm">
            <div className="flex items-center space-x-4">
              <img 
                src="/Logo/SNS-Icon-Logo.svg"
                alt="SNS Logo"
                className="w-12 h-12"
              />
              <div>
                <p className="text-gray-900 font-semibold">{news.author}</p>
                <p className="text-sm text-gray-500">{news.date}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12 shadow-xl bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full max-h-[600px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <p className="text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
            {news.excerpt}
          </p>
          {news.content && (
            <div className="text-gray-600 leading-relaxed space-y-8 text-lg">
              {news.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc list-inside marker:text-[#36a0d0]">
                      <li className="text-gray-700">{paragraph.slice(2)}</li>
                    </ul>
                  );
                }
                const boldPattern = /\*\*(.*?)\*\*/g;
                const formattedParagraph = paragraph.replace(
                  boldPattern,
                  '<strong class="text-gray-800">$1</strong>'
                );
                return (
                  <p 
                    key={index}
                    dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                    className="text-gray-700"
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Logos Section */}
        {Array.isArray(news.relatedLogos) && news.relatedLogos.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-10 text-center">Related Organizations</h3>
            <div className={`grid grid-cols-2 ${
              news.relatedLogos.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
            } gap-8 items-center justify-items-center`}>
              {news.relatedLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="w-40 h-24 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 transform hover:-translate-y-1"
                >
                  {logo.url ? (
                    <a 
                      href={logo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </a>
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl">
            <div className="flex items-center space-x-5">
              <img 
                src="/Logo/SNS-Icon-Logo.svg"
                alt="SNS Logo"
                className="w-16 h-16"
              />
              <div>
                <p className="text-sm text-gray-500 font-medium">Published by</p>
                <p className="font-semibold text-gray-900 text-lg">Smart National Solutions</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/news')}
              className="px-6 py-3 text-[#36a0d0] hover:text-white hover:bg-[#36a0d0] rounded-lg transition-all duration-300 border-2 border-[#36a0d0] font-medium"
            >
              ← Back to News
            </button>
          </div>
        </footer>
      </article>
    </>
  );
};

export default NewsView;