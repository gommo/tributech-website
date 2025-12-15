"use client";

import { motion } from "framer-motion";

function FloatingDots() {
  const dots = [
    { size: 40, x: "15%", y: "20%", delay: 0 },
    { size: 24, x: "25%", y: "60%", delay: 0.5 },
    { size: 16, x: "20%", y: "80%", delay: 1 },
    { size: 32, x: "80%", y: "25%", delay: 0.3 },
    { size: 20, x: "75%", y: "70%", delay: 0.8 },
    { size: 12, x: "85%", y: "50%", delay: 1.2 },
    { size: 28, x: "10%", y: "40%", delay: 0.6 },
    { size: 18, x: "90%", y: "85%", delay: 0.9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <FloatingDots />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Building the Future,{" "}
          <span className="text-accent">One Product at a Time</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tributech is a software consultancy specializing in AI, startups, and
          product development. We partner with ambitious teams to turn ideas
          into shipped products that users love.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
          >
            See what we&apos;re building
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
