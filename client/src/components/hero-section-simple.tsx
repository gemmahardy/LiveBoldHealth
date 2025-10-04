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
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 opacity-10">
          <SunLogo className="w-full h-full text-brand-blue" />
        </div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 opacity-5">
          <SunLogo className="w-full h-full text-brand-gold" />
        </div>
        <div className="absolute -bottom-10 right-1/3 w-48 h-48 opacity-10">
          <SunLogo className="w-full h-full text-brand-blue" />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-yellow-50/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-luxury-charcoal mb-6 leading-tight">
            Concierge Health & Longevity, Elevated by Adventure
          </h1>
          
          <p className="text-xl sm:text-2xl text-brand-slate mb-8 leading-relaxed max-w-3xl mx-auto">
            Master your health with VO₂ Max testing, personalized coaching, and transformative wellness adventures for busy executives and families.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-center text-luxury-charcoal mb-12">
            Your Journey in 6 Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
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
                    className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 relative overflow-hidden`}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10">
                      <SunLogo className="w-full h-full text-white" />
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <SunLogo className="w-full h-full text-white" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Large Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border-2 border-white/30">
                          <span className="text-white font-bold text-2xl">{step.number}</span>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 font-playfair">
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button
            onClick={onOpenConsultation}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-6 text-lg font-semibold hover:shadow-xl transition-all rounded-full w-full sm:w-auto hover:from-blue-700 hover:to-blue-600"
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
