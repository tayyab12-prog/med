import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0D1117/0D1117/png')] bg-cover bg-center" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/80 to-[#0D1117]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ease Your Mind
        </h1>
        <h2 className="text-2xl md:text-4xl text-blue-400 mb-8">
          With AI-Powered Workflow
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Fast, reliable X-ray analysis and instant guidance through a smart
          communication channel.
        </p>
        <Link href="/demo">
          <Button size="lg" className="bg-[#0066FF] hover:bg-blue-700">
            Try Demo
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
