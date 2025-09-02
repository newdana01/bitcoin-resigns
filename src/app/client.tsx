"use client";

import React from "react";
import Layout from "../components/layout/Layout";

// const App = dynamic(() => import("../App"), { ssr: false });

export function ClientOnly() {
  return <Layout></Layout>;
}
