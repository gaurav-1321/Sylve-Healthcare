"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <Link href="/" className="font-bold text-xl tracking-tight text-primary">
            Sylve Health
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/doctors" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Our Doctors
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">

          <Link href="/book">
            <Button className="rounded-full shadow-lg">Book Appointment</Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
