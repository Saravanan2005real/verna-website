"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  consumePendingHomeSection,
  getHomeSectionScrollDelay,
  isHomeSection,
  scrollToHomeSectionWithAlign,
} from "@/lib/navigation";
import { useEntrance } from "@/components/EntranceProvider";

export default function HashScrollHandler() {
  const pathname = usePathname();
  const { headerReady } = useEntrance();

  useEffect(() => {
    if (pathname !== "/" || !headerReady) return;

    const pending = consumePendingHomeSection();
    if (pending) {
      const delay = getHomeSectionScrollDelay(pending);
      const timer = window.setTimeout(() => {
        scrollToHomeSectionWithAlign(pending);
      }, delay);

      return () => window.clearTimeout(timer);
    }

    const hash = window.location.hash.replace("#", "");
    if (!hash || !isHomeSection(hash)) return;

    const delay = getHomeSectionScrollDelay(hash);
    const timer = window.setTimeout(() => scrollToHomeSectionWithAlign(hash), delay);
    return () => window.clearTimeout(timer);
  }, [pathname, headerReady]);

  return null;
}
