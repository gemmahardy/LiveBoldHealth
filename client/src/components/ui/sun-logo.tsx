import sunIconUrl from '@assets/LIVE_BOLD_BLUE_GRAPHIC_1756152802849.jpg';

interface SunLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SunLogo({ className = "", size = 'md' }: SunLogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} drop-shadow-lg`}>
      <img 
        src={sunIconUrl}
        alt="Live Bold Sun Logo" 
        className="w-full h-full object-contain filter brightness-110 contrast-110"
        style={{
          mixBlendMode: 'multiply',
          filter: 'contrast(150%) brightness(120%) saturate(150%)'
        }}
      />
    </div>
  );
}
