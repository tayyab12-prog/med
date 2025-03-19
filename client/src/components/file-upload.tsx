import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onUpload: (file: File, patientName: string) => void;
  isUploading: boolean;
}

export default function FileUpload({ onUpload, isUploading }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [patientName, setPatientName] = useState("");
  const { toast } = useToast();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
    onDrop: ([acceptedFile]) => {
      if (acceptedFile) {
        if (acceptedFile.size > 5 * 1024 * 1024) { // 5MB limit
          toast({
            variant: "destructive",
            title: "File too large",
            description: "Please upload an image smaller than 5MB",
          });
          return;
        }
        setFile(acceptedFile);
      }
    },
    onDropRejected: () => {
      toast({
        variant: "destructive",
        title: "Invalid file",
        description: "Please upload a JPEG or PNG image",
      });
    },
  });

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-[#1C2128] rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Upload X-Ray</h2>

        <div className="space-y-6">
          <div>
            <Label htmlFor="patientName">Patient Name</Label>
            <Input
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="mt-2"
              placeholder="Enter patient name"
            />
          </div>

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive ? "border-blue-500 bg-blue-500/10" : "border-gray-600"
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-400">
              Drag & drop X-ray image or <span className="text-blue-400">Browse</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Supported formats: JPEG, PNG (max 5MB)
            </p>
          </div>

          {file && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between bg-gray-800 rounded p-3"
            >
              <span className="text-gray-300 truncate flex-1 mr-2">{file.name}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setFile(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          )}

          <Button
            className="w-full bg-[#0066FF]"
            disabled={!file || !patientName || isUploading}
            onClick={() => file && onUpload(file, patientName)}
          >
            {isUploading ? "Uploading..." : "Analyze X-Ray"}
          </Button>
        </div>
      </div>
    </div>
  );
}