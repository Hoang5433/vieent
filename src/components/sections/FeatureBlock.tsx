"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type FeatureBlockProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  reversed?: boolean;
  visual: React.ReactNode;
};

export default function FeatureBlock({
  icon: Icon,
  title,
  description,
  reversed = false,
  visual,
}: FeatureBlockProps) {
  return (
    <div className={`grid items-center gap-8 sm:gap-12 lg:grid-cols-2`}>
      {/* Text side */}
      <motion.div
        className={`flex flex-col ${reversed ? "lg:order-2" : "lg:order-1"}`}
        initial={{ opacity: 0, x: reversed ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-text-primary">
          {title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      </motion.div>

      {/* Visual side */}
      <motion.div
        className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, x: reversed ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {visual}
      </motion.div>
    </div>
  );
}
