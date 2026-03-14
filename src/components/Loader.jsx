import React from 'react';
import '../styles/loader.css';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      {/* Gradient Background */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `linear-gradient(135deg, 
            #36a0d0 0%, 
            #5bb6bb 50%, 
            #6ec6ab 100%
          )`
        }}
      />
      
      {/* Container for the logo */}
      <div className="relative w-32 h-32">
        {/* Circular white background */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white shadow-lg animate-pulse" />
        
        {/* Logo */}
        <div className="absolute top-0 left-0 w-full h-full animate-spin">
          <img src="/snsloader.svg" alt="Logo" className="w-full h-full p-4" />
        </div>
        
        {/* Animated ring */}
        <svg
          className="absolute top-0 left-0 w-full h-full animate-[spin_2s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset="283"
            className="animate-dash"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
