import { 
  type User, 
  type InsertUser, 
  type Book, 
  type InsertBook,
  type Consultation,
  type InsertConsultation,
  type Assessment,
  type InsertAssessment,
  type ChatSession,
  type InsertChatSession
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Books
  getAllBooks(): Promise<Book[]>;
  getBook(id: string): Promise<Book | undefined>;
  createBook(book: InsertBook): Promise<Book>;
  
  // Consultations
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  
  // Assessments
  createAssessment(assessment: InsertAssessment): Promise<Assessment>;
  getAssessment(id: string): Promise<Assessment | undefined>;
  
  // Chat Sessions
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatSession(sessionId: string): Promise<ChatSession | undefined>;
  updateChatSession(sessionId: string, messages: any[]): Promise<ChatSession | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private books: Map<string, Book>;
  private consultations: Map<string, Consultation>;
  private assessments: Map<string, Assessment>;
  private chatSessions: Map<string, ChatSession>;

  constructor() {
    this.users = new Map();
    this.books = new Map();
    this.consultations = new Map();
    this.assessments = new Map();
    this.chatSessions = new Map();
    
    this.initializeBooks();
  }

  private initializeBooks() {
    const defaultBooks: InsertBook[] = [
      {
        title: "LIVE BOLD",
        description: "Your Premium Guide to Executive Health Mastery and Longevity Optimization",
        price: 49700, // $497.00
        imageUrl: "/attached_assets/LIve%20Bold_1756148478586.jpeg",
        rating: 5,
        reviewCount: 127
      },
      {
        title: "The Executive Biohacker",
        description: "Advanced Protocols for Peak Performance and Cellular Optimization",
        price: 69700, // $697.00
        imageUrl: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 89
      },
      {
        title: "Concierge Wellness Mastery",
        description: "The Ultra-High-Net-Worth Guide to Health Concierge Services",
        price: 59700, // $597.00
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 94
      },
      {
        title: "Executive Recovery Protocols",
        description: "Luxury Stress Management and Regeneration for High-Performance Leaders",
        price: 39700, // $397.00
        imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 76
      }
    ];

    defaultBooks.forEach(book => {
      this.createBook(book);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBooks(): Promise<Book[]> {
    return Array.from(this.books.values());
  }

  async getBook(id: string): Promise<Book | undefined> {
    return this.books.get(id);
  }

  async createBook(insertBook: InsertBook): Promise<Book> {
    const id = randomUUID();
    const book: Book = { 
      ...insertBook, 
      id, 
      createdAt: new Date() 
    };
    this.books.set(id, book);
    return book;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async createAssessment(insertAssessment: InsertAssessment): Promise<Assessment> {
    const id = randomUUID();
    const assessment: Assessment = {
      ...insertAssessment,
      id,
      createdAt: new Date()
    };
    this.assessments.set(id, assessment);
    return assessment;
  }

  async getAssessment(id: string): Promise<Assessment | undefined> {
    return this.assessments.get(id);
  }

  async createChatSession(insertSession: InsertChatSession): Promise<ChatSession> {
    const id = randomUUID();
    const session: ChatSession = {
      ...insertSession,
      id,
      createdAt: new Date()
    };
    this.chatSessions.set(id, session);
    return session;
  }

  async getChatSession(sessionId: string): Promise<ChatSession | undefined> {
    return Array.from(this.chatSessions.values()).find(
      session => session.sessionId === sessionId
    );
  }

  async updateChatSession(sessionId: string, messages: any[]): Promise<ChatSession | undefined> {
    const session = await this.getChatSession(sessionId);
    if (session) {
      session.messages = messages;
      this.chatSessions.set(session.id, session);
      return session;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
