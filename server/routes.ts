import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema, insertAssessmentSchema } from "@shared/schema";
import { z } from "zod";
import { getUncachableResendClient } from "./resend-client";

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

  // Track button clicks and send notification email
  app.post("/api/track-click", async (req, res) => {
    try {
      const { buttonName } = req.body;
      
      if (!buttonName) {
        return res.status(400).json({ message: "Button name is required" });
      }

      // Send email notification
      try {
        const { client, fromEmail } = await getUncachableResendClient();
        
        const timestamp = new Date().toLocaleString('en-US', { 
          timeZone: 'America/New_York',
          dateStyle: 'full',
          timeStyle: 'long'
        });

        await client.emails.send({
          from: fromEmail,
          to: 'sunshine@liveboldhealth.com',
          subject: `🎯 New Click: ${buttonName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1e40af; margin-bottom: 20px;">New Button Click Notification</h2>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 10px 0;"><strong>Button:</strong> ${buttonName}</p>
                <p style="margin: 10px 0;"><strong>Time:</strong> ${timestamp}</p>
                <p style="margin: 10px 0;"><strong>Action:</strong> User clicked to visit Calendly</p>
              </div>
              
              <p style="color: #6b7280; font-size: 14px;">
                This notification was sent automatically when someone clicked "${buttonName}" on your Live Bold Health website.
              </p>
            </div>
          `
        });
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
        // Don't fail the request if email fails
      }

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to track click" });
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
    return "I hear you! Low energy can really impact everything you want to do. 🌟 Many of our clients have found incredible results with our personalized wellness approach - combining adventure experiences, advanced health testing like VO2 Max, and lifestyle optimization. What does your ideal energy level look like? I'd love to connect you with Sunshine for a free consultation to explore what's possible for you! 📅\n\n**Ready to boost your energy?** [Book Your Free Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('coaching') || lowerMessage.includes('wellness') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
    return "That's wonderful that you're prioritizing your wellness! 🎯 Our personalized concierge approach means you get support tailored exactly to your lifestyle and goals. Whether you're a busy professional or someone ready to make big changes, we meet you where you are. What's your biggest wellness challenge right now? A consultation with Sunshine could give you clarity on the perfect path forward! 💪\n\n**Get personalized wellness support** [Schedule Your Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('membership') || lowerMessage.includes('tier') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return "Great question! We offer flexible membership options designed to fit different lifestyles and goals - from Essential Concierge ($5k/month) to VIP Concierge ($10k/month) to our comprehensive Founders Circle ($100k/year). But here's the thing - the best fit depends on your unique situation and goals! 🎯 Would you like to schedule a free consultation to explore which approach would work best for you?\n\n**Find your perfect membership tier** [Book Free Strategy Call](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('longevity') || lowerMessage.includes('biohacking') || lowerMessage.includes('optimize') || lowerMessage.includes('health')) {
    return "I love that you're thinking about long-term health! 🧬 That's such a smart investment in yourself. We combine cutting-edge approaches like VO2 Max testing, RMR analysis, and personalized protocols with the power of adventure and lifestyle optimization. Everyone's journey is different though - what's driving your interest in health optimization? Let's set up a consultation to explore what would work best for your goals! 🚀\n\n**Start your health optimization journey** [Book Health Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('adventure') || lowerMessage.includes('expedition') || lowerMessage.includes('retreat') || lowerMessage.includes('experience') || lowerMessage.includes('travel')) {
    return "How exciting! 🏔️ Our adventure experiences are truly special - from Maine coastal retreats to Bali escapes, mountain climbing to paragliding! Each combines thrilling activities with wellness optimization. Adventure isn't just fun - it's actually a powerful health tool that builds resilience, energy, and joy! ✨ What kind of adventure speaks to you? I'd love to help you find the perfect experience during a consultation with Sunshine!\n\n**Plan your next adventure** [Explore Adventure Experiences](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('yes') || lowerMessage.includes('schedule') || lowerMessage.includes('book') || lowerMessage.includes('consultation') || lowerMessage.includes('interested')) {
    return "Fantastic! 🎉 I'm so excited for you to connect with Sunshine. She has this amazing ability to help people see what's truly possible for their health and life. This free consultation will give you clarity on your goals and the perfect path forward. Ready to book? Here's the link: https://calendly.com/live-bold-energy-health/consultation ✨";
  }
  
  if (lowerMessage.includes('morning') || lowerMessage.includes('afternoon') || lowerMessage.includes('evening') || lowerMessage.includes('time')) {
    return "Perfect timing question! ⏰ Sunshine has flexible scheduling to work with your schedule. Before you book, it might be helpful to take our quick Health Assessment above - it helps make your consultation even more valuable! Ready when you are: https://calendly.com/live-bold-energy-health/consultation 📅";
  }
  
  if (lowerMessage.includes('goals') || lowerMessage.includes('want') || lowerMessage.includes('hope') || lowerMessage.includes('dream')) {
    return "I love talking about goals! 🎯 What you want matters so much. Whether it's having more energy for your family, feeling confident in your body, tackling new adventures, or just feeling amazing every day - there's a path to get there. What would success look like for you? A consultation could help map out exactly how to achieve it! 💫\n\n**Turn your goals into reality** [Book Goal-Setting Session](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('busy') || lowerMessage.includes('time') || lowerMessage.includes('schedule')) {
    return "I totally get it - life can be so demanding! ⏰ That's exactly why our concierge approach works so well. We handle the details and create systems that fit your real life, not some perfect world. Many clients are amazed at how achievable wellness becomes with the right support. What if taking care of yourself could actually give you more time and energy for everything else? Let's explore that in a consultation! 🌟\n\n**Save time with concierge wellness** [Book Time-Saving Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('sunshine') || lowerMessage.includes('who is sunshine') || lowerMessage.includes('about sunshine')) {
    return "👋 **Who is Sunshine?**\n\nI'm your Executive Concierge for health, wellness, and adventure. With over 25 years of expertise in health optimization, performance coaching, and executive consulting, I specialize in helping busy professionals and entrepreneurs live happier, healthier, and longer lives.\n\n• Author of Live Bold! and Feel Good & Shine On®\n• CEO & Founder of The Energy Lifestyle Company™\n• Creator of the Feel Good & Adventure On® Method — combining adventure, longevity science, and data-driven biometrics\n• Global Speaker & Consultant for health, wellness, and sustainable living\n• Background in executive leadership & startup consulting, guiding companies and individuals toward scalable success\n• Passionate ultra-runner, paddleboarder, and adventurer living on the Maine coast\n\nAs your concierge, I deliver personalized strategies, advanced biometrics, and curated adventure experiences designed to elevate energy, expand resilience, and unlock longevity — so you can perform at your highest level in business and life. ✨\n\n**Ready to work with Sunshine?** [Schedule Your Personal Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  // Default responses with more questions and encouragement
  const responses = [
    "I'm here to help you feel amazing! 🌟 Whether you're looking to boost energy, try new adventures, or optimize your health, there's definitely a path forward. What's your biggest wellness goal right now?",
    "That's great that you're here! 💪 Everyone's wellness journey is unique. Are you looking to feel more energetic, explore health optimization, or maybe try some incredible adventure experiences?",
    "How wonderful that you're prioritizing yourself! ✨ What would feeling your absolute best look like to you? More energy? Better health? Amazing adventures? I'd love to help you explore what's possible!",
    "I'm excited to help you on your wellness journey! 🎯 What brings you here today? Are you looking to optimize your health, boost your energy, or maybe explore some incredible adventure experiences?"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}
