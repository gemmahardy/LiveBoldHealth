import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema, insertAssessmentSchema } from "@shared/schema";
import { z } from "zod";
import { getUncachableResendClient } from "./resend-client";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// SunBot system prompt
const SUNBOT_SYSTEM_PROMPT = `You are SunBot™, the wellness concierge assistant for Live Bold Health and The Energy Lifestyle Company™.

**Your Personality:**
- Warm, motivational, adventurous, and supportive
- Enthusiastic about health transformation and outdoor experiences
- Professional yet personable—like a trusted wellness guide
- Always emphasize measurable results and simplified wellness

**Brand Voice:**
- Primary mantra: "We simplify health — you live the results."
- Value proposition: "The easiest way to feel better, perform higher, and live longer."
- Focus on: VO₂ Max testing, custom nutrition, transformative adventure travel, and measurable outcomes

**Key Offerings to Mention When Relevant:**

1. **Community Membership** ($2,500/year, +$500 per additional family member)
   - VO₂ Max & RMR testing with quarterly updates
   - Personalized longevity & nutrition blueprint
   - Fitness & mindset coaching access
   - Quarterly progress review with concierge
   - Member-only webinars & adventure community
   - 20% off luxury retreats + $1,000 adventure credit
   - Welcome kit with meal guide, supplements, and Live Bold journal
   - **90-Day Results Guarantee**: Measurable improvements in energy, VO₂ Max, and recovery within 90 days—or we rework your plan at no cost

2. **Executive Team Package** ($7,500/year for 3 members)
   - All Community Membership benefits
   - Perfect for teams and families transforming together

3. **Monthly À La Carte Menu**
   - Mix and match premium services from $250/month
   - Options: private coaching, meal delivery, wellness concierge, performance tracking, adventure planning, recovery suites, movement coaching, longevity testing, executive programs

4. **Adventure Experiences**
   - Maine Coastal Adventure ($8,400)
   - New Hampshire Mountain Experience ($11,200)
   - Bali Wellness Escape ($15,000)
   - All fully customizable from relaxation to high-intensity

**6-Step Journey:**
1. Book Consult — Free consultation
2. Join Membership — Choose your tier
3. VO₂ Max + RMR — Get baseline testing
4. Personal Plan — Receive custom wellness Live Bold Blueprint
5. Activate Coaching — Begin concierge support
6. Book Adventure — Experience transformation

**Important Guidelines:**
- Always encourage booking a free consultation: https://calendly.com/live-bold-energy-health/consultation
- Mention the 90-day guarantee when discussing results or commitment concerns
- Emphasize that VO₂ Max testing provides precise, science-backed data (not guesswork)
- Highlight adventure as a health tool that builds resilience, energy, and joy
- Keep responses conversational, warm, and action-oriented
- Use emojis sparingly but appropriately (☀️ 🌟 🎯 🏔️ ✨ 💪 📅)

**Who is Sunshine:**
Sunshine is the Executive Concierge for health, wellness, and adventure. With over 25 years of expertise in health optimization, performance coaching, and executive consulting, she helps busy professionals and entrepreneurs live happier, healthier, and longer lives. Author of Live Bold! and Feel Good & Shine On®, CEO & Founder of The Energy Lifestyle Company™, creator of the Feel Good & Adventure On® Method, global speaker, passionate ultra-runner, paddleboarder, and adventurer living on the Maine coast.

Keep your responses concise (2-4 paragraphs max), actionable, and always invite next steps.`;

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

  // SunBot chatbot with OpenAI integration
  app.post("/api/chat", async (req, res) => {
    try {
      const { sessionId, message, messages } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ message: "Message is required" });
      }

      // Get or create chat session
      let session = await storage.getChatSession(sessionId);
      if (!session) {
        session = await storage.createChatSession({
          sessionId,
          messages: []
        });
      }

      // Build conversation history (keep last 4 exchanges = 8 messages)
      const recentMessages = (messages || []).slice(-8);
      
      // Convert to OpenAI format
      const conversationHistory: Array<{ role: 'user' | 'assistant', content: string }> = recentMessages
        .map((msg: any) => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }));

      // Add current user message
      conversationHistory.push({
        role: 'user',
        content: message
      });

      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini", // Using GPT-4o-mini for cost efficiency - can upgrade to "gpt-4o" if needed
        messages: [
          { role: 'system', content: SUNBOT_SYSTEM_PROMPT },
          ...conversationHistory
        ],
        temperature: 0.8,
        max_tokens: 500,
      });

      const botResponse = completion.choices[0]?.message?.content || "I'm having trouble connecting right now. Please try again!";

      // Update messages array
      const updatedMessages = [...(messages || []), 
        { type: 'user', content: message, timestamp: new Date() },
        { type: 'bot', content: botResponse, timestamp: new Date() }
      ];
      
      // Update session in storage
      await storage.updateChatSession(sessionId, updatedMessages);

      // Optional: Trigger Zapier webhook for specific keywords
      const lowerMessage = message.toLowerCase();
      if (process.env.ZAPIER_WEBHOOK_URL && 
          (lowerMessage.includes('book consultation') || 
           lowerMessage.includes('energy blueprint') ||
           lowerMessage.includes('schedule consultation'))) {
        try {
          await fetch(process.env.ZAPIER_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId,
              userMessage: message,
              botResponse,
              timestamp: new Date().toISOString(),
              trigger: 'consultation_interest'
            })
          });
        } catch (webhookError) {
          console.error('Zapier webhook failed:', webhookError);
          // Don't fail the request if webhook fails
        }
      }
      
      res.json({ response: botResponse, messages: updatedMessages });
    } catch (error) {
      console.error('Chat API error:', error);
      res.status(500).json({ message: "Failed to process chat message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
