'use client';

import React, { useEffect, useRef } from 'react';
import { Engine, Render, World, Bodies, Mouse, MouseConstraint, Body, Runner } from 'matter-js';

const PhysicsIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  // Example icon URLs that should work immediately
  const iconUrls = [
    'https://cdn-icons-png.flaticon.com/512/25/25231.png', // GitHub icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', // JS icon
    'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', // React icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', // TypeScript icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968322.png', // Node.js icon
    'https://cdn-icons-png.flaticon.com/512/25/25231.png', // GitHub icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', // JS icon
    'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', // React icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', // TypeScript icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968322.png', // Node.js icon
    'https://cdn-icons-png.flaticon.com/512/25/25231.png', // GitHub icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', // JS icon
    'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', // React icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', // TypeScript icon
    'https://cdn-icons-png.flaticon.com/512/5968/5968322.png', // Node.js icon
  ];

  // Use useEffect for cleanup to prevent memory leaks
  useEffect(() => {
    // Wait for DOM elements to be available
    if (!containerRef.current || !canvasRef.current) return;

    // Function to preload images
    const preloadImages = () => {
      return Promise.all(iconUrls.map(url => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`Failed to load image: ${url}`);
            // Create a fallback canvas with a colored circle
            const canvas = document.createElement('canvas');
            const size = 60;
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.fillStyle = ['#4078c0', '#6cc644', '#bd2c00', '#c9510c', '#6e5494'][
                Math.floor(Math.random() * 5)
              ];
              ctx.beginPath();
              ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
              ctx.fill();
              
              // Convert canvas to image
              const fallbackImg = new Image();
              fallbackImg.src = canvas.toDataURL();
              fallbackImg.onload = () => resolve(fallbackImg);
            } else {
              reject(new Error('Could not create fallback image'));
            }
          };
          img.src = url;
        });
      }));
    };

    // Initialize the physics engine with lower precision to improve performance
    const engine = Engine.create({
      positionIterations: 3,
      velocityIterations: 2,
      gravity: { x: 0, y: 0.2 }, // Gentle gravity
      timing: { timeScale: 0.9 }
    });
    engineRef.current = engine;

    // Create a simple scene
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight; // Fixed height for better control

    // Create renderer with minimal options for better performance
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: '#f8f9fa',
        pixelRatio: 1,
      }
    });

    // Container walls (invisible)
    const wallOptions = { 
      isStatic: true, 
      render: { fillStyle: 'transparent' }
    };

    const walls = [
      // Bottom wall
      Bodies.rectangle(width / 2, height + 50, width + 100, 100, wallOptions),
      // Left wall
      Bodies.rectangle(-50, height / 2, 100, height + 100, wallOptions),
      // Right wall
      Bodies.rectangle(width + 50, height / 2, 100, height + 100, wallOptions),
    ];
    
    World.add(engine.world, walls);

    // Preload images then create physics bodies with those images
    preloadImages().then(images => {
      const iconBodies = [];
      
      for (let i = 0; i < images.length; i++) {
        const size = 40 + Math.random() * 20;
        
        // Position icons across the width with some randomness
        const x = 100 + (width - 200) * (i / images.length) + (Math.random() - 0.5) * 40;
        const y = 50 + Math.random() * 50;
        
        // Calculate scale based on desired size and image dimensions
        const imgSize = Math.max(images[i].width, images[i].height);
        const scale = size / imgSize;
        
        const body = Bodies.circle(x, y, size / 2, {
          restitution: 0.6,
          friction: 0.01,
          frictionAir: 0.02,
          render: {
            sprite: {
              texture: images[i].src,
              xScale: scale,
              yScale: scale
            }
          }
        });
        
        iconBodies.push(body);
      }
      
      World.add(engine.world, iconBodies);
      
      // Apply initial forces
      iconBodies.forEach(body => {
        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 2,
          y: Math.random() * -2
        });
      });
    }).catch(error => {
      console.error('Error loading images:', error);
    });

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Use a Runner instead of Engine.run for better control
    const runner = Runner.create({
      isFixed: true,
      delta: 1000 / 60
    });
    Runner.run(runner, engine);
    runnerRef.current = runner;
    
    // Run the renderer
    Render.run(render);

    // Cleanup function
    return () => {
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      Render.stop(render);
      if (engineRef.current) {
        World.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center my-6">
      <div 
        ref={containerRef}
        style={{ 
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
        }}
      >
        <canvas 
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%'
        }}
      />    
      </div>
    </div>
  );
};

export default PhysicsIcons;