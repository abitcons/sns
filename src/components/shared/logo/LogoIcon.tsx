
import React from 'react';
import { LogoVariant } from './types';

interface LogoIconProps {
  variant?: LogoVariant;
}

export default function LogoIcon({ variant = 'default' }: LogoIconProps) {
  // Define colors based on variant
  const mainColor = variant === 'white' ? '#FFFFFF' : '#30A1D3';
  const gradientEndColor = variant === 'white' ? '#FFFFFF' : '#66C4AD';

  // Generate unique IDs for gradients to prevent conflicts when multiple logos are rendered
  const gradientIds = {
    main: `logo-gradient-main-${React.useId()}`,
    secondary: `logo-gradient-secondary-${React.useId()}`,
    tertiary: `logo-gradient-tertiary-${React.useId()}`,
    quaternary: `logo-gradient-quaternary-${React.useId()}`
  };

  return (
    <svg
      viewBox="0 0 135.54 77.88"
      className="w-auto h-full"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientIds.main}
          y1="20.96" x2="31.2" y2="20.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={mainColor} />
          <stop offset="1" stopColor={gradientEndColor} />
        </linearGradient>
        <linearGradient
          id={gradientIds.secondary}
          y1="39.03" x2="31.15" y2="39.03"
          xlinkHref={`#${gradientIds.main}`}
        />
        <linearGradient
          id={gradientIds.tertiary}
          y1="56.9" x2="31.15" y2="56.9"
          xlinkHref={`#${gradientIds.main}`}
        />
        <linearGradient
          id={gradientIds.quaternary}
          x1="27.93" y1="59.1" x2="121" y2="59.1"
          xlinkHref={`#${gradientIds.main}`}
        />
      </defs>
      <g>
        {/* Main Logo Symbol */}
        <path
          className="cls-1"
          fill={`url(#${gradientIds.main})`}
          d="M.28,41.91a.23.23,0,0,1-.14,0A.29.29,0,0,1,0,41.62V18.19a.34.34,0,0,1,.14-.26L30.79,0a.28.28,0,0,1,.28,0A.3.3,0,0,1,31.2.3V23.89a.29.29,0,0,1-.14.26L.41,41.87A.2.2,0,0,1,.28,41.91ZM.56,18.37V41.12l30.09-17.4V.8Z"
        />
        
        {/* Text Elements */}
        <path
          fill={mainColor}
          d="M37.49,13a2.63,2.63,0,0,0,2.92,2.23c1.77,0,2.47-.85,2.47-2s-.58-1.87-2.9-2.46c-2.88-.74-3.82-1.8-3.82-3.55,0-1.93,1.35-3.45,4-3.45,2.9,0,4.08,1.74,4.24,3.43H42.64a2.24,2.24,0,0,0-2.51-2c-1.37,0-2.15.65-2.15,1.79s.64,1.57,2.7,2.09c3.4.87,4,2.26,4,3.9,0,2.08-1.46,3.67-4.42,3.67S36,15,35.7,13Z"
        />
        
        {/* Additional Symbol Elements */}
        <path
          fill={`url(#${gradientIds.secondary})`}
          d="M30.87,60.15a.35.35,0,0,1-.14,0L.14,41.87A.29.29,0,0,1,0,41.62V18.19a.29.29,0,0,1,.14-.25.26.26,0,0,1,.28,0L31,36a.29.29,0,0,1,.14.26V59.86a.29.29,0,0,1-.14.25A.23.23,0,0,1,30.87,60.15ZM.56,41.44l30,17.91v-23L.56,18.7Z"
        />
        
        <path
          fill={`url(#${gradientIds.tertiary})`}
          d="M.28,77.88a.23.23,0,0,1-.14,0A.29.29,0,0,1,0,77.58V54a.31.31,0,0,1,.14-.26L30.74,36A.26.26,0,0,1,31,36a.29.29,0,0,1,.14.26V59.86a.31.31,0,0,1-.14.26L.41,77.84A.2.2,0,0,1,.28,77.88ZM.56,54.16V77.09l30-17.41v-23Z"
        />
        
        {/* Decorative Line */}
        <rect
          fill={`url(#${gradientIds.quaternary})`}
          x="35.32" y="58.43" width="99.81" height="1.34" rx="0.08"
        />
      </g>
    </svg>
  );
}