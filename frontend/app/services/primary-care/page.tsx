"use client";

import { motion } from "framer-motion";
import { Stethoscope, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PrimaryCarePage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Primary Care</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive, ongoing healthcare for you and your family. We focus on prevention, wellness, and treatment for common illnesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
              <p className="text-muted-foreground text-sm">Routine check-ups, health screenings, and immunizations to keep you healthy.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <HeartPulse className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Chronic Disease</h3>
              <p className="text-muted-foreground text-sm">Management of conditions like diabetes, hypertension, and asthma.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Acute Care</h3>
              <p className="text-muted-foreground text-sm">Fast and effective treatment for sudden illnesses or minor injuries.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
          <h2 className="text-2xl font-bold mb-4">Ready to prioritize your health?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book an appointment with one of our experienced primary care physicians today and take the first step towards a healthier you.
          </p>
          <Link href="/book/primary-care">
            <Button className="rounded-xl px-8 h-12 text-lg font-semibold shadow-lg">Book Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
