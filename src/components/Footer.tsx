import Image from "next/image"; // 1. Import komponen Image

export default function Footer() {
  return (
    <footer className="bg-dom-black border-t-2 border-dom-red py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center md:items-start">
          {/* 2. Ganti teks DSH. dengan komponen Image */}
          <Image
            src="/images/dom.png" // Path yang sudah benar
            alt="DOM Social Hub Logo"
            width={120} // Sesuaikan ukurannya jika ingin lebih besar di footer
            height={50}
            className="object-contain mb-2" // Margin bawah agar tidak terlalu menempel dengan teks copyright
          />

          <span className="text-[8px] tracking-[0.3em] font-mono text-white/40 mt-1 uppercase text-center md:text-left">
            Copyright © DOM SOCIAL HUB. <br /> All Rights Reserved.
          </span>
        </div>

        {/* System Info */}
        <div className="font-mono text-[10px] text-white/30 text-center md:text-right hidden sm:block">
          <p>SERVER_LOCATION: BINTARO, ID</p>
          <p>STATUS: OPERATIONAL</p>
          <p>CONNECTION: SECURE</p>
        </div>
      </div>
    </footer>
  );
}
