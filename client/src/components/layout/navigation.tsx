import { useState } from "react";
import { Link, useLocation } from "wouter";
import { SunLogo } from "../ui/sun-logo";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenConsultation: () => void;
}

export function Navigation({ onOpenConsultation }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    if (location === '/') {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SunLogo size="lg" />
            <div>
              <h1 className="font-playfair font-bold text-xl text-luxury-charcoal"><span className="text-brand-blue">Live Bold</span> Health</h1>
              <p className="text-xs font-montserrat text-brand-slate uppercase tracking-wider">Adventure Concierge</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onOpenConsultation}
              className="text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
              data-testid="nav-consultation"
            >
              Consultation
            </button>
            <button 
              onClick={() => handleNavigation('membership')}
              className="text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
              data-testid="nav-membership"
            >
              Membership
            </button>
            <button 
              onClick={() => handleNavigation('adventures')}
              className="text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
              data-testid="nav-adventures"
            >
              Adventures
            </button>
            <button 
              onClick={() => handleNavigation('faq')}
              className="text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
              data-testid="nav-faq"
            >
              FAQ
            </button>
            <button 
              onClick={onOpenConsultation}
              className="bg-luxury-gradient text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              data-testid="button-consultation-nav"
            >
              Book Consultation
            </button>
          </div>
          
          <button 
            className="md:hidden text-luxury-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  onOpenConsultation();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
                data-testid="nav-consultation-mobile"
              >
                Consultation
              </button>
              <button 
                onClick={() => handleNavigation('membership')}
                className="text-left text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
                data-testid="nav-membership-mobile"
              >
                Membership
              </button>
              <button 
                onClick={() => handleNavigation('adventures')}
                className="text-left text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
                data-testid="nav-adventures-mobile"
              >
                Adventures
              </button>
              <button 
                onClick={() => handleNavigation('faq')}
                className="text-left text-luxury-charcoal hover:text-brand-blue transition-colors font-medium"
                data-testid="nav-faq-mobile"
              >
                FAQ
              </button>
              <button 
                onClick={() => {
                  onOpenConsultation();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-luxury-gradient text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all text-center"
                data-testid="button-consultation-mobile"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
