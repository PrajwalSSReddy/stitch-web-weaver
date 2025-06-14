
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface CircularButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CircularButton = ({ children, onClick, className = "" }: CircularButtonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    setMousePosition({ x, y });
  };

  const angle = Math.atan2(mousePosition.y, mousePosition.x) * (180 / Math.PI);

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-xl"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Cursor follower light */}
      {isHovered && (
        <motion.div
          className="absolute w-8 h-8 bg-white/30 rounded-full blur-sm pointer-events-none"
          animate={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      )}
      
      {/* Button content that rotates towards cursor */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        animate={{
          rotate: isHovered ? angle : 0,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <span className="text-sm text-center leading-tight mb-1">{children}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.div>
      
      {/* Ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/20"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.button>
  );
};

export default CircularButton;
