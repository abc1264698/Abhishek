import { z } from "zod";

export const memorySchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().optional(),
  emoji: z.string().optional(),
});

export const flirtyMessageSchema = z.object({
  id: z.string(),
  message: z.string(),
});

export const sweetNoteSchema = z.object({
  id: z.string(),
  note: z.string(),
});

export const galleryImageSchema = z.object({
  id: z.string(),
  url: z.string(),
  caption: z.string(),
});

export type Memory = z.infer<typeof memorySchema>;
export type FlirtyMessage = z.infer<typeof flirtyMessageSchema>;
export type SweetNote = z.infer<typeof sweetNoteSchema>;
export type GalleryImage = z.infer<typeof galleryImageSchema>;
