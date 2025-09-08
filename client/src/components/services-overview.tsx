import { Heart, User, Utensils, Mountain, Dna, Shield } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: Heart,
      title: "Advanced VO₂ Max Testing",
      description: "Comprehensive fitness assessments and biometric analysis to optimize your health and performance. Understand your body's unique needs and track improvements over time."
    },
    {
      icon: User,
      title: "Personalized Coaching", 
      description: "One-on-one guidance tailored to your lifestyle and goals. Get expert support for sustainable habit formation and wellness optimization."
    },
    {
      icon: Utensils,
      title: "Custom Fitness & Meal Planning",
      description: "Personalized workout routines and nutrition plans designed for busy families and professionals. Practical, sustainable approaches that fit your schedule."
    },
    {
      icon: Mountain,
      title: "Adventure Retreat Experiences", 
      description: "Maine coastal retreats, mountain adventures, and international experiences that combine health optimization with unforgettable family memories and community connections."
    },
    {
      icon: Dna,
      title: "Health Community Access",
      description: "Connect with like-minded families and professionals committed to living boldly. Share experiences, get support, and build lasting friendships through health and adventure."
    },
    {
      icon: Shield,
      title: "Concierge Support Services",
      description: "Educational resources, priority booking for retreats, and ongoing wellness guidance to help you and your family maintain your health adventure lifestyle year-round."
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
            Your health adventure concierge partner — supporting your family's wellness journey with personalized coaching, advanced testing, adventure experiences, and community connections.
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
