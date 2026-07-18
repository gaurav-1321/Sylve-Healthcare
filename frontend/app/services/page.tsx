"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Baby, 
  Heart,
  Microscope,
  Stethoscope,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Comprehensive primary care for acute illnesses, chronic disease management, and preventive health.",
    icon: <Stethoscope className="w-8 h-8 text-indigo-500" />,
    color: "bg-indigo-50 border-indigo-100",
    features: ["Fever & Infections", "Diabetes & Hypertension", "Annual Health Checkups", "Vaccinations"]
  },
  {
    id: "womens-health",
    title: "Women's Health (Gynecology)",
    description: "Dedicated care for women through all stages of life, from adolescence to menopause.",
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    color: "bg-rose-50 border-rose-100",
    features: ["Antenatal Care", "PCOD/PCOS Management", "Menstrual Disorders", "Family Planning"]
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Compassionate, expert medical care for infants, children, and adolescents.",
    icon: <Baby className="w-8 h-8 text-emerald-500" />,
    color: "bg-emerald-50 border-emerald-100",
    features: ["Childhood Immunizations", "Growth Monitoring", "Nutrition Counseling", "Seasonal Illnesses"]
  },
  {
    id: "diagnostics",
    title: "Basic Diagnostics",
    description: "In-house facilities for routine blood work and sample collection for quick and accurate diagnosis.",
    icon: <Microscope className="w-8 h-8 text-cyan-500" />,
    color: "bg-cyan-50 border-cyan-100",
    features: ["Blood Sugar Testing", "ECG", "Routine Blood Panels", "Home Sample Collection"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-3xl space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight"
          >
            Our <span className="text-primary">Clinic Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We provide essential, high-quality primary and specialized care designed for you and your family's everyday health needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card rounded-3xl border border-border/50 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] opacity-20 transition-transform duration-500 group-hover:scale-110 ${service.color}`} />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} border`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-foreground/80 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border/50 mt-auto">
                  <Button variant="ghost" className="w-full justify-between group/btn text-primary hover:text-primary hover:bg-primary/5">
                    Book an Appointment
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Unsure Who to See?</h2>
            <p className="text-lg md:text-xl opacity-90">
              Our front desk is always ready to help you schedule with the right doctor based on your symptoms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="rounded-full shadow-lg h-14 px-8 text-lg">
                Call the Clinic
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg bg-transparent border-white/30 hover:bg-white/10 text-white">
                View Our Doctors
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
