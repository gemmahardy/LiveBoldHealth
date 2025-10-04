import { Mountain, Waves, Snowflake, Compass, Calendar, Bike, Ship, TreePine, Wind } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";
import { trackClick } from "@/lib/trackClick";

interface AdventureSimpleProps {
  bookingUrl: string;
}

export function AdventureSimple({ bookingUrl }: AdventureSimpleProps) {
  const exampleRetreats = [
    {
      title: "Acadia Coastal Wellness Retreat",
      description: "Sunrise yoga, lobster boat tours, and sea cave kayaking",
      price: "$10,500",
      dates: "Jun 12-17, 2026",
      icon: Waves,
      testId: "retreat-acadia"
    },
    {
      title: "Maine Mountains Climbing Expedition",
      description: "Rock climbing, moose tracking, and wilderness adventures",
      price: "$12,500",
      dates: "Jul 20-26, 2026",
      icon: Mountain,
      testId: "retreat-mountains"
    },
    {
      title: "Maine Lakes Paddle & Wellness",
      description: "Paddleboard yoga, lake fishing, and wildlife watching",
      price: "$10,800",
      dates: "Sep 10-17, 2026",
      icon: Bike,
      testId: "retreat-lakes"
    },
    {
      title: "Down East Coastal Explorer",
      description: "Private yacht charters, lobster fishing, puffin watching",
      price: "$14,200",
      dates: "Aug 5-11, 2026",
      icon: Ship,
      testId: "retreat-coastal"
    },
    {
      title: "Bali Soulshine Adventure Escape",
      description: "Yoga, white-water rafting, and rock climbing paradise",
      price: "$22,500",
      dates: "Year-round availability",
      icon: Compass,
      testId: "retreat-bali"
    },
    {
      title: "Appalachian Trail Autumn Spectacular",
      description: "Guided hikes and luxury glamping through fall foliage",
      price: "$13,500",
      dates: "Oct 1-8, 2026",
      icon: TreePine,
      testId: "retreat-appalachian"
    },
    {
      title: "Maine White-Water Rapids",
      description: "Thrilling white-water rafting adventure",
      price: "$9,200",
      dates: "Multiple dates available",
      icon: Waves,
      testId: "retreat-whitewater"
    },
    {
      title: "Maine Winter Snowmobile Safari",
      description: "Snowmobiling adventure through the North Woods",
      price: "$8,400",
      dates: "Jan-Mar 2026",
      icon: Snowflake,
      testId: "retreat-snowmobile"
    },
    {
      title: "New Hampshire Paragliding Sky Adventure",
      description: "Tandem paragliding and aerial mountain adventures",
      price: "$11,200",
      dates: "Spring & Summer 2026",
      icon: Wind,
      testId: "retreat-paragliding"
    },
    {
      title: "Hut to Hut Trail Running & Mountain Biking",
      description: "Adventure in Western Maine",
      price: "$5,400",
      dates: "Multiple dates",
      icon: Bike,
      testId: "retreat-huttohut"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50/30 via-white to-luxury-gray relative overflow-hidden">
      {/* Decorative Elements */}
      {/* Diagonal spanning watermark */}
      <div className="absolute top-0 right-0 w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] opacity-[0.06] rotate-45 translate-x-1/4 -translate-y-1/4">
        <SunLogo className="w-full h-full text-brand-blue" />
      </div>
      <div className="absolute bottom-0 left-0 w-[650px] sm:w-[780px] h-[650px] sm:h-[780px] opacity-[0.06] -rotate-12 -translate-x-1/4 translate-y-1/4">
        <SunLogo className="w-full h-full text-brand-gold" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 px-2">
            Adventure Experiences
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-slate max-w-3xl mx-auto px-4">
            Transform your health through extraordinary experiences
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border-2 border-brand-blue/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute -top-10 -right-10 w-48 h-48 opacity-5">
              <SunLogo className="w-full h-full text-brand-gold" />
            </div>
            
            <div className="text-center mb-4 sm:mb-6 relative z-10">
              <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-400 items-center justify-center mb-3 sm:mb-4 shadow-lg">
                <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-luxury-charcoal mb-2 sm:mb-3 px-2">
                Create Your Own Adventure
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-brand-slate max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
                From relaxation-focused wellness retreats to high-intensity adventure experiences, we design custom journeys that match your goals and energy level. Every adventure includes health optimization, personalized coaching, and unforgettable experiences.
              </p>
              <Button
                onClick={async () => {
                  await trackClick('Start Planning');
                  window.open(bookingUrl, '_blank', 'noopener,noreferrer');
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:shadow-xl transition-all rounded-full hover:from-blue-700 hover:to-blue-600 active:scale-95 w-full sm:w-auto"
                data-testid="button-start-planning"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start Planning
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-playfair font-bold text-center text-luxury-charcoal mb-6 sm:mb-8 px-2">
            Featured Retreat Examples
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {exampleRetreats.map((retreat) => {
              const IconComponent = retreat.icon;
              return (
                <div
                  key={retreat.title}
                  className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 md:hover:scale-105 active:scale-95 border-2 border-transparent hover:border-brand-gold/50 relative overflow-hidden group"
                  data-testid={retreat.testId}
                >
                  {/* Background decoration */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <SunLogo className="w-full h-full text-brand-gold" />
                  </div>
                  
                  <div className="flex justify-center mb-4 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-luxury-charcoal mb-2 text-center">
                    {retreat.title}
                  </h4>
                  
                  <p className="text-brand-slate text-sm mb-4 text-center">
                    {retreat.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-brand-blue mb-1">
                      {retreat.price}
                    </div>
                    <div className="text-sm text-brand-slate">
                      {retreat.dates}
                    </div>
                  </div>
                  
                  <Button
                    onClick={async () => {
                      await trackClick(`Reserve Spot - ${retreat.title}`);
                      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
                    }}
                    variant="outline"
                    className="w-full border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all rounded-full"
                    data-testid={`button-${retreat.testId}`}
                  >
                    Reserve Spot
                  </Button>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-brand-slate">
              <strong>Note:</strong> All prices are per person. Add a guest for +25% of listed price. 
              Members receive 20-50% discounts based on tier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
