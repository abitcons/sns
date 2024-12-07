import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src="/hero video/Hero video.mp4"
          autoPlay
          muted
          preload="auto"
          playsInline
          className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-slowZoom"
        >
          {/* Fallback text for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(54, 160, 208, 0.8), rgba(91, 182, 187, 0.8), rgba(110, 198, 171, 0.8))',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-8 sm:px-10 lg:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-relaxed">
            Empowering the Future<br />
            Through Innovation & Technology
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Transforming businesses with SAP Excellence
          </p>

          <Link
            to="/solutions"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Discover Our Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
