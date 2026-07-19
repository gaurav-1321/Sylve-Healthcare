"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Mail, Calendar as CalendarIcon, Clock, Activity, User, Phone } from "lucide-react";
import Link from "next/link";

const API_URL = "http://localhost:5000/api";

interface BookingFormProps {
  initialSpeciality?: string;
  initialDoctor?: string;
}

export function BookingForm({ initialSpeciality = "", initialDoctor = "" }: BookingFormProps) {
  // Patient details
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");

  // Booking State
  const [doctorName, setDoctorName] = useState(initialDoctor);
  const [speciality, setSpeciality] = useState(initialSpeciality);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingError, setBookingError] = useState("");

  useEffect(() => {
    if (date) {
      // Fetch mock slots from backend
      fetch(`${API_URL}/appointments/available-slots?date=${date}`)
        .then(res => res.json())
        .then(data => setAvailableSlots(data.slots || []))
        .catch(err => console.error(err));
    } else {
      setAvailableSlots([]);
    }
  }, [date]);

  const handleBookAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientEmail || !patientPhone || !date || !time || !doctorName || !speciality) return;

    setIsSubmitting(true);
    setBookingError("");

    try {
      const res = await fetch(`${API_URL}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          patientName,
          patientEmail,
          patientPhone,
          date,
          time,
          symptoms,
          doctorName,
          speciality
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setBookingError(data.error || "Failed to book appointment");
      }
    } catch (err) {
      setBookingError("Network error. Is the backend running?");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[60vh] py-12 px-4 flex justify-center items-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center bg-card p-12 rounded-3xl shadow-xl max-w-lg w-full">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Appointment Booked!</h2>
          <p className="text-muted-foreground mb-8">
            Your appointment on <strong>{date} at {time}</strong> is confirmed.
            An email and WhatsApp notification has been sent to the doctor.
          </p>
          <Button onClick={() => {
            setSuccess(false);
            setDate("");
            setTime("");
            setSymptoms("");
          }} className="rounded-xl px-8">Book Another</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <Card className="shadow-xl rounded-3xl border border-border/50 overflow-hidden bg-card">
      <CardContent className="p-6 sm:p-10">
        {bookingError && <p className="text-red-500 text-sm mb-6 bg-red-50 p-3 rounded-xl">{bookingError}</p>}

        <form onSubmit={handleBookAppointment} className="space-y-8">

          {/* Patient Details */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Full Name</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-2 flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> Email Address</label>
                <input
                  type="email"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Phone Number</label>
                <input
                  type="tel"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>
          </div>

          <hr className="border-border/50" />

          {/* Doctor and Speciality Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-primary" /> Speciality</label>
                <select
                  value={speciality}
                  onChange={(e) => setSpeciality(e.target.value)}
                  className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  required
                >
                  <option value="" disabled>Select Speciality</option>
                  <option value="Primary Care">Primary Care</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Diagnostics">Diagnostics</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Women's Health">Women's Health</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Doctor</label>
                <select
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  required
                >
                  <option value="" disabled>Select Doctor</option>
                  <option value="Dr. Rajesh Sharma">Dr. Rajesh Sharma</option>
                  <option value="Dr. Anjali Desai">Dr. Anjali Desai</option>
                  <option value="Dr. Vikram Singh">Dr. Vikram Singh</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                  <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                  <option value="Dr. Emily Williams">Dr. Emily Williams</option>
                  <option value="Dr. James Smith">Dr. James Smith</option>
                  <option value="Dr. Robert Davis">Dr. Robert Deci</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-border/50" />

          {/* Date Selection */}
          <div>
            <label className="text-sm font-semibold mb-3 flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-primary" /> Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setTime("");
              }}
              min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
              className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-shadow"
              required
            />
          </div>

          {/* Time Selection */}
          {date && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <label className="text-sm font-semibold mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Available Slots</label>
              <div className="grid grid-cols-3 gap-3">
                {availableSlots.length > 0 ? availableSlots.map((slot) => (
                  <div
                    key={slot}
                    onClick={() => setTime(slot)}
                    className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${time === slot ? "bg-primary text-primary-foreground border-primary shadow-md" : "hover:bg-muted bg-background/50"
                      }`}
                  >
                    <span className="text-sm font-medium">{slot}</span>
                  </div>
                )) : (
                  <p className="text-sm text-muted-foreground col-span-3 p-3">No slots available for this date.</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Symptoms */}
          {time && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <label className="text-sm font-semibold mb-3 flex items-center gap-2"><Activity className="w-4 h-4 text-primary" /> Reason for Visit</label>
              <textarea
                rows={3}
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
                className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:ring-2 focus:ring-primary outline-none"
                placeholder="Briefly describe your symptoms (optional)..."
              />
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={!patientName || !patientEmail || !patientPhone || !date || !time || !doctorName || !speciality || isSubmitting}
            className="w-full rounded-xl h-14 text-lg font-semibold shadow-lg group relative overflow-hidden mt-8"
          >
            {isSubmitting ? 'Booking Appointment...' : 'Confirm Appointment'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
