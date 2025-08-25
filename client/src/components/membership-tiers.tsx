import { User, Crown, Gem, Check } from "lucide-react";
import { Button } from "./ui/button";

export function MembershipTiers() {
  const tiers = [
    {
      id: "essential",
      name: "Essential Concierge",
      description: "Perfect for getting started with personalized health optimization",
      price: "$5,000",
      period: "per month",
      icon: User,
      iconColor: "from-gray-400 to-gray-600",
      features: [
        "Monthly 1:1 Coaching Calls",
        "Personalized Health Blueprint",
        "Custom Meal & Workout Plans",
        "Basic Biometric Tracking",
        "Direct Text Support"
      ],
      buttonStyle: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
      buttonText: "Get Started"
    },
    {
      id: "vip",
      name: "VIP Concierge",
      description: "Complete health optimization with priority access and adventures",
      price: "$10,000", 
      period: "per month",
      icon: Crown,
      iconColor: "bg-luxury-gradient",
      popular: true,
      features: [
        "Weekly 1:1 coaching + priority access",
        "Advanced biometric optimization",
        "Travel wellness protocols", 
        "Monthly adventure experiences",
        "24/7 concierge support",
        "Exclusive longevity clinic access"
      ],
      buttonStyle: "bg-luxury-gradient text-white hover:shadow-xl",
      buttonText: "Join VIP"
    },
    {
      id: "founders",
      name: "Founders Circle",
      description: "Ultra-premium all-inclusive with luxury retreats and unlimited access",
      price: "$100,000",
      period: "per year", 
      icon: Gem,
      iconColor: "from-yellow-400 to-yellow-600",
      features: [
        "Unlimited coaching & support",
        "Luxury wellness retreats (4/year)",
        "Executive peer networking",
        "Cutting-edge biohacking access",
        "White-glove travel coordination",
        "Family health optimization"
      ],
      buttonStyle: "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white",
      buttonText: "Apply Now"
    }
  ];

  const handleSelectMembership = (tierId: string) => {
    console.log(`Selected membership tier: ${tierId}`);
    // Implementation for membership selection
  };

  return (
    <section id="membership" className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-4">
            Membership Tiers
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the level of concierge health support that matches your lifestyle and ambitions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <div 
                key={tier.id}
                className={`luxury-card rounded-2xl p-8 premium-hover transition-all duration-300 relative overflow-hidden ${tier.popular ? 'ring-2 ring-brand-orange' : ''}`}
                data-testid={`membership-tier-${tier.id}`}
              >
                {tier.popular && (
                  <div className="absolute -top-2 -right-2 bg-brand-orange text-white px-6 py-2 rounded-bl-xl font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center space-y-6">
                  <div className={`w-16 h-16 ${tier.iconColor} rounded-full flex items-center justify-center mx-auto`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-2xl font-bold mb-2" data-testid={`tier-name-${tier.id}`}>
                      {tier.name}
                    </h4>
                    <p className="text-gray-600 mb-6" data-testid={`tier-description-${tier.id}`}>
                      {tier.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-luxury-charcoal" data-testid={`tier-price-${tier.id}`}>
                      {tier.price}
                    </p>
                    <p className="text-gray-600" data-testid={`tier-period-${tier.id}`}>
                      {tier.period}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3" data-testid={`tier-feature-${tier.id}-${index}`}>
                        <Check className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleSelectMembership(tier.id)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${tier.buttonStyle}`}
                    data-testid={`button-select-tier-${tier.id}`}
                  >
                    {tier.buttonText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
