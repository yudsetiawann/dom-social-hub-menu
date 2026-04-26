"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Placeholder agar ukuran layout tidak lompat saat loading
    return (
      <div className="flex items-center gap-2 bg-theme-accent/5 border border-theme-border/20 rounded-full px-3 py-1.5">
        <div className="w-3.5 h-3.5 rounded-full bg-[#CE1E24] opacity-50"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#121212] opacity-50"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffffff] opacity-50 border border-gray-300"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-theme-accent/5 backdrop-blur-sm border border-theme-border/20 rounded-full px-3 py-1.5 transition-colors">
      {/* Tombol Tema Merah */}
      <button
        onClick={() => setTheme("red")}
        className={`w-3.5 h-3.5 rounded-full bg-[#CE1E24] transition-all duration-300 ${
          theme === "red"
            ? "scale-125 border border-theme-text opacity-100"
            : "opacity-50 hover:opacity-100 hover:scale-110"
        }`}
        title="Red Theme"
      />

      {/* Tombol Tema Hitam */}
      <button
        onClick={() => setTheme("black")}
        className={`w-3.5 h-3.5 rounded-full bg-[#121212] border border-gray-600 transition-all duration-300 ${
          theme === "black"
            ? "scale-125 border-theme-text opacity-100"
            : "opacity-50 hover:opacity-100 hover:scale-110"
        }`}
        title="Black Theme"
      />

      {/* Tombol Tema Putih */}
      <button
        onClick={() => setTheme("white")}
        className={`w-3.5 h-3.5 rounded-full bg-[#ffffff] border border-gray-300 transition-all duration-300 ${
          theme === "white"
            ? "scale-125 border-theme-accent opacity-100"
            : "opacity-50 hover:opacity-100 hover:scale-110"
        }`}
        title="White Theme"
      />
    </div>
  );
}
