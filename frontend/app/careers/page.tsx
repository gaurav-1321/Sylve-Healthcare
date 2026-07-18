"use client";

import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-muted-foreground text-lg">Help us shape the future of healthcare.</p>
        </motion.div>
        
        <div className="bg-card p-8 rounded-3xl shadow-xl border border-border/50 text-center">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <p className="text-muted-foreground mb-8">We are currently not hiring, but please check back later for new opportunities!</p>
        </div>
      </div>
    </div>
  );
}
