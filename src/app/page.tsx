import { Metadata } from "next";
import React from "react";
import DashboardPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

const DashboardPage = async () => {
  return <DashboardPageClient />;
};

export default DashboardPage;
