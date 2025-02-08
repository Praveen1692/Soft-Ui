import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Canvas = () => {
    const mountRef = useRef(null);
    const globeRef = useRef(null); // Ref for the globe object

    useEffect(() => {
        // Scene, Camera, and Renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff, 0); // Transparent background

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // OrbitControls for camera control
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 5;
        controls.maxDistance = 20;

        // Globe creation
        const globeRadius = 6;
        const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);

        // Create points instead of a solid surface
        const pointsMaterial = new THREE.PointsMaterial({
            color: 0xbbbbbb, // Light gray color
            size: 0.05,      // Adjust size as needed
        });

        const globe = new THREE.Points(globeGeometry, pointsMaterial);
        scene.add(globe);

        // Assign the globe object to the ref
        globeRef.current = globe;

        // Camera position
        camera.position.z = 10;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Auto-rotate the globe
            if (globeRef.current) {
                globeRef.current.rotation.y += 0.005; // Adjust the rotation speed here
            }

            controls.update(); // Update OrbitControls

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up function
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div className="w-full h-full" ref={mountRef}>
            {/* The Three.js globe will be mounted here */}
        </div>
    );
};

export default Canvas;
