import { ArrowRight } from "lucide-react";
import { SunLogo } from "@/components/ui/sun-logo";
import adventureCollageUrl from '@assets/Collage+sig+program+1384w_1756151724888.jpg';
import acadiaBackgroundUrl from '@assets/1_1756217719810.jpg';
import katahdinBackgroundUrl from '@assets/katahdin_1756218115256.jpg';
import lakesRegionBackgroundUrl from '@assets/2_1756218177238.jpg';
import downeastBackgroundUrl from '@assets/6_1756218241556.jpg';
import baliBackgroundUrl from '@assets/Bali_1756218507042.jpg';
import appalachianBackgroundUrl from '@assets/5_1756218558661.jpg';
import whitewaterBackgroundUrl from '@assets/whitewater rafting_1756218758297.jpg';
import coloradoBackgroundUrl from '@assets/snowmobiling_1756218891377.jpg';
import paraglidingBackgroundUrl from '@assets/paragliding_1756219243898.jpg';
import whitneyBackgroundUrl from '@assets/10_1756219286808.jpg';

export function AdventureExperiences() {
  const experiences = [
    {
      id: "acadia-coastal-wellness",
      title: "Acadia Coastal Wellness Retreat",
      description: "5-day magical coastal adventure featuring sunrise yoga on Thunder Hole cliffs, private lobster boat excursions with Captain's storytelling, kayaking through hidden sea caves filled with seals, and evening bonfires with s'mores under the stars! Explore Acadia's famous carriage roads on luxury e-bikes, discover secret tide pools with marine biologists, hunt for sea glass on pristine beaches, and enjoy chef-prepared picnic lunches overlooking the Atlantic. Includes luxury spa treatments, wine tastings featuring Maine's finest, and a surprise lighthouse picnic dinner! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Jun 12-17, 2026 | Private Adventure Dates Available",
      price: "$10,500",
      highlights: ["Sunrise yoga on cliffs", "Private lobster boat tours", "Sea cave kayaking", "Luxury spa treatments"]
    },
    {
      id: "katahdin-nature-discovery",
      title: "Maine Mountains Nature Discovery & Climbing Expedition", 
      description: "6-day epic mountain adventure featuring thrilling rock climbing on Maine's legendary granite walls, moose tracking expeditions with wildlife photographers, guided wilderness expeditions with naturalists, and campfire cooking competitions with local chefs! Climb to secret overlooks accessible only to adventurers, spot rare wildlife through professional telescopes, enjoy hot chocolate and Maine blueberry pancakes at sunrise, and celebrate your achievements with a gourmet BBQ feast. Includes luxury glamping pods, professional climbing gear, and a surprise zip-line adventure through the forest canopy! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Jul 20-26, 2026 | Private Adventure Dates Available",
      price: "$12,500",
      highlights: ["Rock climbing adventures", "Helicopter wilderness tours", "Moose tracking expeditions", "Luxury glamping pods"]
    },
    {
      id: "lakes-region-paddle",
      title: "Maine Lakes Region Paddle & Wellness",
      description: "6-day incredible water paradise featuring stand-up paddleboard yoga on mirror-calm lakes, guided lake fishing expeditions for trophy bass and trout, early morning loon watching with wildlife photographers, and friendly competition in canoe races with prizes! Swim in crystal-clear pristine waters, spot magnificent wildlife including eagles, otters, and majestic loons calling across the lake, participate in sunset paddleboard adventures, and gather around roaring bonfires for storytelling with local Maine legends. Includes luxury lakeside cabins with private docks, gourmet campfire cuisine, and a surprise seaplane adventure to hidden lakes! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Aug 5-11, 2026 | Private Adventure Dates Available", 

      price: "$10,800",
      highlights: ["Paddleboard yoga", "Lake fishing expeditions", "Loon & wildlife watching", "Luxury lakeside cabins"]
    },
    {
      id: "downeast-coastal-explorer",
      title: "Down East Coastal Explorer",
      description: "7-day spectacular coastal odyssey featuring private yacht charters to secret islands, hands-on lobster fishing with fourth-generation fishermen, gourmet clambakes on deserted beaches, and thrilling puffin watching expeditions to remote colonies! Explore historic lighthouses with exclusive after-hours access and private guided tours, participate in beach scavenger hunts for rare shells and sea glass, enjoy lobster roll making competitions with celebrity chefs, and dance under the stars at authentic Maine barn parties. Includes luxury coastal inns, private chef experiences, exclusive lighthouse tours with keepers, and a surprise whale watching adventure with marine biologists! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Sep 15-22, 2026 | Private Adventure Dates Available",
      price: "$14,200",
      highlights: ["Private yacht charters", "Exclusive lighthouse tours", "Celebrity chef experiences", "Whale watching expeditions"]
    },
    {
      id: "bali-soulshine-adventure",
      title: "Bali Soulshine Resort Adventure Escape",
      description: "10-day ultimate tropical paradise adventure at the exclusive Soulshine Resort! Experience sunrise yoga sessions overlooking emerald rice terraces, thrilling white-water rafting through Bali's jungle rivers, rock climbing on volcanic cliffs with ocean views, and paragliding over ancient temples and lush valleys. Enjoy private beach access with world-class surfing instruction, guided temple tours with spiritual ceremonies, traditional Balinese cooking classes with celebrity chefs, and healing spa treatments using sacred volcanic stones. Includes luxury villa accommodations, private guided volcano expeditions, swimming with dolphins, and magical sunset dinners on pristine beaches! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Oct 20-30, 2026 | Private Adventure Dates Available",
      price: "$22,500",
      highlights: ["Exclusive Soulshine Resort", "Guided volcano expeditions", "Temple spiritual ceremonies", "Private beach villa access"]
    },
    {
      id: "appalachian-trail-autumn",
      title: "Appalachian Trail Autumn Spectacular",
      description: "8-day incredible leaf-peeping adventure along the legendary Appalachian Trail during peak fall foliage! Experience nature's most vibrant autumn canvas with private guided hikes through picture-perfect hillsides ablaze with color, luxury glamping under starlit skies, scenic chairlift rides over endless fall landscapes, and gourmet campfire dining with celebrity chefs. Enjoy cozy mountain lodges with spa services, pumpkin patch visits with harvest festivals, wine tastings at scenic overlooks, and surprise hot air balloon rides over the colorful mountain ranges. All fitness levels welcome with custom hiking options! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Oct 5-13, 2026 | Private Adventure Dates Available",
      price: "$13,500",
      highlights: ["Peak fall foliage hiking", "Helicopter landscape tours", "Luxury mountain lodges", "Hot air balloon rides"]
    },
    {
      id: "maine-whitewater-rapids",
      title: "Maine White-Water Rapids Expedition",
      description: "5-day heart-pounding white-water rafting adventure on Maine's wildest rivers including the Kennebec, Penobscot, and Dead Rivers! Experience controlled adrenaline thrills with expert guides, luxury riverside camps with gourmet meals, luxury van transfers between rapids, and evening wilderness spa treatments. Navigate Class V rapids by day, enjoy riverside wine tastings and storytelling around roaring campfires by night. Includes professional photography of your adventures, luxury gear, and a surprise zip-line finale over the river gorge! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Jun 25-30, 2026 | Private Adventure Dates Available",

      price: "$9,200",
      highlights: ["Class V rapids adventure", "Helicopter river transfers", "Luxury riverside camps", "Professional photography"]
    },
    {
      id: "colorado-snowmobile-rockies",
      title: "Colorado Rocky Mountain Snowmobile Safari",
      description: "7-day winter wonderland adventure snowmobiling through Colorado's spectacular Rocky Mountains! Explore 300+ miles of pristine trails around Grand Lake, race through snow-covered forests and ridges, enjoy luxury mountain chalets with hot tubs and gourmet dining, and experience breathtaking scenic gondola rides over snow-capped peaks. Includes professional snowmobile instruction, luxury winter gear, après-ski spa treatments, and magical evening sleigh rides with champagne under the stars! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Jan 15-22, 2026 | Private Adventure Dates Available",
      price: "$14,800",
      highlights: ["300+ miles of snow trails", "Luxury mountain chalets", "Helicopter peak tours", "Champagne sleigh rides"]
    },
    {
      id: "west-virginia-paragliding",
      title: "West Virginia Paragliding Sky Adventure",
      description: "4-day ultimate aerial adventure featuring tandem paragliding over West Virginia's stunning landscapes! Soar like a bird above lush forests and winding rivers from Canaan Valley Resort State Park, enjoy luxury mountain resort accommodations, participate in sunrise balloon festivals, and experience professional flight training with world-class instructors. Includes gourmet mountain cuisine, spa treatments, scenic chairlift rides for aerial photography, and a surprise nighttime paragliding experience with LED wings under the stars! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "May 10-14, 2026 | Private Adventure Dates Available",
      price: "$11,200",
      highlights: ["Tandem paragliding flights", "Luxury mountain resort", "LED night paragliding", "Professional flight training"]
    },
    {
      id: "mount-whitney-summit",
      title: "Mount Whitney Ultimate Summit Challenge",
      description: "6-day epic conquest of Mount Whitney, the highest peak in the lower 48 states! Experience the ultimate bucket-list adventure with professional mountain guides, luxury base camp accommodations, professional porter support for gear transport, and gourmet high-altitude dining. Tackle the famous 99 Switchbacks, enjoy stunning Sierra Nevada vistas, crystal-clear alpine lakes, and celebrate your achievement with a champagne summit toast. Includes altitude training, luxury gear, spa recovery treatments, and a surprise sunrise hot air balloon ride over the Sierra range! Every adventure is a full-body reset — fueling your mind, body, and spirit through daily movement, vibrant real food, and exhilarating experiences that supercharge your health, ignite your energy, and keep you thriving until the next epic journey.",
      date: "Aug 20-26, 2027 | Private Adventure Dates Available",
      price: "$16,800",
      highlights: ["Highest peak in lower 48", "Professional mountain guides", "Helicopter gear support", "Champagne summit celebration"]
    }
  ];

  const createEmailLink = (experienceTitle: string) => {
    const email = 'sunshine@liveboldhealth.com';
    const subject = `Adventure Reservation Request - ${experienceTitle}`;
    const body = 'Sunshine will let you know availability and book your adventure within 24 hours. Feel Good & Adventure On!';
    
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="adventures" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-4">
            Ultra-Luxury Adventure Wellness Vacations
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Experience elite adventure travel that transforms your fitness, wellness, and longevity. Our luxury vacation experiences in Maine and beyond spark your spirit, sharpen your focus, and fill your life with purpose and excitement.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="luxury-card rounded-2xl overflow-hidden premium-hover transition-all duration-300"
              data-testid={`adventure-card-${experience.id}`}
            >
              <div 
                className="w-full h-64 flex items-center justify-center relative"
                style={{
                  backgroundImage: `url(${
                    experience.id === 'acadia-coastal-wellness' ? acadiaBackgroundUrl :
                    experience.id === 'katahdin-nature-discovery' ? katahdinBackgroundUrl :
                    experience.id === 'lakes-region-paddle' ? lakesRegionBackgroundUrl :
                    experience.id === 'downeast-coastal-explorer' ? downeastBackgroundUrl :
                    experience.id === 'bali-soulshine-adventure' ? baliBackgroundUrl :
                    experience.id === 'appalachian-trail-autumn' ? appalachianBackgroundUrl :
                    experience.id === 'maine-whitewater-rapids' ? whitewaterBackgroundUrl :
                    experience.id === 'colorado-snowmobile-rockies' ? coloradoBackgroundUrl :
                    experience.id === 'west-virginia-paragliding' ? paraglidingBackgroundUrl :
                    experience.id === 'mount-whitney-summit' ? whitneyBackgroundUrl :
                    adventureCollageUrl
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <SunLogo size="lg" className="brightness-150 relative z-10" />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
                  <h4 className="font-playfair text-lg sm:text-xl font-semibold" data-testid={`adventure-title-${experience.id}`}>
                    {experience.title}
                  </h4>
                  <span className="text-xl sm:text-2xl font-bold text-brand-blue" data-testid={`adventure-price-${experience.id}`}>
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
                        <span className="w-1 h-1 bg-brand-blue rounded-full"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 space-y-3 sm:space-y-0">
                  <span className="font-bold text-brand-blue text-sm" data-testid={`adventure-date-${experience.id}`}>
                    {experience.date}
                  </span>
                  <a 
                    href={createEmailLink(experience.title)}
                    className="bg-luxury-gradient text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-1 w-full sm:w-auto"
                    data-testid={`button-book-adventure-${experience.id}`}
                  >
                    <span>Reserve Spot</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
