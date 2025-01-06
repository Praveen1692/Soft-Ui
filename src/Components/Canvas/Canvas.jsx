import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("Canvas");
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const radius = 260; // Radius of the globe
    const dotCount = 700; // Number of dots
    const rotationSpeed = 0.005; // Speed of rotation
    let angle = 0;

    // For high-resolution displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const generateDots = () => {
      let dots = [];
      for (let i = 0; i < dotCount; i++) {
        // Generate points on a sphere using spherical coordinates
        const theta = Math.random() * 2 * Math.PI; // Random angle around Y-axis
        const phi = Math.acos(2 * Math.random() - 1); // Random angle from the Z-axis

        // Convert spherical coordinates to Cartesian coordinates
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        dots.push({ x, y, z });
      }
      return dots;
    };

    const dots = generateDots();

    const drawGlobe = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'gray-100'; // Tailwind's gray-500 with opacity

      dots.forEach((dot) => {
        // Rotate the dot around the Y-axis (for a rolling effect)
        const xRotated = dot.x * Math.cos(angle) - dot.z * Math.sin(angle);
        const zRotated = dot.x * Math.sin(angle) + dot.z * Math.cos(angle);
        const scaleFactor = 500 / (500 + zRotated); // Perspective scaling

        // Project 3D points to 2D
        const x2D = (xRotated * scaleFactor) + width / 2;
        const y2D = (dot.y * scaleFactor) + height / 2;

        // Draw the dot
        ctx.beginPath();
        ctx.arc(x2D, y2D, 2 * scaleFactor, 0, 2 * Math.PI); // Size based on scaleFactor
        ctx.fill();
      });

      // Increment angle for next frame
      angle += rotationSpeed;

      requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => cancelAnimationFrame(drawGlobe);
  }, []);

  return (
    <div className="position-relative">
      <canvas
        ref={canvasRef}
        width="700"
        height="655"
        className="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 ml-40 me-n10 mt-lg-5"
        style={{ width: '600px', height: '455.594px' }}
      />
    </div>
  );
};

export default Canvas;
