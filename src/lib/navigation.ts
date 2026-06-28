export type HomeSection = "home" | "services" | "about" | "contact" | "why-us";

export const PENDING_HOME_SECTION_KEY = "vernatech:pendingHomeSection";

export const CONTACT_SCROLL_TARGET_ID = "contact-start";

const SECTION_SCROLL_OFFSET: Record<Exclude<HomeSection, "home">, number> = {
  services: 100,
  about: 100,
  "why-us": 100,
  contact: 112,
};

const HOME_SECTIONS = new Set<HomeSection>(["home", "services", "about", "contact", "why-us"]);

export function isHomeSection(value: string): value is HomeSection {
  return HOME_SECTIONS.has(value as HomeSection);
}

export function homeSectionPath(section: HomeSection) {
  return `/#${section}`;
}

export function getHomeSectionScrollDelay(section: HomeSection): number {
  return section === "contact" ? 620 : 180;
}

export function setPendingHomeSection(section: HomeSection) {
  sessionStorage.setItem(PENDING_HOME_SECTION_KEY, section);
}

export function peekPendingHomeSection(): HomeSection | null {
  const pending = sessionStorage.getItem(PENDING_HOME_SECTION_KEY);
  return pending && isHomeSection(pending) ? pending : null;
}

export function consumePendingHomeSection(): HomeSection | null {
  const pending = peekPendingHomeSection();
  if (!pending) return null;
  sessionStorage.removeItem(PENDING_HOME_SECTION_KEY);
  return pending;
}

/** Matches the fixed header height so section titles sit just below the nav bar. */
export function getFixedHeaderOffset(extraGap = 20): number {
  if (typeof document === "undefined") return 108;

  const header = document.querySelector("header");
  if (!header) return 108;

  return Math.ceil(header.getBoundingClientRect().height) + extraGap;
}

function getScrollTarget(section: Exclude<HomeSection, "home">): HTMLElement | null {
  if (section === "contact") {
    return (
      document.getElementById(CONTACT_SCROLL_TARGET_ID) ??
      document.getElementById("contact")
    );
  }

  return document.getElementById(section);
}

function getSectionScrollOffset(section: Exclude<HomeSection, "home">): number {
  if (section === "contact") {
    return getFixedHeaderOffset(12);
  }

  return SECTION_SCROLL_OFFSET[section];
}

export function scrollToHomeSection(section: HomeSection, behavior: ScrollBehavior = "smooth") {
  if (section === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const el = getScrollTarget(section);
  if (!el) return;

  if (behavior === "smooth" && section === "contact") {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const offset = getSectionScrollOffset(section);
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

/** Used after route changes; snaps once layout is ready. */
export function scrollToHomeSectionWithAlign(
  section: HomeSection,
  behavior: ScrollBehavior = "auto",
) {
  scrollToHomeSection(section, behavior);
}
