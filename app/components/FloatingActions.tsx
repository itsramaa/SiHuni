"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  ChevronUp, 
  Phone,
  Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actions = [
    {
      icon: MessageCircle,
      label: "Chat Support",
      onClick: () => window.open("https://wa.me/6281234567890", "_blank"),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Telepon Kami",
      onClick: () => window.open("tel:+6281234567890"),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Heart,
      label: "Favorit",
      onClick: () => window.location.href = "/favorites",
      color: "bg-red-500 hover:bg-red-600"
    }
  ];

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-16 right-4 z-50"
          >
            <Button
              size="icon"
              onClick={scrollToTop}
              className="rounded-full bg-primary hover:bg-primary/90 shadow-lg"
            >
              <ChevronUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-3 space-y-2"
            >
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      size="icon"
                      onClick={action.onClick}
                      className={`rounded-full ${action.color} text-white shadow-lg relative group`}
                      title={action.label}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {action.label}
                      </span>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        
        <Button
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.div>
        </Button>
      </div>
    </>
  );
}