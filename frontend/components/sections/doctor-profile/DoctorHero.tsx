"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Video, Calendar, ShieldCheck, Languages } from "lucide-react";

export function DoctorHero({ doctor }: { doctor: any }) {
  return (
    <div className="relative bg-muted/30 pt-20 pb-16 overflow-hidden border-b">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
          
          {/* Professional Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-48 h-48 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl shrink-0"
          >
            <img src={doctor.photoUrl} alt={doctor.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
              <span className="flex items-center text-sm font-bold bg-black/40 backdrop-blur-md px-2 py-1 rounded-md">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500 mr-1" />
                {doctor.rating}
              </span>
            </div>
          </motion.div>
          
          {/* Copy and Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-sm py-1">{doctor.specialty}</Badge>
              <span className="flex items-center text-sm font-medium text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-green-500 mr-1" /> Verified Profile
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">{doctor.name}</h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> Sylve Health HQ</span>
              <span className="flex items-center gap-1 font-medium text-foreground">{doctor.experience} Experience</span>
              <span className="flex items-center gap-1"><Languages className="w-4 h-4 text-primary" /> {doctor.languages.join(", ")}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full shadow-lg gap-2 h-14 px-8 text-base">
                <Calendar className="w-5 h-5" /> Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2 border-primary/20 hover:bg-primary/5 h-14 px-8 text-base">
                <Video className="w-5 h-5" /> Video Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
