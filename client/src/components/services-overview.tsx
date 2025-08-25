import { Heart, User, Utensils, Mountain, Dna, Shield } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: Heart,
      title: "Executive Health Mastery",
      description: "Comprehensive biometric analysis, VO₂ max optimization, and bespoke longevity protocols designed for C-suite performance demands."
    },
    {
      icon: User,
      title: "Ultra-Premium Concierge Coaching", 
      description: "Dedicated health concierge with 24/7 availability, weekly optimization calls, and unlimited access to our elite wellness team."
    },
    {
      icon: Utensils,
      title: "White-Glove Wellness Management",
      description: "Fully managed nutrition, fitness, and recovery protocols. Custom meal delivery, private trainer coordination, and travel optimization."
    },
    {
      icon: Mountain,
      title: "World-Class Adventure Expeditions", 
      description: "Maine coastal retreats, Bali tropical escapes, Appalachian Trail autumn spectaculars, Colorado snowmobile safaris, West Virginia paragliding adventures, and Mount Whitney summit challenges. Each expedition combines thrilling outdoor activities with luxury accommodations and personalized wellness protocols."
    },
    {
      icon: Dna,
      title: "Cutting-Edge Longevity Access",
      description: "First access to breakthrough therapies, stem cell treatments, NAD+ optimization, and partnerships with world-renowned longevity clinics."
    },
    {
      icon: Shield,
      title: "Platinum-Level Priority Access",
      description: "Skip-the-line medical appointments, private clinic access, emergency wellness support, and exclusive events with industry leaders."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-4">
            What You'll Get
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Adventure is a health tool. When you engage your body and mind in new ways, you unlock more than just strength and stamina — you ignite your energy, build resilience, and boost your ability to take on life with boldness and joy."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
