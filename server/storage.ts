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
        title: "The 4-Hour Body",
        description: "An uncommon guide to rapid fat-loss, incredible sex, and becoming superhuman by Tim Ferriss",
        price: 2995, // $29.95
        imageUrl: "/attached_assets/LIve%20Bold_1756148478586.jpeg",
        rating: 5,
        reviewCount: 2847
      },
      {
        title: "Atomic Habits",
        description: "An easy & proven way to build good habits & break bad ones by James Clear",
        price: 2699, // $26.99
        imageUrl: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 45621
      },
      {
        title: "Lifespan: Why We Age",
        description: "Revolutionary insights into aging and longevity from Harvard geneticist David Sinclair",
        price: 3199, // $31.99
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 8934
      },
      {
        title: "The Power of Now",
        description: "A guide to spiritual enlightenment and mindful living by Eckhart Tolle",
        price: 1895, // $18.95
        imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 12476
      },
      {
        title: "Breath: The New Science",
        description: "Revolutionary discoveries about the most essential bodily function by James Nestor",
        price: 2799, // $27.99
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 6832
      },
      {
        title: "Tools of Titans",
        description: "The tactics, routines, and habits of billionaires, icons, and world-class performers",
        price: 3495, // $34.95
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 5294
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
