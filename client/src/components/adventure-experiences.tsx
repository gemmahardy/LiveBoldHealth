import { ArrowRight } from "lucide-react";

export function AdventureExperiences() {
  const experiences = [
    {
      id: "swiss-alps",
      title: "Swiss Alps Ultra-Longevity Symposium",
      description: "7-day exclusive retreat at a private Alpine estate. Advanced longevity protocols, hyperbaric chambers, heli-skiing adventures, and networking with fellow billionaire entrepreneurs. Limited to 12 executives. Includes private jet transport and Michelin-starred dining.",
      date: "Mar 15-22, 2025",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$75,000",
      highlights: ["Heli-skiing with Olympic instructors", "Private ice climbing", "Alpine wellness protocols", "Billionaire networking"]
    },
    {
      id: "maldives",
      title: "Maldives Private Island Optimization", 
      description: "10-day bespoke wellness immersion on an exclusive private island. Personalized biohacking protocols, underwater adventures, world-class spa treatments, and private jet transport. Deep-sea diving, yacht excursions, and sunset helicopter tours.",
      date: "Jun 5-15, 2025",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$125,000",
      highlights: ["Private island access", "Luxury yacht adventures", "Underwater wellness pods", "Celebrity chef experiences"]
    },
    {
      id: "aspen",
      title: "Aspen Executive Performance Summit",
      description: "5-day ultra-luxury experience combining altitude training, executive coaching, and networking with Fortune 100 CEOs. Includes private mountain adventures, helicopter skiing, exclusive lodge access, and performance optimization in extreme environments.",
      date: "Sep 10-15, 2025", 
      image: "https://images.unsplash.com/photo-1551524164-6cf2ac14c611?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$65,000",
      highlights: ["Helicopter mountain access", "Executive wilderness challenges", "Private lodge exclusivity", "Fortune 100 CEO networking"]
    },
    {
      id: "napa",
      title: "Napa Valley Regenerative Retreat",
      description: "6-day exclusive wellness experience at a private estate. Cutting-edge NAD+ therapies, stem cell consultations, private wine tastings with industry titans, and adventure activities including hot air ballooning and vineyard horseback expeditions.",
      date: "Nov 8-14, 2025",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$55,000",
      highlights: ["Hot air balloon adventures", "Vineyard horseback expeditions", "Private wine estate access", "Celebrity vintner experiences"]
    },
    {
      id: "antarctic",
      title: "Antarctic Extreme Wellness Expedition",
      description: "14-day ultimate adventure combining extreme environment training, ice swimming protocols, and luxury base camp living. Experience the world's most remote wellness destination with penguin colonies, ice cave exploration, and polar adventure activities.",
      date: "Jan 20 - Feb 3, 2025",
      image: "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$200,000",
      highlights: ["Polar expedition adventures", "Ice swimming mastery", "Luxury polar base camp", "Aurora australis viewing"]
    },
    {
      id: "safari",
      title: "African Safari Wellness Expedition",
      description: "8-day luxury safari combining wildlife adventures, traditional healing protocols, and executive networking. Stay in ultra-luxury tented camps, participate in conservation efforts, and experience ancient wellness traditions with modern biohacking.",
      date: "Aug 12-20, 2025",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$85,000",
      highlights: ["Big Five safari adventures", "Traditional healing ceremonies", "Conservation participation", "Luxury tented camp living"]
    }
  ];

  const handleBookExperience = (experienceId: string) => {
    console.log(`Booking experience: ${experienceId}`);
    // Implementation for experience booking
  };

  return (
    <section id="adventures" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-4">
            Ultra-Exclusive Adventure Expeditions
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            World-class wellness adventures in the most extraordinary destinations on Earth. Each expedition combines extreme adventure, cutting-edge biohacking, and networking with fellow industry titans. Limited to 8-12 executives per experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="luxury-card rounded-2xl overflow-hidden premium-hover transition-all duration-300"
              data-testid={`adventure-card-${experience.id}`}
            >
              <img 
                src={experience.image} 
                alt={experience.title}
                className="w-full h-48 object-cover"
                data-testid={`adventure-image-${experience.id}`}
              />
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-playfair text-xl font-semibold" data-testid={`adventure-title-${experience.id}`}>
                    {experience.title}
                  </h4>
                  <span className="text-2xl font-bold text-brand-orange" data-testid={`adventure-price-${experience.id}`}>
                    {experience.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed" data-testid={`adventure-description-${experience.id}`}>
                  {experience.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-luxury-charcoal">Experience Highlights:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2" data-testid={`adventure-highlight-${experience.id}-${index}`}>
                        <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="font-bold text-brand-orange text-sm" data-testid={`adventure-date-${experience.id}`}>
                    {experience.date}
                  </span>
                  <button 
                    onClick={() => handleBookExperience(experience.id)}
                    className="bg-luxury-gradient text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all flex items-center space-x-1"
                    data-testid={`button-book-adventure-${experience.id}`}
                  >
                    <span>Reserve Spot</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
