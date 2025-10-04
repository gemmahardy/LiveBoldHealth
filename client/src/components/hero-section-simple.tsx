import { ArrowRight, Calendar, MessageSquare, Users, Activity, FileText, Headphones, Plane } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  bookingUrl: string;
}

export function HeroSection({ onOpenConsultation, bookingUrl }: HeroSectionProps) {
  const sixSteps = [
    { 
      number: 1, 
      title: "Book Consult", 
      description: "Schedule your free consultation",
      icon: MessageSquare,
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      number: 2, 
      title: "Join Membership", 
      description: "Choose your membership tier",
      icon: Users,
      gradient: "from-yellow-400 to-yellow-500"
    },
    { 
      number: 3, 
      title: "VO₂ Max + RMR", 
      description: "Get baseline performance testing",
      icon: Activity,
      gradient: "from-blue-600 to-purple-600"
    },
    { 
      number: 4, 
      title: "Personal Plan", 
      description: "Receive your custom health blueprint",
      icon: FileText,
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      number: 5, 
      title: "Activate Coaching", 
      description: "Begin concierge-managed support",
      icon: Headphones,
      gradient: "from-purple-600 to-blue-500"
    },
    { 
      number: 6, 
      title: "Book Adventure", 
      description: "Experience transformative travel",
      icon: Plane,
      gradient: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 sm:w-[500px] h-96 sm:h-[500px] opacity-20">
          <SunLogo className="w-full h-full text-brand-blue" />
        </div>
        <div className="absolute bottom-1/4 left-0 w-80 sm:w-[450px] h-80 sm:h-[450px] opacity-15">
          <SunLogo className="w-full h-full text-brand-gold" />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-yellow-50/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-luxury-charcoal mb-4 sm:mb-6 leading-tight px-2">
            Concierge Health & Longevity, Elevated by Adventure
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-brand-slate mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Master your health with VO₂ Max testing, personalized coaching, and transformative wellness adventures for busy executives and families.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center text-luxury-charcoal mb-6 sm:mb-8 md:mb-12 px-2">
            Your Journey in 6 Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative">
            {sixSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative group"
                  data-testid={`step-${step.number}`}
                >
                  {/* Connecting Arrow - only show between steps on larger screens */}
                  {index < sixSteps.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                      <ArrowRight className="w-6 h-6 text-brand-gold opacity-40" />
                    </div>
                  )}
                  
                  <div 
                    className={`bg-gradient-to-br ${step.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg sm:shadow-2xl md:hover:shadow-3xl transition-all duration-300 md:hover:scale-105 active:scale-95 relative overflow-hidden`}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 opacity-10">
                      <SunLogo className="w-full h-full text-white" />
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-24 sm:w-32 h-24 sm:h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <SunLogo className="w-full h-full text-white" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Large Number Badge */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border-2 border-white/30">
                          <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">{step.number}</span>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-playfair">
                        {step.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto px-4">
          <Button
            onClick={onOpenConsultation}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-8 py-5 sm:py-5 md:py-6 text-base sm:text-lg font-semibold hover:shadow-xl transition-all rounded-full w-full sm:w-auto hover:from-blue-700 hover:to-blue-600 active:scale-95 min-h-[48px]"
            data-testid="button-schedule-consultation"
          >
            <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">Schedule Free Consultation</span>
          </Button>
          
          <Button
            onClick={() => {
              const element = document.getElementById('membership');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            className="border-2 border-brand-blue text-brand-blue px-6 sm:px-8 py-5 sm:py-5 md:py-6 text-base sm:text-lg font-semibold hover:bg-brand-blue hover:text-white transition-all rounded-full w-full sm:w-auto active:scale-95 min-h-[48px]"
            data-testid="button-see-membership"
          >
            <span className="whitespace-nowrap">See Membership Options</span>
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
