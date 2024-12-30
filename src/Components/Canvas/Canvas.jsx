import React, { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Adjust the canvas size
    canvas.width = window.innerWidth;
    canvas.height = 400;

    // Draw something (like dots) on the canvas
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        ctx.beginPath();
        ctx.arc(i, j, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "#E91E63"; // Customize color here
        ctx.fill();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-style"
      style={{ position: "absolute", zIndex: -10 }}
    />
  );
};

export default Canvas;
