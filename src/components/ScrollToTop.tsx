"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { peekPendingHomeSection } from "@/lib/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (pathname === "/" && (peekPendingHomeSection() || window.location.hash)) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
