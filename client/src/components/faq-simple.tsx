import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";
import { SunLogo } from "./ui/sun-logo";

export function FAQSimple() {
  const faqs = [
    {
      question: "How much does an adventure cost?",
      answer: "All listed prices are for one person. A second guest sharing the same accommodations can be added for an additional 25% of the listed price. For example, if a retreat costs $10,000, adding a guest would be $2,500."
    },
    {
      question: "Do I need travel insurance?",
      answer: "Yes, travel insurance is required for all adventures. We help you set up appropriate coverage and will work with you to find a plan that meets your needs and budget."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a full refund if you cancel 30 days or more before your trip. Because each experience is custom-designed for you, deposits become non-refundable within 30 days of departure. However, you can reschedule to a later date using your deposit."
    },
    {
      question: "What is VO₂ Max & RMR Testing?",
      answer: "VO₂ Max measures your maximum oxygen consumption during exercise - it's the gold standard for cardiovascular fitness and a key longevity marker. RMR (Resting Metabolic Rate) measures how many calories your body burns at rest, which is essential for creating an accurate nutrition plan. Together, these tests provide the scientific baseline for your personalized health program."
    },
    {
      question: "What do meal plans include?",
      answer: "Our meal plans are fully personalized based on your RMR testing, health goals, and preferences. You'll receive detailed nutrition guidance, recipe suggestions, and macro targets. Essential and VIP members receive ongoing meal plan adjustments based on your progress and changing needs."
    },
    {
      question: "What are the membership benefits?",
      answer: "Community members get VO₂ Max testing, personalized plans, and 20% off adventures. Essential Concierge members ($5k/month) receive dedicated concierge support, monthly testing, weekly coaching, and 30% off adventures. VIP Concierge members ($10k/month) get 24/7 access, unlimited coaching, bi-weekly testing, and 50% off all adventures."
    },
    {
      question: "Do members get adventure discounts?",
      answer: "Yes! Community members save 20% on all adventures, Essential Concierge members save 30%, and VIP Concierge members save 50%. Members also receive an additional 10% discount when bringing a second family member on any adventure."
    },
    {
      question: "Do I need to be a member to book an adventure?",
      answer: "No, membership is not required to book an adventure. However, membership provides significant discounts on adventures plus comprehensive health optimization services to help you prepare for and maximize your experience."
    },
    {
      question: "Can't I just book this trip myself?",
      answer: "You could — but it wouldn't be a Live Bold Health experience. Our concierge team curates every detail for you — from luxury accommodations to adventure logistics — ensuring your trip aligns perfectly with your personalized health and wellness blueprint. We leverage exclusive partnerships, provide on-site concierge support, and design every experience around your goals, abilities, and desired outcomes. All you have to do is show up, recharge, and thrive."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-luxury-gray via-blue-50/20 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 opacity-5">
        <SunLogo className="w-full h-full text-brand-blue" />
      </div>
      <div className="absolute bottom-0 left-1/3 w-40 sm:w-56 h-40 sm:h-56 opacity-5">
        <SunLogo className="w-full h-full text-brand-gold" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-400 items-center justify-center mb-3 sm:mb-4 shadow-lg">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 px-2">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-slate px-4">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border-2 border-brand-blue/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-48 h-48 opacity-5">
              <SunLogo className="w-full h-full text-brand-gold" />
            </div>
            
            <Accordion type="single" collapsible className="w-full relative z-10">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger 
                    className="text-left text-base sm:text-lg font-semibold text-luxury-charcoal hover:text-brand-blue py-4"
                    data-testid={`faq-question-${index}`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-sm sm:text-base text-brand-slate leading-relaxed"
                    data-testid={`faq-answer-${index}`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
