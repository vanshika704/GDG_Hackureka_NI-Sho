import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  id: string;
  type: "scroll" | "link";
  url?: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "TRACKS", id: "tracks", type: "scroll" },
    { label: "PRIZE POOL", id: "prize-pool", type: "scroll" },
    { label: "TIMELINE", id: "timeline", type: "scroll" },
    { label: "JUDGES", id: "judges", type: "scroll" },
    { label: "CONTACT US", id: "contacts", type: "scroll" },
    { 
      label: "SPONSORS", 
      id: "sponsors", 
      type: "link", 
      url: "https://drive.google.com/file/d/1jkHjqR63eTPqioEHDIeJet2vTIgBJXiS/view?usp=drivesdk" 
    },
  ];

  const handleNavAction = (item: NavItem): void => {
    if (item.type === "link" && item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-99">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-99">

        {/* Mobile Toggle */}
        <div className="flex md:hidden flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-6 flex flex-col justify-between items-start"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${isOpen ? "rotate-45 translate-y-2.75" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300
              ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${isOpen ? "-rotate-45 -translate-y-[11px]" : ""}`}
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-[2] gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavAction(item)}
              className="text-white font-impact text-lg tracking-wider hover:text-red-500 transition-colors uppercase"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex flex-1 justify-end">
          <a
            href="https://unstop.com/p/hackureka-ii-maharishi-markandeshwar-engineering-college-mmec-mullana-1633367"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D92519] text-white font-impact px-6 py-2 rounded-md shadow-[0_0_20px_rgba(217,37,25,0.4)] hover:scale-105 hover:bg-red-700 transition-all duration-300 text-center"
          >
            REGISTER
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavAction(item)}
                  className="text-left text-white font-impact text-2xl hover:text-red-500 transition-colors border-b border-white/5 pb-2 uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
