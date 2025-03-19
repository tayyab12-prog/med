import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatInterface from "@/components/chat-interface";
import type { Analysis } from "@shared/schema";

interface AnalysisViewProps {
  analysis: Analysis;
}

export default function AnalysisView({ analysis }: AnalysisViewProps) {
  const [activeTab, setActiveTab] = useState("findings");

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#1C2128] rounded-lg p-6"
      >
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <img
            src={analysis.imageUrl}
            alt="X-ray"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {analysis.findings && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded">
            <p className="text-red-400 font-semibold">Potential finding:</p>
            <p className="text-gray-300">{analysis.findings}</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#1C2128] rounded-lg p-6"
      >
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            Patient: {analysis.patientName}
          </h2>
          <p className="text-gray-400">Analysis ID: {analysis.id}</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full">
            <TabsTrigger value="findings" className="flex-1">
              Findings
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex-1">
              Chat with Dr Chatbot
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="findings" className="mt-4">
            <div className="min-h-[400px] bg-gray-900/50 rounded-lg p-4">
              {analysis.findings ? (
                <p className="text-gray-300">{analysis.findings}</p>
              ) : (
                <p className="text-gray-500 text-center mt-8">
                  Analysis in progress...
                </p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="chat" className="mt-4">
            <ChatInterface
              analysisId={analysis.id}
              chatHistory={analysis.chatHistory || []}
            />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
