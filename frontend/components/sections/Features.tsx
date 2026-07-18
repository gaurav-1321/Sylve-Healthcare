"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Microscope, Stethoscope, ActivitySquare } from "lucide-react";

const features = [
  {
    title: "Primary Care",
    description: "Comprehensive medical care for individuals and families, focusing on prevention.",
    icon: Stethoscope,
  },
  {
    title: "Specialized Treatment",
    description: "Expert care from leading specialists in cardiology, neurology, and more.",
    icon: HeartPulse,
  },
  {
    title: "Advanced Diagnostics",
    description: "State-of-the-art imaging and laboratory services for accurate diagnosis.",
    icon: Microscope,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock medical advice and emergency consultation services.",
    icon: ActivitySquare,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Sylve Health?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We blend modern luxury with medical excellence to provide a healthcare experience unlike any other.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
