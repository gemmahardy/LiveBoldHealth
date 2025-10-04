import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  bookingUrl: string;
}

export function HeroSection({ onOpenConsultation, bookingUrl }: HeroSectionProps) {
  const sixSteps = [
    { number: 1, title: "Book Consult", description: "Schedule your free consultation" },
    { number: 2, title: "Join Membership", description: "Choose your membership tier" },
    { number: 3, title: "VO₂ Max + RMR", description: "Get baseline performance testing" },
    { number: 4, title: "Personal Plan", description: "Receive your custom health blueprint" },
    { number: 5, title: "Activate Coaching", description: "Begin concierge-managed support" },
    { number: 6, title: "Book Adventure", description: "Experience transformative travel" }
  ];

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-luxury-gray overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-10">
          <SunLogo className="w-96 h-96" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-luxury-charcoal mb-6 leading-tight">
            Concierge Health & Longevity,
            <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-gold bg-clip-text text-transparent">
              Elevated by Adventure
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-brand-slate mb-8 leading-relaxed max-w-3xl mx-auto">
            Master your health with VO₂ Max testing, personalized coaching, and transformative wellness adventures for busy executives and families.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center text-luxury-charcoal mb-8">
            Your Journey in 6 Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixSteps.map((step) => (
              <div 
                key={step.number}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`step-${step.number}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-luxury-gradient flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-luxury-charcoal">
                    {step.title}
                  </h3>
                </div>
                <p className="text-brand-slate text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button
            onClick={onOpenConsultation}
            className="bg-luxury-gradient text-white px-8 py-6 text-lg font-semibold hover:shadow-xl transition-all rounded-full w-full sm:w-auto"
            data-testid="button-schedule-consultation"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </Button>
          
          <Button
            onClick={() => {
              const element = document.getElementById('membership');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            className="border-2 border-brand-blue text-brand-blue px-8 py-6 text-lg font-semibold hover:bg-brand-blue hover:text-white transition-all rounded-full w-full sm:w-auto"
            data-testid="button-see-membership"
          >
            See Membership Options
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
