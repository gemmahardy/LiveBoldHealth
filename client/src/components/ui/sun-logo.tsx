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
      <img 
        src="/attached_assets/Sun%20Icon_1756147942097.jpg" 
        alt="Live Bold Sun Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
