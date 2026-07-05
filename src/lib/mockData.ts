export type MonthlyData = {
  month: string;
  streams: number;
  revenue: number;
  royaltyRate: number;
  listeners: number;
  engagement: number;
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const monthlyData: MonthlyData[] = MONTHS.map((month, i) => {
  // Base growth trend with seasonal variation
  const growth = 1 + i * 0.06 + Math.sin((i / 12) * Math.PI * 2) * 0.15;
  const base = Math.round(80000 * growth);

  return {
    month,
    streams: base + Math.round((Math.random() - 0.5) * 20000),
    revenue: Math.round(base * 0.004 * 100) / 100,
    royaltyRate: 0.4 + Math.sin((i / 12) * Math.PI) * 0.05,
    listeners: Math.round(base * 0.35 + (Math.random() - 0.5) * 5000),
    engagement: 62 + i * 1.5 + (Math.random() - 0.5) * 8,
  };
});

export const summaryStats = {
  totalStreams: monthlyData.reduce((s, d) => s + d.streams, 0),
  totalRevenue: monthlyData.reduce((s, d) => s + d.revenue, 0),
  avgEngagement: Math.round(
    monthlyData.reduce((s, d) => s + d.engagement, 0) / monthlyData.length,
  ),
  totalListeners: Math.max(...monthlyData.map((d) => d.listeners)),
};

export const topRegions = [
  { region: "North America", percentage: 38, color: "#6366f1" },
  { region: "Europe", percentage: 28, color: "#06b6d4" },
  { region: "Asia Pacific", percentage: 18, color: "#f59e0b" },
  { region: "Latin America", percentage: 11, color: "#22c55e" },
  { region: "Other", percentage: 5, color: "#94a3b8" },
];

export const recentTracks = [
  { title: "Midnight Waves", artist: "Luna Ray", streams: 12483, change: "+8.2%" },
  { title: "Electric Dreams", artist: "Neon Pulse", streams: 9872, change: "+12.1%" },
  { title: "Golden Hour", artist: "Solstice", streams: 8451, change: "-3.4%" },
  { title: "Crystal Clear", artist: "Aurora", streams: 7219, change: "+5.7%" },
  { title: "Urban Flow", artist: "Mosaic", streams: 6540, change: "+1.2%" },
];
