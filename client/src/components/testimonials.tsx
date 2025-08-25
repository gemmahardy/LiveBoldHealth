import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "I was skeptical about another wellness program, but the personalized approach here is different. My energy levels have improved significantly, and I sleep better than I have in years. Worth the investment for someone in a demanding leadership role.",
      author: "Michael Chen",
      title: "CEO, Manufacturing Company",
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      content: "The coaching calls have been incredibly helpful in creating sustainable habits that actually fit my travel schedule. I've lost 15 pounds and my focus during long meetings has noticeably improved. My assistant even commented on my increased energy.",
      author: "Sarah Rodriguez", 
      title: "Managing Director, Investment Fund",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      content: "The health assessment revealed some concerning trends I wasn't aware of. The customized meal plans are realistic for my lifestyle, and having direct text support means I can get guidance when I need it most. Solid program.",
      author: "James Wellington",
      title: "Private Equity Partner",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=60&h=60&fit=crop&crop=face"
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
