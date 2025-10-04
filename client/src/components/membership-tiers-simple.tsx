import { Check, Star, Crown, Users } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";

interface MembershipTiersProps {
  bookingUrl: string;
}

export function MembershipTiersSimple({ bookingUrl }: MembershipTiersProps) {
  const tiers = [
    {
      name: "Community Membership",
      icon: Users,
      price: "$2,500",
      period: "/year",
      description: "Perfect for families and individuals seeking health transformation",
      features: [
        "VO₂ Max & RMR Testing",
        "Personalized Health Plan",
        "Meal Planning & Nutrition Guidance",
        "Fitness Programming",
        "20% Off Adventure Retreats",
        "Additional Family Member: +$500/year"
      ],
      cta: "Join Now",
      highlight: false,
      testId: "tier-community"
    },
    {
      name: "Essential Concierge",
      icon: Star,
      price: "$5,000",
      period: "/month",
      description: "Full-service concierge health management for busy executives",
      features: [
        "Everything in Community",
        "Dedicated Health Concierge",
        "Monthly VO₂ Max Tracking",
        "Weekly Coaching Sessions",
        "Priority Adventure Booking",
        "30% Off All Retreats",
        "Quarterly Performance Reviews"
      ],
      cta: "Apply Now",
      highlight: true,
      testId: "tier-essential"
    },
    {
      name: "VIP Concierge",
      icon: Crown,
      price: "$10,000",
      period: "/month",
      description: "Ultimate white-glove health and longevity optimization",
      features: [
        "Everything in Essential",
        "24/7 Concierge Access",
        "Bi-weekly Testing & Analysis",
        "Daily Check-ins & Support",
        "Unlimited Coaching Sessions",
        "50% Off All Adventures",
        "Custom Adventure Planning",
        "Executive Longevity Program"
      ],
      cta: "Apply Now",
      highlight: false,
      testId: "tier-vip"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-gray via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-5">
        <SunLogo className="w-full h-full text-brand-gold" />
      </div>
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-5">
        <SunLogo className="w-full h-full text-brand-blue" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-luxury-charcoal mb-4">
            Choose Your Membership
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Select the level of support that fits your lifestyle and health goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  tier.highlight
                    ? 'bg-luxury-gradient text-white shadow-2xl scale-105 border-4 border-brand-gold'
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

                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      tier.highlight ? 'bg-white/20' : 'bg-brand-blue/10'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${tier.highlight ? 'text-white' : 'text-brand-blue'}`} />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-playfair font-bold mb-2 ${
                    tier.highlight ? 'text-white' : 'text-luxury-charcoal'
                  }`}>
                    {tier.name}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${
                    tier.highlight ? 'text-white/90' : 'text-brand-slate'
                  }`}>
                    {tier.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${
                      tier.highlight ? 'text-white' : 'text-luxury-charcoal'
                    }`}>
                      {tier.price}
                    </span>
                    <span className={tier.highlight ? 'text-white/80' : 'text-brand-slate'}>
                      {tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlight ? 'text-white' : 'text-brand-blue'
                      }`} />
                      <span className={tier.highlight ? 'text-white' : 'text-brand-slate'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => window.open(bookingUrl, '_blank', 'noopener,noreferrer')}
                  className={`w-full py-6 text-lg font-semibold rounded-full transition-all ${
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
