import React from 'react';
import { motion, type Variants } from 'framer-motion';
import AggressiveCard from '../components/cards';
import img1 from "../assets/fa6e16b7f388008f2fa0095edbc7460f.png";
import image1 from '../assets/healthtech.png';
import image2 from "../assets/EdTech.png";
import image3 from "../assets/agritech.png";
import image4 from "../assets/smartcities.png";
import image6 from "../assets/Tourism.png";
import image7 from "../assets/image.png";
import imageOpen from "../assets/open_innovation.png"; 
import GridBackground from '../components/Background';
import brush from "../assets/brush.png";

const CHARACTERS = [
  { id: 1, name: "HealthTech", image: image1, description: "Technology-driven solutions to improve healthcare access, diagnostics, patient care, and health system efficiency." },
  { id: 2, name: "EdTech", image: image2, description: "Innovations in digital learning, skill development, assessment platforms, and tools for students." },
  { id: 3, name: "AgriTech", image: image3, description: "Smart solutions for farmers: crop management, supply chain efficiency, and climate-resilient farming." },
  { id: 4, name: "Urban Tech", image: image4, description: "Technology for smarter cities: traffic management, waste management, sustainability, and public safety." },
  { id: 5, name: "Accessibility", image: image6, description: "Solutions that empower people with disabilities through inclusive design and assistive technologies." },
  { id: 7, name: "FinTech", image: image7, description: "Digital innovations in finance: payments, financial inclusion, fraud detection, and secure services." }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
      <img
        src={brush}
        alt="brush"
        className="absolute -top-8 md:-top-16 left-0 w-full h-24 md:h-auto object-cover z-20 pointer-events-none"
      />

      <div className="relative min-h-screen w-full py-12 md:py-20 px-4 sm:px-10 overflow-hidden md:overflow-visible">
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <img src={img1} alt="Header Logo" className="max-w-70 mt-12 sm:max-w-xs md:max-w-md" />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              viewport={{ once: true }}
              className="h-1 bg-red-600 mt-4 shadow-[0_0_15px_#ff0000]"
            />
          </div>

          {/* Grid Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-32 gap-x-8 justify-items-center pb-20"
          >
            {/* The First 6 Cards */}
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

            {/* The 7th Card - Centered in the 3rd row on Desktop (lg) */}
            <motion.div 
              variants={itemVariants} 
              className="w-full flex justify-center px-2 lg:col-start-2"
            >
              <div className="w-full max-w-87.5 md:max-w-none">
                <AggressiveCard 
                  name="Open Innovation" 
                  image={imageOpen} 
                  description="Open-ended problem statements that encourage creative, cross-domain solutions beyond conventional theme boundaries." 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <img
        src={brush}
        alt="brush"
        className="absolute -bottom-8 md:-bottom-12 left-0 w-full h-20 md:h-auto object-cover z-20 pointer-events-none"
      />
    </GridBackground>
  );
};

export default CardGallery;