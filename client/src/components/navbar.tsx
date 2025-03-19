import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { label: "Solutions", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-[#0D1117]/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-white">MedXGPT</a>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`text-sm ${
                location === item.href 
                  ? "text-blue-500" 
                  : "text-gray-300 hover:text-white"
              }`}>
                {item.label}
              </a>
            </Link>
          ))}
          
          <Link href="/demo">
            <Button variant="default" className="bg-[#0066FF] hover:bg-blue-700">
              Try Demo
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
