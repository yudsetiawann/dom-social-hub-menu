import ThemeLogo from "@/src/components/ThemeLogo"; // Import komponen baru

export default function Footer() {
  return (
    <footer className="bg-theme-bg border-t-4 border-theme-border py-12 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-theme-text transition-colors duration-500">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center md:items-start">
          {/* Ganti Image Next.js dengan ThemeLogo */}
          <ThemeLogo
            alt="DOM Social Hub Logo"
            width={140}
            height={60}
            className="object-contain mb-2" // Hapus filter CSS yang tidak perlu
          />

          <span className="text-[10px] tracking-[0.2em] font-bold text-theme-text/40 mt-4 uppercase text-center md:text-left">
            Copyright © 2026 DOM SOCIAL HUB. <br /> All Rights Reserved.
          </span>
        </div>

        {/* <div className="font-mono text-[10px] text-theme-text/30 text-center md:text-right font-bold border-l-2 border-theme-accent pl-6">
          <p>SERVER_LOCATION: BINTARO, ID</p>
          <p>STATUS: OPERATIONAL</p>
          <p>CONNECTION: SECURE</p>
        </div> */}
      </div>
    </footer>
  );
}
