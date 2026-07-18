"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export function DoctorTimeline({ education, experience }: { education: any[], experience: any[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg"><GraduationCap className="w-6 h-6 text-primary" /></div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {education.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-5 rounded-2xl border shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-primary">{item.degree}</span>
                </div>
                <div className="text-sm font-semibold mb-2">{item.institution}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
                <span className="text-xs font-medium text-muted-foreground/60 mt-3 block">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-secondary/20 rounded-lg"><Briefcase className="w-6 h-6 text-secondary-foreground" /></div>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experience.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-background bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-5 rounded-2xl border shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold">{item.role}</span>
                </div>
                <div className="text-sm font-semibold mb-2">{item.institution}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
                <span className="text-xs font-medium text-muted-foreground/60 mt-3 block">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
