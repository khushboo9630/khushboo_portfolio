"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}

      <div
        className="pointer-events-none fixed z-[9999] h-4 w-4 rounded-full bg-[#16C8B2] transition-transform duration-100"
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      />

      {/* Outer Ring */}

      <div
        className="pointer-events-none fixed z-[9998] h-10 w-10 rounded-full border border-[#16C8B2]/60 transition-all duration-300"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      />
    </>
  );
}