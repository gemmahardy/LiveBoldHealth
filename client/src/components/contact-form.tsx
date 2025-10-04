import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      const contactEmail = import.meta.env.PUBLIC_EMAIL || 'contact@liveboldhealth.com';
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex w-16 h-16 rounded-full bg-luxury-gradient items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-luxury-charcoal mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-brand-slate">
              Have questions? Share your health goals and we'll reach out to help you get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-luxury-charcoal mb-2">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                className="w-full"
                data-testid="input-name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-luxury-charcoal mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full"
                data-testid="input-email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-luxury-charcoal mb-2">
                Message or Health Goals
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your health goals or questions..."
                rows={6}
                className="w-full"
                data-testid="input-message"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-luxury-gradient text-white py-6 text-lg font-semibold hover:shadow-xl transition-all rounded-full"
              data-testid="button-submit-contact"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
