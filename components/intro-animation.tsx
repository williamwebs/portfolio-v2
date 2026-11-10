"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function IntroAnimation() {
  const [phase, setPhase] = useState<"enter" | "assemble" | "exit" | "done">("enter");
  const [visibleTiles, setVisibleTiles] = useState<number[]>([]);
  const [isAssembled, setIsAssembled] = useState(false);

  // 4x4 grid of tiles (16 pieces) to assemble the headshot
  const tiles = Array.from({ length: 16 }, (_, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    // Order of drop: diagonal wave pattern for high visual satisfaction
    const delay = 600 + (row + col) * 150 + (i % 2) * 60;
    return { id: i, row, col, delay };
  });

  useEffect(() => {
    // Phase 1: 5 black grids slide up from bottom to top
    const enterTimer = setTimeout(() => {
      setPhase("assemble");
    }, 450);

    // Stagger tile drops
    const tileTimers = tiles.map((tile) =>
      setTimeout(() => {
        setVisibleTiles((prev) => [...prev, tile.id]);
      }, tile.delay)
    );

    // Fully assembled state flash
    const assembledTimer = setTimeout(() => {
      setIsAssembled(true);
    }, 2200);

    // Phase 3: Roll down grids after headshot assembles (~3.2s)
    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, 3200);

    // Phase 4: Completely remove overlay from DOM
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 4100);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(assembledTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      tileTimers.forEach(clearTimeout);
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

          if (phase === "enter" || phase === "assemble") {
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

      {/* Center Stage: Headshot Assembling Animation */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 z-10 ${
          phase === "exit" ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center">
          {/* Circular Portal Frame with Glowing Accent */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-neutral-700/80 shadow-[0_0_50px_rgba(255,255,255,0.12)] bg-neutral-950 flex items-center justify-center">
            {/* 4x4 Matrix Tiles that drop in and assemble */}
            <div className="w-full h-full grid grid-cols-4 grid-rows-4 relative">
              {tiles.map((tile) => {
                const isDropped = visibleTiles.includes(tile.id);

                return (
                  <div
                    key={tile.id}
                    className="relative w-full h-full overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                      transform: isDropped
                        ? "translateY(0) scale(1)"
                        : "translateY(-160px) scale(0.6)",
                      opacity: isDropped ? 1 : 0,
                    }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: "url('/william-headshot.png')",
                        backgroundSize: "400% 400%",
                        backgroundPosition: `${(tile.col / 3) * 100}% ${(tile.row / 3) * 100}%`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    {/* Subtle grid border line while assembling */}
                    {!isAssembled && (
                      <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Seamless unified full portrait once assembled */}
            {isAssembled && (
              <div className="absolute inset-0 transition-opacity duration-300 opacity-100">
                <Image
                  src="/william-headshot-caricature.png"
                  alt="William Anaza"
                  fill
                  sizes="208px"
                  className="object-cover"
                  priority
                  quality={100}
                />
                {/* Glow ring overlay */}
                <div className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-pulse pointer-events-none" />
              </div>
            )}
          </div>

          {/* Subtitle that displays below the Headshot */}
          <div className="mt-7 flex flex-col items-center gap-1.5">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-300 font-semibold">
              William Anaza
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-neutral-400 tracking-wider">
                {isAssembled ? "PORTFOLIO READY" : "INITIALIZING PORTFOLIO"}
              </span>
            </div>
          </div>
        </div>

        {/* Skip button for fast navigation */}
        <button
          onClick={() => setPhase("exit")}
          className="absolute bottom-8 right-8 text-[11px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest px-3 py-1.5 rounded border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
        >
          Skip &rarr;
        </button>
      </div>
    </div>
  );
}
