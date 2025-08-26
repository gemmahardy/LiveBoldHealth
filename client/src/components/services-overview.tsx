import { Heart, User, Utensils, Mountain, Dna, Shield } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: Heart,
      title: "Elite Health & Longevity Mastery",
      description: "Comprehensive VO2 Max testing, RMR testing, advanced biometric analysis, and bespoke cutting-edge longevity protocols designed for ultra-luxury lifestyle optimization. Feel good, live longer with Maine's premier wellness concierge."
    },
    {
      icon: User,
      title: "Ultra-Luxury Concierge Coaching", 
      description: "Dedicated elite health concierge with 24/7 availability, weekly longevity optimization calls, and unlimited access to our ultra-premium wellness team. Aspire to the perfect life with personalized fitness and lifestyle guidance."
    },
    {
      icon: Utensils,
      title: "White-Glove Wellness Management",
      description: "Fully managed nutrition, fitness, and recovery protocols for elite lifestyle optimization. Custom meal delivery, private trainer coordination, and luxury travel wellness optimization. 10X your health and vitality."
    },
    {
      icon: Mountain,
      title: "World-Class Adventure Vacation Experiences", 
      description: "Maine coastal luxury retreats, Bali tropical escapes, Appalachian Trail autumn spectaculars, Colorado snowmobile safaris, West Virginia paragliding adventures, and Mount Whitney summit challenges. Each ultra-luxury adventure vacation combines thrilling outdoor experiences with cutting-edge wellness protocols and elite lifestyle optimization."
    },
    {
      icon: Dna,
      title: "Cutting-Edge Longevity & Health Access",
      description: "First access to breakthrough longevity therapies, stem cell treatments, NAD+ optimization, and partnerships with world-renowned health and wellness clinics. Elite fitness and lifestyle optimization for those who want to live longer."
    },
    {
      icon: Shield,
      title: "Platinum-Level Elite Priority Access",
      description: "Priority scheduling for all wellness services, exclusive access to luxury events, emergency wellness support, and direct connection to industry leaders. Ultra-luxury concierge service for the perfect elite lifestyle experience."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-4">
            Elite Longevity & Wellness Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your ultra-luxury wellness concierge partner — designing, managing, and elevating every detail of your health, fitness, longevity, and adventure lifestyle for the perfect life experience.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="luxury-card rounded-2xl p-8 premium-hover transition-all duration-300"
                data-testid={`service-card-${index}`}
              >
                <div className="w-16 h-16 bg-sun-gradient rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-playfair text-2xl font-semibold mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
