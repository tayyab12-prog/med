import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "20",
    interval: "/month",
    features: [
      "10 X-Rays Analysis",
      "Own analytics platform",
      "No Chat support"
    ],
    action: "CHOOSE PLAN",
    href: "/contact",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    name: "Pro",
    price: "100",
    interval: "/month",
    features: [
      "20 X-ray Analysis",
      "Own analytics platform",
      "Chat support"
    ],
    action: "CHOOSE PLAN",
    href: "/contact",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    name: "Enterprise",
    price: "200",
    interval: "/month",
    features: [
      "100 X-Rays Analysis",
      "Own analytics platform",
      "Chat support",
      "Report Generation"
    ],
    action: "CONTACT US",
    href: "/contact",
    gradient: "from-blue-600 to-blue-700"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full bg-[#1C2128] border-gray-800">
                <div
                  className={`absolute inset-0 opacity-10 bg-gradient-to-br ${plan.gradient}`}
                />
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="flex items-baseline mt-4">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-gray-400">{plan.interval}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={plan.href} className="w-full">
                    <Button
                      className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90`}
                    >
                      {plan.action}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
