import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Canvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0xF9FAFB);
    containerRef.current.appendChild(renderer.domElement);

    // Create larger globe
    const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x808080,
      wireframe: true,
      wireframeLinewidth: 1
    });

    const sphere = new THREE.Mesh(sphereGeometry, material);
    scene.add(sphere);

    // Adjusted camera position
    camera.position.z = 12;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    // Handle container resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Create ResizeObserver to watch container size changes
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    // Initial animation
    animate();

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
    />
  );
};

export default Canvas;
