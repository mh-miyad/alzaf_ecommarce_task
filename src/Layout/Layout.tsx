"use client";

import Header from "@/components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="bg-[#F0F1F1] min-h-screen">{children}</div>
    </QueryClientProvider>
  );
};

export default Layout;
