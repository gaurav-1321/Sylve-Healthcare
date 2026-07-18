"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function DoctorAbout({ doctor }: { doctor: any }) {
  const [activeTab, setActiveTab] = useState("about");
  
  const tabs = [
    { id: "about", label: "About" },
    { id: "qualifications", label: "Qualifications" },
    { id: "experience", label: "Experience & Awards" },
    { id: "publications", label: "Publications" },
  ];

  return (
    <Card className="overflow-hidden shadow-sm">
      <div className="flex border-b overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${
              activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
        ))}
      </div>
      
      <CardContent className="p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "about" && (
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
              
              <div className="bg-muted/30 p-4 rounded-xl border">
                <h4 className="font-semibold flex items-center gap-2 mb-4"><Clock className="w-5 h-5 text-primary"/> Working Hours</h4>
                <div className="space-y-2">
                  {doctor.workingHours.map((wh: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{wh.day}</span>
                      <span className="font-medium">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "qualifications" && (
            <ul className="space-y-3">
              {doctor.qualifications.map((q: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  {q}
                </li>
              ))}
            </ul>
          )}

          {activeTab === "experience" && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Awards & Certificates</h4>
                <ul className="space-y-3">
                  {doctor.awards.map((a: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "publications" && (
            <ul className="space-y-3">
              {doctor.publications.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </CardContent>
    </Card>
  );
}
