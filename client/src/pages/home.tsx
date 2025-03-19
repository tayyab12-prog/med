import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <section className="py-24 bg-[#0D1117]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                AI Radiology Assistant
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Introducing MedX CXR, an AI-based Decision Support system for Medical
                  Professionals and Patients.
                </p>
                <p>
                  Detect key abnormalities in X-ray images with precision. Our AI-driven
                  technology delivers reliable diagnostic insights, seamlessly integrated
                  into your workflow.
                </p>
              </div>
              <Link href="/demo">
                <Button className="mt-8 bg-[#0066FF]">Learn More</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8">
                <img
                  src="https://placehold.co/600x400/0066FF/FFFFFF/png"
                  alt="X-ray analysis"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0C10]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-gray-400 mb-8">
              At MEDXGPT, we're transforming healthcare with cutting-edge AI solutions.
              Our mission is to empower society by providing fast and accurate disease
              detection from X-rays, ensuring timely and informed decision-making.
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-[#0066FF] text-[#0066FF]">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
