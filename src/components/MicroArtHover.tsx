
import { motion } from "framer-motion";
import { useState } from "react";

interface MicroArtHoverProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "ripple" | "glow" | "aurora" | "shadow" | "organic";
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
        ? `radial-gradient(ellipse 200px 120px at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.4), rgba(249, 115, 22, 0.3), rgba(239, 68, 68, 0.2), transparent 80%)`
        : "transparent",
    },
    aurora: {
      background: isHovered
        ? `radial-gradient(ellipse 250px 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.2), transparent 70%)`
        : "transparent",
    },
    shadow: {
      background: isHovered
        ? `radial-gradient(ellipse 300px 180px at ${mousePosition.x - 50}px ${mousePosition.y + 30}px, rgba(0, 0, 0, 0.3), rgba(30, 41, 59, 0.2), transparent 60%),
           radial-gradient(ellipse 200px 120px at ${mousePosition.x + 40}px ${mousePosition.y - 20}px, rgba(59, 130, 246, 0.2), transparent 50%)`
        : "transparent",
    },
    organic: {
      background: isHovered
        ? `radial-gradient(ellipse 180px 120px at ${mousePosition.x - 30}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 60%),
           radial-gradient(ellipse 120px 200px at ${mousePosition.x + 50}px ${mousePosition.y + 40}px, rgba(59, 130, 246, 0.25), transparent 50%),
           radial-gradient(ellipse 150px 80px at ${mousePosition.x}px ${mousePosition.y - 60}px, rgba(34, 197, 94, 0.2), transparent 70%)`
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
      {/* Floating shadow elements */}
      {isHovered && (variant === "shadow" || variant === "organic") && (
        <>
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 60,
              width: 160,
              height: 120,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0.4, 0.7, 0],
              scale: [0.5, 1.2, 0.9, 1.4, 0.8],
              rotate: [0, 15, -10, 25, 0],
              x: [-20, 30, -15, 40, 0],
              y: [10, -25, 35, -40, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-2xl" 
                 style={{ clipPath: "ellipse(70% 60% at 40% 50%)" }} />
          </motion.div>

          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y + 10,
              width: 120,
              height: 180,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0.6, 0.3, 0],
              scale: [0.3, 0.8, 1.1, 0.7, 0.9],
              rotate: [0, -20, 10, -30, 5],
              x: [30, -20, 45, -35, 20],
              y: [-15, 40, -30, 25, -10]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="w-full h-full bg-gradient-to-tl from-green-400/20 to-cyan-400/20 rounded-full blur-xl"
                 style={{ clipPath: "ellipse(60% 80% at 60% 40%)" }} />
          </motion.div>

          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: mousePosition.x - 40,
              top: mousePosition.y + 50,
              width: 100,
              height: 100,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0.3, 0.8, 0],
              scale: [0.4, 1.0, 0.6, 1.3, 0.5],
              rotate: [0, 45, -25, 60, 0],
              x: [-40, 25, -30, 50, -20],
              y: [20, -35, 45, -25, 30]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-lg"
                 style={{ clipPath: "ellipse(90% 50% at 30% 70%)" }} />
          </motion.div>
        </>
      )}

      {/* Original ripple effect */}
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

      {/* Enhanced floating orb for other variants */}
      {isHovered && !["shadow", "organic", "ripple"].includes(variant) && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1, 0],
            scale: [0, 1, 1.2, 0.8, 1],
            rotate: [0, 180, 270, 360],
            x: [-10, 20, -15, 25, 0],
            y: [5, -20, 30, -25, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-xl" />
        </motion.div>
      )}
      
      {children}
    </motion.div>
  );
};

export default MicroArtHover;
