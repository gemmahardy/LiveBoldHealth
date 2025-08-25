interface SunLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SunLogo({ className = "", size = 'md' }: SunLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB627" />
            <stop offset="50%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#B07C4A" />
          </radialGradient>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB627" />
            <stop offset="100%" stopColor="#FF6B35" />
          </radialGradient>
        </defs>
        
        {/* Outer ring */}
        <circle cx="30" cy="30" r="30" fill="url(#sunGradient)" />
        
        {/* Sun rays */}
        <g fill="#FFB627" fillOpacity="0.8">
          <polygon points="30,8 32,15 28,15" />
          <polygon points="45.86,15.86 46.86,18.79 43.93,17.79" />
          <polygon points="52,30 45,32 45,28" />
          <polygon points="45.86,44.14 43.93,42.21 46.86,41.21" />
          <polygon points="30,52 28,45 32,45" />
          <polygon points="14.14,44.14 16.07,42.21 13.14,41.21" />
          <polygon points="8,30 15,28 15,32" />
          <polygon points="14.14,15.86 13.14,18.79 16.07,17.79" />
        </g>
        
        {/* Center circle */}
        <circle cx="30" cy="30" r="12" fill="url(#centerGradient)" />
        
        {/* Inner glow */}
        <circle cx="30" cy="30" r="8" fill="#FFB627" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
