import { ArrowRight } from "lucide-react";

export function AdventureExperiences() {
  const experiences = [
    {
      id: "swiss-alps",
      title: "Swiss Alps Ultra-Longevity Symposium",
      description: "7-day exclusive retreat at a private Alpine estate. Advanced longevity protocols, hyperbaric chambers, and networking with fellow billionaire entrepreneurs. Limited to 12 executives.",
      date: "Mar 15-22, 2025",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
    },
    {
      id: "maldives",
      title: "Maldives Private Island Optimization", 
      description: "10-day bespoke wellness immersion on an exclusive private island. Personalized biohacking protocols, world-class spa treatments, and private jet transport included.",
      date: "Jun 5-15, 2025",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
    },
    {
      id: "aspen",
      title: "Aspen Executive Performance Summit",
      description: "5-day ultra-luxury experience combining altitude training, executive coaching, and networking with Fortune 100 CEOs. Includes private chef and helicopter access.",
      date: "Sep 10-15, 2025", 
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
    },
    {
      id: "napa",
      title: "Napa Valley Regenerative Retreat",
      description: "6-day exclusive wellness experience at a private estate. Cutting-edge NAD+ therapies, stem cell consultations, and private wine tastings with industry titans.",
      date: "Nov 8-14, 2025",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
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
            Curated Adventure Experiences
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive wellness adventures designed for high-performance executives
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
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
                <h4 className="font-playfair text-xl font-semibold" data-testid={`adventure-title-${experience.id}`}>
                  {experience.title}
                </h4>
                <p className="text-gray-600" data-testid={`adventure-description-${experience.id}`}>
                  {experience.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-orange" data-testid={`adventure-date-${experience.id}`}>
                    {experience.date}
                  </span>
                  <button 
                    onClick={() => handleBookExperience(experience.id)}
                    className="text-brand-orange hover:text-brand-copper transition-colors flex items-center space-x-1"
                    data-testid={`button-book-adventure-${experience.id}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
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
