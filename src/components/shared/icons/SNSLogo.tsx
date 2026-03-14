

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
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="snsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradientStart} />
          <stop offset="100%" stopColor={gradientEnd} />
        </linearGradient>
      </defs>
      <rect width="163" height="83.8" fill="url(#snsGradient)" />
      <text x="50%" y="50%" textAnchor="middle" fill={primaryColor} fontSize="24" fontWeight="bold" dy=".3em">
        SNS
      </text>
    </svg>
  );
}
