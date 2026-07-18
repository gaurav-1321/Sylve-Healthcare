"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function DoctorStory({ doctor }: { doctor: any }) {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">The Journey</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          <p>{doctor.story}</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-primary/5 border border-primary/10 rounded-2xl p-8 relative overflow-hidden"
      >
        <Quote className="absolute top-4 right-4 w-24 h-24 text-primary/10 -rotate-12" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Mission Statement</h3>
        <p className="text-xl md:text-2xl font-medium leading-snug relative z-10">"{doctor.mission}"</p>
      </motion.div>
    </div>
  );
}
