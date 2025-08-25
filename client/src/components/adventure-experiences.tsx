import { ArrowRight } from "lucide-react";

export function AdventureExperiences() {
  const experiences = [
    {
      id: "acadia-coastal-wellness",
      title: "Acadia Coastal Wellness Retreat",
      description: "5-day magical coastal adventure featuring sunrise yoga on Thunder Hole cliffs, private lobster boat excursions with Captain's storytelling, kayaking through hidden sea caves filled with seals, and evening bonfires with s'mores under the stars! Explore Acadia's famous carriage roads on luxury e-bikes, discover secret tide pools with marine biologists, hunt for sea glass on pristine beaches, and enjoy chef-prepared picnic lunches overlooking the Atlantic. Includes luxury spa treatments, wine tastings featuring Maine's finest, and a surprise lighthouse picnic dinner!",
      date: "Jun 12-17, 2025",
      image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$6,800",
      highlights: ["Sunrise yoga on cliffs", "Private lobster boat tours", "Sea cave kayaking", "Luxury spa treatments"]
    },
    {
      id: "katahdin-nature-discovery",
      title: "Katahdin Nature Discovery & Climbing Expedition", 
      description: "6-day epic mountain adventure featuring thrilling rock climbing on Katahdin's legendary granite walls, moose tracking expeditions with wildlife photographers, helicopter tours over endless wilderness, and campfire cooking competitions with local chefs! Climb to secret overlooks accessible only to adventurers, spot rare wildlife through professional telescopes, enjoy hot chocolate and Maine blueberry pancakes at sunrise, and celebrate your achievements with a gourmet BBQ feast. Includes luxury glamping pods, professional climbing gear, and a surprise zip-line adventure through the forest canopy!",
      date: "Jul 20-26, 2025",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$8,500",
      highlights: ["Rock climbing adventures", "Helicopter wilderness tours", "Moose tracking expeditions", "Luxury glamping pods"]
    },
    {
      id: "lakes-region-paddle",
      title: "Maine Lakes Region Paddle & Wellness",
      description: "6-day incredible water paradise featuring stand-up paddleboard yoga on mirror-calm lakes, treasure hunting for ancient Abenaki artifacts, midnight aurora watching from floating platforms, and friendly competition in canoe races with prizes! Swim in crystal-clear waters warmed by natural springs, enjoy floating breakfast trays delivered by kayak, participate in hilarious water games and splash contests, and gather around roaring bonfires for storytelling with local Maine legends. Includes luxury lakeside tree houses, gourmet campfire cuisine, and a surprise seaplane adventure to hidden lakes!",
      date: "Aug 5-11, 2025", 
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$7,200",
      highlights: ["Paddleboard yoga", "Treasure hunting adventures", "Luxury tree house lodging", "Seaplane to hidden lakes"]
    },
    {
      id: "downeast-coastal-explorer",
      title: "Down East Coastal Explorer",
      description: "7-day spectacular coastal odyssey featuring private yacht charters to secret islands, hands-on lobster fishing with fourth-generation fishermen, gourmet clambakes on deserted beaches, and thrilling puffin watching expeditions to remote colonies! Explore historic lighthouses with exclusive after-hours access, participate in beach scavenger hunts for rare shells and sea glass, enjoy lobster roll making competitions with celebrity chefs, and dance under the stars at authentic Maine barn parties. Includes luxury coastal inns, private chef experiences, helicopter lighthouse tours, and a surprise whale watching adventure with marine biologists!",
      date: "Sep 15-22, 2025",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      price: "$9,400",
      highlights: ["Private yacht charters", "Exclusive lighthouse access", "Celebrity chef experiences", "Whale watching expeditions"]
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
