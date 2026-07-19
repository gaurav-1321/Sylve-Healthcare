"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const Badge = ({ children, className, variant = "default" }: { children: React.ReactNode, className?: string, variant?: "default" | "outline" | "secondary" }) => {
  const variants = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-primary text-primary",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold", variants[variant], className)}>
      {children}
    </span>
  );
};
