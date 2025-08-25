import { ArrowRight } from "lucide-react";

export function AdventureExperiences() {
  const experiences = [
    {
      id: "acadia-lighthouse",
      title: "Acadia Lighthouse Wellness Retreat",
      description: "5-day transformative experience at a restored 1800s lighthouse estate overlooking Frenchman Bay. Morning cliff-top yoga, sea kayaking through hidden coves, lobster boat excursions with local captains, and evening wellness sessions guided by oceanfront bonfires. Stay in the lighthouse keeper's luxury quarters with panoramic ocean views.",
      date: "Jun 12-17, 2025",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$8,500",
      highlights: ["Historic lighthouse accommodation", "Private lobster boat adventures", "Cliff-top meditation sessions", "Local captain storytelling"]
    },
    {
      id: "penobscot-glamping",
      title: "Penobscot Bay Island Glamping", 
      description: "4-day exclusive island escape accessible only by private seaplane. Luxury canvas pavilions on a secluded 15-acre island with world-class chef preparing fresh-caught seafood. Explore tide pools, go puffin watching, and experience the ultimate digital detox while still enjoying premium amenities and spa treatments.",
      date: "Jul 20-24, 2025",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$12,000",
      highlights: ["Seaplane-only access", "Private island exclusivity", "Puffin colony adventures", "Chef-prepared seafood daily"]
    },
    {
      id: "white-mountains-lodge",
      title: "White Mountains Wilderness Lodge",
      description: "6-day adventure at a luxury eco-lodge deep in Maine's western mountains. Experience moose tracking with wildlife biologists, fly fishing on pristine mountain lakes, guided night sky photography sessions, and forest bathing meditation. The lodge features sustainable luxury with solar power, farm-to-table dining, and handcrafted furnishings.",
      date: "Sep 5-11, 2025", 
      image: "https://images.unsplash.com/photo-1551524164-6cf2ac14c611?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$7,200",
      highlights: ["Moose tracking with biologists", "Pristine mountain lake fishing", "Astrophotography workshops", "Sustainable luxury living"]
    },
    {
      id: "downeast-sailing",
      title: "Down East Schooner Adventure",
      description: "7-day sailing expedition aboard a restored 1920s wooden schooner along Maine's legendary Down East coast. Learn traditional sailing techniques, visit working fishing villages unchanged for generations, enjoy lobster bakes on remote beaches, and participate in marine conservation efforts. Experience Maine's maritime heritage while enjoying modern comfort and gourmet cuisine.",
      date: "Aug 15-22, 2025",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$9,800",
      highlights: ["Historic wooden schooner", "Authentic fishing village visits", "Remote beach lobster bakes", "Marine conservation participation"]
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
            Exclusive Maine Adventure Experiences
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover Maine's hidden treasures through carefully curated adventures that combine rugged natural beauty with sophisticated wellness experiences. Each journey is limited to 6-8 executives for an intimate, transformative experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
