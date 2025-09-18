"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: needed for particle generation
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          >
            <div
              className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-xl"
              style={{
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div
          className={`max-w-4xl text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main heading with gradient text */}
          <h1 className="mb-8 text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Andy
          </h1>

          {/* Animated subtext */}
          <div className="space-y-4">
            <p
              className={`text-2xl md:text-3xl text-white/90 font-light transition-all duration-1000 delay-300 ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              This website is{" "}
              <span className="font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                sinfully
              </span>{" "}
              built with
            </p>

            {/* Tech stack badges */}
            <div
              className={`flex justify-center gap-6 mt-6 mb-8 transition-all duration-1000 delay-500 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    React
                  </span>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Claude Code
                  </span>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <p
              className={`text-xl md:text-2xl text-white/80 font-light mt-8 transition-all duration-1000 delay-700 ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              Message{" "}
              <span className="font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:animate-pulse cursor-pointer">
                Adrien
              </span>{" "}
              on Slack to take ownership of the domain
            </p>
          </div>

          {/* Floating emoji decoration */}
          <div
            className={`mt-12 text-6xl animate-bounce transition-all duration-1000 delay-1000 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            ✨
          </div>
        </div>
      </div>
    </div>
  );
}
