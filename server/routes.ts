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
    return "I hear you! Low energy impacts everything you want to do. 🌟 Our approach combines VO₂ Max testing, personalized nutrition, and adventure experiences to deliver measurable energy improvements. In fact, we guarantee you'll see results in energy, VO₂ Max, and recovery within your first 90 days — or we'll rework your plan at no cost. What does your ideal energy level look like? Let's explore it in a free consultation! 📅\n\n**Ready to boost your energy?** [Book Your Free Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('coaching') || lowerMessage.includes('wellness') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
    return "That's wonderful that you're prioritizing your wellness! 🎯 Our concierge approach simplifies health — you just live the results. We handle the complexity with personalized fitness & mindset coaching, quarterly progress reviews, and ongoing concierge support. What's your biggest wellness challenge right now? A consultation with Sunshine could give you the clarity you need! 💪\n\n**Get personalized wellness support** [Schedule Your Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('membership') || lowerMessage.includes('tier') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
    return "Great question! ☀️ We offer two main options:\n\n**Community Membership** ($2,500/year + $500 per family member) — Includes VO₂ Max & RMR testing with quarterly updates, personalized nutrition blueprint, fitness & mindset coaching, 20% off retreats, plus a $1,000 adventure credit. You also get our 90-day results guarantee!\n\n**Executive Team Package** ($7,500/year for 3 members) — Perfect for teams and families who want to transform together.\n\n**Monthly A La Carte Menu** — Mix and match premium services from $250/month.\n\nThe best fit depends on your goals! Want to explore which option works for you? 🎯\n\n**Find your perfect membership** [Book Free Strategy Call](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('guarantee') || lowerMessage.includes('results') || lowerMessage.includes('90 day')) {
    return "Love that you're asking about results! 🎯 We're so confident in our approach that we offer a 90-Day Results Guarantee: In your first 90 days, you'll see measurable improvements in energy, VO₂ Max, and recovery — or we'll rework your plan at no cost until you do. We simplify health, you live the results. That's our promise! ✨\n\n**Experience guaranteed results** [Book Your Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('vo2') || lowerMessage.includes('vo₂') || lowerMessage.includes('testing') || lowerMessage.includes('rmr')) {
    return "Excellent question! 🧬 VO₂ Max & RMR testing is the foundation of our approach. It measures your aerobic capacity, metabolic rate, and biological age — giving us precise data to create your personalized blueprint. Community Members get quarterly VO₂ Max updates to track your progress and optimize your plan. It's science-backed wellness, not guesswork! 📊\n\n**Learn more about testing** [Schedule Your Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('longevity') || lowerMessage.includes('biohacking') || lowerMessage.includes('optimize') || lowerMessage.includes('health')) {
    return "I love that you're thinking about long-term health! 🧬 We combine cutting-edge VO₂ Max testing, custom nutrition, and longevity science with the transformative power of adventure. You'll get a personalized blueprint, quarterly progress tracking, and concierge support to make it all achievable. The easiest way to feel better, perform higher, and live longer — that's our mission! 🚀\n\n**Start your longevity journey** [Book Health Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('adventure') || lowerMessage.includes('expedition') || lowerMessage.includes('retreat') || lowerMessage.includes('experience') || lowerMessage.includes('travel')) {
    return "How exciting! 🏔️ Our adventure experiences range from Maine Coastal ($8,400) to New Hampshire Mountain ($11,200) to Bali Wellness Escape ($15,000) — all fully customizable from relaxation to high-intensity. Community Members get 20% off plus a $1,000 adventure credit! Adventure isn't just fun — it builds resilience, energy, and joy. What kind of experience speaks to you? ✨\n\n**Plan your next adventure** [Explore Experiences](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('journey') || lowerMessage.includes('process') || lowerMessage.includes('steps') || lowerMessage.includes('how it works')) {
    return "Great question! Our journey has 6 simple steps: 📋\n\n1️⃣ **Book Consult** — Free consultation\n2️⃣ **Join Membership** — Choose your tier\n3️⃣ **VO₂ Max + RMR** — Get baseline testing\n4️⃣ **Personal Plan** — Receive your custom blueprint\n5️⃣ **Activate Coaching** — Begin concierge support\n6️⃣ **Book Adventure** — Experience transformation\n\nWe simplify health — you live the results! Ready to start? ✨\n\n**Begin your journey** [Schedule Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('yes') || lowerMessage.includes('schedule') || lowerMessage.includes('book') || lowerMessage.includes('consultation') || lowerMessage.includes('interested')) {
    return "Fantastic! 🎉 I'm excited for you to connect with Sunshine. This free consultation will give you clarity on your goals and the perfect path forward. You'll discover how VO₂ Max testing, custom nutrition, and adventure experiences can transform your energy and longevity. Ready to book? Here's the link: https://calendly.com/live-bold-energy-health/consultation ☀️";
  }
  
  if (lowerMessage.includes('goals') || lowerMessage.includes('want') || lowerMessage.includes('hope') || lowerMessage.includes('dream')) {
    return "I love talking about goals! 🎯 Whether it's more energy for your family, better performance at work, tackling new adventures, or simply feeling amazing every day — there's a clear path to get there. With our 90-day guarantee, you'll see measurable improvements or we'll adjust until you do. What would success look like for you? 💫\n\n**Turn your goals into reality** [Book Goal-Setting Session](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('busy') || lowerMessage.includes('time') || lowerMessage.includes('no time')) {
    return "I totally get it — life can be demanding! ⏰ That's exactly why our concierge approach works so well. We simplify the complexity, handle the details, and create systems that fit your real life. Many clients are amazed at how achievable wellness becomes with the right support. What if optimizing your health actually gave you more time and energy? Let's explore that! 🌟\n\n**Save time with concierge wellness** [Book Time-Saving Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('family') || lowerMessage.includes('team') || lowerMessage.includes('group') || lowerMessage.includes('executive')) {
    return "Love that you're thinking about your team or family! 👥 Our Executive Team Package ($7,500/year for 3 members) is perfect for transforming together. Families and teams who optimize their health together see better results, stronger accountability, and shared adventure experiences. Plus, additional family members can join Community Membership for just $500/year! 🌟\n\n**Transform together** [Book Team Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  if (lowerMessage.includes('sunshine') || lowerMessage.includes('who is sunshine') || lowerMessage.includes('about sunshine')) {
    return "👋 **Who is Sunshine?**\n\nI'm your Executive Concierge for health, wellness, and adventure. With over 25 years of expertise in health optimization, performance coaching, and executive consulting, I specialize in helping busy professionals and entrepreneurs live happier, healthier, and longer lives.\n\n• Author of Live Bold! and Feel Good & Shine On®\n• CEO & Founder of The Energy Lifestyle Company™\n• Creator of the Feel Good & Adventure On® Method — combining adventure, longevity science, and data-driven biometrics\n• Global Speaker & Consultant for health, wellness, and sustainable living\n• Background in executive leadership & startup consulting\n• Passionate ultra-runner, paddleboarder, and adventurer living on the Maine coast\n\nAs your concierge, I deliver personalized strategies, advanced biometrics, and curated adventure experiences designed to elevate energy, expand resilience, and unlock longevity — so you can perform at your highest level in business and life. ☀️\n\n**Ready to work with Sunshine?** [Schedule Your Consultation](https://calendly.com/live-bold-energy-health/consultation)";
  }
  
  // Default responses with more questions and encouragement
  const responses = [
    "I'm here to help you feel better, perform higher, and live longer! ☀️ Whether you're curious about VO₂ Max testing, membership options, or our adventure experiences, I'm happy to guide you. What interests you most?",
    "That's great that you're here! 💪 We simplify health — you live the results. Are you looking to boost energy, optimize your health, explore adventures, or learn about membership options?",
    "How wonderful that you're prioritizing yourself! ✨ Our approach combines science-backed testing, custom nutrition, and transformative adventures. What would feeling your absolute best look like to you?",
    "I'm excited to help you on your wellness journey! 🎯 From our 90-day guarantee to quarterly VO₂ Max updates to $1,000 adventure credits — we're all about measurable results. What brings you here today?"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}
