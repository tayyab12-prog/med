import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const analyses = pgTable("analyses", {
  id: serial("id").primaryKey(),
  patientName: text("patient_name").notNull(),
  findings: text("findings"),
  imageUrl: text("image_url").notNull(),
  status: text("status").default("pending"),
  chatHistory: jsonb("chat_history").$type<{message: string, sender: "user" | "bot"}[]>().default([]),
});

export const insertAnalysisSchema = createInsertSchema(analyses).pick({
  patientName: true,
  imageUrl: true,
});

export type InsertAnalysis = z.infer<typeof insertAnalysisSchema>;
export type Analysis = typeof analyses.$inferSelect;