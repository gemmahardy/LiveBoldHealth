import { Mountain, Waves, Snowflake, Compass, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { SunLogo } from "./ui/sun-logo";

interface AdventureSimpleProps {
  bookingUrl: string;
}

export function AdventureSimple({ bookingUrl }: AdventureSimpleProps) {
  const exampleRetreats = [
    {
      title: "Maine Coastal Adventure",
      description: "Kayaking, hiking, and wellness retreat on the coast",
      price: "$8,400",
      dates: "Multiple dates available",
      icon: Waves,
      testId: "retreat-maine"
    },
    {
      title: "New Hampshire Mountain Experience",
      description: "Paragliding, hang gliding, and mountain adventures",
      price: "$11,200",
      dates: "Spring & Summer 2025",
      icon: Mountain,
      testId: "retreat-newhampshire"
    },
    {
      title: "Bali Wellness Escape",
      description: "Luxury wellness retreat with cultural immersion",
      price: "$15,000",
      dates: "Year-round availability",
      icon: Compass,
      testId: "retreat-bali"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-luxury-gray relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 opacity-5">
        <SunLogo className="w-full h-full text-brand-blue" />
      </div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10">
        <SunLogo className="w-full h-full text-brand-gold" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-luxury-charcoal mb-4">
            Adventure Experiences
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Transform your health through extraordinary experiences
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-brand-blue/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute -top-10 -right-10 w-48 h-48 opacity-5">
              <SunLogo className="w-full h-full text-brand-gold" />
            </div>
            
            <div className="text-center mb-6 relative z-10">
              <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-400 items-center justify-center mb-4 shadow-lg">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-luxury-charcoal mb-3">
                Create Your Own Adventure
              </h3>
              <p className="text-lg text-brand-slate max-w-2xl mx-auto mb-6">
                From relaxation-focused wellness retreats to high-intensity adventure experiences, we design custom journeys that match your goals and energy level. Every adventure includes health optimization, personalized coaching, and unforgettable experiences.
              </p>
              <Button
                onClick={() => window.open(bookingUrl, '_blank', 'noopener,noreferrer')}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all rounded-full hover:from-blue-700 hover:to-blue-600"
                data-testid="button-start-planning"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Start Planning
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-playfair font-bold text-center text-luxury-charcoal mb-8">
            Featured Retreat Examples
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exampleRetreats.map((retreat) => {
              const IconComponent = retreat.icon;
              return (
                <div
                  key={retreat.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-brand-gold/50 relative overflow-hidden group"
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
                    onClick={() => window.open(bookingUrl, '_blank', 'noopener,noreferrer')}
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
