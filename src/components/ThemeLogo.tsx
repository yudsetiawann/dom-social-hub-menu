"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeLogoProps {
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ThemeLogo({
  alt,
  width,
  height,
  className,
}: ThemeLogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // 1. STATE SEBELUM MOUNTED (LOADING)
  // Karena tema default aplikasi kita adalah 'red',
  // kita pasang logo versi tema merah di sini agar tidak ada kedipan berlebih.
  if (!mounted) {
    return (
      <Image
        src="/images/dom_red.png" // Ganti dengan nama file logo tema merahmu
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
      />
    );
  }

  // 2. STATE SETELAH MOUNTED (LOGIKA 3 TEMA)
  let logoSrc = "/images/dom_red.png"; // Default fallback

  if (theme === "black") {
    logoSrc = "/images/dom_dark.png"; // Ganti dengan nama file logo tema hitammu
  } else if (theme === "white") {
    logoSrc = "/images/dom_light.png"; // Ganti dengan nama file logo tema putihmu
  } else if (theme === "red") {
    logoSrc = "/images/dom_red.png"; // Ganti dengan nama file logo tema merahmu
  }

  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
