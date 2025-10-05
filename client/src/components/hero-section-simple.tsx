import { useState } from "react";
import { ArrowRight, Calendar, MessageSquare, Users, Activity, FileText, Headphones, Plane, Sparkles, ExternalLink, Info } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  bookingUrl: string;
}

export function HeroSection({ onOpenConsultation, bookingUrl }: HeroSectionProps) {
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [isStep3ModalOpen, setIsStep3ModalOpen] = useState(false);
  const [isStep5ModalOpen, setIsStep5ModalOpen] = useState(false);
  
  const handleStepClick = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        onOpenConsultation();
        break;
      case 2:
        document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        setIsStep3ModalOpen(true);
        break;
      case 4:
        setIsBlueprintOpen(true);
        break;
      case 5:
        setIsStep5ModalOpen(true);
        break;
      case 6:
        document.getElementById('adventures')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };
  
  const sixSteps = [
    { 
      number: 1, 
      title: "Book Consult", 
      description: "Schedule your free consultation",
      icon: MessageSquare,
      gradient: "from-blue-500 to-blue-600",
      actionType: "cta" as const,
      actionText: "Book Now"
    },
    { 
      number: 2, 
      title: "Join Membership", 
      description: "Choose your membership tier",
      icon: Users,
      gradient: "from-yellow-400 to-yellow-500",
      actionType: "cta" as const,
      actionText: "See Options"
    },
    { 
      number: 3, 
      title: "VO₂ Max + RMR", 
      description: "Get baseline performance testing",
      icon: Activity,
      gradient: "from-blue-600 to-purple-600",
      actionType: "info" as const,
      actionText: "Learn More"
    },
    { 
      number: 4, 
      title: "Personal Plan", 
      description: "Receive your wellness Live Bold Blueprint",
      icon: FileText,
      gradient: "from-yellow-500 to-orange-500",
      actionType: "info" as const,
      actionText: "See Example"
    },
    { 
      number: 5, 
      title: "Activate Coaching", 
      description: "Begin concierge-managed support",
      icon: Headphones,
      gradient: "from-purple-600 to-blue-500",
      actionType: "info" as const,
      actionText: "Learn More"
    },
    { 
      number: 6, 
      title: "Book Adventure", 
      description: "Experience transformative travel",
      icon: Plane,
      gradient: "from-orange-500 to-yellow-400",
      actionType: "cta" as const,
      actionText: "View Adventures"
    }
  ];

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large centered watermark behind headline */}
        <div className="absolute top-24 sm:top-32 md:top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] md:w-[850px] h-[600px] sm:h-[750px] md:h-[850px] opacity-[0.06] sm:opacity-[0.08] rotate-12">
          <SunLogo className="w-full h-full text-brand-blue" />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-yellow-50/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-luxury-charcoal mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            Concierge Health & Longevity,<br className="sm:hidden" /> Elevated by Adventure
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-slate mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Master your health with VO₂ Max testing, personalized coaching, and transformative wellness adventures for busy executives and families.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center text-luxury-charcoal mb-3 sm:mb-4 md:mb-6 px-2">
            Your Journey in 6 Steps
          </h2>
          <p className="text-center text-brand-slate text-sm sm:text-base md:text-lg lg:text-xl mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            A clear, transformative path to optimal health and longevity
          </p>
          
          {/* Vertical Timeline Design */}
          <div className="relative max-w-6xl mx-auto px-2">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue via-brand-gold to-brand-blue transform -translate-x-1/2"></div>
            
            <div className="space-y-6 sm:space-y-10 md:space-y-12">
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
                    <div className={`hidden lg:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-6 xl:gap-8`}>
                      {/* Content Card */}
                      <div className="flex-1">
                        <div 
                          className={`
                            group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                            transition-all duration-500 overflow-hidden border-2 cursor-pointer hover:scale-[1.02]
                            ${isStep4 ? 'border-yellow-500 ring-4 ring-yellow-400/20 animate-pulse' : 'border-gray-100 hover:border-brand-blue/30'}
                            ${isEven ? 'ml-auto' : 'mr-auto'}
                          `}
                          style={{ maxWidth: '520px' }}
                          onClick={() => handleStepClick(step.number)}
                        >
                          {/* Step Number Badge - Outside card */}
                          <div className={`absolute ${isEven ? '-right-5' : '-left-5'} top-6 z-20`}>
                            <div className={`w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-white`}>
                              <span className="text-white font-bold text-xl xl:text-2xl">{step.number}</span>
                            </div>
                          </div>
                          
                          {/* Card Content */}
                          <div className="p-5 xl:p-7">
                            <div className="flex items-start justify-between mb-3 xl:mb-4">
                              <div className="flex-1">
                                <h3 className="text-xl xl:text-2xl font-bold text-luxury-charcoal mb-2 font-playfair">
                                  {step.title}
                                </h3>
                                <p className="text-brand-slate text-sm xl:text-base leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                              <div className={`ml-3 xl:ml-4 w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
                              </div>
                            </div>
                            
                            <div 
                              className={`mt-4 inline-flex items-center space-x-2 px-5 py-3 rounded-full border-2 transition-all ${
                                step.actionType === 'cta' 
                                  ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500 hover:from-blue-500/20 hover:to-blue-600/20' 
                                  : 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-500 hover:from-yellow-400/30 hover:to-orange-500/30'
                              }`}
                              data-testid={`badge-step-${step.number}-desktop`}
                            >
                              {step.actionType === 'cta' ? (
                                <ExternalLink className="w-5 h-5 text-blue-600" />
                              ) : (
                                <Info className="w-5 h-5 text-yellow-600" />
                              )}
                              <span className="text-luxury-charcoal font-bold text-sm">{step.actionText} →</span>
                            </div>
                          </div>
                          
                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      
                      {/* Spacer for other side */}
                      <div className="flex-1"></div>
                    </div>
                    
                    {/* Mobile & Tablet Layout */}
                    <div className="lg:hidden px-2 sm:px-3">
                      <div 
                        className={`
                          group relative bg-white rounded-xl sm:rounded-2xl shadow-lg active:shadow-xl
                          transition-all duration-300 overflow-hidden border-2 cursor-pointer active:scale-[0.98]
                          ${isStep4 ? 'border-yellow-500 ring-4 ring-yellow-400/20' : 'border-gray-100 active:border-brand-blue/30'}
                        `}
                        onClick={() => handleStepClick(step.number)}
                      >
                        {/* Step Number Badge */}
                        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl border-3 sm:border-4 border-white`}>
                            <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">{step.number}</span>
                          </div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="p-4 sm:p-5 md:p-6 pt-7 sm:pt-8 md:pt-10">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1 pr-2 sm:pr-3">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-luxury-charcoal mb-1 sm:mb-2 font-playfair leading-tight">
                                {step.title}
                              </h3>
                              <p className="text-brand-slate text-xs sm:text-sm md:text-base leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                            </div>
                          </div>
                          
                          <div 
                            className={`mt-3 sm:mt-4 inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full border-2 shadow-sm active:scale-95 transition-transform ${
                              step.actionType === 'cta' 
                                ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-500' 
                                : 'bg-gradient-to-r from-yellow-400/30 to-orange-500/30 border-yellow-500'
                            } ${isStep4 ? 'animate-pulse' : ''}`}
                            data-testid={`badge-step-${step.number}-mobile`}
                          >
                            {step.actionType === 'cta' ? (
                              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-600 flex-shrink-0" />
                            )}
                            <span className="text-luxury-charcoal font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">{step.actionText} →</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection Line for Mobile */}
                      {index < sixSteps.length - 1 && (
                        <div className="flex justify-center py-3 sm:py-4 md:py-5">
                          <div className="w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-brand-blue to-brand-gold rounded-full"></div>
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

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center max-w-3xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 md:mt-12">
          <Button
            onClick={onOpenConsultation}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold hover:shadow-xl transition-all rounded-full w-full sm:w-auto hover:from-blue-700 hover:to-blue-600 active:scale-95 min-h-[50px] sm:min-h-[54px] md:min-h-[60px]"
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
            className="border-2 border-brand-blue text-brand-blue px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold hover:bg-brand-blue hover:text-white transition-all rounded-full w-full sm:w-auto active:scale-95 min-h-[50px] sm:min-h-[54px] md:min-h-[60px]"
            data-testid="button-see-membership"
          >
            <span className="whitespace-nowrap">See Membership Options</span>
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      {/* Sample Blueprint Dialog */}
      <Dialog open={isBlueprintOpen} onOpenChange={setIsBlueprintOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto mx-3 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 leading-tight">
              Sample Live Bold Blueprint
            </DialogTitle>
            <p className="text-brand-slate text-sm sm:text-base">
              30-Day Endurance, Recovery & Longevity Plan
            </p>
            <p className="text-xs sm:text-sm text-gray-600 italic mt-2">
              This sample report shows what new clients can expect when they receive their personalized health optimization plan. Each plan is data-driven, tailored, and built around sustainable practices.
            </p>
          </DialogHeader>
          
          <div className="space-y-5 sm:space-y-6 mt-3 sm:mt-4">
            {/* Health & Performance Summary */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-luxury-charcoal mb-2 sm:mb-3">Health & Performance Summary</h3>
              <p className="text-sm sm:text-base text-gray-600">Your assessment highlights both strengths and growth opportunities for optimal results.</p>
            </div>

            {/* Longevity Insights */}
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50/30 rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold text-luxury-charcoal mb-3 sm:mb-4">Longevity Insights - Example Client Results</h4>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-blue">54</div>
                  <div className="text-xs sm:text-sm text-gray-600">Chronological Age</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-blue">42</div>
                  <div className="text-xs sm:text-sm text-gray-600">Metabolic Age</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">12 Years</div>
                  <div className="text-xs sm:text-sm text-gray-600">Younger!</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center">
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
            <div className="bg-luxury-gradient text-white rounded-xl p-5 sm:p-6 text-center">
              <h4 className="font-bold text-lg sm:text-xl mb-2">Ready for Your Personalized Plan?</h4>
              <p className="text-xs sm:text-sm text-white/90 mb-4 leading-relaxed">
                ✨ This sample is only a preview. Each client report is tailored with precise data, making your program unique to your body, goals, and lifestyle.
              </p>
              <Button
                onClick={() => {
                  setIsBlueprintOpen(false);
                  window.open(bookingUrl, '_blank', 'noopener,noreferrer');
                }}
                className="bg-white text-brand-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base w-full sm:w-auto min-h-[48px]"
                data-testid="button-book-from-modal"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Step 3: VO₂ Max + RMR Testing Modal */}
      <Dialog open={isStep3ModalOpen} onOpenChange={setIsStep3ModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto mx-3 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 leading-tight">
              VO₂ Max + RMR Testing
            </DialogTitle>
            <p className="text-brand-slate text-sm sm:text-base">
              Precision performance assessment for optimal health
            </p>
          </DialogHeader>
          
          <div className="space-y-5 sm:space-y-6 mt-3 sm:mt-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-luxury-charcoal mb-3">What is VO₂ Max Testing?</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                VO₂ Max is the gold standard measurement of your body's ability to utilize oxygen during intense exercise. This test reveals your cardiovascular fitness, aerobic capacity, and overall metabolic health—key indicators that Dr. Peter Attia calls "the strongest predictor of longevity."
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold text-luxury-charcoal mb-3">What You'll Discover</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold mt-1">•</span>
                  <span><strong>Your VO₂peak:</strong> Maximum oxygen uptake capacity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold mt-1">•</span>
                  <span><strong>Metabolic age:</strong> How your body compares to your chronological age</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold mt-1">•</span>
                  <span><strong>Fat-burning zones:</strong> Optimize training for body composition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold mt-1">•</span>
                  <span><strong>Ventilation efficiency:</strong> How well you breathe under stress</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-blue font-bold mt-1">•</span>
                  <span><strong>Heart rate variability:</strong> Measure of nervous system resilience</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-luxury-charcoal mb-3">What is RMR Testing?</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                Resting Metabolic Rate (RMR) measures how many calories your body burns at rest. This baseline metabolic data helps us create precise nutrition and training plans tailored to your unique physiology.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Combined with VO₂ Max results, RMR testing provides a complete picture of your metabolic health, allowing us to design personalized strategies for fat loss, muscle gain, energy optimization, and longevity.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 border-2 border-yellow-200">
              <h4 className="text-base sm:text-lg font-bold text-luxury-charcoal mb-2">The Testing Experience</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                Our comprehensive assessment takes approximately 60-90 minutes and includes:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>• Pre-test health consultation</li>
                <li>• Graded exercise protocol on treadmill or bike</li>
                <li>• Real-time monitoring with medical-grade equipment</li>
                <li>• Immediate results review with our team</li>
                <li>• Detailed report with actionable insights</li>
              </ul>
            </div>

            <div className="bg-luxury-gradient text-white rounded-xl p-5 sm:p-6 text-center">
              <h4 className="font-bold text-lg sm:text-xl mb-2">Ready to Measure Your Potential?</h4>
              <p className="text-xs sm:text-sm text-white/90 mb-4 leading-relaxed">
                Book your free consultation to learn more about VO₂ Max + RMR testing and how it fits into your wellness journey.
              </p>
              <Button
                onClick={() => {
                  setIsStep3ModalOpen(false);
                  onOpenConsultation();
                }}
                className="bg-white text-brand-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base w-full sm:w-auto min-h-[48px]"
                data-testid="button-book-from-step3-modal"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Step 5: Coaching Services Modal */}
      <Dialog open={isStep5ModalOpen} onOpenChange={setIsStep5ModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto mx-3 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 leading-tight">
              Concierge Coaching Services
            </DialogTitle>
            <p className="text-brand-slate text-sm sm:text-base">
              Personalized support for your health transformation
            </p>
          </DialogHeader>
          
          <div className="space-y-5 sm:space-y-6 mt-3 sm:mt-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-luxury-charcoal mb-3">What is Concierge Coaching?</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our concierge coaching service provides dedicated, one-on-one support from wellness experts who understand the demands of high-performance lifestyles. Think of us as your personal health team—available when you need us, guiding every step of your transformation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold text-luxury-charcoal mb-3">Your Coaching Team Includes</h4>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span><strong>Wellness Concierge:</strong> Your primary point of contact for scheduling, coordination, and support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span><strong>Performance Coach:</strong> Expert guidance on fitness, training, and movement optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span><strong>Nutrition Specialist:</strong> Personalized meal planning and dietary strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span><strong>Adventure Planner:</strong> Curate transformative experiences aligned with your goals</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-luxury-charcoal mb-3">How Coaching Works</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Personalized Plan Review</h5>
                    <p className="text-sm text-gray-600">We review your Live Bold Blueprint together and set clear, achievable goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Weekly Check-ins</h5>
                    <p className="text-sm text-gray-600">Regular touchpoints to track progress, adjust strategies, and maintain accountability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">24/7 Access</h5>
                    <p className="text-sm text-gray-600">Text, email, or call us anytime—your wellness concierge is always available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Continuous Optimization</h5>
                    <p className="text-sm text-gray-600">Monthly performance reviews with plan adjustments based on your progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-yellow-50/30 rounded-xl p-4 sm:p-6 border-2 border-brand-blue">
              <h4 className="text-base sm:text-lg font-bold text-luxury-charcoal mb-3">Premium Add-On Service</h4>
              <div className="bg-white rounded-lg p-4 sm:p-5 shadow-md">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h5 className="font-bold text-luxury-charcoal text-base sm:text-lg">Private Fitness Coaching</h5>
                    <p className="text-sm text-gray-600 mt-1">One-on-one personalized training session with our expert fitness coach</p>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl sm:text-3xl font-bold text-brand-blue">$500</div>
                    <div className="text-xs text-gray-500 text-right">per session</div>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-blue font-bold mt-0.5">✓</span>
                    <span>60-minute private session</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-blue font-bold mt-0.5">✓</span>
                    <span>Customized workout programming</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-blue font-bold mt-0.5">✓</span>
                    <span>Form correction & technique optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-blue font-bold mt-0.5">✓</span>
                    <span>Performance tracking & progress metrics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 border-2 border-yellow-200">
              <h4 className="text-base sm:text-lg font-bold text-luxury-charcoal mb-2">What's Included in Coaching Packages</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm sm:text-base text-gray-700">
                <li>• Weekly 1-on-1 coaching calls</li>
                <li>• Custom meal plans & recipes</li>
                <li>• Training program adjustments</li>
                <li>• Supplement recommendations</li>
                <li>• Progress tracking & analytics</li>
                <li>• Priority adventure booking</li>
                <li>• Wellness resource library</li>
                <li>• Community group access</li>
              </ul>
            </div>

            <div className="bg-luxury-gradient text-white rounded-xl p-5 sm:p-6 text-center">
              <h4 className="font-bold text-lg sm:text-xl mb-2">Start Your Coaching Journey</h4>
              <p className="text-xs sm:text-sm text-white/90 mb-4 leading-relaxed">
                Coaching is available through our Monthly A La Carte Menu. Book a consultation to explore which services are right for you.
              </p>
              <Button
                onClick={() => {
                  setIsStep5ModalOpen(false);
                  onOpenConsultation();
                }}
                className="bg-white text-brand-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base w-full sm:w-auto min-h-[48px]"
                data-testid="button-book-from-step5-modal"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
