"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden font-sans transition-colors duration-500 bg-theme-bg"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 text-theme-accent font-mono text-sm tracking-[0.3em]">
            <span className="w-12 h-0.5 bg-theme-accent"></span>
            SYS.INIT // 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter text-theme-text">
            Haven For The <br />
            <span className="text-theme-accent italic">Reckless.</span>
          </h1>

          <p className="text-theme-text/70 font-medium text-sm md:text-base max-w-lg border-l-2 border-theme-accent pl-4">
            CULTIVATING THE SCENE. Not just coffee, we serve adrenaline, main
            courses, and a place to binge with your friends. This could never go
            wrong.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#menu"
              className="relative px-8 py-4 bg-theme-accent text-theme-bg font-black uppercase tracking-widest text-sm group overflow-hidden border-2 border-theme-accent text-center"
            >
              <span className="absolute inset-0 bg-theme-text -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-theme-bg">
                Access_Menu
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative h-125"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-md h-80 border-2 border-theme-accent/30 bg-theme-accent/5 flex flex-col justify-end p-6 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-theme-accent"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-theme-accent"></div>
            <div className="w-full h-32 border-b border-theme-accent/20 relative flex items-end">
              <svg
                className="w-full h-full text-theme-accent opacity-50"
                viewBox="0 0 100 50"
                stroke="currentColor"
                fill="none"
              >
                <polyline points="0,40 10,40 15,20 20,45 25,10 30,40 40,40 45,30 50,40 100,40" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
