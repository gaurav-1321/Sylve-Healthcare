"use client";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ClinicTour } from "@/components/sections/ClinicTour";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ClinicTour />
    </>
  );
}
