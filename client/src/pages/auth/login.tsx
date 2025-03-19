import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "wouter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SiGoogle, SiApple, SiMicrosoft } from "react-icons/si";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    try {
      // TODO: Implement authentication
      console.log("Login data:", data);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Panel */}
      <div className="bg-[#2B1744] p-8 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-blue-400/20 rounded-lg p-6 mb-6">
              {/* X-ray icon SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 8V16M8 10V14M16 10V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Ease Your Mind
            </h1>
            <p className="text-xl text-blue-400">
              With AI-Powered Workflow
            </p>
          </div>
          <p className="text-gray-400 max-w-sm mx-auto">
            Fast, reliable X-ray analysis and instant guidance through a smart
            communication channel.
          </p>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="p-8 flex items-center justify-center bg-[#0D1117]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Welcome Back!</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Link href="/auth/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#0D1117] text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="w-full">
                  <SiGoogle className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="w-full">
                  <SiApple className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="w-full">
                  <SiMicrosoft className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-center text-sm text-gray-400 mt-8">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300">
                  Sign up
                </Link>
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}