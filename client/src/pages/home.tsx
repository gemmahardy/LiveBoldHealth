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
