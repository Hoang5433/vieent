"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const logos = [
  { name: "Streamline", icon: "S" },
  { name: "DataForge", icon: "D" },
  { name: "GrowthLoop", icon: "G" },
  { name: "NexusAI", icon: "N" },
  { name: "PulseMetrics", icon: "P" },
  { name: "CloudSync", icon: "C" },
];

export default function LogoStrip() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-medium text-text-muted">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-secondary text-xs font-bold">
                {logo.icon}
              </div>
              <span className="text-sm font-semibold tracking-tight opacity-60">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
