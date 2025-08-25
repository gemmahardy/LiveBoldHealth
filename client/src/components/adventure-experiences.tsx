import { ArrowRight } from "lucide-react";

export function AdventureExperiences() {
  const experiences = [
    {
      id: "katahdin-ultra-challenge",
      title: "Katahdin Ultra-Endurance Challenge",
      description: "7-day exclusive ultra-endurance expedition limited to 4 elite athletes. Conquer Mount Katahdin via the knife-edge trail, complete 100-mile wilderness ultra-marathon through Baxter State Park, and master cold-water endurance swimming in pristine mountain lakes. Includes survival skills training, altitude conditioning, and recovery protocols with performance nutritionists and elite trainers.",
      date: "Jun 8-15, 2025",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$18,500",
      highlights: ["100-mile wilderness ultra-marathon", "Knife-edge trail summit", "Cold-water endurance training", "Elite performance coaching"]
    },
    {
      id: "acadia-rock-ice-masters",
      title: "Acadia Rock & Ice Masters", 
      description: "5-day intensive climbing expedition on Acadia's legendary sea cliffs and winter ice formations. Master technical multi-pitch routes with world-class climbing guides, tackle ice climbing on frozen waterfalls, and complete night ascents under the stars. Limited to 3 experienced climbers. Includes gear, rescue training, and luxury basecamp with recovery facilities.",
      date: "Feb 12-17, 2025",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$15,200",
      highlights: ["Sea cliff multi-pitch climbing", "Ice waterfall ascents", "Night climbing challenges", "World-class guide instruction"]
    },
    {
      id: "allagash-wilderness-survival",
      title: "Allagash Wilderness Survival Elite",
      description: "10-day extreme wilderness survival course in Maine's most remote territory. Navigate 100+ miles through trackless forest using only primitive tools, build shelters in sub-zero conditions, hunt and forage for food, and complete solo survival challenges. Led by former Navy SEALs and primitive skills experts. Limited to 2 participants for ultimate exclusivity.",
      date: "Oct 1-11, 2025", 
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$22,000",
      highlights: ["100-mile primitive navigation", "Solo survival challenges", "Navy SEAL instruction", "Sub-zero shelter building"]
    },
    {
      id: "penobscot-adventure-race",
      title: "Penobscot Ultra-Adventure Race",
      description: "6-day multi-sport endurance competition through Maine's most challenging terrain. 200-mile journey combining sea kayaking through rough waters, mountain biking on technical trails, trail running through dense forest, and rock climbing challenges. Teams of 2 compete with professional adventure race support. Includes GPS tracking, emergency backup, and luxury recovery facilities.",
      date: "Sep 18-24, 2025",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$19,800",
      highlights: ["200-mile multi-sport challenge", "Sea kayaking in rough waters", "Technical mountain biking", "Professional race support"]
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
            Ultra-Elite Endurance Adventures
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Push your limits through Maine's most extreme and exclusive endurance challenges. These ultra-demanding adventures are limited to 2-4 elite participants, combining world-class training with Maine's most challenging terrain. Only for those who seek the ultimate test of mental and physical endurance.
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
