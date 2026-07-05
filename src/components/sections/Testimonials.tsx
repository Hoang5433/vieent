"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "Vieent transformed how we look at our data. We went from monthly reports to real-time decisions. The dashboard is incredibly intuitive.",
    name: "Sarah Chen",
    role: "Head of Analytics",
    company: "Streamline Inc.",
    initials: "SC",
    color: "bg-brand-600",
  },
  {
    quote:
      "We've seen a 40% increase in team productivity since switching to Vieent. The collaboration features alone are worth it.",
    name: "Marcus Rivera",
    role: "CTO",
    company: "DataForge",
    initials: "MR",
    color: "bg-accent-500",
  },
  {
    quote:
      "Finally, an analytics platform that doesn't require a data science degree. We had our first dashboard live in under 10 minutes.",
    name: "Emily Nakamura",
    role: "Product Manager",
    company: "GrowthLoop",
    initials: "EN",
    color: "bg-amber-500",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" background="muted">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Trusted by data-driven teams
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            See what our customers are saying about Vieent.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <Quote className="mb-3 h-6 w-6 text-brand-300" />
                <p className="leading-relaxed text-text-secondary">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
