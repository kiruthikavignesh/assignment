import React, { useEffect, useState } from "react";

function AnimatedText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (letterIndex < words[wordIndex].length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 150); // Adjust speed as needed

      return () => clearTimeout(timer);
    } else {
      // After word completes, fade out, pause & switch to next word
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setDisplayedText(""); // Clear previous word
          setLetterIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length); // Loop back after last word
          setIsFading(false);
        }, 300); // Short fade-out duration
      }, 1500); // Pause before switching words
    }
  }, [letterIndex, wordIndex, words]);

  return (
    <div
      style={{
        position: "relative",
        height: "72px", // Set fixed height to prevent flickering
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
      <span
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          background: "linear-gradient(to right, #3257EF, #B766E7)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          transition: "opacity 0.3s ease-in-out",
          opacity: isFading ? 0 : 1, // Smooth fade-out
        }}>
        {displayedText}
      </span>
    </div>
  );
}

export default AnimatedText;
