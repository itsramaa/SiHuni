"use client";

import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Home, Search } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-8 bg-gradient-to-r from-primary to-secondary relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Bergabung Sekarang</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Temukan Hunian Impian
              <span className="block text-yellow-300">Dalam Hitungan Menit</span>
            </h2>
            
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Dengan ribuan pilihan properti di berbagai kota, kami membantu Anda
              menemukan tempat tinggal yang sempurna sesuai kebutuhan dan budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Home className="w-5 h-5 mr-2" />
                Mulai Cari Properti
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Search className="w-5 h-5 mr-2" />
                Jelajahi Area
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">15k+</div>
                <div className="text-sm text-white/80">Tenant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2.5k+</div>
                <div className="text-sm text-white/80">Properti</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Kota</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Kosan Premium Jakarta</h4>
                    <p className="text-sm text-muted-foreground">Setiabudi • Rp 1.2jt/bulan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Apartemen Bandung</h4>
                    <p className="text-sm text-muted-foreground">Dago • Rp 2.5jt/bulan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Kontrakan Surabaya</h4>
                    <p className="text-sm text-muted-foreground">Sukolilo • Rp 3.8jt/tahun</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Lihat Semua Properti
                </Button>
              </div>
            </Card>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              NEW
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}