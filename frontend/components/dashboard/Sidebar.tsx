"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart3,
  Calendar,
  Users,
  Stethoscope,
  ClipboardList,
  UserCircle,
  Settings,
  HeartPulse,
  LogOut,
} from "lucide-react";

// Mock roles and their respective navigation links
const roleLinks = {
  admin: [
    { name: "Overview", href: "/dashboard/admin", icon: BarChart3 },
    { name: "Users", href: "/dashboard/admin/users", icon: Users },
    { name: "System Logs", href: "/dashboard/admin/logs", icon: Activity },
  ],
  doctor: [
    { name: "My Schedule", href: "/dashboard/doctor", icon: Calendar },
    { name: "Patients", href: "/dashboard/doctor/patients", icon: Users },
    { name: "Consultations", href: "/dashboard/doctor/consultations", icon: Stethoscope },
  ],
  receptionist: [
    { name: "Front Desk", href: "/dashboard/receptionist", icon: ClipboardList },
    { name: "Bookings", href: "/dashboard/receptionist/bookings", icon: Calendar },
    { name: "Billing", href: "/dashboard/receptionist/billing", icon: Activity },
  ],
  nurse: [
    { name: "Triage Queue", href: "/dashboard/nurse", icon: HeartPulse },
    { name: "Patient Records", href: "/dashboard/nurse/records", icon: ClipboardList },
  ],
  patient: [
    { name: "Health Overview", href: "/dashboard/patient", icon: Activity },
    { name: "Appointments", href: "/dashboard/patient/appointments", icon: Calendar },
    { name: "Medical History", href: "/dashboard/patient/history", icon: ClipboardList },
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  
  // Extract role from pathname (e.g. /dashboard/admin -> admin)
  const currentRole = pathname.split("/")[2] as keyof typeof roleLinks || "patient";
  const links = roleLinks[currentRole] || roleLinks.patient;

  return (
    <div className="w-64 border-r bg-card hidden md:flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Activity className="w-5 h-5" />
          Sylve Health
        </Link>
      </div>

      <div className="flex-1 py-6 px-4 space-y-1">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
          {currentRole} Menu
        </div>
        
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <link.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t space-y-1">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
        >
          <Settings className="w-4 h-4" /> Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </div>
  );
}
