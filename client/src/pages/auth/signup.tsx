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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SiGoogle, SiApple, SiMicrosoft365 } from "react-icons/si";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.enum(["doctor", "patient"], {
    required_error: "Please select a role",
  }),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one symbol"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

function getPasswordStrength(password: string): {
  score: number;
  feedback: string[];
} {
  const feedback = [];
  let score = 0;

  if (password.length >= 8) {
    score += 25;
  } else {
    feedback.push("At least 8 characters");
  }
  if (/[A-Z]/.test(password)) {
    score += 25;
  } else {
    feedback.push("Contain uppercase letter");
  }
  if (/[0-9]/.test(password)) {
    score += 25;
  } else {
    feedback.push("Contain a number");
  }
  if (/[^A-Za-z0-9]/.test(password)) {
    score += 25;
  } else {
    feedback.push("Contain a symbol");
  }

  return { score, feedback };
}

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      role: "patient",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("password");
  const { score, feedback } = getPasswordStrength(password || "");

  async function onSubmit(data: z.infer<typeof signupSchema>) {
    setIsLoading(true);
    try {
      // TODO: Implement signup
      console.log("Signup data:", data);
    } catch (error) {
      console.error("Signup error:", error);
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
              {/* X-ray icon over person SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="currentColor"
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
          <h2 className="text-3xl font-bold text-white mb-8">
            Welcome to MedXGPT.
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="doctor" id="doctor" />
                          <label htmlFor="doctor">Doctor</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="patient" id="patient" />
                          <label htmlFor="patient">Patient</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                    <div className="mt-2">
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            score >= 75
                              ? "bg-green-500"
                              : score >= 50
                              ? "bg-yellow-500"
                              : score >= 25
                              ? "bg-orange-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      {feedback.length > 0 && (
                        <ul className="mt-2 text-sm text-gray-400 space-y-1">
                          {feedback.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#0D1117] text-gray-400">
                    Or continue with
                  </span>
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
                  <SiMicrosoft365 className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-center text-sm text-gray-400 mt-8">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-blue-400 hover:text-blue-300">
                  Sign in
                </Link>
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}