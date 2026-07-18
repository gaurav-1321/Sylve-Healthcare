"use client";

import { motion } from "framer-motion";
import { Heart, Activity, Stethoscope, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function CardiologyPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cardiology</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced cardiac care utilizing state-of-the-art technology to diagnose, treat, and manage heart and vascular conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <Activity className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">ECG & Diagnostics</h3>
              <p className="text-muted-foreground text-sm">Comprehensive testing including electrocardiograms, stress tests, and Holter monitoring.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preventive Cardiology</h3>
              <p className="text-muted-foreground text-sm">Risk assessment and lifestyle management to prevent future cardiovascular events.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <Stethoscope className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Heart Failure Mgmt</h3>
              <p className="text-muted-foreground text-sm">Expert care for managing chronic heart conditions and improving quality of life.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-red-500/5 rounded-3xl p-8 md:p-12 text-center border border-red-500/10">
          <h2 className="text-2xl font-bold mb-4">Your heart is in good hands</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a consultation with our expert cardiologists to discuss your heart health and treatment options.
          </p>
          <Link href="/book/cardiology">
            <Button className="rounded-xl px-8 h-12 text-lg font-semibold shadow-lg bg-red-500 hover:bg-red-600 text-white">Book Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
