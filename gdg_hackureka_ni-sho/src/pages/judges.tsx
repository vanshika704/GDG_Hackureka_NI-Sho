// import React from 'react';
// import { motion, type Variants } from 'framer-motion';
// import GridBackground from '../components/Background';

// // Toggle this array to empty [] to see the "Revealed" state
// const JUDGES_DATA = [
//   {
//     id: 1,
//     name: "Dr. Arshdeep Singh",
//     role: "Head of AI Research",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
//     bio: "PIONEER IN NEURAL NETWORKS AND DEEP LEARNING. DIRECTING THE FUTURE OF COGNITIVE SYSTEMS."
//   },
//   {
//     id: 2,
//     name: "Sarah Jenkins",
//     role: "CTO @ TechFlow",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop", 
//     bio: "STRATEGIC VISIONARY IN SCALABLE INFRASTRUCTURE. TRANSFORMING LEGACY SYSTEMS INTO POWERHOUSES."
//   },
//   {
//     id: 3,
//     name: "Marcus Thorne",
//     role: "Lead Cybersecurity",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
//     bio: "ELITE DEFENDER OF DIGITAL FRONTIERS. SPECIALIZING IN QUANTUM ENCRYPTION AND NEUTRALIZATION."
//   }
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const judgeVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     filter: "blur(0px)",
//     transition: { type: "spring", stiffness: 120, damping: 20 } 
//   }
// };

// const SlayerJudges: React.FC = () => {
//   const isEmpty = JUDGES_DATA.length === 0;

//   return (
//     <GridBackground gap={25} dotColor="rgba(250, 4, 4, 0.48)">
//       <section className="relative py-16 md:py-20 text-white font-['Impact', sans-serif]">
        
//         <div className="max-w-6xl mx-auto px-6 relative z-10">
          
//           {/* Header Section */}
//           <header className="mb-12 md:mb-16">
//             <motion.div 
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center gap-2 mb-2 font-mono text-[9px] tracking-[0.4em] text-red-600 uppercase font-bold"
//             >
//               <div className="w-6 h-px bg-red-600 shadow-[0_0_8px_#f00]" /> 
//               COUNCIL_OF_MASTERS
//             </motion.div>
//             <h2 className="text-4xl md:text-7xl uppercase italic leading-none tracking-tighter">
//               THE <span className="text-red-600 drop-shadow-[0_0_10px_#f00]">JUDGES</span>
//             </h2>
//           </header>

//           {isEmpty ? (
//             /* --- TO BE REVEALED STATE --- */
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex flex-col items-center justify-center py-24 border border-dashed border-white/10 bg-white/[0.01] rounded-sm"
//             >
//               <div className="relative mb-6">
//                 <div className="text-red-600 text-7xl md:text-9xl opacity-10 font-black italic select-none">
//                   CLASSIFIED
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-12 h-12 border-2 border-red-600/30 rounded-full animate-ping" />
//                 </div>
//               </div>
              
//               <h3 className="text-2xl md:text-4xl tracking-[0.2em] uppercase italic text-neutral-400">
//                 IDENTITIES <span className="text-white">TO BE REVEALED</span>
//               </h3>
              
//               <div className="mt-6 flex flex-col items-center gap-2">
//                 <div className="h-px w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
//                 <p className="font-mono text-[10px] text-red-600 tracking-[0.4em] uppercase animate-pulse">
//                   STAY_TUNED_FOR_TRANSMISSION
//                 </p>
//               </div>
//             </motion.div>
//           ) : (
//             /* --- JUDGES GRID --- */
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
//             >
//               {JUDGES_DATA.map((judge) => (
//                 <motion.div 
//                   key={judge.id} 
//                   variants={judgeVariants}
//                   className="group relative"
//                 >
//                   {/* Image Container */}
//                   <div className="relative aspect-[10/11] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-l border-white/5 group-hover:border-red-600">
//                     <img 
//                       src={judge.image} 
//                       alt={judge.name}
//                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//                     />
//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80" />
                    
//                     {/* Bottom Accent Line */}
//                     <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_#f00]" />
//                   </div>

//                   {/* Details Section */}
//                   <div className="mt-5 relative">
//                     <span className="absolute -top-3 -left-2 text-4xl font-black text-white/5 italic pointer-events-none">
//                       0{judge.id}
//                     </span>

//                     <h3 className="text-2xl md:text-3xl text-white uppercase italic leading-none mb-1 group-hover:text-red-500 transition-colors">
//                       {judge.name}
//                     </h3>
                    
//                     <p className="text-red-600 font-mono text-[8px] tracking-[0.3em] uppercase font-bold mb-3">
//                       {judge.role}
//                     </p>

//                     <p className="text-neutral-400 font-sans text-[10px] font-bold tracking-[0.1em] uppercase leading-relaxed border-l border-white/10 pl-3 max-w-[95%]">
//                       {judge.bio}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </GridBackground>
//   );
// };

// export default SlayerJudges;

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import GridBackground from '../components/Background';

/**
 * CURRENT STATE: NO JUDGES 
 * Transition to this state automatically when the array is empty.
 */
const JUDGES_DATA: any[] = []; 


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const judgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 20 } 
  }
};

const SlayerJudges: React.FC = () => {
  const isEmpty = JUDGES_DATA.length === 0;

  return (
    <GridBackground gap={25} dotColor="rgba(250, 4, 4, 0.48)">
      <section className="relative py-16 md:py-24 text-white font-['Impact', sans-serif] overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <header className="mb-12 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-2 font-mono text-[9px] tracking-[0.4em] text-red-600 uppercase font-bold"
            >
              <div className="w-6 h-px bg-red-600 shadow-[0_0_8px_#f00]" /> 
              COUNCIL_OF_MASTERS
            </motion.div>
            <h2 className="text-5xl md:text-8xl uppercase italic leading-none tracking-tighter">
              THE <span className="text-red-600 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">JUDGES</span>
            </h2>
          </header>

          {isEmpty ? (
            /* --- "TO BE REVEALED" FALLBACK DESIGN --- */
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative flex flex-col items-center justify-center py-32 md:py-48 border border-white/5 bg-zinc-950/50 backdrop-blur-sm rounded-sm"
            >
              {/* Background Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <h4 className="text-[20vw] font-black uppercase italic leading-none">
                  LOCKED
                </h4>
              </div>

              <div className="relative z-10 text-center px-4">
                {/* Visual Scanner Element */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-2 border-red-600 rounded-full animate-ping opacity-20" />
                    <div className="absolute inset-0 border border-red-600/50 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow-[0_0_20px_#f00]" />
                    {/* Rotating Ring */}
                    <div className="absolute inset-[-4px] border-t-2 border-red-600 rounded-full animate-spin [animation-duration:3s]" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-6xl tracking-tight uppercase italic mb-4">
                  IDENTITIES <span className="text-red-600">ENCRYPTED</span>
                </h3>
                
                <div className="inline-block px-4 py-2 border border-red-900/30 bg-red-950/10 mb-6">
                  <p className="font-mono text-[10px] md:text-xs text-red-500 tracking-[0.5em] uppercase animate-pulse">
                    Transmission_Status: Pending_Approval
                  </p>
                </div>

                <p className="max-w-md mx-auto text-neutral-500 font-sans text-xs md:text-sm font-bold tracking-[0.1em] uppercase leading-relaxed">
                  The elite council is currently undergoing biometric verification. 
                  Return to the terminal once the signal is cleared.
                </p>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-red-600/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-red-600/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-red-600/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-red-600/30" />
            </motion.div>
          ) : (
            /* --- ACTIVE JUDGES GRID --- */
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            >
              {JUDGES_DATA.map((judge) => (
                <motion.div 
                  key={judge.id} 
                  variants={judgeVariants}
                  className="group relative"
                >
                  <div className="relative aspect-[10/11] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-l border-white/5 group-hover:border-red-600">
                    <img 
                      src={judge.image} 
                      alt={judge.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_15px_#f00]" />
                  </div>

                  <div className="mt-6 relative">
                    <span className="absolute -top-4 -left-3 text-5xl font-black text-white/[0.03] italic pointer-events-none">
                      0{judge.id}
                    </span>
                    <h3 className="text-3xl text-white uppercase italic leading-none mb-1 group-hover:text-red-500 transition-colors duration-300">
                      {judge.name}
                    </h3>
                    <p className="text-red-600 font-mono text-[9px] tracking-[0.3em] uppercase font-bold mb-4">
                      {judge.role}
                    </p>
                    <p className="text-neutral-400 font-sans text-[11px] font-bold tracking-[0.05em] uppercase leading-relaxed border-l-2 border-red-600/20 pl-4">
                      {judge.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </GridBackground>
  );
};

export default SlayerJudges;