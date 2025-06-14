
import { motion } from "framer-motion";
import { useState } from "react";

interface MicroArtHoverProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "ripple" | "glow" | "aurora";
}

const MicroArtHover = ({ children, className = "", variant = "light" }: MicroArtHoverProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const variants = {
    light: {
      background: isHovered
        ? `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), transparent 70%)`
        : "transparent",
    },
    ripple: {
      background: isHovered
        ? `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.4), rgba(59, 130, 246, 0.3), transparent), radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, transparent 40%, rgba(147, 51, 234, 0.2), transparent 70%)`
        : "transparent",
    },
    glow: {
      background: isHovered
        ? `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.3), rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.1), transparent 80%)`
        : "transparent",
    },
    aurora: {
      background: isHovered
        ? `radial-gradient(ellipse 200px 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.2), transparent 70%)`
        : "transparent",
    },
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={variants[variant]}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-xl animate-pulse" />
        </motion.div>
      )}
      
      {isHovered && variant === "ripple" && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 75,
            top: mousePosition.y - 75,
            width: 150,
            height: 150,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 2],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-blue-400/50" />
        </motion.div>
      )}
      
      {children}
    </motion.div>
  );
};

export default MicroArtHover;
