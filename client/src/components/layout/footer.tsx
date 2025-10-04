import { useState } from "react";
import { SunLogo } from "../ui/sun-logo";
import { Linkedin, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import sunshinePhoto from '@assets/IMG_2514_1756148569389.jpg';
import janinePhoto from '@assets/Janine Pic_1759274688615.jpg';

export function Footer() {
  const [isSunshineBioOpen, setIsSunshineBioOpen] = useState(false);
  const [isJanineBioOpen, setIsJanineBioOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <SunLogo size="md" />
              <div>
                <h4 className="font-playfair font-bold text-lg"><span className="text-brand-blue">Live Bold</span> Health</h4>
                <p className="text-xs font-montserrat text-brand-slate uppercase tracking-wider">Adventure Concierge</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your exclusive health & adventure concierge community with VO2 max testing, retreats, and personalized wellness support.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('membership')}
                  className="hover:text-brand-blue transition-colors text-left"
                  data-testid="footer-membership"
                >
                  Membership
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('adventures')}
                  className="hover:text-brand-blue transition-colors text-left"
                  data-testid="footer-adventures"
                >
                  Adventures
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-brand-blue transition-colors text-left"
                  data-testid="footer-faq"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a 
                  href="mailto:sunshine@liveboldhealth.com"
                  className="hover:text-brand-blue transition-colors"
                  data-testid="footer-contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-lg mb-4">About</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => setIsSunshineBioOpen(true)}
                  className="hover:text-brand-blue transition-colors text-left"
                  data-testid="footer-sunshine-bio"
                >
                  Meet Sunshine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsJanineBioOpen(true)}
                  className="hover:text-brand-blue transition-colors text-left"
                  data-testid="footer-janine-bio"
                >
                  Meet Janine
                </button>
              </li>
              <li>
                <a 
                  href="https://calendly.com/contact-sunryz/live-bold-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors"
                  data-testid="footer-schedule"
                >
                  Schedule Consultation
                </a>
              </li>
              <li>
                <a 
                  href="https://www.energylifestyle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors"
                  data-testid="footer-book-now"
                >
                  Book Now - Payment
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-lg mb-4">Contact</h5>
            <ul className="space-y-2 text-gray-300">
              <li data-testid="contact-email">sunshine@liveboldhealth.com</li>
              <li data-testid="contact-phone">(207) 944-5211</li>
              <li data-testid="contact-location">Brunswick, Maine</li>
            </ul>
            
            <div className="mt-6 space-y-3">
              <h6 className="font-semibold text-brand-blue">Your Point of Contact</h6>
              <div className="flex items-center space-x-3">
                <img 
                  src={sunshinePhoto}
                  alt="Sunshine - Executive Wellness Consultant" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue"
                  data-testid="contact-sunshine-photo"
                />
                <div>
                  <button 
                    onClick={() => setIsSunshineBioOpen(true)}
                    className="font-medium text-white hover:text-brand-blue transition-colors cursor-pointer text-left" 
                    data-testid="contact-sunshine-name"
                  >
                    Sunshine Mechtenberg
                  </button>
                  <p className="text-sm text-gray-300">Executive Wellness Consultant</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <img 
                  src={janinePhoto}
                  alt="Janine Herrick - Lead Concierge and Health Coach" 
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-brand-blue"
                  data-testid="contact-janine-photo"
                />
                <div>
                  <button 
                    onClick={() => setIsJanineBioOpen(true)}
                    className="font-medium text-white hover:text-brand-blue transition-colors cursor-pointer text-left" 
                    data-testid="contact-janine-name"
                  >
                    Janine Herrick
                  </button>
                  <p className="text-sm text-gray-300">Lead Concierge and Health Coach</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/sunshinemechtenberg/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-blue transition-colors" 
                data-testid="social-linkedin"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 space-y-6 text-center text-gray-300">
          <div className="bg-gray-700 rounded-lg p-6 text-left">
            <p className="text-gray-200 leading-relaxed mb-4">
              <span className="font-semibold text-brand-blue">Not in Maine? No problem.</span> We bring the concierge experience to you — whether by traveling directly to your location or coordinating with trusted local providers for biometrics, meal planning, and fitness coaching. Every detail is personalized for your success. Take the first step today and schedule your private consultation.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://calendly.com/contact-sunryz/live-bold-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-luxury-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
                data-testid="button-footer-consultation"
              >
                <span>Schedule Your Private Consultation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <p>&copy; 2026 Live Bold Health Adventure Concierge. All rights reserved.</p>
        </div>
      </div>
      
      {/* Sunshine Bio Modal */}
      <Dialog open={isSunshineBioOpen} onOpenChange={setIsSunshineBioOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-4 mb-4">
              <img 
                src={sunshinePhoto}
                alt="Sunshine Mechtenberg" 
                className="w-16 h-16 rounded-full object-cover border-2 border-brand-blue"
              />
              <div>
                <h3 className="text-2xl font-playfair font-bold text-luxury-charcoal">Sunshine Mechtenberg</h3>
                <p className="text-brand-blue font-medium">Executive Wellness Consultant</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="text-lg font-semibold text-luxury-charcoal mb-2">👋 <strong>Who is Sunshine?</strong></p>
              <p className="leading-relaxed">
                I'm your Executive Concierge for health, wellness, and adventure. With over 25 years of expertise in health optimization, performance coaching, and executive consulting, I specialize in helping busy professionals and entrepreneurs live happier, healthier, and longer lives.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <ul className="space-y-2 text-sm">
                <li>• Author of <strong>Live Bold!</strong> and <strong>Feel Good & Shine On®</strong></li>
                <li>• CEO & Founder of <strong>The Energy Lifestyle Company™</strong></li>
                <li>• Creator of the <strong>Feel Good & Adventure On®</strong> Method — combining adventure, longevity science, and data-driven biometrics</li>
                <li>• Global Speaker & Consultant for health, wellness, and sustainable living</li>
                <li>• Background in executive leadership & startup consulting, guiding companies and individuals toward scalable success</li>
                <li>• Passionate ultra-runner, paddleboarder, and adventurer living on the Maine coast</li>
              </ul>
            </div>
            
            <p className="leading-relaxed">
              As your concierge, I deliver personalized strategies, advanced biometrics, and curated adventure experiences designed to elevate energy, expand resilience, and unlock longevity — so you can perform at your highest level in business and life.
            </p>
            
            <div className="bg-luxury-gradient text-white rounded-lg p-4 text-center">
              <p className="font-semibold mb-3">✨ <strong>Ready to work with Sunshine?</strong></p>
              <a 
                href="https://calendly.com/contact-sunryz/live-bold-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-blue px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
                onClick={() => setIsSunshineBioOpen(false)}
              >
                Schedule Your Personal Consultation
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Janine Bio Modal */}
      <Dialog open={isJanineBioOpen} onOpenChange={setIsJanineBioOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-4 mb-4">
              <img 
                src={janinePhoto}
                alt="Janine Herrick" 
                className="w-16 h-16 rounded-full object-cover object-top border-2 border-brand-blue"
              />
              <div>
                <h3 className="text-2xl font-playfair font-bold text-luxury-charcoal">Janine Herrick</h3>
                <p className="text-brand-blue font-medium">Lead Concierge and Health Coach</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="text-lg font-semibold text-luxury-charcoal mb-2">👋 <strong>Meet Janine</strong></p>
              <p className="leading-relaxed">
                Janine Herrick lives for Adventure, loves life and feeling good. Janine is a lifer when it comes to eating well, exercising, and fueling her mind and body with love and energy. She has over 20 years experience coaching clients and making their goals a reality.
              </p>
            </div>
            
            <div className="bg-luxury-gradient text-white rounded-lg p-4 text-center">
              <p className="font-semibold mb-3">✨ <strong>Ready to work with our team?</strong></p>
              <a 
                href="https://calendly.com/contact-sunryz/live-bold-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-blue px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
                onClick={() => setIsJanineBioOpen(false)}
              >
                Schedule Your Personal Consultation
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
