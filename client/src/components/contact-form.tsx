import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SunLogo } from "./ui/sun-logo";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const contactEmail = import.meta.env.PUBLIC_EMAIL || 'sunshine@liveboldhealth.com';
      const subject = `Live Bold Contact: ${name}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening Email Client",
        description: "Your default email client will open with your message.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-luxury-gray to-blue-50/20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 sm:w-[500px] h-96 sm:h-[500px] opacity-15">
        <SunLogo className="w-full h-full text-brand-blue" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-80 sm:w-[450px] h-80 sm:h-[450px] opacity-10">
        <SunLogo className="w-full h-full text-brand-gold" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-400 items-center justify-center mb-3 sm:mb-4 shadow-lg">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-luxury-charcoal mb-3 sm:mb-4 px-2">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-slate px-4">
              Have questions? Share your health goals and we'll reach out to help you get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border-2 border-brand-blue/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5">
              <SunLogo className="w-full h-full text-brand-gold" />
            </div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-luxury-charcoal mb-1 sm:mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full border-brand-blue/20 focus:border-brand-blue text-base"
                  data-testid="input-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-luxury-charcoal mb-1 sm:mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full border-brand-blue/20 focus:border-brand-blue text-base"
                  data-testid="input-email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-luxury-charcoal mb-1 sm:mb-2">
                  Message or Health Goals
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your health goals or questions..."
                  rows={6}
                  className="w-full border-brand-blue/20 focus:border-brand-blue resize-none text-base"
                  data-testid="input-message"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold hover:shadow-xl transition-all rounded-full hover:from-blue-700 hover:to-blue-600 active:scale-95"
                data-testid="button-submit-contact"
              >
                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
