"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Renders the marketing Header/Footer around page content, but hides them
 * on the /admin routes so the admin panel gets a clean, full-screen shell.
 * Header/Footer are passed as slots so they can stay server components.
 */
export default function ChromeGate({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = pathname?.startsWith("/admin");

  return (
    <>
      {!hideChrome && header}
      <main className="flex-1">{children}</main>
      {!hideChrome && footer}
    </>
  );
}
