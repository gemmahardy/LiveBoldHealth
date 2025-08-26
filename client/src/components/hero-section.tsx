import heroGraphic from '@assets/LIVE_BOLD_BLUE_GRAPHIC_1756152514446.jpg';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onStartAssessment: () => void;
}

export function HeroSection({ onOpenConsultation, onStartAssessment }: HeroSectionProps) {
  return (
    <section className="pt-40 pb-16 bg-gradient-to-b from-white to-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-6xl font-bold text-luxury-charcoal leading-tight">
                Live Bold: Ultra-Luxury 
                <span className="text-transparent bg-clip-text bg-luxury-gradient"> Longevity & Wellness Concierge</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-luxury-charcoal">
                10X your health, fitness, and longevity with Maine's elite wellness concierge. Experience cutting-edge VO2 Max testing, RMR testing, luxury adventure travel, and the perfect lifestyle optimization. Feel good, live longer, aspire to excellence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStartAssessment}
                className="bg-luxury-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                data-testid="button-take-assessment"
              >
                Take Health Assessment
              </button>
              <button 
                onClick={onOpenConsultation}
                className="border-2 border-brand-orange text-brand-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-orange hover:text-white transition-all"
                data-testid="button-free-consultation"
              >
                Schedule Free Consultation
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=50&h=50&fit=crop&crop=face" 
                  className="w-12 h-12 rounded-full border-2 border-white" 
                  alt="Adventure client testimonial"
                  data-testid="testimonial-avatar-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=50&h=50&fit=crop&crop=face" 
                  className="w-12 h-12 rounded-full border-2 border-white" 
                  alt="Adventure client testimonial"
                  data-testid="testimonial-avatar-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=50&h=50&fit=crop&crop=face" 
                  className="w-12 h-12 rounded-full border-2 border-white" 
                  alt="Adventure client testimonial"
                  data-testid="testimonial-avatar-3"
                />
              </div>
              <div className="text-sm">
                <p className="font-medium text-luxury-charcoal" data-testid="text-trusted-by">Trusted by High-Performance Executives & Leaders</p>
                <div className="flex text-brand-orange">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 text-gray-600" data-testid="text-rating">Premium wellness partners</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroGraphic} 
              alt="Live Bold Health & Adventure Concierge graphic" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="hero-image"
            />
            
            <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-xl shadow-xl p-3 lg:p-6 luxury-card">
              <div className="text-center">
                <p className="text-xl lg:text-3xl font-bold text-brand-orange" data-testid="stat-experience">25+</p>
                <p className="text-xs lg:text-sm text-gray-600">Years Elite Practice</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 bg-white rounded-xl shadow-xl p-3 lg:p-6 luxury-card">
              <div className="text-center">
                <p className="text-xl lg:text-3xl font-bold text-brand-orange" data-testid="stat-net-worth">$500M+</p>
                <p className="text-xs lg:text-sm text-gray-600">Combined Client Wealth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
