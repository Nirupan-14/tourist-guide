'use client';

import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 mix-blend-screen opacity-60"
      style={{
        background: `radial-gradient(180px at ${pos.x}px ${pos.y}px, rgba(88,129,87,0.3), transparent 45%)`,
        transition: "background 150ms ease-out",
      }}
    />
  );
};

export default CursorGlow;

