"use client";

import Image from "next/image";
import { useEffect, useState, type ComponentProps } from "react";
import { useTheme } from "next-themes";

type MobiMarkProps = Omit<ComponentProps<typeof Image>, "src" | "alt">;

export const MobiMark = ({ className, width = 96, height = 42, ...props }: MobiMarkProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only mount guard to avoid SSR/CSR theme mismatch
    setIsMounted(true);
  }, []);

  const src =
    isMounted && resolvedTheme === "light"
      ? "/images/Logo-primary-dark.svg"
      : "/images/Logo-primary-light.svg";

  return (
    <Image
      src={src}
      alt="Mobiz"
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};
