"use client";

import { useInView } from "@/hooks/use-in-view";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Putri",
    role: "Mahasiswa UI",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
    content: "Sihuni sangat memudahkan saya mencari kosan dekat kampus. Proses bookingnya cepat dan pembayarannya aman. Recommended!",
    rating: 5,
    location: "Depok"
  },
  {
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Akhirnya bisa pindah ke apartemen yang lebih nyaman tanpa ribet. Fitur filternya sangat membantu menemukan sesuai budget.",
    rating: 5,
    location: "Jakarta"
  },
  {
    name: "Maya Wulandari",
    role: "Fresh Graduate",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Pertama kali nyewa apartemen via online ternyata mudah dan aman. Customer service-nya juga responsif banget.",
    rating: 5,
    location: "Bandung"
  },
  {
    name: "Rizky Ramadhan",
    role: "Pengusaha Muda",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Cari gudang untuk usaha jadi lebih gampang. Banyak pilihan lokasi strategis dengan harga kompetitif.",
    rating: 4,
    location: "Surabaya"
  }
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman nyaman para tenant yang telah menemukan hunian impian melalui Sihuni
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <Quote className="w-6 h-6 text-muted-foreground/30 mb-2" />
                      
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {testimonial.content}
                      </p>
                      
                      <div className="mt-4 pt-3 border-t text-xs text-muted-foreground">
                        📍 {testimonial.location}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}