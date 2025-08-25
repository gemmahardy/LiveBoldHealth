import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "In 30 years of building companies, this is the single best investment I've made. My energy at 60 surpasses what I had at 40. The concierge approach means I focus on what matters most while they handle every detail of my optimization.",
      author: "Michael Chen",
      title: "Chairman & CEO, Chen Enterprises ($2.1B)",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      content: "The difference between standard executive health programs and Live Bold is like comparing commercial aviation to private jets. Every protocol is bespoke, every experience is world-class. This is health optimization for people who understand true luxury.",
      author: "Sarah Rodriguez", 
      title: "Managing Partner, Blackstone Alternative Assets",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0e5?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      content: "After selling my company for $850M, I thought I had everything. But optimizing my health and longevity through Live Bold has given me the energy and clarity to build my next empire. The ROI is immeasurable.",
      author: "James Wellington",
      title: "Founder, Wellington Capital & Family Office",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-4xl font-bold text-luxury-charcoal mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-xl text-gray-600">
            What executives are saying about their transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="luxury-card rounded-2xl p-8"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="flex text-brand-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed" data-testid={`testimonial-content-${testimonial.id}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  className="w-12 h-12 rounded-full" 
                  alt={`${testimonial.author} testimonial`}
                  data-testid={`testimonial-avatar-${testimonial.id}`}
                />
                <div>
                  <p className="font-semibold" data-testid={`testimonial-author-${testimonial.id}`}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600" data-testid={`testimonial-title-${testimonial.id}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
