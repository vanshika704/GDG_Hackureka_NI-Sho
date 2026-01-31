import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  image: string;
  name: string;
  description: string;
}

const AggressiveCard: React.FC<CardProps> = ({ image, name, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-100 w-75 cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* --- FRONT SIDE --- */}
        <div 
          className="absolute inset-0 rounded-3xl border-2 border-white/20 bg-neutral-900 overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Red Header Section */}
          <div className="absolute top-0 left-0 w-full h-16 flex items-center justify-center z-10">
            <h3 className="text-white font-impact text-2xl tracking-tight uppercase">
              {name}
            </h3>
          </div>

          {/* Image Container with Gradient */}
          <div className="absolute inset-0 pt-16 bg-linear-to-b from-[#7a140d] to-black">
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Bottom Glossy Edge */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-linear-to-t from-white/10 to-transparent" />
        </div>

        {/* --- BACK SIDE --- */}
        <div 
          className="absolute inset-0 rounded-3xl  bg-black p-6 flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(217,37,25,0.3)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <h3 className="text-[#D92519] font-impact text-3xl mb-4 uppercase">
            DETAILS
          </h3>
          
          <p className="text-gray-300 font-sans text-sm leading-relaxed mb-6">
            {description}
          </p>

          
        </div>
      </motion.div>
    </div>
  );
};

export default AggressiveCard;