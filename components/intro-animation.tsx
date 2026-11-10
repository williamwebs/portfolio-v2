"use client";

import { useEffect, useState } from "react";

export function IntroAnimation() {
  const [phase, setPhase] = useState<"enter" | "tetris" | "exit" | "done">("enter");
  const [visibleBlocks, setVisibleBlocks] = useState<number[]>([]);

  // Tetris blocks defining the letter "W" on a 5-column x 5-row grid
  const tetrisBlocks = [
    // Left pillar (col 0, top to bottom)
    { id: 0, col: 0, row: 0, delay: 600 },
    { id: 1, col: 0, row: 1, delay: 720 },
    { id: 2, col: 0, row: 2, delay: 840 },
    { id: 3, col: 0, row: 3, delay: 960 },
    { id: 4, col: 0, row: 4, delay: 1080 },

    // Left diagonal up (col 1)
    { id: 5, col: 1, row: 3, delay: 1220 },
    { id: 6, col: 1, row: 2, delay: 1340 },

    // Center apex (col 2)
    { id: 7, col: 2, row: 1, delay: 1480 },
    { id: 8, col: 2, row: 2, delay: 1600 },

    // Right diagonal down (col 3)
    { id: 9, col: 3, row: 3, delay: 1740 },

    // Right pillar (col 4, bottom to top)
    { id: 10, col: 4, row: 4, delay: 1880 },
    { id: 11, col: 4, row: 3, delay: 2000 },
    { id: 12, col: 4, row: 2, delay: 2120 },
    { id: 13, col: 4, row: 1, delay: 2240 },
    { id: 14, col: 4, row: 0, delay: 2360 },
  ];

  useEffect(() => {
    // Phase 1: 5 black grids slide up from bottom to top
    const enterTimer = setTimeout(() => {
      setPhase("tetris");
    }, 450);

    // Stagger block drops for the Tetris "W"
    const blockTimers = tetrisBlocks.map((block) =>
      setTimeout(() => {
        setVisibleBlocks((prev) => [...prev, block.id]);
      }, block.delay)
    );

    // Phase 3: Roll down the 5 grids after "W" completes (~3.1s)
    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, 3100);

    // Phase 4: Done - unmount completely
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      blockTimers.forEach(clearTimeout);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden pointer-events-auto select-none"
      aria-label="Loading introduction"
    >
      {/* 5 Vertical Black Columns / Grids */}
      <div className="absolute inset-0 flex w-full h-full">
        {[0, 1, 2, 3, 4].map((index) => {
          let transformClass = "translate-y-full";

          if (phase === "enter" || phase === "tetris") {
            transformClass = "translate-y-0";
          } else if (phase === "exit") {
            transformClass = "translate-y-full";
          }

          return (
            <div
              key={index}
              className={`w-1/5 h-full bg-[#08080a] border-r border-neutral-900/50 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${transformClass}`}
              style={{
                transitionDelay:
                  phase === "exit"
                    ? `${(4 - index) * 60}ms` // cascade reverse on roll down
                    : `${index * 60}ms`, // cascade on slide up
              }}
            />
          );
        })}
      </div>

      {/* Center Stage: Tetris Block Game forming the letter 'W' */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 z-10 ${
          phase === "exit" ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center">
          {/* Tetris matrix board */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 grid grid-cols-5 grid-rows-5 gap-1.5 p-3 rounded-2xl bg-black/60 border border-neutral-800/80 shadow-2xl backdrop-blur-md">
            {tetrisBlocks.map((block) => {
              const isDropped = visibleBlocks.includes(block.id);

              return (
                <div
                  key={block.id}
                  className="relative transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    gridColumnStart: block.col + 1,
                    gridRowStart: block.row + 1,
                    transform: isDropped
                      ? "translateY(0) scale(1)"
                      : "translateY(-180px) scale(0.6)",
                    opacity: isDropped ? 1 : 0,
                  }}
                >
                  {/* Monochromatic Tetris block with beveled edges */}
                  <div className="w-full h-full rounded-xs bg-white shadow-[inset_1.5px_1.5px_0_rgba(255,255,255,0.9),inset_-1.5px_-1.5px_0_rgba(0,0,0,0.4)] border border-neutral-300">
                    <div className="w-full h-full flex items-center justify-center opacity-30">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtitle that displays below the 'W' */}
          <div className="mt-6 flex flex-col items-center gap-1.5">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
              William Anaza
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono text-neutral-500 tracking-wider">
                INITIALIZING PORTFOLIO
              </span>
            </div>
          </div>
        </div>

        {/* Skip button for fast navigation */}
        <button
          onClick={() => setPhase("exit")}
          className="absolute bottom-8 right-8 text-[11px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest px-3 py-1.5 rounded border border-neutral-800 hover:border-neutral-600 transition-colors"
        >
          Skip &rarr;
        </button>
      </div>
    </div>
  );
}
