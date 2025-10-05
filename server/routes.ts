import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Birthday website API routes
  
  // Get memories for calendar
  app.get("/api/memories", async (req, res) => {
    try {
      const memories = await storage.getMemories();
      res.json(memories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch memories" });
    }
  });
  
  // Get flirty messages for cards
  app.get("/api/flirty-messages", async (req, res) => {
    try {
      const messages = await storage.getFlirtyMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch flirty messages" });
    }
  });
  
  // Get sweet notes
  app.get("/api/sweet-notes", async (req, res) => {
    try {
      const notes = await storage.getSweetNotes();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch sweet notes" });
    }
  });
  
  // Get gallery images
  app.get("/api/gallery", async (req, res) => {
    try {
      const images = await storage.getGalleryImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery images" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
