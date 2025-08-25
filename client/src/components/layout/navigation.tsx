import { useState } from "react";
import { SunLogo } from "../ui/sun-logo";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenConsultation: () => void;
}

export function Navigation({ onOpenConsultation }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SunLogo size="md" />
            <div>
              <h1 className="font-playfair font-bold text-2xl text-luxury-charcoal">LIVE BOLD</h1>
              <p className="text-xs font-montserrat text-brand-copper uppercase tracking-wider">Concierge Health</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('books')}
              className="text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
              data-testid="nav-books"
            >
              Books
            </button>
            <button 
              onClick={() => scrollToSection('assessment')}
              className="text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
              data-testid="nav-assessment"
            >
              Assessment
            </button>
            <button 
              onClick={() => scrollToSection('membership')}
              className="text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
              data-testid="nav-membership"
            >
              Membership
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
                onClick={() => scrollToSection('services')}
                className="text-left text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
                data-testid="nav-services-mobile"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('books')}
                className="text-left text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
                data-testid="nav-books-mobile"
              >
                Books
              </button>
              <button 
                onClick={() => scrollToSection('assessment')}
                className="text-left text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
                data-testid="nav-assessment-mobile"
              >
                Assessment
              </button>
              <button 
                onClick={() => scrollToSection('membership')}
                className="text-left text-luxury-charcoal hover:text-brand-orange transition-colors font-medium"
                data-testid="nav-membership-mobile"
              >
                Membership
              </button>
              <button 
                onClick={onOpenConsultation}
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
