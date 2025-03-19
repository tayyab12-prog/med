import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import { insertAnalysisSchema } from "@shared/schema";

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (_req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  }),
  fileFilter: (_req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    cb(null, allowedTypes.includes(file.mimetype));
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/analysis", upload.single("xray"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const data = insertAnalysisSchema.parse({
        patientName: req.body.patientName,
        imageUrl: `/uploads/${req.file.filename}`
      });

      const analysis = await storage.createAnalysis(data);
      res.json(analysis);
    } catch (error) {
      res.status(400).json({ message: "Invalid request data" });
    }
  });

  app.get("/api/analysis/:id", async (req, res) => {
    const analysis = await storage.getAnalysis(Number(req.params.id));
    if (!analysis) {
      return res.status(404).json({ message: "Analysis not found" });
    }
    res.json(analysis);
  });

  app.post("/api/analysis/:id/chat", async (req, res) => {
    try {
      const id = Number(req.params.id);
      const analysis = await storage.getAnalysis(id);
      if (!analysis) {
        return res.status(404).json({ message: "Analysis not found" });
      }

      const message = req.body.message;
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }

      const chatHistory = [
        ...(analysis.chatHistory || []),
        { message, sender: "user" },
        { message: "I am analyzing your X-ray...", sender: "bot" }
      ];

      const updated = await storage.updateAnalysis(id, { chatHistory });
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: "Failed to process chat message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
