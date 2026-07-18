"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, ScanLine, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DermatologyPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dermatology</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skincare ranging from medical treatments for skin conditions to advanced cosmetic procedures for a healthy, glowing appearance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <ScanLine className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Dermatology</h3>
              <p className="text-muted-foreground text-sm">Treatment for acne, eczema, psoriasis, rosacea, and other clinical skin conditions.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <Sun className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skin Cancer Screening</h3>
              <p className="text-muted-foreground text-sm">Thorough full-body examinations to detect early signs of skin cancer and melanoma.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <Sparkles className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cosmetic Services</h3>
              <p className="text-muted-foreground text-sm">Enhance your natural beauty with Botox, dermal fillers, chemical peels, and laser therapies.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-amber-500/5 rounded-3xl p-8 md:p-12 text-center border border-amber-500/10">
          <h2 className="text-2xl font-bold mb-4">Love the skin you're in</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book an appointment with our expert dermatologists and achieve the healthy, beautiful skin you deserve.
          </p>
          <Link href="/book/dermatology">
            <Button className="rounded-xl px-8 h-12 text-lg font-semibold shadow-lg bg-amber-500 hover:bg-amber-600 text-white">Book Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
