import { ArrowRight } from "lucide-react";

export function AdventureExperiences() {
  const experiences = [
    {
      id: "acadia-coastal-wellness",
      title: "Acadia Coastal Wellness Retreat",
      description: "5-day gentle adventure combining scenic coastal walks, beginner-friendly kayaking in calm waters, and relaxing beach yoga sessions. Explore Acadia's famous carriage roads by bike or on foot at your own pace, enjoy guided tide pool discoveries, and participate in sunset meditation sessions. Perfect for all fitness levels with optional activities for those seeking more challenge.",
      date: "Jun 12-17, 2025",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$3,200",
      highlights: ["Scenic coastal walks", "Gentle kayaking adventures", "Beach yoga sessions", "All fitness levels welcome"]
    },
    {
      id: "katahdin-nature-discovery",
      title: "Katahdin Nature Discovery & Climbing Expedition", 
      description: "6-day mountain adventure combining accessible hiking trails, wildlife viewing, and guided rock climbing experiences. Explore Baxter State Park's gentle paths with knowledgeable naturalists, enjoy picnic lunches by pristine lakes, and participate in beginner-friendly rock climbing instruction on Katahdin's granite faces. Professional climbing guides provide all equipment and safety training. Evening campfire talks and stargazing sessions complete this mountain retreat. All skill levels welcome for hiking, climbing instruction provided.",
      date: "Jul 20-26, 2025",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$4,800",
      highlights: ["Easy mountain trails", "Guided rock climbing", "Professional instruction", "All equipment provided"]
    },
    {
      id: "lakes-region-paddle",
      title: "Maine Lakes Region Paddle & Wellness",
      description: "6-day relaxing water adventure exploring Maine's pristine lakes by canoe and kayak. Gentle paddling suitable for beginners, swimming in crystal-clear waters, lakeside yoga and meditation, and cozy evenings around the campfire. Stay in comfortable lakeside cabins with all amenities. Includes basic paddling instruction and all equipment.",
      date: "Aug 5-11, 2025", 
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$3,600",
      highlights: ["Gentle lake paddling", "Swimming in pristine waters", "Lakeside yoga", "Comfortable cabin lodging"]
    },
    {
      id: "downeast-coastal-explorer",
      title: "Down East Coastal Explorer",
      description: "7-day leisurely exploration of Maine's rugged coastline featuring scenic drives, lighthouse visits, and easy coastal walks. Enjoy fresh lobster experiences, visit charming fishing villages, take gentle boat tours to see seals and seabirds, and participate in beginner-friendly sea kayaking. Comfortable accommodations and transportation provided throughout.",
      date: "Sep 15-22, 2025",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$4,200",
      highlights: ["Scenic lighthouse tours", "Gentle boat excursions", "Lobster dining experiences", "Easy coastal walks"]
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
            Maine Adventure Wellness Escapes
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover Maine's natural beauty through accessible adventures designed for every fitness level. Each experience combines gentle outdoor activities with wellness programming, offering the perfect balance of adventure and relaxation. All skill levels welcome - our expert guides ensure everyone feels confident and included.
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
