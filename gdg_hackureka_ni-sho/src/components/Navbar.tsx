import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "TRACKS", id: "tracks" },
    { label: "PRIZE POOL", id: "prize-pool" },
    { label: "TIMELINE", id: "timeline" },
    { label: "JUDGES", id: "judges" },
        { label: "CONTACT US", id: "contacts" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-99">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-99">

        {/* Mobile Toggle */}
        <div className="flex md:hidden flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-6"
          >
            <span
              className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${isOpen ? "rotate-45 top-1/2" : ""}`}
            />
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300
              ${isOpen ? "opacity-0" : "-translate-y-1/2"}`}
            />
            <span
              className={`absolute bottom-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${isOpen ? "-rotate-45 bottom-1/2" : ""}`}
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white font-impact text-xl hover:text-red-500 transition-colors"
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
            className="bg-[#D92519] text-white font-impact px-5 py-1.5 rounded-md shadow-[0_0_15px_rgba(217,37,25,0.4)] hover:bg-red-700 transition"
          >
            REGISTER
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-black/95 md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="text-left text-white font-impact text-2xl hover:text-red-500 border-b border-white/10 pb-2"
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
