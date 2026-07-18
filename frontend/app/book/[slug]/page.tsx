import { BookingForm } from "@/components/forms/BookingForm";

// Helper function to derive defaults from slug
function getDefaultsFromSlug(slug: string) {
  let initialSpeciality = "";
  let initialDoctor = "";

  const slugLower = slug.toLowerCase();

  // Handle department slugs
  if (slugLower === "primary-care") initialSpeciality = "Primary Care";
  else if (slugLower === "cardiology") initialSpeciality = "Cardiology";
  else if (slugLower === "dermatology") initialSpeciality = "Dermatology";
  else if (slugLower === "diagnostics") initialSpeciality = "Diagnostics";
  else if (slugLower === "neurology") initialSpeciality = "Neurology";
  else if (slugLower === "orthopedics") initialSpeciality = "Orthopedics";
  else if (slugLower === "pediatrics") initialSpeciality = "Pediatrics";
  else if (slugLower === "general-medicine") initialSpeciality = "General Medicine";

  // Handle doctor slugs
  else if (slugLower === "rajesh-sharma") {
    initialDoctor = "Dr. Rajesh Sharma";
    initialSpeciality = "General Medicine";
  } else if (slugLower === "anjali-desai") {
    initialDoctor = "Dr. Anjali Desai";
    initialSpeciality = "Women's Health";
  } else if (slugLower === "vikram-singh") {
    initialDoctor = "Dr. Vikram Singh";
    initialSpeciality = "Pediatrics";
  } else if (slugLower === "sarah-johnson") {
    initialDoctor = "Dr. Sarah Johnson";
  } else if (slugLower === "michael-chen") {
    initialDoctor = "Dr. Michael Chen";
  } else if (slugLower === "emily-williams") {
    initialDoctor = "Dr. Emily Williams";
  } else if (slugLower === "james-smith") {
    initialDoctor = "Dr. James Smith";
  } else if (slugLower === "robert-davis") {
    initialDoctor = "Dr. Robert Davis";
  }

  return { initialSpeciality, initialDoctor };
}

export default async function DynamicBookAppointmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  const { initialSpeciality, initialDoctor } = getDefaultsFromSlug(slug);

  const title = initialDoctor 
    ? `Book Appointment with ${initialDoctor}`
    : initialSpeciality 
      ? `Book ${initialSpeciality} Consultation`
      : "Book an Appointment";

  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 border-b border-border/50 pb-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-2">Fill out the form below to schedule your visit.</p>
        </div>

        <BookingForm 
          initialSpeciality={initialSpeciality} 
          initialDoctor={initialDoctor} 
        />
      </div>
    </div>
  );
}
