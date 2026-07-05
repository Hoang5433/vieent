"use client";

import {
  BarChart3,
  Bell,
  Zap,
  Users,
} from "lucide-react";
import FeatureBlock from "@/components/sections/FeatureBlock";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: BarChart3,
    title: "Real-time dashboards",
    description:
      "Visualize your data the moment it arrives. Build custom dashboards with drag-and-drop widgets, filter by date range, and share them with your team in one click.",
    visual: (
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs font-medium text-text-muted">Live updates</span>
        </div>
        <div className="space-y-4">
          <div className="h-3 w-3/4 rounded bg-gray-200" />
          <div className="h-3 w-1/2 rounded bg-gray-200" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[65, 82, 48].map((w, i) => (
              <div key={i} className="space-y-2">
                <div
                  className="rounded-lg bg-brand-400/60"
                  style={{ height: `${w}px` }}
                />
                <div className="h-2 w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: "Lightning-fast queries",
    description:
      "Query millions of rows in milliseconds. Our optimized pipeline processes your data on the fly so you never have to wait for a dashboard to load or a report to generate.",
    reversed: true,
    visual: (
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-xs font-medium text-text-muted">
          <Zap className="h-3.5 w-3.5 text-amber-500" />
          <span>Query completed in 47ms</span>
        </div>
        <div className="space-y-2 font-mono text-sm">
          <div className="rounded bg-surface-secondary px-3 py-2 text-text-primary">
            <span className="text-text-muted">SELECT</span> region, SUM(revenue)
          </div>
          <div className="rounded bg-surface-secondary px-3 py-2 text-text-primary">
            <span className="text-text-muted">FROM</span> transactions
          </div>
          <div className="rounded bg-surface-secondary px-3 py-2 text-text-primary">
            <span className="text-text-muted">WHERE</span> date &gt;= &apos;2026-01-01&apos;
          </div>
          <div className="rounded bg-green-50 px-3 py-2 text-green-700">
            → 8,432 rows returned in 47ms
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Bell,
    title: "Smart alerts & notifications",
    description:
      "Set up custom alerts for any metric. Get notified via email, Slack, or webhook when your data crosses a threshold — before it becomes a problem.",
    visual: (
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="space-y-3">
          {[
            { label: "Revenue drop detected", color: "bg-red-100 text-red-700", time: "2m ago" },
            { label: "Daily active users hit 10K", color: "bg-green-100 text-green-700", time: "15m ago" },
            { label: "New integration ready", color: "bg-brand-100 text-brand-700", time: "1h ago" },
          ].map((alert) => (
            <div
              key={alert.label}
              className="flex items-center gap-3 rounded-xl border border-border p-4"
            >
              <div className="flex-1">
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${alert.color}`}>
                  {alert.label}
                </span>
              </div>
              <span className="text-xs text-text-muted">{alert.time}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Team collaboration",
    description:
      "Share dashboards, annotate charts, and discuss insights right where your data lives. Role-based access means the right people see the right information.",
    reversed: true,
    visual: (
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          {["#6366f1", "#06b6d4", "#f59e0b", "#ef4444"].map((color, i) => (
            <div
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {["JD", "AK", "ML", "TR"][i]}
            </div>
          ))}
          <span className="ml-2 text-xs text-text-muted">4 online now</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="rounded-xl bg-brand-50 p-3 text-text-primary">
            <span className="font-medium">JD:</span> Revenue is up 12% this week 🎉
          </div>
          <div className="rounded-xl bg-surface-secondary p-3 text-text-primary">
            <span className="font-medium">AK:</span> Mostly from the EU region
          </div>
          <div className="rounded-xl bg-brand-50 p-3 text-text-primary">
            <span className="font-medium">ML:</span> Let&apos;s dig into the dashboard
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <Section id="features" background="muted">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Everything you need to understand your data
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Powerful features that make data analysis accessible for every team.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-24">
          {features.map((feature, i) => (
            <FeatureBlock key={i} {...feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
