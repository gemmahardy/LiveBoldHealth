import { ArrowRight, Calendar, CheckCircle, Star, Users } from "lucide-react";
import { SunLogo } from "@/components/ui/sun-logo";
import adventureCollageUrl from '@assets/Collage+sig+program+1384w_1756151724888.jpg';

export default function BookAdventure() {
  const handleBookNow = () => {
    window.open('https://calendly.com/contact-sunryz/live-bold-consultation', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-luxury-gray">
      {/* Header */}
      <div className="bg-luxury-gradient text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <SunLogo size="lg" className="mx-auto mb-6 brightness-200" />
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            🌟 Book Your Health Adventure Vacation 🌟
          </h1>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
            Transform your life through epic wellness retreats that reset your body, energize your mind, and strengthen your spirit through adventure, real food, and unforgettable journeys.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Adventure Preview */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-luxury-charcoal mb-4">
                Epic Adventures Await You
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From sunrise yoga on Maine's coastal cliffs to conquering Mount Whitney, from luxury Bali retreats to thrilling whitewater rafting – every adventure is designed for total wellness transformation.
              </p>
            </div>

            {/* Adventure Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-luxury-charcoal">What's Included:</h3>
              <div className="grid gap-3">
                {[
                  "Luxury accommodations & gourmet meals",
                  "Professional guides & concierge support", 
                  "All equipment & gear included",
                  "Spa treatments & wellness activities",
                  "Small groups for personalized attention",
                  "Transportation & logistics handled"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 bg-blue-50 rounded-xl p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold text-brand-blue">10+</p>
                <p className="text-sm text-gray-600">Epic Destinations</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-brand-blue" />
                </div>
                <p className="text-2xl font-bold text-brand-blue">25+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-2xl font-bold text-brand-blue">100%</p>
                <p className="text-sm text-gray-600">Concierge Service</p>
              </div>
            </div>
          </div>

          {/* Right: Adventure Image */}
          <div className="relative">
            <img 
              src={adventureCollageUrl}
              alt="Live Bold Health Adventure Experiences"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>
            <div className="absolute top-6 left-6 bg-white rounded-xl px-4 py-2 shadow-lg">
              <p className="font-bold text-luxury-charcoal">Starting at $4,200</p>
              <p className="text-sm text-gray-600">All-inclusive adventures</p>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold text-luxury-charcoal mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule your consultation with Sunshine to discuss your perfect health adventure vacation. We'll design a personalized experience that fits your goals, schedule, and dreams.
          </p>

          {/* Process Steps */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto font-bold">1</div>
              <h4 className="font-semibold text-luxury-charcoal">Schedule Consultation</h4>
              <p className="text-sm text-gray-600">Book your call with Sunshine to discuss your adventure goals</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto font-bold">2</div>
              <h4 className="font-semibold text-luxury-charcoal">Design Your Adventure</h4>
              <p className="text-sm text-gray-600">We'll customize the perfect experience for your needs</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto font-bold">3</div>
              <h4 className="font-semibold text-luxury-charcoal">Secure Your Spot</h4>
              <p className="text-sm text-gray-600">Complete payment and receive your adventure details</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBookNow}
            className="bg-luxury-gradient text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-xl transition-all flex items-center justify-center space-x-3 mx-auto"
            data-testid="button-book-consultation"
          >
            <Calendar className="h-6 w-6" />
            <span>Book Your Consultation Now</span>
            <ArrowRight className="h-6 w-6" />
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Consultation includes adventure planning, pricing details, and payment options
          </p>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-12">
          <a 
            href="/"
            className="text-brand-blue font-semibold hover:underline flex items-center justify-center space-x-2"
            data-testid="link-back-home"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>Back to Live Bold Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}