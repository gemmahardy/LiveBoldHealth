interface FinalCTAProps {
  onOpenConsultation: () => void;
  onStartAssessment: () => void;
}

export function FinalCTA({ onOpenConsultation, onStartAssessment }: FinalCTAProps) {
  return (
    <section className="py-20 bg-luxury-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to 10X Your Longevity & Live Bold?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Join the ultra-exclusive circle of elite entrepreneurs and Fortune 500 CEOs who've unlocked peak fitness, boundless energy, and extended longevity through our ultra-luxury cutting-edge health concierge programs and world-class adventure vacations in Maine.
          </p>
          <p className="text-base sm:text-lg opacity-80">
            From Maine's coastal luxury retreats to international adventure experiences, combine cutting-edge longevity optimization with extraordinary wellness adventures. Feel good, live longer, aspire to the perfect elite lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={onOpenConsultation}
              className="bg-white text-brand-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              data-testid="button-schedule-consultation-final"
            >
              Schedule Free Consultation
            </button>
            <button 
              onClick={onStartAssessment}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-blue transition-all"
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
