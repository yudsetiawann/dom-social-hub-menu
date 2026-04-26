"use client";

import { motion } from "framer-motion";

const coreValues = [
  {
    num: "01",
    title: "THE_SCENE",
    desc: "Lebih dari sekadar tempat singgah. Ini adalah ekosistem bagi kultur urban yang hidup dan bernapas. Cultivating the scene, one cup at a time.",
  },
  {
    num: "02",
    title: "THE_CRAFT",
    desc: "Presisi dalam setiap tetesan kopi dan setiap sajian Main Course. Kami memadukan bahan premium dengan eksekusi tanpa kompromi.",
  },
  {
    num: "03",
    title: "THE_RECKLESS",
    desc: "Diciptakan untuk mereka yang berani mendobrak batas. Haven for the reckless, tempat di mana ide-ide liar menemukan rumahnya.",
  },
  {
    num: "04",
    title: "THE_CREW",
    desc: "Bukan sekadar barista atau koki, melainkan operator sistem yang menguasai seni meracik adrenalin dan rasa secara konsisten.",
  },
];

export default function Values() {
  return (
    <section
      id="about"
      className="relative py-32 bg-theme-bg border-t border-theme-accent/20 overflow-hidden transition-colors duration-500"
    >
      {/* Background Gradient Dinamis */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-theme-accent/10 via-theme-bg to-theme-bg pointer-events-none transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
        >
          <div className="border-l-4 border-theme-accent pl-6 transition-colors duration-500">
            <h2 className="text-3xl md:text-5xl font-black text-theme-text uppercase tracking-widest font-sans transition-colors duration-500">
              System_Manifesto <br />{" "}
              <span className="text-theme-accent">/ Core_Values</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-theme-text/60 uppercase tracking-widest text-right transition-colors duration-500">
            <p>Initiating Core Protocol...</p>
            <p>Data Integrity: 100%</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 border border-theme-text/10 bg-theme-accent/5 hover:bg-theme-accent/10 hover:border-theme-accent/50 transition-colors duration-300 group overflow-hidden"
            >
              {/* Angka Background */}
              <div className="absolute -bottom-10 -right-4 font-mono text-[150px] font-bold text-theme-text/5 group-hover:text-theme-accent/10 transition-colors leading-none pointer-events-none select-none">
                {value.num}
              </div>

              {/* Dekorasi Sudut Hover */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-theme-accent/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-theme-accent/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div className="font-mono text-theme-accent text-sm tracking-widest font-bold transition-colors duration-300">
                  [{value.num}]
                </div>

                <div>
                  <h3 className="text-xl font-bold text-theme-text uppercase tracking-wider mb-4 font-sans group-hover:text-theme-accent transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-theme-text/60 font-sans leading-relaxed transition-colors duration-300">
                    {value.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider Bawah Dinamis */}
        <div className="mt-20 flex justify-center opacity-50">
          <div className="w-full max-w-2xl h-1 bg-linear-to-r from-transparent via-theme-accent/50 to-transparent relative transition-colors duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-theme-bg border-2 border-theme-accent rotate-45 transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
