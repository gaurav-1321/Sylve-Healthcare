"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function DoctorLocation({ location }: { location: any }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg"><MapPin className="w-6 h-6 text-primary" /></div>
        <h2 className="text-2xl font-bold">Location</h2>
      </div>
      <p className="text-muted-foreground font-medium">{location.address}</p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-[300px] rounded-3xl overflow-hidden border shadow-sm"
      >
        <iframe 
          src={location.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        />
      </motion.div>
    </div>
  );
}
