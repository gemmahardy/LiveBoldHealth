# Overview

Live Bold Health is a premium wellness concierge platform designed exclusively for high-performance executives and busy families seeking health and adventure lifestyle transformation. The application has been streamlined to provide a clear, direct path to wellness through VO₂ Max testing, personalized coaching, fitness/meal planning, and transformative adventure retreats.

## Simplified User Journey (6 Steps)
1. **Book Consult** - Schedule free consultation
2. **Join Membership** - Choose membership tier (Community Membership, Executive Team Package, or Monthly A La Carte)
3. **VO₂ Max + RMR** - Get baseline performance testing
4. **Personal Plan** - Receive custom wellness Live Bold Blueprint
5. **Activate Coaching** - Begin concierge-managed support
6. **Book Adventure** - Experience transformative travel

## Brand Messaging
- **Primary Tagline**: "We simplify health — you live the results."
- **Value Proposition**: "The easiest way to feel better, perform higher, and live longer."
- **Hero Description**: "Live Bold Health Concierge delivers VO₂ Max testing, custom nutrition, and transformative adventure travel — designed to simplify your wellness and deliver measurable results that last."
- **90-Day Results Guarantee**: "In your first 90 days, you'll see measurable improvements in energy, VO₂ Max, and recovery — or we'll rework your plan at no cost until you do."

## Membership Structure
- **Community Membership**: $2,500/year + $500 per additional family member - Includes VO₂ Max & RMR testing with quarterly updates, personalized longevity & nutrition blueprint, fitness & mindset coaching access, quarterly progress review with concierge, member-only webinars & adventure community, 20% off luxury retreats + $1,000 adventure credit, and welcome kit with meal guide, supplements, and Live Bold journal. Features the tagline "We simplify health — you live the results" and includes a 90-day results guarantee: measurable improvements in energy, VO₂ Max, and recovery within 90 days or plan rework at no cost.
- **Executive Team Package**: $7,500/year for 3 members - Perfect for teams and families who want to transform together with all Community Membership benefits.
- **Monthly A La Carte Menu**: Premium add-on services that can be mixed and matched to build a custom concierge experience. Services range from $250/month (weekly meal menus) to $5,000+/month (master membership), including private coaching, meal delivery, wellness concierge, performance tracking, adventure planning, recovery suites, movement coaching, longevity testing, and executive programs.

## Adventure Experiences
Featured retreats include Maine Coastal Adventure ($8,400), New Hampshire Mountain Experience ($11,200), and Bali Wellness Escape ($15,000). All adventures can be customized from relaxation-focused to high-intensity experiences.

## Platform Features
The platform includes consultation booking, health & longevity assessment quiz (VO₂ Max & RMR testing), membership selection, adventure planning, contact form, comprehensive FAQ section, and an AI-powered chatbot assistant called SunBot.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built using React with TypeScript and utilizes a modern component-based architecture. The UI is powered by shadcn/ui components with Radix UI primitives, styled using Tailwind CSS with custom design tokens. The application uses Wouter for client-side routing and TanStack React Query for state management and API communication. The design system emphasizes luxury aesthetics with custom color schemes, typography using Playfair Display and Inter fonts, and sophisticated visual components.

## Backend Architecture
The server implements a REST API using Express.js with TypeScript. The application follows a modular route-based architecture where API endpoints are organized in a centralized routes file. Business logic is abstracted through a storage interface pattern, currently implemented with an in-memory storage system but designed to easily swap to database implementations. The server includes middleware for request logging, error handling, and CORS support.

## Data Management
The application uses Drizzle ORM configured for PostgreSQL with a schema-first approach. Database tables include users, books, consultations, assessments, and chat sessions with proper relationships and constraints. The storage layer implements an interface-based design allowing for different storage backends. Currently using in-memory storage for development, but the PostgreSQL schema is ready for production deployment.

## Component Architecture
The frontend has been simplified with a streamlined component structure:
- **Hero Section**: 6-step journey display with two primary CTAs (Schedule Consultation, See Membership)
- **Health Assessment**: Interactive 3-question quiz featuring VO₂ Max & RMR testing with Dr. Peter Attia quote and Sunshine's adventure philosophy quote, generates personalized recommendations based on Community Membership + A La Carte services
- **Membership Section**: Two-column layout showing Community Membership alongside a scrollable Monthly A La Carte Menu with 14 premium add-on services
- **Adventure Section**: "Create Your Own Adventure" block with 10 featured retreat examples
- **Contact Form**: Basic name/email/message form using mailto functionality
- **FAQ Section**: Accordion-style FAQ covering pricing, insurance, testing, membership, and concierge value
- **Navigation**: Simplified to 4 main links (Consultation, Membership, Adventures, FAQ) plus consultation button
- **Shared Components**: Sun logo, chatbot interface (SunBot), footer with team bios
- **Email Notifications**: Automated click tracking sends email alerts to sunshine@liveboldhealth.com when users click consultation/booking buttons

## API Design
RESTful API endpoints handle core business operations including book retrieval, consultation booking, assessment creation, chatbot interactions, and click tracking for email notifications. The API uses Zod for request validation and implements proper error handling with structured responses. Endpoints are designed to support the frontend's query patterns and provide clear separation between different functional areas. The /api/track-click endpoint integrates with Resend to send automated email notifications when users interact with booking buttons.

## Authentication and Authorization
The application includes user management schemas and session handling infrastructure through connect-pg-simple, though specific authentication implementation details are prepared but not fully activated in the current codebase.

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Component variant management
- **Google Fonts**: Custom typography with Playfair Display, Inter, and Montserrat

## Data and State Management
- **TanStack React Query**: Server state management and caching
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Neon Database**: PostgreSQL hosting service via @neondatabase/serverless
- **Zod**: Schema validation and type safety
- **React Hook Form**: Form state management and validation

## Server Infrastructure
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store
- **Vite**: Build tool and development server
- **esbuild**: JavaScript bundler for production builds

## Development Tools
- **TypeScript**: Type safety and enhanced developer experience
- **Wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **Replit integration**: Development environment optimization with cartographer and runtime error overlay

## Communication Services
- **Resend**: Transactional email service for automated click tracking notifications
- **OpenAI GPT-4o-mini**: Powers SunBot with intelligent, context-aware conversational AI
- **Replit DB**: Key-value database for persistent SunBot conversation history
- **SunBot Architecture**: 
  - AI-powered chatbot using OpenAI GPT-4o-mini for natural, context-aware conversations
  - Persistent memory using Replit DB (stores last 15 exchanges per session)
  - Session management via localStorage (unique sessionId per user persists across visits)
  - Short-term context window (last 8 messages sent to GPT-4 for optimal response quality)
  - Automatic fallback to in-memory storage if Replit DB is temporarily unavailable
  - Optional Zapier webhook integration for consultation interest tracking
  - Comprehensive system prompt covering all membership tiers, pricing, 90-day guarantee, adventure experiences, 6-step journey, and Sunshine's bio
  - Brand voice emphasis: "We simplify health — you live the results" and "The easiest way to feel better, perform higher, and live longer"