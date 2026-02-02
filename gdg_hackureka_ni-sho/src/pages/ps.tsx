import React from 'react';
import { motion, type Variants } from 'framer-motion';
import AggressiveCard from '../components/cards';
import img1 from "../assets/fa6e16b7f388008f2fa0095edbc7460f.png"
import image1 from '../assets/healthtech.png';
import image2 from "../assets/EdTech.png";
import image3 from "../assets/agritech.png";
import image4 from "../assets/smartcities.png";
import image6 from "../assets/Tourism.png";
import image7 from "../assets/image.png";
import GridBackground from '../components/Background';
import brush from "../assets/brush.png";

const CHARACTERS = [
  {
    id: 1,
    name: "HealthTech",
    image: image1,
    description: "Innovating healthcare with AI-powered diagnostics, remote patient monitoring, and digital solutions that improve accessibility, accuracy, and patient outcomes."
  },
  {
    id: 2,
    name: "EdTech",
    image: image2,
    description: "Redefining learning through personalized education platforms, immersive technologies, and tools that make quality education accessible, engaging, and inclusive."
  },
  {
    id: 3,
    name: "AgriTech",
    image: image3,
    description: "Enhancing agriculture using smart sensors, data-driven insights, and sustainable technologies to boost productivity, reduce waste, and empower farmers."
  },
  {
    id: 4,
    name: "Urban Tech",
    image: image4,
    description: "Designing intelligent urban ecosystems with connected infrastructure, data-driven governance, and sustainable solutions to improve city living."
  },
  {
    id: 5,
    name: "Tourism & Heritage",
    image: image6,
    description: "Blending technology with culture to preserve heritage, enhance tourism experiences, and promote sustainable, tech-enabled travel."
  },
  {
    id: 7,
    name: "FinTech",
    image: image7,
    description: "Building secure, scalable financial solutions that enable seamless payments, digital banking, fraud prevention, and inclusive financial access."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 150, damping: 15 } 
  }
};

const CardGallery: React.FC = () => {
  return (
    <GridBackground gap={20} dotColor="rgba(255, 255, 255, 0.25)">
      {/* Top Decorative Brush - Added h-auto and object-cover to prevent distortion */}
      <img
        src={brush}
        alt="brush"
        className="absolute -top-8 md:-top-16 left-0 w-full h-24 md:h-auto object-cover z-20 pointer-events-none"
      />

      <div className="relative min-h-screen w-full py-12 md:py-20 px-4 sm:px-10 overflow-hidden md:overflow-visible">
        
        {/* Background Decor */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
          style={{ backgroundSize: '40px 40px' }} 
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Responsive logo size */}
              <img src={img1} alt="Header Logo" className="max-w-70 mt-12 sm:max-w-xs md:max-w-md" />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              viewport={{ once: true }}
              className="md:whileInView-[200px] h-1 bg-red-600 mt-4 shadow-[0_0_15px_#ff0000]"
            />
          </div>

          {/* Grid Container - Adjusted gaps for mobile */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-32 gap-x-8 justify-items-center pb-20"
          >
            {CHARACTERS.map((char) => (
              <motion.div 
                key={char.id} 
                variants={itemVariants} 
                className="w-full flex justify-center px-2"
              >
                <div className="w-full max-w-87.5 md:max-w-none">
                  <AggressiveCard 
                    name={char.name} 
                    image={char.image} 
                    description={char.description} 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Brush */}
      <img
        src={brush}
        alt="brush"
        className="absolute -bottom-8 md:-bottom-12 left-0 w-full h-20 md:h-auto object-cover z-20 pointer-events-none"
      />
    </GridBackground>
  );
};

export default CardGallery;