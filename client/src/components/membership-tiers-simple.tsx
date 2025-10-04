import { Check, Star, Users, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";
import { trackClick } from "@/lib/trackClick";

interface MembershipTiersProps {
  bookingUrl: string;
}

export function MembershipTiersSimple({ bookingUrl }: MembershipTiersProps) {
  const communityTier = {
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
    testId: "tier-community"
  };

  const aLaCarteServices = [
    {
      emoji: "🧠",
      name: "Private Coaching & Mindset",
      price: "$500-$1,000",
      description: "1:1 sessions focusing on longevity and performance"
    },
    {
      emoji: "🍽️",
      name: "Weekly Meal Menu",
      price: "$250/mo",
      description: "Personalized menu with grocery list & prep guidance"
    },
    {
      emoji: "🥗",
      name: "Premium Meal Delivery",
      price: "$800/wk",
      description: "Chef-prepared meals delivered to your location"
    },
    {
      emoji: "🤝",
      name: "Personal Wellness Concierge",
      price: "$2,000/mo",
      description: "Dedicated assistant for health logistics"
    },
    {
      emoji: "📊",
      name: "Performance Tracking",
      price: "$1,500/mo",
      description: "Monthly VO₂ Max, RMR & body composition"
    },
    {
      emoji: "🏝️",
      name: "Adventure Integration",
      price: "$3,000/trip",
      description: "Curated adventures with travel planning"
    },
    {
      emoji: "💆",
      name: "Recovery & Longevity Suite",
      price: "$1,200/mo",
      description: "Cryo, red-light therapy & breathwork (4 sessions)"
    },
    {
      emoji: "🧘",
      name: "Private Movement Coaching",
      price: "$300/session",
      description: "Yoga, Pilates, or flexibility training"
    },
    {
      emoji: "🧴",
      name: "Wellness Retreat Prep",
      price: "$1,000/retreat",
      description: "Pre-trip prep & post-trip recovery plan"
    },
    {
      emoji: "👨‍👩‍👧",
      name: "Family Wellness Program",
      price: "+$500/member",
      description: "Add family to your health plan"
    },
    {
      emoji: "🧬",
      name: "Elite Longevity Lab",
      price: "$2,000/test",
      description: "Hormone, genetic & blood testing"
    },
    {
      emoji: "🧳",
      name: "Travel Wellness",
      price: "$1,500/trip",
      description: "Itinerary with wellness strategies"
    },
    {
      emoji: "🎯",
      name: "Executive Performance",
      price: "$4,000",
      description: "90-day deep-dive execution plan"
    },
    {
      emoji: "💎",
      name: "Master Membership",
      price: "$10,000+/mo",
      description: "Custom integrated yearly plan"
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
            Start with Community Membership, then build your perfect concierge experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Community Membership */}
          <div
            className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-white border-2 border-brand-blue/20 hover:border-brand-blue/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            data-testid={communityTier.testId}
          >
            {/* Background Logo */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
              <SunLogo className="w-full h-full text-brand-blue" />
            </div>

            <div className="text-center mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                {communityTier.emoji}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-3 text-luxury-charcoal">
                {communityTier.name}
              </h3>
              
              <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-brand-slate">
                {communityTier.description}
              </p>
              
              <div className="mb-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-luxury-charcoal">
                    {communityTier.price}
                  </span>
                  <span className="text-base sm:text-lg text-brand-slate">
                    {communityTier.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm mt-1 text-brand-slate">
                  {communityTier.additionalPrice}
                </p>
              </div>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {communityTier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-brand-blue" />
                  <span className="text-sm sm:text-base text-brand-slate">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={async () => {
                await trackClick(`Join Now - ${communityTier.name}`);
                window.open(bookingUrl, '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold rounded-full transition-all active:scale-95 bg-luxury-gradient text-white hover:shadow-lg"
              data-testid={`button-${communityTier.testId}`}
            >
              {communityTier.cta}
            </Button>
          </div>

          {/* A La Carte Menu */}
          <div className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-luxury-gradient text-white shadow-xl sm:shadow-2xl border-2 sm:border-4 border-brand-gold">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-luxury-charcoal px-6 py-1 rounded-full text-sm font-bold shadow-lg">
              ⭐ BUILD YOUR OWN
            </div>

            {/* Background Logo */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
              <SunLogo className="w-full h-full text-white" />
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                🌟
              </div>
              
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-3 text-white">
                Monthly A La Carte Menu
              </h3>
              
              <p className="text-sm sm:text-base mb-4 leading-relaxed text-white/90">
                Enhance your membership with premium add-ons. Mix, match, or upgrade as your goals evolve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6">
              {aLaCarteServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-white/20 transition-all border border-white/20"
                  data-testid={`alacarte-${index}`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="text-xl sm:text-2xl flex-shrink-0">
                      {service.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {service.name}
                        </h4>
                        <span className="text-xs font-bold text-yellow-300 whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={async () => {
                await trackClick('Join Now - A La Carte Menu');
                window.open(bookingUrl, '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold rounded-full transition-all active:scale-95 bg-white text-brand-blue hover:bg-gray-100"
              data-testid="button-tier-alacarte"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
