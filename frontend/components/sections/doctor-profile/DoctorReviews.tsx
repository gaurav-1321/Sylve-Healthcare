"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Emily R.",
    date: "August 12, 2025",
    rating: 5,
    text: "Dr. Jenkins was incredibly attentive and thorough during my consultation. She took the time to explain everything clearly. Highly recommend!",
  },
  {
    name: "Michael T.",
    date: "July 28, 2025",
    rating: 5,
    text: "The best cardiologist I have ever visited. The staff is friendly, and Dr. Jenkins is truly an expert in her field. I felt very safe.",
  },
];

export function DoctorReviews() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Patient Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{review.text}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
