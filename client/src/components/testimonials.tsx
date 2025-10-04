import { Star } from "lucide-react";
import { SunLogo } from "./ui/sun-logo";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      title: "The All-in-One Longevity Plan I Didn't Know I Needed.",
      text: "I've tried personal trainers, nutritionists, and countless wellness programs — but nothing compares to Live Bold. This all-in-one longevity plan made everything simple, enjoyable, and effective. My concierge handled every detail, and now I'm stronger, leaner, and more energized than ever.",
      author: "Michael R.",
      role: "CEO & Adventurer"
    },
    {
      id: 2,
      title: "I Never Thought My Health Would Peak Like This.",
      text: "Since joining Live Bold, I've lost weight, gained muscle, and have more energy than I did in my twenties. The personalized plan and biometrics gave me clarity, and the adventures reignited my confidence. It's the perfect balance of science, coaching, and fun.",
      author: "Jennifer P.",
      role: "Entrepreneur & Mother of Two"
    },
    {
      id: 3,
      title: "Adventure Meets Wellness — Stress-Free and Life-Changing.",
      text: "I love being outdoors, and this concierge service aligns perfectly with my lifestyle. Every trip is an adventure designed around my health goals — no stress, just movement, nature, and total rejuvenation. Live Bold turned wellness into something I genuinely look forward to.",
      author: "David K.",
      role: "Tech Executive"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      {/* Large centered watermark behind testimonials */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[850px] sm:h-[1100px] opacity-[0.07] rotate-6">
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
              
              <h3 className="text-base sm:text-lg font-semibold text-luxury-charcoal mb-4 text-center">
                "{testimonial.title}"
              </h3>
              
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-6 text-center">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <p className="font-semibold text-luxury-charcoal">
                  — {testimonial.author}
                </p>
                <p className="text-sm text-brand-slate">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
