import { useState } from "react";
import { ArrowRight, Calendar, MessageSquare, Users, Activity, FileText, Headphones, Plane, Sparkles } from "lucide-react";
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
      description: "Receive your wellness Live Bold Blueprint",
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

        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center text-luxury-charcoal mb-4 px-2">
            Your Journey in 6 Steps
          </h2>
          <p className="text-center text-brand-slate text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            A clear, transformative path to optimal health and longevity
          </p>
          
          {/* Vertical Timeline Design */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue via-brand-gold to-brand-blue transform -translate-x-1/2"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {sixSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                const isStep4 = step.number === 4;
                
                return (
                  <div 
                    key={step.number}
                    className="relative"
                    data-testid={`step-${step.number}`}
                  >
                    {/* Desktop Layout - Alternating */}
                    <div className={`hidden lg:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                      {/* Content Card */}
                      <div className="flex-1">
                        <div 
                          className={`
                            group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl 
                            transition-all duration-500 overflow-hidden border-2
                            ${isStep4 ? 'border-brand-gold cursor-pointer hover:scale-105 ring-4 ring-brand-gold/20 animate-pulse' : 'border-gray-100 hover:border-brand-blue/30'}
                            ${isEven ? 'ml-auto' : 'mr-auto'}
                          `}
                          style={{ maxWidth: '500px' }}
                          onClick={() => isStep4 && setIsBlueprintOpen(true)}
                        >
                          {/* Step Number Badge - Outside card */}
                          <div className={`absolute ${isEven ? '-right-6' : '-left-6'} top-8 z-20`}>
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-white`}>
                              <span className="text-white font-bold text-2xl">{step.number}</span>
                            </div>
                          </div>
                          
                          {/* Card Content */}
                          <div className="p-6 sm:p-8">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-luxury-charcoal mb-2 font-playfair">
                                  {step.title}
                                </h3>
                                <p className="text-brand-slate text-base leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                              <div className={`ml-4 w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-7 h-7 text-white" />
                              </div>
                            </div>
                            
                            {isStep4 && (
                              <div className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-brand-gold/10 to-orange-500/10 px-5 py-3 rounded-full border-2 border-brand-gold/30">
                                <Sparkles className="w-5 h-5 text-brand-gold" />
                                <span className="text-luxury-charcoal font-bold text-sm">Click to see example →</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      
                      {/* Spacer for other side */}
                      <div className="flex-1"></div>
                    </div>
                    
                    {/* Mobile & Tablet Layout */}
                    <div className="lg:hidden px-4">
                      <div 
                        className={`
                          group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl 
                          transition-all duration-500 overflow-hidden border-2
                          ${isStep4 ? 'border-brand-gold cursor-pointer hover:scale-105 ring-4 ring-brand-gold/20' : 'border-gray-100'}
                        `}
                        onClick={() => isStep4 && setIsBlueprintOpen(true)}
                      >
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -left-4 z-20">
                          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-white`}>
                            <span className="text-white font-bold text-xl">{step.number}</span>
                          </div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="p-6 pt-8">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1 pr-4">
                              <h3 className="text-xl font-bold text-luxury-charcoal mb-2 font-playfair">
                                {step.title}
                              </h3>
                              <p className="text-brand-slate text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          {isStep4 && (
                            <div className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-brand-gold/10 to-orange-500/10 px-4 py-2.5 rounded-full border-2 border-brand-gold/30 animate-pulse">
                              <Sparkles className="w-4 h-4 text-brand-gold" />
                              <span className="text-luxury-charcoal font-bold text-xs">Click to see example →</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Connection Line for Mobile */}
                      {index < sixSteps.length - 1 && (
                        <div className="flex justify-center py-4">
                          <div className="w-0.5 h-8 bg-gradient-to-b from-brand-blue to-brand-gold"></div>
                        </div>
                      )}
                    </div>
                    
                    {/* Center Connection Dot for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.gradient} border-4 border-white shadow-lg`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
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
