# Overview

Live Bold Health is a premium wellness concierge platform designed exclusively for high-performance executives and busy families seeking health and adventure lifestyle transformation. The application has been streamlined to provide a clear, direct path to wellness through VO₂ Max testing, personalized coaching, fitness/meal planning, and transformative adventure retreats.

## Simplified User Journey (6 Steps)
1. **Book Consult** - Schedule free consultation
2. **Join Membership** - Choose membership tier (Community, Essential Concierge, or VIP Concierge)
3. **VO₂ Max + RMR** - Get baseline performance testing
4. **Personal Plan** - Receive custom health blueprint
5. **Activate Coaching** - Begin concierge-managed support
6. **Book Adventure** - Experience transformative travel

## Membership Tiers
- **Community Membership**: $2,500/year + $500 per additional family member
- **Essential Concierge**: $5,000/month with dedicated concierge and 30% adventure discounts
- **VIP Concierge**: $10,000/month with 24/7 access, unlimited coaching, and 50% adventure discounts

## Adventure Experiences
Featured retreats include Maine Coastal Adventure ($8,400), New Hampshire Mountain Experience ($11,200), and Bali Wellness Escape ($15,000). All adventures can be customized from relaxation-focused to high-intensity experiences.

## Platform Features
The platform includes consultation booking, membership selection, adventure planning, contact form, comprehensive FAQ section, and an AI-powered chatbot assistant called SunBot.

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
- **Membership Tiers**: Simple 3-tier pricing display with feature lists
- **Adventure Section**: "Create Your Own Adventure" block with example retreat cards
- **Contact Form**: Basic name/email/message form using mailto functionality
- **FAQ Section**: Accordion-style FAQ covering pricing, insurance, testing, and membership
- **Navigation**: Simplified to 4 main links (Consultation, Membership, Adventures, FAQ) plus consultation button
- **Shared Components**: Sun logo, chatbot interface (SunBot), footer with team bios

## API Design
RESTful API endpoints handle core business operations including book retrieval, consultation booking, assessment creation, and chatbot interactions. The API uses Zod for request validation and implements proper error handling with structured responses. Endpoints are designed to support the frontend's query patterns and provide clear separation between different functional areas.

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

## Chatbot and AI
- **Custom chatbot implementation**: SunBot wellness concierge with session management and contextual responses