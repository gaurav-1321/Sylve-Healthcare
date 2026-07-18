"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const relatedDoctors = [
  {
    id: "dr-robert-chen",
    name: "Dr. Robert Chen",
    specialty: "Neurologist",
    rating: 4.8,
    photoUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "dr-emily-stone",
    name: "Dr. Emily Stone",
    specialty: "Pediatrician",
    rating: 4.9,
    photoUrl: "https://images.unsplash.com/photo-1594824436998-d8869a838da1?auto=format&fit=crop&q=80&w=200",
  },
];

export function RelatedDoctors() {
  return (
    <div className="bg-background rounded-xl border p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-4">Related Doctors</h3>
      <div className="space-y-4">
        {relatedDoctors.map((doc) => (
          <div key={doc.id} className="flex items-center gap-4 p-2 hover:bg-muted/50 rounded-lg transition-colors group">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <img src={doc.photoUrl} alt={doc.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{doc.name}</h4>
              <p className="text-xs text-muted-foreground">{doc.specialty}</p>
            </div>
            <div className="flex items-center text-xs font-medium text-amber-500">
              <Star className="w-3 h-3 fill-current mr-1" />
              {doc.rating}
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-6 gap-2 text-sm">
        View All Doctors <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
