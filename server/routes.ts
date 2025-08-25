import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema, insertAssessmentSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all books
  app.get("/api/books", async (req, res) => {
    try {
      const books = await storage.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch books" });
    }
  });

  // Create consultation booking
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.status(201).json(consultation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid consultation data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create consultation" });
      }
    }
  });

  // Create assessment
  app.post("/api/assessments", async (req, res) => {
    try {
      const validatedData = insertAssessmentSchema.parse(req.body);
      const assessment = await storage.createAssessment(validatedData);
      res.status(201).json(assessment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid assessment data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create assessment" });
      }
    }
  });

  // Chatbot message handling
  app.post("/api/chat", async (req, res) => {
    try {
      const { sessionId, message, messages } = req.body;
      
      // Get or create chat session
      let session = await storage.getChatSession(sessionId);
      if (!session) {
        session = await storage.createChatSession({
          sessionId,
          messages: []
        });
      }

      // Add user message
      const updatedMessages = [...(messages || []), { type: 'user', content: message, timestamp: new Date() }];
      
      // Generate bot response
      const botResponse = generateBotResponse(message);
      updatedMessages.push({ type: 'bot', content: botResponse, timestamp: new Date() });
      
      // Update session
      await storage.updateChatSession(sessionId, updatedMessages);
      
      res.json({ response: botResponse, messages: updatedMessages });
    } catch (error) {
      res.status(500).json({ message: "Failed to process chat message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('energy') || lowerMessage.includes('tired') || lowerMessage.includes('fatigue')) {
    return "I completely understand the demands on ultra-high-net-worth executives like yourself. Our Elite Energy Mastery Program has transformed the vitality of Fortune 500 CEOs and billionaire entrepreneurs. We use cutting-edge protocols including NAD+ optimization, mitochondrial enhancement, and bespoke supplementation. Our clients typically see 40-60% energy improvements within 30 days. Shall I arrange a private consultation to discuss your personalized energy optimization strategy?";
  }
  
  if (lowerMessage.includes('coaching') || lowerMessage.includes('1:1') || lowerMessage.includes('personal')) {
    return "Exceptional choice! Our ultra-premium concierge coaching is exclusively for C-suite executives and UHNWIs who demand white-glove service. You'll have 24/7 access to our elite wellness team, priority booking at top longevity clinics, and personalized protocols designed around your demanding schedule. Our typical client has a net worth exceeding $100M. Would you like me to schedule a confidential consultation to discuss your bespoke wellness strategy?";
  }
  
  if (lowerMessage.includes('membership') || lowerMessage.includes('tier') || lowerMessage.includes('price')) {
    return "We offer three ultra-exclusive membership tiers for discerning executives: Essential Concierge ($5,000/month), VIP Concierge ($10,000/month), and our flagship Founders Circle ($100,000/year) - which includes private island retreats, priority access to breakthrough therapies, and networking with fellow industry titans. Our Founders Circle is limited to 50 members globally. Which level of exclusivity interests you?";
  }
  
  if (lowerMessage.includes('longevity') || lowerMessage.includes('biohacking') || lowerMessage.includes('optimize')) {
    return "Brilliant focus! Longevity optimization is the ultimate investment for visionary leaders. We provide first access to breakthrough therapies, partnerships with world-renowned longevity clinics, stem cell treatments, and cutting-edge protocols used by tech billionaires and industry titans. Our approach has helped clients extend their healthspan by decades. Shall I arrange a private consultation to design your personalized longevity strategy?";
  }
  
  if (lowerMessage.includes('travel') || lowerMessage.includes('business') || lowerMessage.includes('executive')) {
    return "Absolutely crucial for global executives! Our white-glove travel wellness service includes pre-travel optimization, jet lag elimination protocols, mobile IV therapy, and coordination with luxury wellness facilities worldwide. Plus, our exclusive Maine adventure experiences offer incredible opportunities for renewal and rejuvenation closer to home. Would you like to discuss your travel wellness optimization or our unique Maine adventures?";
  }
  
  if (lowerMessage.includes('adventure') || lowerMessage.includes('expedition') || lowerMessage.includes('retreat') || lowerMessage.includes('experience')) {
    return "Wonderful! Our exclusive Maine adventure experiences offer extraordinary opportunities for renewal and wellness. We feature historic lighthouse retreats ($8,500), private island glamping accessible only by seaplane ($12,000), wilderness lodge adventures with moose tracking ($7,200), and authentic Down East schooner sailing expeditions ($9,800). Each experience combines Maine's natural beauty with sophisticated wellness programming. Which Maine adventure speaks to you?";
  }
  
  if (lowerMessage.includes('yes') || lowerMessage.includes('schedule') || lowerMessage.includes('book') || lowerMessage.includes('consultation')) {
    return "Excellent! I'm delighted to arrange your confidential consultation. This exclusive 45-minute session will be conducted by our founder, who has optimized the health of billionaire entrepreneurs and Fortune 500 CEOs for over 25 years. We'll design a preliminary strategy tailored to your specific goals and lifestyle demands. Would you prefer a morning session (9-11 AM), afternoon (1-3 PM), or evening (6-8 PM) this week?";
  }
  
  if (lowerMessage.includes('morning') || lowerMessage.includes('afternoon') || lowerMessage.includes('evening')) {
    return "Perfect! I've reserved your preferred time slot. To ensure we maximize the value of your consultation, please complete our Executive Health Assessment by clicking above. This confidential assessment helps us understand your current optimization level and goals. Our team will also conduct a preliminary lifestyle analysis before your call. Shall I send you the secure consultation booking link?";
  }
  
  // Default responses for general inquiries
  const responses = [
    "Welcome! I'm SunBot, your exclusive wellness concierge for ultra-high-net-worth executives. I help CEOs, entrepreneurs, and industry leaders optimize their most valuable asset - their health and longevity. What specific wellness goals are you looking to achieve?",
    "I specialize in connecting visionary leaders with bespoke health optimization strategies. Are you interested in energy mastery, longevity protocols, performance enhancement, or perhaps our exclusive executive retreat experiences?",
    "As a wellness concierge for Fortune 500 CEOs and billionaire entrepreneurs, I understand the unique demands on your time and performance. What's your primary focus - executive health optimization, cutting-edge longevity access, or our ultra-premium concierge services?"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}
