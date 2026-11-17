"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnReload() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Disable browser's automatic scroll restoration so it doesn't remember old scroll positions on reload
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Immediately scroll to top on mount / reload
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // 3. Fallback check for cases where layout calculations cause delayed scroll restoration
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
