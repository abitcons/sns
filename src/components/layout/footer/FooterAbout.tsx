import React from 'react';
import FooterLogos from './FooterLogos';

export default function FooterAbout() {
  return (
    <div>
      <FooterLogos />
      <div className="space-y-4">
        <p className="text-gray-100">
          Empowering businesses through digital transformation and innovative solutions.
        </p>
        <p className="text-gray-100">
          As a leading SAP Gold Partner in Saudi Arabia, we are committed to driving
          excellence and innovation in digital transformation, aligned with Vision 2030.
        </p>
      </div>
    </div>
  );
}