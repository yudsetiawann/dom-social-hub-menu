"use client";

import { useState } from "react";

export default function Interactive() {
  const [step, setStep] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  const handleChoice = (choice: string) => {
    if (step === 0) {
      setStep(1);
    } else {
      // Logika sederhana untuk hasil rekomendasi
      if (choice === "CAFFEINE") setRecommendation("DOUBLE SHAKEN ESPRESSO");
      if (choice === "ALCOHOL_FREE")
        setRecommendation("TROPICAL PUNCH MOCKTAIL");
      if (choice === "HUNGRY") setRecommendation("CHICK N' MATAH RICE");
      if (choice === "SNACK") setRecommendation("AL FRESCO NACHOS");
      setStep(2);
    }
  };

  const resetTerminal = () => {
    setStep(0);
    setRecommendation("");
  };

  return (
    <section className="py-24 bg-dom-black border-t border-dom-red/20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Terminal Window */}
        <div className="border border-dom-red bg-dom-black relative shadow-[0_0_15px_rgba(230,25,25,0.1)]">
          {/* Terminal Header */}
          <div className="border-b border-dom-red/50 bg-dom-red/5 p-2 flex justify-between items-center">
            <div className="flex gap-2">
              <span className="w-3 h-3 border border-dom-red bg-dom-black"></span>
              <span className="w-3 h-3 border border-dom-red bg-dom-black"></span>
            </div>
            <span className="font-mono text-[10px] text-dom-red uppercase">
              DOM_OS // Terminal_v2.4
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-8 font-mono text-sm min-h-75 flex flex-col justify-center">
            {step === 0 && (
              <div className="animate-pulse">
                <p className="text-white/70 mb-4">
                  &gt; INITIATING DIAGNOSTIC_PROTOCOL...
                </p>
                <p className="text-white mb-8">
                  &gt; WHAT IS YOUR CURRENT SYSTEM STATUS?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleChoice("LOW_ENERGY")}
                    className="border border-dom-red/50 text-dom-red px-4 py-2 hover:bg-dom-red hover:text-black transition-colors w-full text-left sm:text-center"
                  >
                    [01] SYSTEM_EXHAUSTED (Butuh Energi)
                  </button>
                  <button
                    onClick={() => handleChoice("RECKLESS")}
                    className="border border-dom-red/50 text-dom-red px-4 py-2 hover:bg-dom-red hover:text-black transition-colors w-full text-left sm:text-center"
                  >
                    [02] CRAVING_CHAOS (Lapar/Haus)
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="text-white/70 mb-4">&gt; PROCESSING STATUS...</p>
                <p className="text-white mb-8">
                  &gt; SELECT REQUIRED PAYLOAD TYPE:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleChoice("CAFFEINE")}
                    className="border border-dom-red/50 text-dom-red px-4 py-2 hover:bg-dom-red hover:text-black transition-colors w-full text-left sm:text-center"
                  >
                    [A] HIGH_OCTANE (Kopi)
                  </button>
                  <button
                    onClick={() => handleChoice("ALCOHOL_FREE")}
                    className="border border-dom-red/50 text-dom-red px-4 py-2 hover:bg-dom-red hover:text-black transition-colors w-full text-left sm:text-center"
                  >
                    [B] REFRESHMENT (Mocktail)
                  </button>
                  <button
                    onClick={() => handleChoice("HUNGRY")}
                    className="border border-dom-red/50 text-dom-red px-4 py-2 hover:bg-dom-red hover:text-black transition-colors w-full text-left sm:text-center"
                  >
                    [C] SOLID_MATTER (Main Course)
                  </button>
                  <button
                    onClick={() => handleChoice("SNACK")}
                    className="border border-dom-red/50 text-dom-red px-4 py-2 hover:bg-dom-red hover:text-black transition-colors w-full text-left sm:text-center"
                  >
                    [D] FINGER_FOOD (Snack)
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="border border-dom-red p-6 bg-dom-red/2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1 bg-dom-red animate-[ping_2s_ease-in-out_infinite] opacity-50"></div>
                <p className="text-white/70 mb-2">&gt; DIAGNOSTIC COMPLETE.</p>
                <p className="text-white mb-4">&gt; RECOMMENDED FUEL:</p>
                <p className="text-3xl text-dom-red font-bold uppercase mb-8">
                  &gt;&gt; {recommendation}
                </p>
                <button
                  onClick={resetTerminal}
                  className="text-white/50 hover:text-dom-red underline decoration-dom-red/50 decoration-dashed underline-offset-4"
                >
                  [REBOOT_DIAGNOSTIC]
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
