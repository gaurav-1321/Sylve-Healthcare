"use client";

import { motion } from "framer-motion";
import { DoctorsList } from "@/components/sections/DoctorsList";

export default function DoctorsDirectoryPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Doctors</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Meet Our <span className="text-primary">Dedicated</span> Team
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Our close-knit team of doctors is committed to providing your family with the highest standard of personalized medical care.
          </motion.p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-6">
          <div>
            <h2 className="text-3xl font-bold">Featured Specialists</h2>
            <p className="text-muted-foreground mt-2">Discover the experts leading our medical departments.</p>
          </div>
          {/* Future implementation: Department Filter or Search could go here */}
          {/* <div className="flex gap-2">...</div> */}
        </div>
        
        <DoctorsList />
      </section>
    </div>
  );
}
