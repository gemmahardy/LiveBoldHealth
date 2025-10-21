import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero-section-simple";
import { HealthAssessment } from "@/components/health-assessment";
import { MembershipTiersSimple } from "@/components/membership-tiers-simple";
import { AdventureSimple } from "@/components/adventure-simple";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { FAQSimple } from "@/components/faq-simple";
import { SunbotChatbot } from "@/components/sunbot-chatbot";
import { SEOHead } from "@/components/seo-head";
import { trackClick } from "@/lib/trackClick";

export default function Home() {
  const bookingUrl = import.meta.env.PUBLIC_BOOKING_URL || 'https://calendly.com/live-bold-energy-health/consultation';
  const assessmentUrl = '/assessment';

  const handleOpenConsultation = async () => {
    await trackClick('Book Consultation');
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead 
        title="Live Bold Health — Concierge Health & Longevity, Elevated by Adventure"
        description="Luxury health and adventure concierge combining VO₂ Max testing, personalized plans, and transformative travel."
        keywords="The Energy Lifestyle Company, Live Bold, Bold, breathwork, energy, VO2 max testing, wellness retreats, concierge health, travel, vacation, longevity, health, adventure, personalized support, mind body soul, sunshine, Maine, RMR testing, biometrics, DNA testing, membership, meal plans, diet, fitness, coaching, lifestyle, wellness travel, executive health, health adventures"
      />
      
      <div className="min-h-screen">
        <Navigation onOpenConsultation={handleOpenConsultation} />
        
        <main>
          <HeroSection 
            onOpenConsultation={handleOpenConsultation}
            bookingUrl={bookingUrl}
          />
          
          <div id="assessment">
            <HealthAssessment />
          </div>
          
          <div id="membership">
            <MembershipTiersSimple bookingUrl={bookingUrl} />
          </div>
          
          <div id="adventures">
            <AdventureSimple bookingUrl={bookingUrl} />
          </div>
          
          <Testimonials />
          
          <ContactForm />
          
          <div id="faq">
            <FAQSimple />
          </div>
        </main>
        
        <Footer />
        
        <SunbotChatbot />
      </div>
    </>
  );
}
