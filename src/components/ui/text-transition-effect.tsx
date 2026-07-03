"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextTransitionEffectProps {
  words: string[];
  interval?: number;
}

export function TextTransitionEffect({ words, interval = 3000 }: TextTransitionEffectProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div style={{ 
      minHeight: "150px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      overflow: "hidden",
      width: "100%"
    }}>
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "0.05em",
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            background: "linear-gradient(to right, #00f3ff, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            lineHeight: 1.25,
            padding: "0 1rem"
          }}
        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
