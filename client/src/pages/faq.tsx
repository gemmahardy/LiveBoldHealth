import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { SEOHead } from "@/components/seo-head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const handleOpenConsultation = () => {
    window.open('https://calendly.com/contact-sunryz/live-bold-consultation', '_blank', 'noopener,noreferrer');
  };

  const faqData = [
    {
      id: "pricing",
      question: "Is the cost on the website for one person or two?",
      answer: "All listed prices are for one person. A second guest sharing the same accommodations can be added for an additional 25% of the listed price."
    },
    {
      id: "insurance",
      question: "Do I need travel insurance?",
      answer: "Yes. We recommend travel insurance for every trip and will work with you to find a plan that meets your needs."
    },
    {
      id: "refund",
      question: "Will I get a refund if I have to cancel before my trip?",
      answer: "We'll refund your deposit and any additional payment if you cancel 30 days prior to your trip. Because each experience is custom-designed, deposits are non-refundable after 30 days."
    },
    {
      id: "payment",
      question: "Do I pay in full before my trip?",
      answer: "A 25% deposit is due at booking, with the remaining 75% balance due 30 days before your scheduled trip."
    },
    {
      id: "weather",
      question: "What happens if weather disrupts our plans?",
      answer: "We'll either offer alternative activities or reschedule your trip to ensure you still have an exceptional experience."
    },
    {
      id: "reschedule",
      question: "If I cancel, can I reschedule for a later date using my deposit?",
      answer: "Yes, and we encourage you to do so."
    },
    {
      id: "membership-required",
      question: "Do I have to be a member to book a vacation?",
      answer: "No, membership isn't required. However, membership offers additional benefits and is the best pathway to optimal health and preparation for your adventure."
    },
    {
      id: "member-discounts",
      question: "Do members receive discounts on adventures?",
      answer: "Yes. Members receive 20% off each trip booked, plus an additional 10% discount for a second family member."
    },
    {
      id: "meals",
      question: "What types of meals will I get? Are all meals covered?",
      answer: "We customize all meals to align with your health goals. Depending on the trip, meals may be catered or arranged at select restaurants. All meals are included in your trip price."
    },
    {
      id: "satisfaction",
      question: "What if I don't like my adventure or accommodations?",
      answer: "No problem. We have an on-site concierge at every trip who will work with you in real time to adjust your activities or change accommodations to ensure your satisfaction."
    },
    {
      id: "health-vacation",
      question: "Why should I go on a health vacation?",
      answer: "It's the best way to maintain your momentum toward a healthy lifestyle while having fun. Health adventures reset your mind and body while creating unforgettable memories."
    },
    {
      id: "locations",
      question: "Do you only offer adventures in Maine?",
      answer: "No. While we began in Maine, our trips are expanding to other locations based on member demand. If you have a destination suggestion, let us know!"
    },
    {
      id: "custom-adventure",
      question: "How do you customize a \"build your own\" adventure?",
      answer: "We start with an in-depth interview to understand your goals, interests, and preferences, then craft a one-of-a-kind health adventure designed just for you."
    },
    {
      id: "budget",
      question: "What if I'm on a budget?",
      answer: "We offer flexible payment plans so you don't have to delay your adventure."
    },
    {
      id: "dates",
      question: "Do I have to travel on the dates listed on the website?",
      answer: "No. We'll work with you to find dates that fit your calendar."
    },
    {
      id: "group-size",
      question: "How many people can join each trip?",
      answer: "We can book up to six people per trip. Private adventures are also available upon request."
    },
    {
      id: "concierge",
      question: "Is there a concierge on-site for every trip?",
      answer: "Yes. Your Lead Concierge will be with you throughout the trip to ensure a seamless experience — from transportation to meals to last-minute needs."
    },
    {
      id: "remote-services",
      question: "If I'm a member and want VO₂ Max testing or meal planning, do I have to live in Maine?",
      answer: "No. We can come to you or coordinate with local providers to set and achieve your goals."
    },
    {
      id: "about-founder",
      question: "What else should I know about Live Bold?",
      answer: "Live Bold is founded by Sunshine Mechtenberg, who brings 25+ years of health, wellness, and adventure experience. She combines her passion for healthy living and transformative travel to create life-changing experiences for members and guests."
    },
    {
      id: "vo2-max-testing",
      question: "What is VO₂ Max testing and why do I need it?",
      answer: "VO₂ Max testing measures your body's maximum oxygen uptake — the gold standard for cardiovascular fitness and endurance. It helps us create a precise, personalized training plan so you can build energy and longevity efficiently."
    },
    {
      id: "rmr-testing",
      question: "What is RMR testing and why is it important?",
      answer: "RMR (Resting Metabolic Rate) testing measures how many calories your body burns at rest. This allows us to accurately design your nutrition plan for weight management, energy, and optimal health outcomes."
    },
    {
      id: "testing-membership",
      question: "Are VO₂ Max and RMR tests included in my membership?",
      answer: "Yes, both VO₂ Max and RMR testing are included for members. For non-members, testing can be arranged as an add-on service."
    },
    {
      id: "meal-plan-creation",
      question: "How are my meal plans created?",
      answer: "Our team creates fully personalized meal plans based on your VO₂ Max, RMR, health goals, and preferences. We work with chefs, nutritionists, and local providers to ensure your meals are both delicious and aligned with your wellness objectives."
    },
    {
      id: "trip-meals",
      question: "Will my meals be provided during my trip?",
      answer: "Yes, all meals are included. Depending on your adventure, meals may be catered on-site or arranged at hand-selected restaurants."
    },
    {
      id: "health-plans",
      question: "What are personalized health plans?",
      answer: "Beyond meal plans, we build a comprehensive health plan tailored to your data and goals. This may include fitness programming, recovery protocols, supplement guidance, and lifestyle recommendations to help you maintain progress long after your trip."
    },
    {
      id: "health-plan-membership",
      question: "Do I need to be a member to receive a health plan?",
      answer: "No. Non-members can request a health plan as part of their trip package. However, members receive ongoing coaching and plan updates throughout the year."
    }
  ];

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions - Live Bold Health Adventure Concierge"
        description="Get answers to your questions about Live Bold Health's adventure vacations, membership benefits, pricing, and luxury health experiences. Learn about our concierge services, payment plans, and custom adventure options."
        keywords="FAQ, health vacation questions, adventure travel FAQ, Live Bold Health, membership benefits, vacation pricing, travel insurance, concierge services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation onOpenConsultation={handleOpenConsultation} />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-luxury-gradient text-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Everything you need to know about Live Bold Health adventure experiences, 
                  membership benefits, and luxury wellness concierge services.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border border-luxury-sage/20 rounded-lg px-6">
                      <AccordionTrigger 
                        className="text-left text-lg font-semibold text-luxury-charcoal hover:text-brand-blue transition-colors py-6"
                        data-testid={`faq-question-${faq.id}`}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent 
                        className="text-brand-slate leading-relaxed pb-6"
                        data-testid={`faq-answer-${faq.id}`}
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-luxury-gray">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-playfair font-bold text-luxury-charcoal mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-brand-slate mb-8">
                  Our concierge team is ready to help you plan your perfect health adventure experience.
                </p>
                <button
                  onClick={handleOpenConsultation}
                  className="bg-luxury-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
                  data-testid="button-consultation-faq"
                >
                  Schedule Your Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}