'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Engine, Render, World, Bodies, Mouse, MouseConstraint, Body, Runner } from 'matter-js';

const PhysicsIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  // Function to initialize physics engine
  const initializePhysics = (width: number, height: number) => {
    if (!containerRef.current || !canvasRef.current) return;
    
    // Cleanup previous instance if it exists
    if (runnerRef.current) {
      Runner.stop(runnerRef.current);
    }
    if (renderRef.current) {
      Render.stop(renderRef.current);
    }
    if (engineRef.current) {
      World.clear(engineRef.current.world, false);
      Engine.clear(engineRef.current);
    }

    // Initialize the physics engine with lower precision to improve performance
    const engine = Engine.create({
      positionIterations: 3,
      velocityIterations: 2,
      gravity: { x: 0, y: 0.5 }, // Increased gravity for faster falling
      timing: { timeScale: 1.0 } // Normal time scale
    });
    engineRef.current = engine;

    // Set canvas dimensions
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // Create renderer with minimal options for better performance
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent', // Changed to transparent to show parent background
        pixelRatio: 1,
      }
    });
    renderRef.current = render;

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
        // Set consistent size for all icons
        const size = 75;
        
        // Position icons across the width with some randomness
        const x = 100 + (width - 200) * (i / images.length) + (Math.random() - 0.5) * 40;
        const y = 50 + Math.random() * 50;
        
        // Calculate scale based on desired size and image dimensions
        const imgSize = Math.max(images[i].width, images[i].height);
        const scale = size / imgSize;
        
        const body = Bodies.circle(x, y, size / 2, {
          restitution: 0.7, // Higher restitution for more bounce
          friction: 0.01,
          frictionAir: 0.005, // Reduced air friction to make icons fall faster
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
      
      // Apply stronger initial forces
      iconBodies.forEach(body => {
        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 3,  // Stronger horizontal force
          y: Math.random() * -3          // Stronger initial upward force
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
  };

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

  // Handle resize events
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial size calculation
    updateDimensions();

    // Set up resize observer to detect parent container size changes
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (renderRef.current) {
        Render.stop(renderRef.current);
      }
      if (engineRef.current) {
        World.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
    };
  }, []);

  // Initialize or reinitialize physics when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initializePhysics(dimensions.width, dimensions.height);
    }
  }, [dimensions]);

  return (
    <div ref={containerRef} style={{ 
      width: '100%', 
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <canvas 
        ref={canvasRef}
        style={{
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />    
    </div>
  );
};

export default PhysicsIcons;