"use client";

import { useEffect, useState } from "react";

export default function TypingEffect() {
  const text = "Hi, I'm Rahul — a software engineer and lifelong learner.";
  const typingSpeed = 75;
  const pauseTime = 1500;

  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "clearing">(
    "typing"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (phase === "typing") {
      if (index < text.length) {
        timeoutId = setTimeout(() => {
          const nextIndex = index + 1;
          setDisplayedText(text.slice(0, nextIndex));
          setIndex(nextIndex);
        }, typingSpeed);
      } else {
        console.log("Typing complete, pausing...");
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      timeoutId = setTimeout(() => {
        console.log("Pause complete, clearing text...");
        setPhase("clearing");
      }, pauseTime);
    } else if (phase === "clearing") {
      setDisplayedText("");
      setIndex(0);
      setPhase("typing");
      console.log("Text cleared, restarting typing...");
    }

    return () => clearTimeout(timeoutId);
  }, [phase, index, text]);

  return (
    <div
      style={{
        fontFamily: "monospace",
        borderRight: "2px solid black",
        paddingRight: 4,
        color: "black",
        fontSize: "2.5rem",
        animation: "blink 1s steps(2, start) infinite",
      }}
    >
      {displayedText}
      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: black; }
        }
      `}</style>
    </div>
  );
}
