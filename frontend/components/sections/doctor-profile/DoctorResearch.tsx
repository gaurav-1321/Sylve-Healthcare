"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Trophy, FileBadge } from "lucide-react";

export function DoctorResearch({ doctor }: { doctor: any }) {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Research & Publications */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Publications
          </h2>
          <div className="space-y-4">
            {doctor.papers.map((paper: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h4 className="font-semibold leading-snug mb-1">{paper.title}</h4>
                    <p className="text-sm text-muted-foreground">{paper.journal} • {paper.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Certificates */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" /> Recognition
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Awards</h4>
              <ul className="space-y-2">
                {doctor.awards.map((award: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {award}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Certificates</h4>
              <ul className="space-y-2">
                {doctor.certificates.map((cert: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium">
                    <FileBadge className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
