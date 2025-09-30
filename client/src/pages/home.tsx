import { useState } from "react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";
import { BooksCollection } from "@/components/books-collection";
import { HealthAssessment } from "@/components/health-assessment";
import { MembershipTiers } from "@/components/membership-tiers";
import { AdventureExperiences } from "@/components/adventure-experiences";
import { Testimonials } from "@/components/testimonials";
import { FinalCTA } from "@/components/final-cta";
import { SunbotChatbot } from "@/components/sunbot-chatbot";
import { WellnessCollage } from "@/components/wellness-collage";

export default function Home() {
  const [isAssessmentVisible, setIsAssessmentVisible] = useState(false);

  const handleOpenConsultation = () => {
    window.open('https://calendly.com/contact-sunryz/live-bold-consultation', '_blank');
  };

  const handleStartAssessment = () => {
    setIsAssessmentVisible(true);
    const element = document.getElementById('assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onOpenConsultation={handleOpenConsultation} />
      
      <main>
        <HeroSection 
          onOpenConsultation={handleOpenConsultation}
          onStartAssessment={handleStartAssessment}
        />
        
        {/* Inspirational Quote Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-playfair text-luxury-charcoal leading-relaxed italic">
                "This isn't about chasing extremes. It's about mastering your health and lifestyle with the power of adventure, advanced biometrics, and a personalized concierge plan — unlocking the vitality, confidence, and clarity to live at your highest level."
              </p>
              <p className="text-lg text-brand-blue font-semibold mt-6">— Sunshine</p>
            </div>
          </div>
        </section>
        
        {/* The Live Bold Concierge Journey */}
        <section className="py-16 bg-luxury-gray">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-luxury-charcoal mb-4">
                The Live Bold Concierge Journey
              </h2>
              <p className="text-lg text-brand-slate">
                Your pathway to energy, longevity, and extraordinary adventure.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: 1,
                  title: "Book Your Free Consultation",
                  description: "Start bold. Schedule your private consult and discover what's possible when science, wellness, and adventure meet."
                },
                {
                  step: 2,
                  title: "Unlock Your Membership",
                  description: "Choose your membership tier and gain instant access to concierge services, luxury perks, and member-only pricing."
                },
                {
                  step: 3,
                  title: "Discover Your Baseline",
                  description: "Experience advanced VO₂ Max and RMR testing — gold-standard performance metrics — to reveal your true starting point."
                },
                {
                  step: 4,
                  title: "Design Your Bold Life",
                  description: "Work hand-in-hand with your concierge to craft a personalized plan for energy, performance, and longevity."
                },
                {
                  step: 5,
                  title: "Receive Your Blueprint",
                  description: "Your Health & Wellness Master Plan — nutrition, fitness, recovery, and lifestyle — tailored to your goals."
                },
                {
                  step: 6,
                  title: "Activate Your Transformation",
                  description: "Begin your journey with concierge-managed support, accountability, and precision coaching."
                },
                {
                  step: 7,
                  title: "Experience Your First Adventure",
                  description: "From luxury coastal retreats in Maine to Bali escapes, choose a health adventure that resets your body, ignites your energy, and expands your horizons."
                },
                {
                  step: 8,
                  title: "Share the Bold Life",
                  description: "Invite a friend or family member — members receive exclusive referral rewards and discounted rates."
                },
                {
                  step: 9,
                  title: "Achieve Your Health & Lifestyle Goals",
                  description: "Celebrate milestones, track progress with advanced biometrics, and feel the energy surge through every area of your life."
                },
                {
                  step: 10,
                  title: "Set Your Next Bold Goal",
                  description: "Momentum never stops — establish new goals with your concierge and continue living healthier, stronger, and longer."
                }
              ].map((item) => (
                <div 
                  key={item.step} 
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`journey-step-${item.step}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-gradient flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="text-brand-slate leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-lg text-luxury-charcoal font-medium mb-2">
                  ✨ Result:
                </p>
                <p className="text-brand-slate leading-relaxed">
                  A 10-step concierge-guided journey that transforms your health, builds unstoppable momentum, and keeps you living bold — for life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <WellnessCollage />
        
        <ServicesOverview />
        
        <MembershipTiers />
        
        <HealthAssessment />
        
        {/* Adventure Quote Section */}
        <section className="py-16 bg-luxury-gray">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-playfair text-luxury-charcoal leading-relaxed italic">
                "Adventure is a health tool. When you engage your body and mind in new ways, you unlock more than just strength and stamina — you ignite your energy, build resilience, and boost your ability to take on life with boldness and joy."
              </p>
              <p className="text-lg text-brand-blue font-semibold mt-6">— Sunshine</p>
            </div>
          </div>
        </section>
        
        <AdventureExperiences />
        
        <Testimonials />
        
        <BooksCollection />
        
        <FinalCTA 
          onOpenConsultation={handleOpenConsultation}
          onStartAssessment={handleStartAssessment}
        />
      </main>
      
      <Footer />
      
      <SunbotChatbot />
      
    </div>
  );
}
