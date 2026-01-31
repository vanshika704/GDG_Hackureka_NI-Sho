import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["PRIZES", "TRACKS", "TIMELINE", "SPONSOR"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        
        {/* Mobile Toggle */}
        <div className="flex md:hidden flex-1">
          <button 
            className="text-white p-2 outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-start items-start gap-10">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white font-impact text-xl hover:text-red-500 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex flex-1 justify-end">
          <button className="bg-[#D92519] text-white font-impact px-5 py-1.5 rounded-md shadow-[0_0_15px_rgba(217,37,25,0.4)]">
            REGISTER
          </button>
        </div>
      </div>

      {/* Dropdown Menu - Just below the navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-black/95 border-b border-red-900/30 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-white font-impact text-2xl tracking-tight hover:text-red-500 border-b border-white/5 pb-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;