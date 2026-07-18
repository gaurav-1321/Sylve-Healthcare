"use client";

import { motion } from "framer-motion";

export function DoctorGallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6">Clinic Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="aspect-square rounded-xl overflow-hidden border shadow-sm"
          >
            <img src={img} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
