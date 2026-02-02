import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import image2 from "../assets/1015426d0ef8f6a8102f2cbc8ae3d221.png"
// --- 1. Balanced Aggressive Text ---
const textVariants: Variants = {
  hidden: { opacity: 0, scale: 5, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    scale: [5, 0.8, 1], // The "Slam" effect
    filter: "blur(0px)",
    transition: {
      delay: 5.2, // Wait for the slash to start
      duration: 0.5,
      ease: "easeOut",
    },
  },
  jitter: {
    x: [0, -1.5, 1.5, -1.5, 0],
    y: [0, 1.5, -1.5, 1.5, 0],
    transition: {
      repeat: Infinity,
      duration: 0.1, 
    }
  }
};

// --- 2. The Slash (Slightly more visible) ---
const slashVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: [0, 1],
    opacity: [0, 1, 0],
    transition: {
      delay: 1.0, 
      duration: 0.2, // Slightly slower so it's not a ghost
      ease: "easeInOut",
    },
  },
};

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black"> 
      
      {/* Background - Darker for better text pop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/splash.gif"
          alt="Background"
          className="h-full w-full object-cover brightness-[0.65] contrast-125" 
        />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        
        {/* === THE SLASH === */}
        <svg className="absolute h-full w-full z-40 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
           <motion.path
             d="M -10 110 L 110 -10"
             stroke="#a5f3fc" 
             strokeWidth="1"
             fill="transparent"
             variants={slashVariants}
             initial="hidden"
             animate="visible"
             style={{ filter: "drop-shadow(0px 0px 20px #22d3ee)" }}
           />
        </svg>

        {/* === GDG HACKUREKA TEXT === */}
        <motion.div
          className="relative z-30 flex flex-col items-center text-center px-6"
          variants={textVariants}
          initial="hidden"
          animate={["visible", "jitter"]}
          onAnimationComplete={() => {
            // Give them 2.5 seconds to soak in the "anger"
            setTimeout(() => {
              navigate('/home');
            }, 2500);
          }}
        >
          <div className="relative">
            {/* The "Rage" Glow */}
            <div className="absolute inset-0 bg-red-600/20 blur-[100px] animate-pulse" />
            
           <img src={image2}></img>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="h-0.5 w-12 bg-red-600" />
            <p className="text-red-500 font-mono text-sm font-bold tracking-[0.3em] uppercase">
          Mugen Korosu
            </p>
            <span className="h-0.5 w-12 bg-red-600" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default SplashScreen;