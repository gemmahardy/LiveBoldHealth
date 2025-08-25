import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ConsultationForm {
  fullName: string;
  email: string; 
  phone: string;
  company: string;
  goals: string;
  preferredDate: string;
  preferredTime: string;
  additionalInfo: string;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState<ConsultationForm>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    goals: "",
    preferredDate: "",
    preferredTime: "",
    additionalInfo: ""
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const consultationMutation = useMutation({
    mutationFn: async (data: ConsultationForm) => {
      return apiRequest('POST', '/api/consultations', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/consultations'] });
      toast({
        title: "Consultation Booked Successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      onClose();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        goals: "",
        preferredDate: "",
        preferredTime: "",
        additionalInfo: ""
      });
      setPrivacyConsent(false);
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyConsent) {
      toast({
        title: "Privacy Consent Required",
        description: "Please consent to being contacted about our services.",
        variant: "destructive",
      });
      return;
    }

    consultationMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ConsultationForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl font-bold text-luxury-charcoal">
            Book Your Free Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName" className="text-sm font-semibold text-luxury-charcoal">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                required
                data-testid="input-full-name"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-semibold text-luxury-charcoal">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                required
                data-testid="input-email"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="text-sm font-semibold text-luxury-charcoal">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                required
                data-testid="input-phone"
              />
            </div>
            
            <div>
              <Label htmlFor="company" className="text-sm font-semibold text-luxury-charcoal">
                Company
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Your company name"
                data-testid="input-company"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="goals" className="text-sm font-semibold text-luxury-charcoal">
              Primary Health Goals
            </Label>
            <Select value={formData.goals} onValueChange={(value) => handleInputChange('goals', value)}>
              <SelectTrigger data-testid="select-goals">
                <SelectValue placeholder="Select your primary goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="energy">Increase Energy & Vitality</SelectItem>
                <SelectItem value="performance">Peak Mental Performance</SelectItem>
                <SelectItem value="longevity">Optimize for Longevity</SelectItem>
                <SelectItem value="recovery">Stress Management & Recovery</SelectItem>
                <SelectItem value="comprehensive">Comprehensive Optimization</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-sm font-semibold text-luxury-charcoal">
              Preferred Meeting Time
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Select value={formData.preferredDate} onValueChange={(value) => handleInputChange('preferredDate', value)}>
                <SelectTrigger data-testid="select-preferred-date">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="next-week">Next Week</SelectItem>
                  <SelectItem value="flexible">I'm Flexible</SelectItem>
                </SelectContent>
              </Select>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger data-testid="select-preferred-time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9-11 AM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (1-3 PM)</SelectItem>
                  <SelectItem value="evening">Evening (5-7 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="additionalInfo" className="text-sm font-semibold text-luxury-charcoal">
              Additional Information
            </Label>
            <Textarea
              id="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
              placeholder="Tell us about any specific health challenges or goals you'd like to discuss..."
              data-testid="textarea-additional-info"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <input 
              type="checkbox"
              id="privacy-consent"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="w-4 h-4 text-brand-orange"
              data-testid="checkbox-privacy-consent"
            />
            <Label htmlFor="privacy-consent" className="text-sm text-gray-600">
              I consent to being contacted about LIVE BOLD services and agree to the privacy policy.
            </Label>
          </div>
          
          <Button 
            type="submit"
            disabled={consultationMutation.isPending}
            className="w-full bg-luxury-gradient text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
            data-testid="button-submit-consultation"
          >
            {consultationMutation.isPending ? "Scheduling..." : "Schedule My Free Consultation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
