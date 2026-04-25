"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-dom-red opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Kolom Teks - Animasi Masuk dari Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 text-dom-red font-mono text-sm tracking-[0.3em]">
            <span className="w-12 h-0.5 bg-dom-red"></span>
            SYS.INIT // 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-none uppercase tracking-tighter">
            Haven For The <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-dom-red to-red-900 border-text">
              Reckless.
            </span>
          </h1>

          <p className="text-white/60 font-mono text-sm md:text-base max-w-lg border-l-2 border-dom-red pl-4">
            CULTIVATING THE SCENE. Not just coffee, we serve adrenaline, main
            courses, and a place to binge with your friends. This could never go
            wrong.
          </p>

          <div className="mt-8 flex gap-4">
            {/* Ubah tag button menjadi Link dan tambahkan href */}
            <Link
              href="#menu"
              className="relative px-8 py-4 bg-transparent text-white font-mono uppercase tracking-widest text-sm group overflow-hidden border border-dom-red text-center"
            >
              <span className="absolute inset-0 bg-dom-red -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-black font-bold">
                Access_Menu
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Kolom Visual - Animasi Fade In & Floating (Melayang) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative h-125"
        >
          {/* Elemen ini yang akan melayang terus menerus */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-md h-80 border border-dom-red/30 bg-dom-red/2 flex flex-col justify-end p-6 shadow-[0_0_30px_rgba(230,25,25,0.05)]"
          >
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-dom-red"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-dom-red"></div>

            <div className="w-full h-32 border-b border-dom-red/50 relative flex items-end">
              <svg
                className="w-full h-full text-dom-red"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                strokeWidth="1"
              >
                <polyline points="0,40 10,40 15,20 20,45 25,10 30,40 40,40 45,30 50,40 100,40" />
              </svg>
            </div>

            <div className="mt-6 space-y-2 font-mono text-[10px] text-dom-red/60 flex flex-col">
              <div className="flex justify-between items-center">
                <span>SYSTEM_STATUS</span>
                <span className="flex gap-1">
                  <span className="w-2 h-2 bg-dom-red animate-pulse"></span>{" "}
                  ONLINE
                </span>
              </div>
              <div className="w-full h-1 bg-dom-red/20">
                <div className="w-3/4 h-full bg-dom-red"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
