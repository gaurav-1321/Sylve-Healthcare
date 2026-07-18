"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  PhoneCall,
  Star,
  Stethoscope,
  HeartPulse,
  Activity,
  ChevronDown,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const AnimatedCounter = ({ value, label }: { value: number, label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <div>
      <div className="text-3xl font-extrabold text-foreground tracking-tight">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-32 overflow-hidden bg-background flex items-center">
      {/* Complex Stripe-inspired Mesh Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/20 via-teal-400/10 to-transparent blur-[120px] opacity-80" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-secondary/20 via-blue-500/10 to-transparent blur-[120px] opacity-80" />
        {/* Subtle grid pattern for technical/healthcare feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-primary mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Walk-ins Welcome Today
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            Expert Care, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-blue-600">
              Near You.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
            Experience compassionate, family-oriented medical care with Sylve. We bring expert healthcare right to your neighborhood with our dedicated team of doctors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/book">
              <Button size="lg" className="w-full rounded-full h-14 px-8 text-base shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-primary/30 hover:shadow-primary/50 transition-all gap-2 group">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/doctors">
              <Button variant="outline" size="lg" className="w-full rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-md border-border hover:bg-muted gap-2">
                <Stethoscope className="w-5 h-5" />
                Meet Our Doctors
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-6 border-t border-border/50">
            <AnimatedCounter value={2500} label="Families Treated" />
            <div className="w-px h-12 bg-border/50" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">4.9/5 Average Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Complex Interactive Illustration */}
        <div className="relative h-[600px] hidden lg:block">

          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200"
              alt="Indian Clinic Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* 1. Floating Doctor Profile Preview (Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.1}
            className="absolute -right-8 top-12 bg-background/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/20 w-64 cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-full object-cover border-2 border-background" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Dr. Anjali Desai</h4>
                <p className="text-xs text-primary font-medium">Gynecologist</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> Verified</span>
              <span className="font-semibold flex items-center gap-1"><Star className="w-3 h-3 fill-amber-500 text-amber-500" /> 4.9</span>
            </div>
          </motion.div>

          {/* 2. Floating Appointment Card (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: -20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.8, type: "spring" }}
            drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.1}
            className="absolute -left-12 bottom-24 bg-background/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/20 w-72 cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-sm">Next Appointment</h4>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px]">Today</Badge>
            </div>
            <div className="bg-muted/50 p-3 rounded-xl flex items-center gap-3 mb-4 border border-border/50">
              <div className="bg-background p-2 rounded-lg shadow-sm">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Token #12</p>
                <p className="text-xs text-muted-foreground">General Checkup</p>
              </div>
            </div>
            <Button size="sm" className="w-full rounded-xl bg-foreground text-background hover:bg-foreground/90">View Details</Button>
          </motion.div>

          {/* 3. Floating Review Badge (Top Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -left-6 top-32 bg-white dark:bg-zinc-900 p-3 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3"
          >
            <div className="bg-amber-100 dark:bg-amber-500/20 p-2 rounded-full">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div className="pr-2">
              <p className="text-xs font-bold">"Best family doctor!"</p>
              <p className="text-[10px] text-muted-foreground">- Neha S.</p>
            </div>
          </motion.div>

          {/* 4. Emergency Contact Card (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -right-4 bottom-8 bg-destructive/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4"
          >
            <div className="bg-white/20 p-3 rounded-full animate-pulse">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-white/80 uppercase tracking-wider">Clinic Helpline</p>
              <p className="text-xl font-bold">+91 98765 43210</p>
            </div>
          </motion.div>

          {/* Live Appointment Stats (Floating UI Element) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute right-12 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold">Average Wait</span>
            </div>
            <div className="mt-2 text-xl font-bold text-center">
              15 <span className="text-sm font-medium text-muted-foreground">mins</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-muted-foreground"
      >
        <span className="text-xs font-medium uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
