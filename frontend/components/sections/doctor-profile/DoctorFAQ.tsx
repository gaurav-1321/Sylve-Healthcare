"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance providers including BlueCross, Aetna, and Cigna. Please bring your insurance card to your first visit.",
  },
  {
    question: "How long does a typical consultation last?",
    answer: "A standard initial consultation usually lasts about 45 minutes to an hour. Follow-up appointments typically take 20-30 minutes.",
  },
  {
    question: "Is telehealth/video consultation available?",
    answer: "Yes, video consultations are available for follow-ups and non-emergency discussions. You can book them directly through the profile.",
  },
];

export function DoctorFAQ() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full bg-card rounded-xl border px-4">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
