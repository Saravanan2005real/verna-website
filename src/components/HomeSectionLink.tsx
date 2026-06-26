"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import {
  homeSectionPath,
  scrollToHomeSection,
  setPendingHomeSection,
  type HomeSection,
} from "@/lib/navigation";

type HomeSectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  section: HomeSection;
};

export default function HomeSectionLink({
  section,
  onClick,
  ...props
}: HomeSectionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    e.preventDefault();

    if (pathname === "/") {
      scrollToHomeSection(section);
      if (window.location.hash) {
        window.history.replaceState(null, "", homeSectionPath(section));
      }
      return;
    }

    setPendingHomeSection(section);
    router.push("/");
  };

  return (
    <Link href={homeSectionPath(section)} onClick={handleClick} {...props} />
  );
}
