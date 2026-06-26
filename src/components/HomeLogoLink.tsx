"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type HomeLogoLinkProps = Omit<ComponentProps<typeof Link>, "href">;

export default function HomeLogoLink({ onClick, ...props }: HomeLogoLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (pathname === "/") {
      e.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    e.preventDefault();
    router.push("/");
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Go to VernaTech home page"
      {...props}
    />
  );
}
