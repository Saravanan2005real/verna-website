"use client";

import { EntranceProvider } from "@/components/EntranceProvider";
import ScrollToTop from "@/components/ScrollToTop";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <EntranceProvider>
      <ScrollToTop />
      {children}
    </EntranceProvider>
  );
}
