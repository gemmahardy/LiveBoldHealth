import { SunLogo } from "../ui/sun-logo";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-luxury-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <SunLogo size="md" className="scale-75" />
              <div>
                <h4 className="font-playfair font-bold text-xl">LIVE BOLD</h4>
                <p className="text-xs font-montserrat text-brand-copper uppercase tracking-wider">Concierge Health</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your High-Performance Health Concierge for executives who demand excellence in every aspect of life.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-lg mb-4">Services</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-health-optimization"
                >
                  Health Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-concierge-coaching"
                >
                  Concierge Coaching
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('adventures')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-adventure-experiences"
                >
                  Adventure Experiences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-biohacking-access"
                >
                  Biohacking Access
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-lg mb-4">Resources</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('books')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-premium-books"
                >
                  Premium Books
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('assessment')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-health-assessment"
                >
                  Health Assessment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('membership')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-membership-tiers"
                >
                  Membership Tiers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-brand-orange transition-colors text-left"
                  data-testid="footer-success-stories"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-lg mb-4">Contact</h5>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="contact-email">executive@livebold.com</li>
              <li data-testid="contact-phone">+1 (555) 123-4567</li>
              <li data-testid="contact-location">Beverly Hills, CA</li>
            </ul>
            
            <div className="mt-6 space-y-3">
              <h6 className="font-semibold text-brand-orange">Your Point of Contact</h6>
              <div className="flex items-center space-x-3">
                <img 
                  src="/attached_assets/IMG_2514_1756148569389.jpg" 
                  alt="Sunshine - Executive Wellness Consultant" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange"
                  data-testid="contact-sunshine-photo"
                />
                <div>
                  <p className="font-medium text-white" data-testid="contact-sunshine-name">Sunshine</p>
                  <p className="text-sm text-gray-400">Executive Wellness Consultant</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors" data-testid="social-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors" data-testid="social-twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Live Bold Concierge Health & Adventure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
