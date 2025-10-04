import { Check, Star, Crown, Users } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";
import { trackClick } from "@/lib/trackClick";

interface MembershipTiersProps {
  bookingUrl: string;
}

export function MembershipTiersSimple({ bookingUrl }: MembershipTiersProps) {
  const tiers = [
    {
      name: "Community Membership",
      emoji: "☀️",
      icon: Users,
      price: "$2,500",
      period: "/ year",
      additionalPrice: "+$500 / additional family member",
      description: "Perfect for individuals and families beginning their bold transformation.",
      features: [
        "VO₂ Max & RMR Baseline Testing",
        "Personalized Health & Longevity Plan",
        "Custom Meal & Nutrition Guidance",
        "Tailored Fitness Programming",
        "20% Member Discount on Adventure Retreats"
      ],
      cta: "Join Now",
      highlight: false,
      testId: "tier-community"
    },
    {
      name: "Essential Concierge",
      emoji: "🌟",
      icon: Star,
      price: "$5,000",
      period: "/ month",
      description: "Our most popular option for driven leaders who want hands-on health management and measurable results.",
      features: [
        "Everything in Community Membership",
        "Dedicated Personal Health Concierge",
        "Monthly VO₂ Max Tracking & Progress Reviews",
        "Weekly 1:1 Coaching & Accountability",
        "Priority Adventure Booking Access",
        "30% Off All Luxury Retreats",
        "Quarterly Performance Optimization Reports"
      ],
      cta: "Join Now",
      highlight: true,
      testId: "tier-essential"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-luxury-gray via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 w-48 sm:w-64 h-48 sm:h-64 opacity-5">
        <SunLogo className="w-full h-full text-brand-gold" />
      </div>
      <div className="absolute bottom-10 left-10 w-32 sm:w-48 h-32 sm:h-48 opacity-5">
        <SunLogo className="w-full h-full text-brand-blue" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 px-2">
            Choose Your Membership
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-slate max-w-3xl mx-auto px-4">
            Select the level of concierge support that matches your lifestyle, ambition, and health goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 md:hover:scale-105 active:scale-95 ${
                  tier.highlight
                    ? 'bg-luxury-gradient text-white shadow-xl sm:shadow-2xl lg:scale-105 border-2 sm:border-4 border-brand-gold'
                    : 'bg-white border-2 border-brand-blue/20 hover:border-brand-blue/50 shadow-lg hover:shadow-2xl'
                }`}
                data-testid={tier.testId}
              >
                {/* Background Logo */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
                  <SunLogo className={`w-full h-full ${tier.highlight ? 'text-white' : 'text-brand-blue'}`} />
                </div>
                
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-luxury-charcoal px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                    {tier.emoji}
                  </div>
                  
                  <h3 className={`text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-3 ${
                    tier.highlight ? 'text-white' : 'text-luxury-charcoal'
                  }`}>
                    {tier.name}
                  </h3>
                  
                  <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${
                    tier.highlight ? 'text-white/90' : 'text-brand-slate'
                  }`}>
                    {tier.description}
                  </p>
                  
                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-3xl sm:text-4xl font-bold ${
                        tier.highlight ? 'text-white' : 'text-luxury-charcoal'
                      }`}>
                        {tier.price}
                      </span>
                      <span className={`text-base sm:text-lg ${tier.highlight ? 'text-white/80' : 'text-brand-slate'}`}>
                        {tier.period}
                      </span>
                    </div>
                    {tier.additionalPrice && (
                      <p className={`text-xs sm:text-sm mt-1 ${tier.highlight ? 'text-white/70' : 'text-brand-slate'}`}>
                        {tier.additionalPrice}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlight ? 'text-white' : 'text-brand-blue'
                      }`} />
                      <span className={`text-sm sm:text-base ${tier.highlight ? 'text-white' : 'text-brand-slate'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={async () => {
                    await trackClick(`Join Now - ${tier.name}`);
                    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className={`w-full py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold rounded-full transition-all active:scale-95 ${
                    tier.highlight
                      ? 'bg-white text-brand-blue hover:bg-gray-100'
                      : 'bg-luxury-gradient text-white hover:shadow-lg'
                  }`}
                  data-testid={`button-${tier.testId}`}
                >
                  {tier.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
