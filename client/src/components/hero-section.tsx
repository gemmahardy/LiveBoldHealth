interface HeroSectionProps {
  onOpenConsultation: () => void;
  onStartAssessment: () => void;
}

export function HeroSection({ onOpenConsultation, onStartAssessment }: HeroSectionProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-luxury-charcoal leading-tight">
                Your Ultra-Premium
                <span className="text-transparent bg-clip-text bg-luxury-gradient"> Health & Adventure Concierge</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                You've mastered markets, built empires, and created generational wealth. Now master the ultimate asset: your health, longevity, and adventurous spirit.
              </p>
              <p className="text-lg font-medium text-luxury-charcoal">
                Elite health optimization and world-class adventure expeditions for executives who demand extraordinary experiences and peak performance.
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
                Free Consultation
              </button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
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
                <p className="font-medium text-luxury-charcoal" data-testid="text-trusted-by">Trusted by Fortune 500 CEOs & UHNWIs</p>
                <div className="flex text-brand-orange">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 text-gray-600" data-testid="text-rating">Exclusive clientele only</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/attached_assets/LIVE_BOLD_BLUE_GRAPHIC_1756152212523.pdf" 
              alt="Live Bold Health & Adventure Concierge graphic" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="hero-image"
            />
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 luxury-card">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-orange" data-testid="stat-experience">25+</p>
                <p className="text-sm text-gray-600">Years Elite Practice</p>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-6 luxury-card">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-orange" data-testid="stat-net-worth">$500M+</p>
                <p className="text-sm text-gray-600">Combined Client Wealth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
