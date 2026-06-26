"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  consumePendingHomeSection,
  getHomeSectionScrollDelay,
  isHomeSection,
  scrollToHomeSection,
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
      let alignTimer: number | undefined;

      const timer = window.setTimeout(() => {
        scrollToHomeSection(pending);
        alignTimer = window.setTimeout(() => scrollToHomeSection(pending, "auto"), 120);
      }, delay);

      return () => {
        window.clearTimeout(timer);
        if (alignTimer !== undefined) window.clearTimeout(alignTimer);
      };
    }

    const hash = window.location.hash.replace("#", "");
    if (!hash || !isHomeSection(hash)) return;

    const delay = getHomeSectionScrollDelay(hash);
    const timer = window.setTimeout(() => scrollToHomeSection(hash), delay);
    return () => window.clearTimeout(timer);
  }, [pathname, headerReady]);

  return null;
}
