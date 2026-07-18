"use client";

import { BookingForm } from "@/components/forms/BookingForm";

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 border-b border-border/50 pb-6">
          <h1 className="text-3xl font-bold">Book an Appointment</h1>
          <p className="text-muted-foreground mt-2">Fill out the form below to schedule a visit.</p>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}
