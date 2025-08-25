import { ArrowRight } from "lucide-react";
import { SunLogo } from "@/components/ui/sun-logo";

export function AdventureExperiences() {
  const experiences = [
    {
      id: "acadia-coastal-wellness",
      title: "Acadia Coastal Wellness Retreat",
      description: "5-day magical coastal adventure featuring sunrise yoga on Thunder Hole cliffs, private lobster boat excursions with Captain's storytelling, kayaking through hidden sea caves filled with seals, and evening bonfires with s'mores under the stars! Explore Acadia's famous carriage roads on luxury e-bikes, discover secret tide pools with marine biologists, hunt for sea glass on pristine beaches, and enjoy chef-prepared picnic lunches overlooking the Atlantic. Includes luxury spa treatments, wine tastings featuring Maine's finest, and a surprise lighthouse picnic dinner!",
      date: "Jun 12-17, 2025",
      price: "$6,800",
      highlights: ["Sunrise yoga on cliffs", "Private lobster boat tours", "Sea cave kayaking", "Luxury spa treatments"]
    },
    {
      id: "katahdin-nature-discovery",
      title: "Katahdin Nature Discovery & Climbing Expedition", 
      description: "6-day epic mountain adventure featuring thrilling rock climbing on Katahdin's legendary granite walls, moose tracking expeditions with wildlife photographers, helicopter tours over endless wilderness, and campfire cooking competitions with local chefs! Climb to secret overlooks accessible only to adventurers, spot rare wildlife through professional telescopes, enjoy hot chocolate and Maine blueberry pancakes at sunrise, and celebrate your achievements with a gourmet BBQ feast. Includes luxury glamping pods, professional climbing gear, and a surprise zip-line adventure through the forest canopy!",
      date: "Jul 20-26, 2025",
      price: "$8,500",
      highlights: ["Rock climbing adventures", "Helicopter wilderness tours", "Moose tracking expeditions", "Luxury glamping pods"]
    },
    {
      id: "lakes-region-paddle",
      title: "Maine Lakes Region Paddle & Wellness",
      description: "6-day incredible water paradise featuring stand-up paddleboard yoga on mirror-calm lakes, treasure hunting for ancient Abenaki artifacts, midnight aurora watching from floating platforms, and friendly competition in canoe races with prizes! Swim in crystal-clear waters warmed by natural springs, enjoy floating breakfast trays delivered by kayak, participate in hilarious water games and splash contests, and gather around roaring bonfires for storytelling with local Maine legends. Includes luxury lakeside tree houses, gourmet campfire cuisine, and a surprise seaplane adventure to hidden lakes!",
      date: "Aug 5-11, 2025", 

      price: "$7,200",
      highlights: ["Paddleboard yoga", "Treasure hunting adventures", "Luxury tree house lodging", "Seaplane to hidden lakes"]
    },
    {
      id: "downeast-coastal-explorer",
      title: "Down East Coastal Explorer",
      description: "7-day spectacular coastal odyssey featuring private yacht charters to secret islands, hands-on lobster fishing with fourth-generation fishermen, gourmet clambakes on deserted beaches, and thrilling puffin watching expeditions to remote colonies! Explore historic lighthouses with exclusive after-hours access, participate in beach scavenger hunts for rare shells and sea glass, enjoy lobster roll making competitions with celebrity chefs, and dance under the stars at authentic Maine barn parties. Includes luxury coastal inns, private chef experiences, helicopter lighthouse tours, and a surprise whale watching adventure with marine biologists!",
      date: "Sep 15-22, 2025",
      price: "$9,400",
      highlights: ["Private yacht charters", "Exclusive lighthouse access", "Celebrity chef experiences", "Whale watching expeditions"]
    },
    {
      id: "bali-soulshine-adventure",
      title: "Bali Soulshine Resort Adventure Escape",
      description: "10-day ultimate tropical paradise adventure at the exclusive Soulshine Resort! Experience sunrise yoga sessions overlooking emerald rice terraces, thrilling white-water rafting through Bali's jungle rivers, rock climbing on volcanic cliffs with ocean views, and paragliding over ancient temples and lush valleys. Enjoy private beach access with world-class surfing instruction, guided temple tours with spiritual ceremonies, traditional Balinese cooking classes with celebrity chefs, and healing spa treatments using sacred volcanic stones. Includes luxury villa accommodations, private helicopter tours over volcanoes, swimming with dolphins, and magical sunset dinners on pristine beaches!",
      date: "Oct 20-30, 2025",
      price: "$14,800",
      highlights: ["Exclusive Soulshine Resort", "Volcano helicopter tours", "Temple spiritual ceremonies", "Private beach villa access"]
    },
    {
      id: "appalachian-trail-autumn",
      title: "Appalachian Trail Autumn Spectacular",
      description: "8-day incredible leaf-peeping adventure along the legendary Appalachian Trail during peak fall foliage! Experience nature's most vibrant autumn canvas with private guided hikes through picture-perfect hillsides ablaze with color, luxury glamping under starlit skies, helicopter tours over endless fall landscapes, and gourmet campfire dining with celebrity chefs. Enjoy cozy mountain lodges with spa services, pumpkin patch visits with harvest festivals, wine tastings at scenic overlooks, and surprise hot air balloon rides over the colorful mountain ranges. All fitness levels welcome with custom hiking options!",
      date: "Oct 5-13, 2025",
      price: "$8,900",
      highlights: ["Peak fall foliage hiking", "Helicopter landscape tours", "Luxury mountain lodges", "Hot air balloon rides"]
    },
    {
      id: "maine-whitewater-rapids",
      title: "Maine White-Water Rapids Expedition",
      description: "5-day heart-pounding white-water rafting adventure on Maine's wildest rivers including the Kennebec, Penobscot, and Dead Rivers! Experience controlled adrenaline thrills with expert guides, luxury riverside camps with gourmet meals, helicopter transfers between rapids, and evening wilderness spa treatments. Navigate Class V rapids by day, enjoy riverside wine tastings and storytelling around roaring campfires by night. Includes professional photography of your adventures, luxury gear, and a surprise zip-line finale over the river gorge!",
      date: "Jun 25-30, 2025",

      price: "$6,500",
      highlights: ["Class V rapids adventure", "Helicopter river transfers", "Luxury riverside camps", "Professional photography"]
    },
    {
      id: "colorado-snowmobile-rockies",
      title: "Colorado Rocky Mountain Snowmobile Safari",
      description: "7-day winter wonderland adventure snowmobiling through Colorado's spectacular Rocky Mountains! Explore 300+ miles of pristine trails around Grand Lake, race through snow-covered forests and ridges, enjoy luxury mountain chalets with hot tubs and gourmet dining, and experience breathtaking helicopter tours over snow-capped peaks. Includes professional snowmobile instruction, luxury winter gear, après-ski spa treatments, and magical evening sleigh rides with champagne under the stars!",
      date: "Jan 15-22, 2025",
      price: "$9,800",
      highlights: ["300+ miles of snow trails", "Luxury mountain chalets", "Helicopter peak tours", "Champagne sleigh rides"]
    },
    {
      id: "west-virginia-paragliding",
      title: "West Virginia Paragliding Sky Adventure",
      description: "4-day ultimate aerial adventure featuring tandem paragliding over West Virginia's stunning landscapes! Soar like a bird above lush forests and winding rivers from Canaan Valley Resort State Park, enjoy luxury mountain resort accommodations, participate in sunrise balloon festivals, and experience professional flight training with world-class instructors. Includes gourmet mountain cuisine, spa treatments, helicopter tours for aerial photography, and a surprise nighttime paragliding experience with LED wings under the stars!",
      date: "May 10-14, 2025",
      price: "$7,400",
      highlights: ["Tandem paragliding flights", "Luxury mountain resort", "LED night paragliding", "Professional flight training"]
    },
    {
      id: "mount-whitney-summit",
      title: "Mount Whitney Ultimate Summit Challenge",
      description: "6-day epic conquest of Mount Whitney, the highest peak in the lower 48 states! Experience the ultimate bucket-list adventure with professional mountain guides, luxury base camp accommodations, helicopter support for gear transport, and gourmet high-altitude dining. Tackle the famous 99 Switchbacks, enjoy stunning Sierra Nevada vistas, crystal-clear alpine lakes, and celebrate your achievement with a champagne summit toast. Includes altitude training, luxury gear, spa recovery treatments, and a surprise sunrise hot air balloon ride over the Sierra range!",
      date: "Aug 20-26, 2025",
      price: "$11,200",
      highlights: ["Highest peak in lower 48", "Professional mountain guides", "Helicopter gear support", "Champagne summit celebration"]
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
            Epic Adventure Wellness Escapes
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover incredible destinations from Maine's rugged coastlines to Colorado's snow-capped peaks, California's towering summits to Bali's tropical paradise. Each luxury adventure combines thrilling outdoor activities with world-class wellness programming, helicopter tours, gourmet dining, and unforgettable surprises. From accessible coastal retreats to challenging mountain expeditions - every adventure features expert guides, luxury accommodations, and experiences designed to create lifelong memories.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="luxury-card rounded-2xl overflow-hidden premium-hover transition-all duration-300"
              data-testid={`adventure-card-${experience.id}`}
            >
              <div className="w-full h-48 bg-gradient-to-br from-brand-orange to-luxury-charcoal flex items-center justify-center">
                <SunLogo size="lg" className="brightness-125" />
              </div>
              
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
