import { analyses, type Analysis, type InsertAnalysis } from "@shared/schema";

export interface IStorage {
  createAnalysis(analysis: InsertAnalysis): Promise<Analysis>;
  getAnalysis(id: number): Promise<Analysis | undefined>;
  updateAnalysis(id: number, data: Partial<Analysis>): Promise<Analysis>;
}

export class MemStorage implements IStorage {
  private analyses: Map<number, Analysis>;
  private currentId: number;

  constructor() {
    this.analyses = new Map();
    this.currentId = 1;
  }

  async createAnalysis(insertAnalysis: InsertAnalysis): Promise<Analysis> {
    const id = this.currentId++;
    const analysis: Analysis = {
      ...insertAnalysis,
      id,
      findings: "",
      status: "pending",
      chatHistory: []
    };
    this.analyses.set(id, analysis);
    return analysis;
  }

  async getAnalysis(id: number): Promise<Analysis | undefined> {
    return this.analyses.get(id);
  }

  async updateAnalysis(id: number, data: Partial<Analysis>): Promise<Analysis> {
    const existing = this.analyses.get(id);
    if (!existing) {
      throw new Error("Analysis not found");
    }
    const updated = { ...existing, ...data };
    this.analyses.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
