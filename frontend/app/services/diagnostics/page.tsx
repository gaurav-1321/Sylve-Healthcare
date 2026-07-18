"use client";

import { motion } from "framer-motion";
import { Microscope, TestTube, FileSearch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Microscope className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Diagnostics</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Accurate and timely testing services powered by modern laboratories and advanced imaging technology for precise medical insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <TestTube className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laboratory Services</h3>
              <p className="text-muted-foreground text-sm">Comprehensive blood work, pathology, and clinical testing with rapid turnaround times.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <FileSearch className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Imaging & Radiology</h3>
              <p className="text-muted-foreground text-sm">State-of-the-art X-Rays, Ultrasounds, MRI, and CT scans interpreted by expert radiologists.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Specialized Testing</h3>
              <p className="text-muted-foreground text-sm">Genetic screening, allergy testing, and customized diagnostic panels based on your needs.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-500/5 rounded-3xl p-8 md:p-12 text-center border border-blue-500/10">
          <h2 className="text-2xl font-bold mb-4">Precision you can trust</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ensure your health is accurately assessed with our top-tier diagnostic services. Schedule your appointment today.
          </p>
          <Link href="/book/diagnostics">
            <Button className="rounded-xl px-8 h-12 text-lg font-semibold shadow-lg bg-blue-500 hover:bg-blue-600 text-white">Book Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
