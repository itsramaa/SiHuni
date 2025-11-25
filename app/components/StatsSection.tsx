"use client";

import { useInView } from "@/hooks/use-in-view";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Home, MapPin, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15,000+",
    label: "Happy Tenants",
    description: "Trusted by thousands of users"
  },
  {
    icon: Home,
    value: "2,500+",
    label: "Properties Listed",
    description: "Wide range of accommodations"
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Cities Covered",
    description: "Across major Indonesian cities"
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Average Rating",
    description: "Excellent customer satisfaction"
  }
];

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 px-4 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mengapa Memilih Sihuni?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platform terpercaya untuk mencari hunian impian dengan proses cepat dan aman
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="font-semibold mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}