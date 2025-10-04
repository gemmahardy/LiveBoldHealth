import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero-section-simple";
import { MembershipTiersSimple } from "@/components/membership-tiers-simple";
import { AdventureSimple } from "@/components/adventure-simple";
import { ContactForm } from "@/components/contact-form";
import { FAQSimple } from "@/components/faq-simple";
import { SunbotChatbot } from "@/components/sunbot-chatbot";
import { SEOHead } from "@/components/seo-head";

export default function Home() {
  const bookingUrl = import.meta.env.PUBLIC_BOOKING_URL || 'https://calendly.com/contact-sunryz/live-bold-consultation';
  const assessmentUrl = '/assessment';

  const handleOpenConsultation = () => {
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead 
        title="Live Bold Health — Concierge Health & Longevity, Elevated by Adventure"
        description="Luxury health and adventure concierge combining VO₂ Max testing, personalized plans, and transformative travel."
        keywords="concierge health, longevity, VO2 max testing, health adventures, wellness travel, executive health"
      />
      
      <div className="min-h-screen">
        <Navigation onOpenConsultation={handleOpenConsultation} />
        
        <main>
          <HeroSection 
            onOpenConsultation={handleOpenConsultation}
            bookingUrl={bookingUrl}
          />
          
          <div id="membership">
            <MembershipTiersSimple bookingUrl={bookingUrl} />
          </div>
          
          <div id="adventures">
            <AdventureSimple bookingUrl={bookingUrl} />
          </div>
          
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
