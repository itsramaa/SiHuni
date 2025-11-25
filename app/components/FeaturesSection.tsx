"use client";

import { useInView } from "@/hooks/use-in-view";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Search, 
  MessageCircle, 
  TrendingUp,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Aman & Terpercaya",
    description: "Verifikasi properti dan pembayaran yang aman dengan sistem escrow",
    badge: "100% Aman",
    color: "bg-green-500"
  },
  {
    icon: Clock,
    title: "Proses Cepat",
    description: "Booking hanya dalam 3 langkah mudah dan cepat",
    badge: "< 5 Menit",
    color: "bg-blue-500"
  },
  {
    icon: Search,
    title: "Pencarian Cerdas",
    description: "Filter otomatis berdasarkan lokasi, harga, dan fasilitas",
    badge: "AI Powered",
    color: "bg-purple-500"
  },
  {
    icon: MessageCircle,
    title: "Support 24/7",
    description: "Tim customer service siap membantu kapan saja",
    badge: "Fast Response",
    color: "bg-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi, harga sesuai di iklan",
    badge: "No Hidden Fee",
    color: "bg-teal-500"
  },
  {
    icon: Heart,
    title: "Favorit Tersimpan",
    description: "Simpan properti favorit dan bandingkan dengan mudah",
    badge: "Save & Compare",
    color: "bg-pink-500"
  }
];

export default function FeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            Fitur Unggulan
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nikmati Kemudahan Mencari Hunian
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengan teknologi terbaru dan layanan prima, kami hadir untuk memudahkan pencarian hunian Anda
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Mulai Cari Hunian
          </Button>
        </motion.div>
      </div>
    </section>
  );
}