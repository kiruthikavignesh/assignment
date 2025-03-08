import React, { useEffect, useState } from "react";

function AnimatedText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (letterIndex < words[wordIndex].length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setDisplayedText("");
          setLetterIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
          setIsFading(false);
        }, 300);
      }, 1500);
    }
  }, [letterIndex, wordIndex, words]);

  return (
    <div
      style={{
        position: "relative",
        height: "72px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        justifyContent: isMobile ? "center" : "start",
      }}>
      <span
        style={{
          fontSize: isMobile ? 24 : 48,
          fontWeight: "bold",
          background: "linear-gradient(to right, #3257EF, #B766E7)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          transition: "opacity 0.3s ease-in-out",
          opacity: isFading ? 0 : 1,
        }}>
        {displayedText}
      </span>
    </div>
  );
}

export default AnimatedText;
