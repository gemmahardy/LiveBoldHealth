import { useState } from "react";
import { ArrowRight, Calendar, MessageSquare, Users, Activity, FileText, Headphones, Plane } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  bookingUrl: string;
}

export function HeroSection({ onOpenConsultation, bookingUrl }: HeroSectionProps) {
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  
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
      description: "Receive your daily Live Bold Blueprint",
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
        {/* Large centered watermark behind headline */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] sm:w-[850px] h-[700px] sm:h-[850px] opacity-[0.08] rotate-12">
          <SunLogo className="w-full h-full text-brand-blue" />
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
                    className={`bg-gradient-to-br ${step.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg sm:shadow-2xl md:hover:shadow-3xl transition-all duration-300 md:hover:scale-105 active:scale-95 relative overflow-hidden ${step.number === 4 ? 'cursor-pointer' : ''}`}
                    onClick={() => step.number === 4 && setIsBlueprintOpen(true)}
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
                      {step.number === 4 && (
                        <p className="text-white/80 text-xs mt-2 italic">Click to see example →</p>
                      )}
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

      {/* Sample Blueprint Dialog */}
      <Dialog open={isBlueprintOpen} onOpenChange={setIsBlueprintOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-playfair font-bold text-luxury-charcoal mb-4">
              Sample Live Bold Blueprint
            </DialogTitle>
            <p className="text-brand-slate text-base">
              30-Day Endurance, Recovery & Longevity Plan
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              This sample report shows what new clients can expect when they receive their personalized health optimization plan. Each plan is data-driven, tailored, and built around sustainable practices.
            </p>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* Health & Performance Summary */}
            <div>
              <h3 className="text-xl font-bold text-luxury-charcoal mb-3">Health & Performance Summary</h3>
              <p className="text-gray-600">Your assessment highlights both strengths and growth opportunities for optimal results.</p>
            </div>

            {/* Longevity Insights */}
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-luxury-charcoal mb-4">Longevity Insights - Example Client Results</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-blue">54</div>
                  <div className="text-sm text-gray-600">Chronological Age</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-blue">42</div>
                  <div className="text-sm text-gray-600">Metabolic Age</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">12 Years</div>
                  <div className="text-sm text-gray-600">Younger!</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">
                This suggests strong cardiovascular health, efficient oxygen use, and reduced long-term disease risk.
              </p>
            </div>

            {/* Strengths and Areas to Improve */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-3">✓ Strengths</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700"><strong>VO₂peak:</strong> Excellent — strong aerobic performance</li>
                  <li className="text-gray-700"><strong>Oxygen Circulation:</strong> Excellent — efficient delivery to muscles</li>
                  <li className="text-gray-700"><strong>Lung Utilization:</strong> Excellent — full breathing capacity</li>
                  <li className="text-gray-700"><strong>Movement Economy:</strong> Excellent — minimal wasted energy</li>
                  <li className="text-gray-700"><strong>Nervous System Balance:</strong> Excellent — resilient stress-recovery cycles</li>
                  <li className="text-gray-700"><strong>Heart Rate Variability:</strong> Excellent — adaptable cardiovascular system</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-3">→ Areas to Improve</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700"><strong>Fat-Burning Efficiency:</strong> Improve with Zone 2 training and fasting</li>
                  <li className="text-gray-700"><strong>Metabolic Rate:</strong> Boost through strength training and higher protein intake</li>
                  <li className="text-gray-700"><strong>Ventilation Efficiency:</strong> Strengthen with structured breathwork</li>
                  <li className="text-gray-700"><strong>Recovery Capacity:</strong> Accelerate with recovery strategies to increase training consistency</li>
                </ul>
              </div>
            </div>

            {/* 30-Day Goals */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-luxury-charcoal mb-3">30-Day Goals</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold">1.</span>
                  <span className="text-sm text-gray-700">Increase fat-burning efficiency to reduce early fatigue</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold">2.</span>
                  <span className="text-sm text-gray-700">Boost recovery speed for faster progress and consistency</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold">3.</span>
                  <span className="text-sm text-gray-700">Maintain high VO₂peak for superior aerobic health</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold">4.</span>
                  <span className="text-sm text-gray-700">Raise metabolic rate by building lean muscle mass</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold">5.</span>
                  <span className="text-sm text-gray-700">Enhance breathing coordination and oxygen utilization</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold">6.</span>
                  <span className="text-sm text-gray-700">Support cellular repair and longevity with nutrition and lifestyle practices</span>
                </div>
              </div>
            </div>

            {/* Lifestyle & Daily Practices */}
            <div>
              <h4 className="font-bold text-luxury-charcoal mb-3">Lifestyle & Daily Practices - Core Recommendations</h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-semibold text-sm text-brand-blue">Hydration</div>
                  <div className="text-xs text-gray-600">2.5–3 L/day (electrolytes on run/HIIT days)</div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-semibold text-sm text-brand-blue">Supplements</div>
                  <div className="text-xs text-gray-600">Creatine, Vitamin D3 + K2, Omega-3, Turmeric + black pepper, Probiotics</div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-semibold text-sm text-brand-blue">Fasting</div>
                  <div className="text-xs text-gray-600">16:8 schedule, 2–3 days per week</div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-semibold text-sm text-brand-blue">Grounding</div>
                  <div className="text-xs text-gray-600">10–15 minutes barefoot outdoors</div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-semibold text-sm text-brand-blue">Cold Exposure</div>
                  <div className="text-xs text-gray-600">2–3 times per week</div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-semibold text-sm text-brand-blue">Breathwork</div>
                  <div className="text-xs text-gray-600">5 minutes daily (box breathing or alternate nostril)</div>
                </div>
              </div>
            </div>

            {/* Sample Weekly Schedule */}
            <div>
              <h4 className="font-bold text-luxury-charcoal mb-3">Sample Weekly Schedule</h4>
              <div className="space-y-2">
                {[
                  { day: "Monday", activity: "Zone 2 Run + barefoot walk" },
                  { day: "Tuesday", activity: "Strength Circuit + breathwork" },
                  { day: "Wednesday", activity: "HIIT Intervals + cooldown" },
                  { day: "Thursday", activity: "Active Recovery (walk, yoga, breathwork)" },
                  { day: "Friday", activity: "Zone 2 Run" },
                  { day: "Saturday", activity: "Hill Sprints + Plyometrics" },
                  { day: "Sunday", activity: "Mobility & Core Strength + stretching" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-yellow-50/30 rounded p-2">
                    <div className="font-semibold text-sm text-brand-blue w-24">{item.day}</div>
                    <div className="text-sm text-gray-700">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-luxury-gradient text-white rounded-xl p-6 text-center">
              <h4 className="font-bold text-xl mb-2">Ready for Your Personalized Plan?</h4>
              <p className="text-sm text-white/90 mb-4">
                ✨ This sample is only a preview. Each client report is tailored with precise data, making your program unique to your body, goals, and lifestyle.
              </p>
              <Button
                onClick={() => {
                  setIsBlueprintOpen(false);
                  window.open(bookingUrl, '_blank', 'noopener,noreferrer');
                }}
                className="bg-white text-brand-blue px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
