import React from 'react';

interface SNSLogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export default function SNSLogo({ className = '', variant = 'default' }: SNSLogoProps) {
  const primaryColor = variant === 'white' ? '#FFFFFF' : '#30A1D3';
  const gradientStart = variant === 'white' ? '#FFFFFF' : '#309AD6';
  const gradientEnd = variant === 'white' ? '#FFFFFF' : '#66C4AD';

  return (
    <svg
      viewBox="0 0 163 83.8"
      className={className}
      preserveAspectRatio="x