"use client";
import { useState } from "react";

export default function Interactive() {
  const [step, setStep] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  const handleChoice = (choice: string) => {
    if (step === 0) setStep(1);
    else {
      if (choice === "CAFFEINE") setRecommendation("DOUBLE SHAKEN ESPRESSO");
      if (choice === "ALCOHOL_FREE")
        setRecommendation("TROPICAL PUNCH MOCKTAIL");
      if (choice === "HUNGRY") setRecommendation("CHICK N' MATAH RICE");
      if (choice === "SNACK") setRecommendation("AL FRESCO NACHOS");
      setStep(2);
    }
  };

  return (
    <section className="py-24 bg-theme-bg border-t border-theme-accent/10 font-sans transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-2 border-theme-accent bg-theme-accent/5 relative shadow-2xl backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="border-b-2 border-theme-accent bg-theme-accent p-2 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-theme-bg border border-theme-accent"></div>
              <div className="w-3 h-3 bg-theme-bg opacity-50"></div>
            </div>
            <span className="font-mono text-[10px] text-theme-bg font-black uppercase">
              DOM_OS // Terminal_v2.4
            </span>
          </div>

          <div className="p-8 font-mono text-sm min-h-87.5 flex flex-col justify-center text-theme-text">
            {step === 0 && (
              <div className="animate-pulse">
                <p className="opacity-50 mb-4">
                  &gt; INITIATING DIAGNOSTIC_PROTOCOL...
                </p>
                <p className="text-lg font-bold mb-8">
                  &gt; WHAT IS YOUR SYSTEM STATUS?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleChoice("LOW_ENERGY")}
                    className="border-2 border-theme-accent text-theme-accent px-4 py-3 hover:bg-theme-accent hover:text-theme-bg transition-all font-black"
                  >
                    [01] SYSTEM_EXHAUSTED
                  </button>
                  <button
                    onClick={() => handleChoice("RECKLESS")}
                    className="border-2 border-theme-accent text-theme-accent px-4 py-3 hover:bg-theme-accent hover:text-theme-bg transition-all font-black"
                  >
                    [02] CRAVING_CHAOS
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="opacity-50 mb-4">&gt; PROCESSING STATUS...</p>
                <p className="text-lg font-bold mb-8">
                  &gt; SELECT PAYLOAD TYPE:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["CAFFEINE", "ALCOHOL_FREE", "HUNGRY", "SNACK"].map((c) => (
                    <button
                      key={c}
                      onClick={() => handleChoice(c)}
                      className="border-2 border-theme-accent text-theme-accent px-4 py-3 hover:bg-theme-accent hover:text-theme-bg transition-all font-black uppercase"
                    >
                      [{c.replace("_", " ")}]
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="p-6 border border-theme-accent/30 bg-theme-accent/10">
                <p className="opacity-50 mb-2">&gt; DIAGNOSTIC COMPLETE.</p>
                <p className="font-black">&gt; RECOMMENDED FUEL:</p>
                <p className="text-3xl text-theme-accent font-black uppercase my-8">
                  &gt;&gt; {recommendation}
                </p>
                <button
                  onClick={() => setStep(0)}
                  className="text-theme-text/40 hover:text-theme-accent underline font-bold"
                >
                  [REBOOT_SYSTEM]
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
