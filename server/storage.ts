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
        title: "Live Bold",
        description: "Transform your life through adventure, wellness, and intentional living by Sunshine Mechtenberg",
        price: 2995, // $29.95
        imageUrl: "/attached_assets/LIve%20Bold_1756148478586.jpeg",
        rating: 5,
        reviewCount: 892
      },
      {
        title: "How to 10x Your Energy Using the Power of Adventure",
        description: "Discover how outdoor adventures can exponentially boost your vitality and life force by Sunshine Mechtenberg",
        price: 2499, // $24.99
        imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 634
      },
      {
        title: "The S.I.M.P.L.E. Rule",
        description: "A straightforward framework for sustainable wellness and peak performance by Sunshine Mechtenberg",
        price: 2199, // $21.99
        imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 567
      },
      {
        title: "6 Daily Habits That Will Change Your Energy",
        description: "Simple yet powerful daily practices to revolutionize your vitality and focus by Sunshine Mechtenberg",
        price: 1995, // $19.95
        imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 743
      },
      {
        title: "Feel Good & Shine On",
        description: "Your guide to radiant health, natural confidence, and authentic joy by Sunshine Mechtenberg",
        price: 2699, // $26.99
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 821
      },
      {
        title: "The 5-Element Reset to Life a Living, Loving and Longevity",
        description: "Ancient wisdom meets modern science for holistic wellness and longevity by Sunshine Mechtenberg",
        price: 3295, // $32.95
        imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 459
      },
      {
        title: "Atomic Habits",
        description: "An easy & proven way to build good habits & break bad ones by James Clear",
        price: 2699, // $26.99
        imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 45621
      },
      {
        title: "The Power of Now",
        description: "A guide to spiritual enlightenment and mindful living by Eckhart Tolle",
        price: 1895, // $18.95
        imageUrl: "https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        rating: 5,
        reviewCount: 12476
      },
      {
        title: "Tools of Titans",
        description: "The tactics, routines, and habits of billionaires, icons, and world-class performers by Tim Ferriss",
        price: 3495, // $34.95
        imageUrl: "https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
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
