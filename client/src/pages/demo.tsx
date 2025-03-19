import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/file-upload";
import AnalysisView from "@/components/analysis-view";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Analysis } from "@shared/schema";

export default function Demo() {
  const [analysisId, setAnalysisId] = useState<number>();
  const { toast } = useToast();

  const { data: analysis } = useQuery<Analysis>({
    queryKey: analysisId ? [`/api/analysis/${analysisId}`] : [],
    enabled: !!analysisId,
  });

  const uploadMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/analysis", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      setAnalysisId(data.id);
      toast({
        title: "Upload successful",
        description: "Your X-ray has been uploaded for analysis",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: "There was a problem uploading your X-ray",
      });
    },
  });

  return (
    <div className="min-h-screen pt-16 bg-[#0D1117]">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {!analysis ? (
            <FileUpload
              onUpload={(file, patientName) => {
                const formData = new FormData();
                formData.append("xray", file);
                formData.append("patientName", patientName);
                uploadMutation.mutate(formData);
              }}
              isUploading={uploadMutation.isPending}
            />
          ) : (
            <AnalysisView analysis={analysis} />
          )}
        </motion.div>
      </div>
    </div>
  );
}