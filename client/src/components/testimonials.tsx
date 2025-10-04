import { Star } from "lucide-react";
import { SunLogo } from "./ui/sun-logo";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Adventure client testimonial"
    },
    {
      id: 2,
      text: "Adventure client testimonial"
    },
    {
      id: 3,
      text: "Adventure client testimonial"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-48 sm:w-64 h-48 sm:h-64 opacity-5">
        <SunLogo className="w-full h-full text-brand-blue" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 px-2">
            Trusted by High-Performance Executives & Leaders
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className="w-6 h-6 fill-brand-gold text-brand-gold" 
                data-testid={`star-${star}`}
              />
            ))}
          </div>
          <p className="text-base sm:text-lg text-brand-slate">
            Premium wellness partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-brand-blue/10"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-brand-gold text-brand-gold" 
                  />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed text-center italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
