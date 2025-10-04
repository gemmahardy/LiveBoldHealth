import { Mountain, Waves, Snowflake, Compass, Calendar } from "lucide-react";
import { Button } from "./ui/button";

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
    <section className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-luxury-charcoal mb-4">
            Adventure Experiences
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Transform your health through extraordinary experiences
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex w-16 h-16 rounded-full bg-luxury-gradient items-center justify-center mb-4">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-luxury-charcoal mb-3">
                Create Your Own Adventure
              </h3>
              <p className="text-lg text-brand-slate max-w-2xl mx-auto mb-6">
                From relaxation-focused wellness retreats to high-intensity adventure experiences, we design custom journeys that match your goals and energy level. Every adventure includes health optimization, personalized coaching, and unforgettable experiences.
              </p>
              <Button
                onClick={() => window.open(bookingUrl, '_blank', 'noopener,noreferrer')}
                className="bg-luxury-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all rounded-full"
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
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
                  data-testid={retreat.testId}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-brand-blue" />
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
