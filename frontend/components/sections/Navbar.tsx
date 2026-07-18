"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu on path change
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <Link href="/" className="font-bold text-xl tracking-tight text-primary" onClick={closeMenu}>
            Sylve Health
          </Link>
        </div>
        
        {/* Desktop Nav */}
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
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/book">
            <Button className="rounded-full shadow-lg">Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/book">
            <Button size="sm" className="rounded-full shadow-lg">Book</Button>
          </Link>
          <button 
            className="p-2 -mr-2 text-foreground hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b"
          >
            <nav className="flex flex-col p-4 gap-4">
              <Link href="/" onClick={closeMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" onClick={closeMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/doctors" onClick={closeMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                Our Doctors
              </Link>
              <Link href="/about" onClick={closeMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <div className="pt-4 border-t">
                <Link href="/book" onClick={closeMenu} className="w-full block">
                  <Button className="w-full rounded-xl h-12 text-base shadow-lg">Book Appointment</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
