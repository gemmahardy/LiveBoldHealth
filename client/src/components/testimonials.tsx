import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "The Live Bold community has transformed our family's approach to health. The VO2 Max testing revealed insights we never knew, and the adventure retreats have become our favorite family bonding time. My energy is through the roof and my kids love the active lifestyle we've built together.",
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
      content: "Joining the Live Bold community was the best decision for our family's health journey. The adventure retreats combined with personalized coaching have created lasting memories while dramatically improving our fitness. My wife and I both feel 10 years younger.",
      author: "James Wellington",
      title: "Private Equity Partner",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 4,
      content: "Between board meetings and travel, I barely had time to think about my health. The Live Bold community has been transformative for my wellness journey. I'm especially looking forward to the Bali Retreat next year - it's exactly what I need to reset and recharge while building lasting healthy habits.",
      author: "Amanda Foster",
      title: "Chief Financial Officer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 5,
      content: "The VO2 Max testing and health optimization combined with Maine's coastal adventures created the perfect balance for our busy family. Our kids are more active, we're eating better, and we've made lifelong friends in the community. This program gets results.",
      author: "David Kim",
      title: "Senior Vice President, Technology",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 6,
      content: "I've tried personal trainers and nutritionists before, but this is different. The concierge approach means everything is coordinated - from meal prep to workout scheduling. Finally, a wellness program that respects my time constraints.",
      author: "Lisa Thompson",
      title: "Regional Director, Consulting Firm",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 7,
      content: "The mountain climbing expedition pushed me out of my comfort zone in the best way. I'm 52 and in better shape now than I was in my 30s. The program doesn't just focus on physical health - it's transformed my entire mindset.",
      author: "Robert Martinez",
      title: "General Manager, Hospitality Group",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 8,
      content: "What impressed me most was how they adapted everything to my crazy schedule. Late-night calls with Janine, early morning flights - they made it work. My stress levels are down and my team has noticed the difference in my leadership style.",
      author: "Jennifer Park",
      title: "Executive Director, Financial Services",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-4">
            Families & Executives Living Their Boldest Lives
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            What our community members are saying about their health adventure journey with VO2 Max testing, coaching, and luxury retreat experiences
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="luxury-card rounded-2xl p-8"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="flex text-brand-blue mb-4">
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
