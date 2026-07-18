import { Metadata } from "next";
import { DoctorHero } from "@/components/sections/doctor-profile/DoctorHero";
import { DoctorStory } from "@/components/sections/doctor-profile/DoctorStory";
import { DoctorTimeline } from "@/components/sections/doctor-profile/DoctorTimeline";
import { DoctorResearch } from "@/components/sections/doctor-profile/DoctorResearch";
import { DoctorVideo } from "@/components/sections/doctor-profile/DoctorVideo";
import { DoctorReviews } from "@/components/sections/doctor-profile/DoctorReviews";
import { DoctorFAQ } from "@/components/sections/doctor-profile/DoctorFAQ";
import { DoctorLocation } from "@/components/sections/doctor-profile/DoctorLocation";
import { RelatedDoctors } from "@/components/sections/doctor-profile/RelatedDoctors";

// Indian Polyclinic Mock data for the Premium Portfolio
async function getDoctorData(id: string) {
  // Using Rajesh Sharma as the default mock for demonstration
  return {
    id,
    name: "Dr. Rajesh Sharma",
    specialty: "General Physician",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200",
    experience: "15+ Years",
    rating: 4.9,
    reviewsCount: 842,
    languages: ["English", "Hindi", "Marathi"],
    story: "Growing up in Pune, I always envisioned a healthcare practice where patients weren't just numbers, but members of an extended family. After completing my residency at AIIMS New Delhi and working in various large corporate hospitals, I realized the personal touch was missing in modern healthcare. That's why I returned to my roots to establish Sylve Health—a place where you get the time, empathy, and holistic care you truly deserve.",
    mission: "To provide deeply compassionate, personalized, and accessible primary healthcare to every family in our community.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for Video Intro
    education: [
      { year: "2008 - 2011", degree: "MD, General Medicine", institution: "AIIMS, New Delhi", desc: "Gold Medalist in Internal Medicine." },
      { year: "2002 - 2007", degree: "MBBS", institution: "B.J. Medical College, Pune", desc: "Completed with distinction." }
    ],
    experienceTimeline: [
      { year: "2015 - Present", role: "Chief Medical Officer", institution: "Sylve Health Polyclinic, Pune", desc: "Founded and leading our close-knit family clinic." },
      { year: "2011 - 2015", role: "Consultant Physician", institution: "Apollo Hospitals", desc: "Managed complex outpatient cases and preventive health programs." }
    ],
    research: [
      "The Impact of Lifestyle Modifications on Type 2 Diabetes in Urban India",
      "Preventive Healthcare Awareness in Semi-Urban Populations"
    ],
    papers: [
      { title: "Advances in Preventive Health", journal: "Journal of Association of Physicians of India", year: 2024 },
      { title: "Managing Hypertension in the Indian Diet Context", journal: "Indian Journal of Medical Research", year: 2022 }
    ],
    awards: ["Best Family Physician 2023 - Pune Medical Association", "Excellence in Community Health Award"],
    certificates: ["Board Certified by Medical Council of India (MCI)", "Advanced Life Support (ALS)"],
    workingHours: [
      { day: "Monday - Friday", hours: "09:00 AM - 01:00 PM | 05:00 PM - 09:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 02:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    location: {
      address: "142 Sylve Polyclinic, Kothrud, Pune, Maharashtra 411038",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.565158229237!2d73.80397551489246!3d18.503370387419163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb520c43665%3A0xcda6b0fc14c2b9cc!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1621532454555!5m2!1sen!2sin"
    }
  };
}

// SEO Optimization for Individual Ranking
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const doctor = await getDoctorData(params.id);
  
  return {
    title: `${doctor.name} - Best ${doctor.specialty} in Pune | Sylve Health`,
    description: `Book a consultation with ${doctor.name}, a leading ${doctor.specialty} with ${doctor.experience} of experience. Read patient reviews and schedule an appointment online.`,
    keywords: `${doctor.name}, ${doctor.specialty}, best physician Pune, Sylve Health clinic, family doctor`,
    openGraph: {
      title: `${doctor.name} - ${doctor.specialty} | Sylve Health`,
      description: doctor.story,
      images: [doctor.photoUrl],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${doctor.name} - ${doctor.specialty}`,
      description: doctor.story,
      images: [doctor.photoUrl],
    }
  };
}

export default async function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = await getDoctorData(params.id);

  return (
    <div className="bg-background min-h-screen">
      <DoctorHero doctor={doctor} />
      
      <div className="container mx-auto px-4 mt-12 grid lg:grid-cols-3 gap-12 relative pb-32">
        <div className="lg:col-span-2 space-y-16">
          <DoctorStory doctor={doctor} />
          <DoctorVideo url={doctor.videoUrl} />
          <DoctorTimeline education={doctor.education} experience={doctor.experienceTimeline} />
          <DoctorResearch doctor={doctor} />
          <DoctorLocation location={doctor.location} />
          <DoctorReviews />
          <DoctorFAQ />
        </div>
        
        <div className="space-y-8">
          <div className="sticky top-24 space-y-8">
            <RelatedDoctors />
          </div>
        </div>
      </div>
    </div>
  );
}
