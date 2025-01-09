import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("Canvas");
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
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

    const width = canvas.width;
    const height = canvas.height;

    const generateDots = () => {
      let dots = [];
      for (let i = 0; i < dotCount; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
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
      ctx.fillStyle = 'gray-100';

      dots.forEach((dot) => {
        const xRotated = dot.x * Math.cos(angle) - dot.z * Math.sin(angle);
        const zRotated = dot.x * Math.sin(angle) + dot.z * Math.cos(angle);
        const scaleFactor = 500 / (500 + zRotated);

        const x2D = (xRotated * scaleFactor) + width / 2;
        const y2D = (dot.y * scaleFactor) + height / 2;

        ctx.beginPath();
        ctx.arc(x2D, y2D, 2 * scaleFactor, 0, 2 * Math.PI);
        ctx.fill();
      });

      angle += rotationSpeed;
      requestAnimationFrame(drawGlobe);
    };

    drawGlobe();
    return () => cancelAnimationFrame(drawGlobe);
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-start pt-8 md:pt-16">
      <canvas
        ref={canvasRef}
        width="700"
        height="655"
        className="w-full max-w-[400px] md:max-w-[600px]"
        style={{
          aspectRatio: '700/655'
        }}
      />
    </div>
  );
};

export default Canvas;