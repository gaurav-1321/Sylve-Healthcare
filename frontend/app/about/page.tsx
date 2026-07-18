"use client";

import { motion } from "framer-motion";
import { Users, Heart, Target, Shield, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Patient-First Approach",
    description: "In our clinic, you are treated like family. We listen carefully and ensure every treatment plan is tailored to your unique needs."
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Holistic Care",
    description: "Our close-knit team of specialists collaborates directly on your health, ensuring a comprehensive approach to your well-being."
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Trust & Transparency",
    description: "We believe in honest diagnoses, clear communication, and ethical medical practices to build lasting trust in our community."
  }
];

const stats = [
  { label: "Families Served", value: "5k+" },
  { label: "Expert Doctors", value: "3" },
  { label: "Years in Community", value: "10+" },
  { label: "Care Specialties", value: "4" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000"
            alt="Indian Clinic Reception"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Your Trusted <span className="text-primary">Neighborhood Clinic</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bringing expert medical care, compassion, and a personal touch right to your community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card shadow-2xl rounded-2xl border border-border/50 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Stethoscope className="w-4 h-4" />
              Our Roots
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Rooted in Care and Community</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded over a decade ago in the heart of Pune, Sylve Health began with a simple vision: to bridge the gap between advanced medical expertise and warm, personalized family healthcare.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a close-knit polyclinic run by a dedicated team of three specialized doctors, we know our patients by name, not just by their medical records. We pride ourselves on offering comprehensive outpatient care without the overwhelming atmosphere of a large corporate hospital.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=1200"
              alt="Doctors Consulting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-background/90 backdrop-blur p-6 rounded-2xl max-w-sm">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Small Team</h3>
                <p className="text-sm text-muted-foreground">Three doctors, one shared mission: your family's health.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide our everyday interactions with you and your family.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl font-bold">Visit Our Clinic Today</h2>
          <p className="text-xl text-muted-foreground">Schedule a consultation with our experienced doctors and experience true family healthcare.</p>
          <Button size="lg" className="rounded-full shadow-lg h-14 px-8 text-lg">
            Book an Appointment
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
