import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogoProps } from './types';

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  return (
    <Link to="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`inline-block ${className}`}
      >
        <img
          src="/Logo/SNS logo SVG SVG-01.svg"
          alt="Smart National Solutions"
          className={`w-auto transition-all duration-300 ${
            variant === 'white' ? 'brightness-0 invert' : ''
          }`}
          style={{
            height: '4.5rem', // Consistent height for both header and footer
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </motion.div>
    </Link>
  );
}