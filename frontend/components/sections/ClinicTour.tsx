"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Info, Search, MoveHorizontal, HeartPulse, Stethoscope, Microscope, Beaker, Activity, CheckCircle2 } from "lucide-react";

// --- 1. Before/After Slider Component ---
const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  // Setup global event listeners to handle drag release outside the container
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-xl font-bold">Renovation Transformation</h3>
        <span className="text-sm text-muted-foreground flex items-center gap-2"><MoveHorizontal className="w-4 h-4" /> Drag to compare</span>
      </div>
      <div 
        ref={sliderRef}
        className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-border/50 shadow-lg"
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* 'After' Image (Background) */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
            alt="Clinic After Renovation" 
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">AFTER (2026)</div>
        </div>

        {/* 'Before' Image (Clipped by sliderPosition) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200" 
            alt="Clinic Before Renovation" 
            className="w-full h-full object-cover pointer-events-none"
            style={{ width: `${100 * (100 / sliderPosition)}%`, maxWidth: 'none' }}
          />
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">BEFORE</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border">
            <MoveHorizontal className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. Interactive Hotspots Component ---
const hotspots = [
  { id: 1, x: 30, y: 40, title: "Siemens MRI Scanner", desc: "State-of-the-art 3T MRI for ultra-clear diagnostics.", icon: Search },
  { id: 2, x: 75, y: 60, title: "Patient Comfort Bed", desc: "Ergonomic memory foam for maximum relaxation.", icon: HeartPulse },
  { id: 3, x: 50, y: 25, title: "HEPA Filtration", desc: "Surgical-grade air purification system.", icon: Activity },
];

const InteractiveHotspots = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold px-2">Interactive Equipment Tour</h3>
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-black">
        <img 
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
          alt="Operating Room" 
          className="w-full h-full object-cover opacity-90"
        />
        
        {hotspots.map((spot) => (
          <div 
            key={spot.id} 
            className="absolute z-10" 
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            {/* The Dot */}
            <motion.div 
              animate={{ scale: activeHotspot === spot.id ? 1.2 : 1 }}
              className="relative -left-1/2 -translate-y-1/2 w-8 h-8 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center cursor-pointer shadow-xl border-2 border-white backdrop-blur-md"
            >
              <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 rounded-full bg-primary/40 -z-10" />
              <Info className="w-4 h-4" />
            </motion.div>

            {/* The Tooltip */}
            <AnimatePresence>
              {activeHotspot === spot.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-background/95 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-border pointer-events-none"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-primary/10 rounded-md">
                      <spot.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-bold text-sm">{spot.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{spot.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        
        <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
          <span className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold shadow-md">
            Hover over the icons to explore our technology
          </span>
        </div>
      </div>
    </div>
  );
};

// --- 3. Department Carousel ---
const departments = [
  { id: "cardio", name: "Cardiology", icon: HeartPulse, img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800" },
  { id: "neuro", name: "Neurology", icon: Activity, img: "https://images.unsplash.com/photo-1559757175-9b8823521b4a?auto=format&fit=crop&q=80&w=800" },
  { id: "peds", name: "Pediatrics", icon: Stethoscope, img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800" },
  { id: "lab", name: "Laboratory", icon: Microscope, img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" },
];

const DepartmentCarousel = () => {
  const [activeDept, setActiveDept] = useState(0);

  const next = () => setActiveDept((curr) => (curr === departments.length - 1 ? 0 : curr + 1));
  const prev = () => setActiveDept((curr) => (curr === 0 ? departments.length - 1 : curr - 1));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {departments.map((dept, idx) => (
          <Button 
            key={dept.id}
            variant={activeDept === idx ? "default" : "outline"}
            onClick={() => setActiveDept(idx)}
            className="rounded-full gap-2 transition-all duration-300"
          >
            <dept.icon className="w-4 h-4" /> {dept.name}
          </Button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl h-[400px] border border-border/50 shadow-lg group">
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeDept}
            src={departments[activeDept].img}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <motion.h3 
            key={`title-${activeDept}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold mb-2"
          >
            The {departments[activeDept].name} Wing
          </motion.h3>
          <motion.p 
            key={`desc-${activeDept}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-sm max-w-lg"
          >
            Experience unparalleled care in our dedicated {departments[activeDept].name.toLowerCase()} facility, equipped with the latest advancements in modern medicine.
          </motion.p>
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" onClick={prev} className="rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border-none shadow-xl">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="icon" onClick={next} className="rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border-none shadow-xl">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};


// --- MAIN EXPORT ---
export function ClinicTour() {
  return (
    <section className="py-32 bg-muted/30 overflow-hidden relative border-t border-border">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Virtual Tour</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Step Inside Our Clinic</h2>
          <p className="text-lg text-muted-foreground">
            Take a digital walkthrough of our newly renovated facilities. From advanced diagnostic equipment to luxurious patient recovery rooms, experience the Sylve difference before you even arrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <BeforeAfterSlider />
          <div className="space-y-6 lg:pl-8">
            <h3 className="text-3xl font-bold">A Complete Transformation</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In 2026, we completely overhauled our clinic to create a space that feels less like a hospital and more like a premium wellness retreat. 
              The redesign focuses on natural light, sound dampening, and absolute patient comfort.
            </p>
            <ul className="space-y-4 pt-4">
              {["Soundproof consultation rooms for ultimate privacy", "Circadian lighting to reduce clinical anxiety", "Hospital-grade air filtration in every corridor"].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-green-500/10 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                  <span className="font-medium text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
            <h3 className="text-3xl font-bold">Next-Gen Technology</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our facilities are equipped with the absolute bleeding edge of medical technology. From 3T MRI machines to robotic surgery assistants, we ensure our doctors have the best tools to care for you.
            </p>
            <Button size="lg" className="rounded-full mt-4">View All Equipment</Button>
          </div>
          <div className="order-1 lg:order-2">
            <InteractiveHotspots />
          </div>
        </div>

        <div className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Explore Our Departments</h3>
            <p className="text-muted-foreground">Navigate through our specialized wings.</p>
          </div>
          <DepartmentCarousel />
        </div>
      </div>
    </section>
  );
}
