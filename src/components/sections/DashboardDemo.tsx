"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Headphones,
  Maximize2,
} from "lucide-react";
import { monthlyData, summaryStats, topRegions, recentTracks } from "@/lib/mockData";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

type Tab = "overview" | "royalties" | "analytics";

const tabs: { key: Tab; label: string; icon: typeof BarChart3 }[] = [
  { key: "overview", label: "Overview", icon: BarChart3 },
  { key: "royalties", label: "Royalties", icon: DollarSign },
  { key: "analytics", label: "Analytics", icon: TrendingUp },
];

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { icon: Headphones, label: "Total Streams", value: formatNumber(summaryStats.totalStreams), color: "text-brand-600" },
          { icon: DollarSign, label: "Total Revenue", value: `$${formatNumber(summaryStats.totalRevenue)}`, color: "text-green-600" },
          { icon: TrendingUp, label: "Engagement", value: `${summaryStats.avgEngagement}%`, color: "text-accent-600" },
          { icon: BarChart3, label: "Peak Listeners", value: formatNumber(summaryStats.totalListeners), color: "text-amber-600" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-surface-secondary/50 p-4">
            <stat.icon className={`mb-2 h-4 w-4 ${stat.color}`} />
            <p className="text-lg font-bold text-text-primary">{stat.value}</p>
            <p className="text-xs text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
        <h4 className="mb-4 text-sm font-medium text-text-primary">Monthly Streams</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 0, right: 0, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={formatNumber} />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              />
              <Bar dataKey="streams" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Region + Tracks grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Top regions */}
        <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
          <h4 className="mb-4 text-sm font-medium text-text-primary">Top Regions</h4>
          <div className="space-y-3">
            {topRegions.map((region) => (
              <div key={region.region}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-text-primary">{region.region}</span>
                  <span className="font-medium text-text-primary">{region.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${region.percentage}%`, backgroundColor: region.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top tracks */}
        <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
          <h4 className="mb-4 text-sm font-medium text-text-primary">Top Tracks</h4>
          <div className="space-y-3">
            {recentTracks.map((track) => (
              <div key={track.title} className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-text-primary">{track.title}</p>
                  <p className="text-xs text-text-muted">{track.artist}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-text-primary">{formatNumber(track.streams)}</p>
                  <p className={`text-xs ${track.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                    {track.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RoyaltiesTab() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
        <h4 className="mb-4 text-sm font-medium text-text-primary">Monthly Revenue</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} margin={{ top: 0, right: 0, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                formatter={(value) => {
                  const v = Number(value) || 0;
                  return [`$${v.toFixed(2)}`, "Revenue"];
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ fill: "#06b6d4", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
        <h4 className="mb-4 text-sm font-medium text-text-primary">Royalty Rate</h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} margin={{ top: 0, right: 0, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} domain={[0.3, 0.5]} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                formatter={(value) => {
                  const v = Number(value) || 0;
                  return [`${(v * 100).toFixed(1)}%`, "Rate"];
                }}
              />
              <Line
                type="monotone"
                dataKey="royaltyRate"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ fill: "#f59e0b", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div className="space-y-6">
      {/* Engagement + Listeners chart */}
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
        <h4 className="mb-4 text-sm font-medium text-text-primary">Listeners &amp; Engagement</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} margin={{ top: 0, right: 0, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={formatNumber} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} domain={[50, 90]} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="listeners"
                stroke="#6366f1"
                strokeWidth={2}
                dot={false}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="engagement"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary metrics */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Avg. Streams/Month", value: formatNumber(Math.round(summaryStats.totalStreams / 12)) },
          { label: "Growth Rate", value: "+8.3%" },
          { label: "Retention", value: "94.2%" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-lg font-bold text-text-primary">{stat.value}</p>
            <p className="text-xs text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const tabComponents: Record<Tab, React.FC> = {
  overview: OverviewTab,
  royalties: RoyaltiesTab,
  analytics: AnalyticsTab,
};

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const ActiveComponent = tabComponents[activeTab];

  return (
    <Section id="dashboard" background="white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            See your data in action
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            A live preview of what your dashboard will look like.
          </p>
        </div>

        {/* Browser-frame wrapper */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border shadow-2xl shadow-brand-500/10">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-border bg-surface-secondary px-5 py-3.5">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto flex max-w-md flex-1 items-center justify-center gap-2 rounded-lg bg-surface px-4 py-1.5 text-xs text-text-muted shadow-sm">
              <Maximize2 className="h-3 w-3" />
              <span>app.vieent.com/dashboard</span>
            </div>
            <div className="w-16" />
          </div>

          {/* Tab bar */}
          <div className="border-b border-border bg-surface-secondary/50 px-4 sm:px-6">
            <nav className="-mb-px flex gap-6">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 border-b-2 px-1 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-brand-600 text-brand-600"
                        : "border-transparent text-text-muted hover:border-gray-300 hover:text-text-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab content */}
          <div className="bg-surface p-4 sm:p-6 lg:p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ActiveComponent />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
