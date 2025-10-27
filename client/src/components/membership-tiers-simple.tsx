import { Check, Star, Users, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";
import { trackClick } from "@/lib/trackClick";

interface MembershipTiersProps {
  bookingUrl: string;
}

export function MembershipTiersSimple({ bookingUrl }: MembershipTiersProps) {
  const communityTier = {
    name: "The Live Bold Health Membership",
    emoji: "☀️",
    icon: Users,
    price: "$2,500",
    period: "/ year",
    additionalPrice: "+$500 per family member",
    description: "The simplest way to master your health, optimize your energy, and live boldly — guided by science, simplicity, and adventure.",
    features: [
      "VO₂ Max & RMR Testing (Quarterly Updates)",
      "Personalized Longevity & Nutrition Blueprint",
      "Fitness & Mindset Coaching Access",
      "Quarterly Progress Review with Concierge",
      "Member-Only Webinars & Adventure Community",
      "20% Off Luxury Retreats + $1,000 Adventure Credit",
      "Welcome Kit: Meal Guide, Supplements, & Live Bold Journal"
    ],
    tagline: "We simplify health — you live the results.",
    cta: "Join Now",
    testId: "tier-community"
  };

  const executiveTier = {
    name: "Executive Team Package",
    emoji: "💼",
    icon: Sparkles,
    price: "$7,500",
    period: "/ year",
    additionalPrice: "Includes 3 team members",
    description: "Corporate Health Concierge for small teams or leadership groups.",
    features: [
      "VO₂ Max Testing for 3 Team Members",
      "Quarterly Health Reports & Analytics",
      "Personalized Health Plans for Each Member",
      "Group Performance Benchmarking",
      "Executive Wellness Dashboard",
      "Priority Scheduling & Support",
      "Team Adventure Retreat Discounts"
    ],
    cta: "Book Team Consultation",
    testId: "tier-executive"
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
      emoji: "🌬️",
      name: "Breathwork Coaching",
      price: "$300/mo",
      description: "Personalized breathwork sessions for stress & performance"
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
      price: "$5,000+/mo",
      description: "Custom integrated yearly plan"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-luxury-gray via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative Background */}
      {/* Large watermark behind membership cards */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[750px] sm:w-[900px] h-[750px] sm:h-[900px] opacity-[0.08] -rotate-6">
        <SunLogo className="w-full h-full text-brand-gold" />
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
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

            {/* Tagline */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base font-semibold text-luxury-charcoal italic">
                "{communityTier.tagline}"
              </p>
            </div>

            {/* 90-Day Guarantee */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-yellow-50/40 border-2 border-brand-blue/30 rounded-lg p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">
                  ✨
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal mb-2 text-sm sm:text-base">
                    90-Day Results Guarantee
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    In your first 90 days, you'll see measurable improvements in energy, VO₂ Max, and recovery — or we'll rework your plan at no cost until you do.
                  </p>
                </div>
              </div>
            </div>

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

          {/* Executive Team Package */}
          <div
            className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-white border-2 border-purple-500/30 hover:border-purple-500/60 shadow-lg hover:shadow-2xl transition-all duration-300"
            data-testid={executiveTier.testId}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
              💼 TEAMS
            </div>

            {/* Background Logo */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
              <SunLogo className="w-full h-full text-purple-500" />
            </div>

            <div className="text-center mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                {executiveTier.emoji}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-3 text-luxury-charcoal">
                {executiveTier.name}
              </h3>
              
              <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-brand-slate">
                {executiveTier.description}
              </p>
              
              <div className="mb-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-luxury-charcoal">
                    {executiveTier.price}
                  </span>
                  <span className="text-base sm:text-lg text-brand-slate">
                    {executiveTier.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm mt-1 text-brand-slate">
                  {executiveTier.additionalPrice}
                </p>
              </div>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {executiveTier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-purple-500" />
                  <span className="text-sm sm:text-base text-brand-slate">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={async () => {
                await trackClick(`Join Now - ${executiveTier.name}`);
                window.open(bookingUrl, '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold rounded-full transition-all active:scale-95 bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg"
              data-testid={`button-${executiveTier.testId}`}
            >
              {executiveTier.cta}
            </Button>
          </div>

          {/* A La Carte Menu */}
          <div className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-white shadow-xl sm:shadow-2xl border-2 sm:border-4 border-brand-gold">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-luxury-charcoal px-6 py-1 rounded-full text-sm font-bold shadow-lg">
              ⭐ BUILD YOUR OWN
            </div>

            {/* Background Logo */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
              <SunLogo className="w-full h-full text-brand-gold" />
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                🌟
              </div>
              
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-3 text-luxury-charcoal">
                Monthly A La Carte Menu
              </h3>
              
              <p className="text-sm sm:text-base mb-4 leading-relaxed text-brand-slate">
                Enhance your membership with premium add-ons. Mix, match, or upgrade as your goals evolve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6">
              {aLaCarteServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-blue-50 to-yellow-50/30 rounded-lg p-2 sm:p-3 hover:from-blue-100 hover:to-yellow-100/40 transition-all border border-brand-gold/20"
                  data-testid={`alacarte-${index}`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="text-xl sm:text-2xl flex-shrink-0">
                      {service.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-luxury-charcoal">
                          {service.name}
                        </h4>
                        <span className="text-xs font-bold text-brand-blue whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-xs text-brand-slate leading-relaxed">
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
              className="w-full py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold rounded-full transition-all active:scale-95 bg-luxury-gradient text-white hover:shadow-lg"
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
