interface FinalCTAProps {
  onOpenConsultation: () => void;
  onStartAssessment: () => void;
}

export function FinalCTA({ onOpenConsultation, onStartAssessment }: FinalCTAProps) {
  return (
    <section className="py-20 bg-luxury-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h3 className="font-playfair text-5xl font-bold leading-tight">
            Ready to Master Your Ultimate Asset?
          </h3>
          <p className="text-xl opacity-90 leading-relaxed">
            Join the ultra-exclusive circle of billionaire entrepreneurs and Fortune 500 CEOs who've unlocked peak performance, boundless energy, and extended healthspan through our bespoke concierge wellness programs and world-class adventure expeditions.
          </p>
          <p className="text-lg opacity-80">
            From Antarctic expeditions to private island retreats, combine cutting-edge wellness optimization with extraordinary adventures that push your limits and expand your horizons.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={onOpenConsultation}
              className="bg-white text-brand-orange px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              data-testid="button-schedule-consultation-final"
            >
              Schedule Free Consultation
            </button>
            <button 
              onClick={onStartAssessment}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-orange transition-all"
              data-testid="button-take-assessment-final"
            >
              Take Health Assessment
            </button>
          </div>
          
          <div className="pt-8 text-sm opacity-75">
            <p>"Let's go. Let's Live Bold." — Sunshine</p>
          </div>
        </div>
      </div>
    </section>
  );
}
