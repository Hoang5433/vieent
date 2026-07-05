"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-16">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/50 via-transparent to-transparent"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Badge variant="accent" className="mb-6">
                Now in public beta
              </Badge>
            </motion.div>

            <motion.h1
              className="max-w-xl text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Turn your data into{" "}
              <span className="text-brand-600">actionable insights</span>
            </motion.h1>

            <motion.p
              className="mt-4 max-w-lg text-lg text-text-secondary sm:text-xl"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Real-time analytics, beautiful dashboards, and smart alerts —
              everything you need to understand and grow your business.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch demo
              </Button>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-text-muted"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              No credit card required · 14-day free trial
            </motion.p>
          </div>

          {/* Right column — visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Dashboard preview mockup */}
            <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-brand-500/10 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-text-muted">
                  dashboard.vieent.com
                </span>
              </div>

              <div className="space-y-6">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Total Views", value: "128.4K", icon: BarChart3 },
                    { label: "Growth", value: "+12.5%", icon: TrendingUp },
                    { label: "Active Users", value: "3,842", icon: BarChart3 },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-brand-50/50 p-4"
                    >
                      <stat.icon className="mb-2 h-4 w-4 text-brand-600" />
                      <p className="text-lg font-bold text-text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs text-text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bar chart placeholder */}
                <div className="rounded-xl bg-surface-secondary p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-text-primary">
                      Monthly Revenue
                    </span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-end justify-between gap-1.5">
                    {[40, 55, 48, 62, 58, 75, 82, 70, 90, 85, 95, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-brand-400 transition-all hover:bg-brand-500"
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-text-muted">
                    <span>Jan</span>
                    <span>Jun</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blob */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
