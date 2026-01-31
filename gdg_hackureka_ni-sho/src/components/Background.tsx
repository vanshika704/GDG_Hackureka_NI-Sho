import React, { useState, useEffect } from 'react';

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  dotColor?: string;
  backgroundColor?: string;
  gap?: number;
  sensitivity?: number; // Higher = more movement
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  children,
  className = "",
  dotColor = "rgba(128, 128, 128, 0.25)",
  backgroundColor = "#000000",
  gap = 40,
  sensitivity = 0.05 // Adjust this for "weight"
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate offset from center to create a "parallax" feel
      const x = (e.clientX - window.innerWidth / 2) * sensitivity;
      const y = (e.clientY - window.innerHeight / 2) * sensitivity;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity]);

  return (
    <div 
      className={`relative w-full min-h-screen transition-colors duration-500 ${className}`}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `radial-gradient(${dotColor} 1.5px, transparent 0)`,
        backgroundSize: `${gap}px ${gap}px`,
        // The Magic: Moving the background position based on state
        backgroundPosition: `${mousePos.x}px ${mousePos.y}px`,
        // Will-change helps the browser optimize the movement
        willChange: 'background-position'
      }}
    >
      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;