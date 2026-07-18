"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function DoctorVideo({ url }: { url: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Meet the Doctor</h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative w-full aspect-video rounded-3xl overflow-hidden border shadow-xl group cursor-pointer bg-muted"
      >
        {/* Placeholder for iframe video - using an image with play button for preview */}
        <img 
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1200" 
          alt="Video Thumbnail"
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/50 transition-colors">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-primary ml-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
