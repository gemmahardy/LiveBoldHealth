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
import { ConsultationModal } from "@/components/consultation-modal";

export default function Home() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isAssessmentVisible, setIsAssessmentVisible] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
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
        
        <ServicesOverview />
        
        <BooksCollection />
        
        <HealthAssessment />
        
        <MembershipTiers />
        
        <AdventureExperiences />
        
        <Testimonials />
        
        <FinalCTA 
          onOpenConsultation={handleOpenConsultation}
          onStartAssessment={handleStartAssessment}
        />
      </main>
      
      <Footer />
      
      <SunbotChatbot />
      
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}
