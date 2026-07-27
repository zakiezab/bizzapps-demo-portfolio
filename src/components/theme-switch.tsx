"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only mount guard to avoid SSR/CSR theme mismatch
    setIsMounted(true);
  }, []);

  const isLight = resolvedTheme === "light";

  if (!isMounted) return <div aria-hidden className="h-9 w-9" />;

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-secondary hover:text-foreground cursor-pointer"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
    </button>
  );
}
