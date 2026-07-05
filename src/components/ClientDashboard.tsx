"use client";

import { Suspense, lazy } from "react";

const DashboardDemo = lazy(() => import("@/components/sections/DashboardDemo"));

export default function ClientDashboard() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse bg-surface-secondary" />}>
      <DashboardDemo />
    </Suspense>
  );
}
