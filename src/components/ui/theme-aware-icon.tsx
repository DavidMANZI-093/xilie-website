"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeAwareIconProps {
  icon: string;
  iconDark?: string;
  alt: string;
  className?: string;
}

export const ThemeAwareIcon = ({
  icon,
  iconDark,
  alt,
  className = "w-4 h-4 rounded",
}: ThemeAwareIconProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by showing light icon during SSR
  if (!mounted) {
    return <img src={icon} alt={alt} className={className} />;
  }

  // If no dark icon provided, always use the light icon
  if (!iconDark) {
    return <img src={icon} alt={alt} className={className} />;
  }

  // Use dark icon when in dark mode, otherwise use light icon
  const currentIcon = resolvedTheme === "dark" ? iconDark : icon;

  return <img src={currentIcon} alt={alt} className={className} />;
};
