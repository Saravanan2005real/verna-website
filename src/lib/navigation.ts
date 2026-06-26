export type HomeSection = "home" | "services" | "about" | "contact" | "why-us";

export const PENDING_HOME_SECTION_KEY = "vernatech:pendingHomeSection";

const SECTION_SCROLL_OFFSET: Record<Exclude<HomeSection, "home">, number> = {
  services: 100,
  about: 100,
  "why-us": 100,
  contact: 56,
};

const SECTION_EXTRA_SCROLL: Partial<Record<HomeSection, number>> = {
  contact: 40,
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

export function scrollToHomeSection(section: HomeSection, behavior: ScrollBehavior = "smooth") {
  if (section === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const el = document.getElementById(section);
  if (!el) return;

  const offset = SECTION_SCROLL_OFFSET[section];
  const extra = SECTION_EXTRA_SCROLL[section] ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - offset + extra;
  window.scrollTo({ top, behavior });
}
