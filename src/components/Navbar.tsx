import Link from "next/link";
import Image from "next/image"; // 1. Import komponen Image dari Next.js

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dom-black/80 backdrop-blur-md border-b-2 border-dom-red">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Dekorasi Sudut Kiri Atas */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-dom-red -translate-x-1 -translate-y-1"></div>

        {/* Logo Gambar */}
        <Link href="/" className="flex items-center">
          {/* 2. Gunakan tag Image untuk merender foto/logo */}
          <Image
            src="/images/dom.png" // Ganti dengan nama file gambar Anda
            alt="DOM Social Hub Logo"
            width={120} // Sesuaikan lebar gambar
            height={50} // Sesuaikan tinggi gambar
            className="object-contain" // Menjaga rasio gambar agar tidak gepeng
            priority // Memprioritaskan loading logo (opsional tapi disarankan untuk LCP)
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-xs tracking-[0.15em] font-mono uppercase">
          <Link
            href="#home"
            className="hover:text-dom-red transition-colors flex items-center gap-2"
          >
            <span className="text-dom-red">/</span> Home
          </Link>
          <Link
            href="#menu"
            className="hover:text-dom-red transition-colors flex items-center gap-2"
          >
            <span className="text-dom-red">/</span> Main_Menu
          </Link>
          <Link
            href="#about"
            className="hover:text-dom-red transition-colors flex items-center gap-2"
          >
            <span className="text-dom-red">/</span> The_Scene
          </Link>
        </div>
      </div>
    </nav>
  );
}
