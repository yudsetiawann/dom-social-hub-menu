import Link from "next/link";
import ThemeLogo from "@/src/components/ThemeLogo";
import ThemeToggle from "@/src/components/ThemeToggle"; // 1. Import ThemeToggle

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-theme-bg/80 backdrop-blur-md border-b-2 border-theme-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative transition-colors duration-500">
        {/* Dekorasi Sudut */}
        <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1 -translate-y-1"></div>

        {/* Logo Gambar */}
        <Link href="/" className="flex items-center">
          <ThemeLogo
            alt="DOM Social Hub Logo"
            width={110}
            height={45}
            className="object-contain"
          />
        </Link>

        {/* Kontainer Sebelah Kanan (Menu & Toggle) */}
        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-xs tracking-[0.15em] font-sans uppercase font-bold text-theme-text">
            <Link
              href="#home"
              className="hover:text-theme-accent transition-colors flex items-center gap-2"
            >
              <span className="opacity-50">/</span> Home
            </Link>
            <Link
              href="#menu"
              className="hover:text-theme-accent transition-colors flex items-center gap-2"
            >
              <span className="opacity-50">/</span> Main_Menu
            </Link>
            <Link
              href="#about"
              className="hover:text-theme-accent transition-colors flex items-center gap-2"
            >
              <span className="opacity-50">/</span> The_Scene
            </Link>
          </div>

          {/* 2. Pasang ThemeToggle ala Macbook di sini */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
