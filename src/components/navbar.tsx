import NextLink from "next/link";
import { Grip, Info } from "lucide-react";

import { ThemeSwitch } from "@/components/theme-switch";
import { MobiMark } from "@/components/icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-separator bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-6">
        <NextLink className="flex items-center gap-2.5 text-accent" href="/">
          <Grip className="h-6 w-6 text-foreground" />
          <MobiMark className="h-7 w-auto" />
          <span className="flex items-center gap-2 text-lg font-medium leading-none tracking-wide text-foreground">
            <span>Power Apps</span>
            <span>|</span>
            <span>BizApps Demo Portfolio</span>
            <Info className="h-4 w-4" />
          </span>
        </NextLink>

        <ThemeSwitch />
      </div>
    </header>
  );
}
