import { User, Crown, Gem, Check } from "lucide-react";
import { Button } from "./ui/button";

export function MembershipTiers() {
  const membership = {
    id: "live-bold-community",
    name: "Live Bold Community Membership",
    description: "Exclusive yearly membership for health & wellness access and adventure retreats",
    price: "$2,500",
    period: "per person/year",
    additionalPrice: "$500",
    additionalPeriod: "per additional family member/year",
    icon: Crown,
    iconColor: "bg-luxury-gradient",
    features: [
      "VO2 Max Testing & Advanced Biometrics",
      "Adventure Retreat Access",
      "Concierge Educational Information",
      "Personalized Fitness Planning",
      "Custom Meal Planning",
      "Health & Wellness Community Access",
      "Priority Adventure Booking",
      "Annual Health Assessment"
    ],
    buttonStyle: "bg-luxury-gradient text-white hover:shadow-xl",
    buttonText: "Join Community"
  };

  const handleSelectMembership = (tierId: string) => {
    console.log(`Selected membership tier: ${tierId}`);
    // Implementation for membership selection
  };

  return (
    <section id="membership" className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-4">
            Live Bold Community Membership
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exclusive community for health & wellness access, adventure retreats, concierge services, and personalized fitness & meal planning. Experience the Live Bold lifestyle with VO2 max testing and premium wellness support.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div 
            className="luxury-card rounded-2xl p-8 premium-hover transition-all duration-300 relative overflow-hidden ring-2 ring-brand-blue"
            data-testid={`membership-tier-${membership.id}`}
          >
            <div className="absolute -top-2 -right-2 bg-brand-blue text-white px-6 py-2 rounded-bl-xl font-semibold text-sm">
              EXCLUSIVE COMMUNITY
            </div>
            
            <div className="text-center space-y-6">
              <div className={`w-20 h-20 ${membership.iconColor} rounded-full flex items-center justify-center mx-auto`}>
                <membership.icon className="h-8 w-8 text-white" />
              </div>
              
              <div>
                <h4 className="font-playfair text-3xl font-bold mb-2" data-testid={`tier-name-${membership.id}`}>
                  {membership.name}
                </h4>
                <p className="text-gray-600 mb-6 text-lg" data-testid={`tier-description-${membership.id}`}>
                  {membership.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl sm:text-5xl font-bold text-luxury-charcoal" data-testid={`tier-price-${membership.id}`}>
                    {membership.price}
                  </p>
                  <p className="text-gray-600" data-testid={`tier-period-${membership.id}`}>
                    {membership.period}
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xl font-bold text-brand-blue">
                    {membership.additionalPrice}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {membership.additionalPeriod}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-4 text-left">
                {membership.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`tier-feature-${membership.id}-${index}`}>
                    <Check className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handleSelectMembership(membership.id)}
                className={`w-full py-4 px-8 rounded-full font-semibold text-lg transition-all ${membership.buttonStyle}`}
                data-testid={`button-select-tier-${membership.id}`}
              >
                {membership.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
