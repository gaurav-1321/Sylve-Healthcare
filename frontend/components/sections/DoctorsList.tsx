"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowRight } from "lucide-react";

// Mock data for 3 Indian specialized doctors for a polyclinic
const doctors = [
  {
    id: "rajesh-sharma",
    name: "Dr. Rajesh Sharma",
    specialty: "General Physician",
    department: "General Medicine",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 842,
    shortDesc: "Trusted family physician specializing in preventive care and chronic disease management."
  },
  {
    id: "anjali-desai",
    name: "Dr. Anjali Desai",
    specialty: "Senior Gynecologist",
    department: "Women's Health",
    photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 620,
    shortDesc: "Compassionate care for women of all ages, specializing in maternal health and wellness."
  },
  {
    id: "vikram-singh",
    name: "Dr. Vikram Singh",
    specialty: "Pediatrician",
    department: "Pediatrics",
    photoUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    experience: "10+ Years",
    rating: 5.0,
    reviews: 412,
    shortDesc: "Dedicated to comprehensive pediatric care from infancy through adolescence with a gentle touch."
  }
];

export function DoctorsList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {doctors.map((doctor, idx) => (
        <motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="group bg-card rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-muted/50">
            <img 
              src={doctor.photoUrl} 
              alt={doctor.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Department Badge */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              {doctor.department}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-primary mt-1">
                  {doctor.specialty}
                </p>
              </div>
            </div>

            {/* Rating & Exp */}
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-medium text-foreground">{doctor.rating}</span>
                <span>({doctor.reviews})</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div>{doctor.experience}</div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
              {doctor.shortDesc}
            </p>

            {/* Action */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <Link href={`/doctors/${doctor.id}`} className="block w-full">
                <Button className="w-full rounded-xl group/btn" variant="outline">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
