import { type Memory, type FlirtyMessage, type SweetNote, type GalleryImage } from "@shared/schema";
import { randomUUID } from "crypto";

// Storage interface for the birthday website data
export interface IStorage {
  getMemories(): Promise<Memory[]>;
  getFlirtyMessages(): Promise<FlirtyMessage[]>;
  getSweetNotes(): Promise<SweetNote[]>;
  getGalleryImages(): Promise<GalleryImage[]>;
  addMemory(memory: Omit<Memory, 'id'>): Promise<Memory>;
  addGalleryImage(image: Omit<GalleryImage, 'id'>): Promise<GalleryImage>;
}

export class MemStorage implements IStorage {
  private memories: Map<string, Memory>;
  private flirtyMessages: Map<string, FlirtyMessage>;
  private sweetNotes: Map<string, SweetNote>;
  private galleryImages: Map<string, GalleryImage>;

  constructor() {
    this.memories = new Map();
    this.flirtyMessages = new Map();
    this.sweetNotes = new Map();
    this.galleryImages = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample memories for the calendar
    const sampleMemories: Memory[] = [
      {
        id: "1",
        date: "2024-10-03",
        title: "First Date",
        description: "Our first date… I knew you were special from that moment 💜",
        imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        emoji: "💜"
      },
      {
        id: "2",
        date: "2024-10-15",
        title: "Sunset Walk",
        description: "That sunset walk… breathtaking, just like you 🌅",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        emoji: "🌅"
      }
    ];
    
    sampleMemories.forEach(memory => this.memories.set(memory.id, memory));
    
    // Sample flirty messages
    const sampleFlirty: FlirtyMessage[] = [
      { id: "1", message: "You're dangerously adorable… handle with care 😘" },
      { id: "2", message: "If I were there right now… you know what would happen 💋" },
    ];
    
    sampleFlirty.forEach(msg => this.flirtyMessages.set(msg.id, msg));
    
    // Sample sweet notes
    const sampleNotes: SweetNote[] = [
      { id: "1", note: "You're my sunshine ☀️" },
      { id: "2", note: "You're perfect just the way you are 💜" },
    ];
    
    sampleNotes.forEach(note => this.sweetNotes.set(note.id, note));
  }

  async getMemories(): Promise<Memory[]> {
    return Array.from(this.memories.values());
  }

  async getFlirtyMessages(): Promise<FlirtyMessage[]> {
    return Array.from(this.flirtyMessages.values());
  }

  async getSweetNotes(): Promise<SweetNote[]> {
    return Array.from(this.sweetNotes.values());
  }

  async getGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values());
  }

  async addMemory(memoryData: Omit<Memory, 'id'>): Promise<Memory> {
    const id = randomUUID();
    const memory: Memory = { ...memoryData, id };
    this.memories.set(id, memory);
    return memory;
  }

  async addGalleryImage(imageData: Omit<GalleryImage, 'id'>): Promise<GalleryImage> {
    const id = randomUUID();
    const image: GalleryImage = { ...imageData, id };
    this.galleryImages.set(id, image);
    return image;
  }
}

export const storage = new MemStorage();
