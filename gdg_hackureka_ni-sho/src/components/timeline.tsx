import React, { useRef, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import image1 from "../assets/bg.png";


interface Event {
  title: string;
  desc: string;
  img: string;
  tag: string;
}

const events: Event[] = [
  { 
    title: "Hunt Begins", 
    tag: "Arc 00", 
    desc: "03 FEB 2026. REGISTRATIONS ARE NOW LIVE. ENTER THE ARENA.", 
    img: "/1.gif"
  },
  { 
    title: "Registration Ends", 
    tag: "Arc 01", 
    desc: "15 FEB 2026. THE GATES ARE CLOSING. LAST CHANCE TO JOIN.", 
    img: "/2.gif"
  },
  { 
    title: "Online Shortlisting", 
    tag: " Arc 02", 
    desc: "22 FEB. TOP TEAMS ANNOUNCED BASED ON THE PPT SUBMISSION ", 
    img: "/3.gif"
  },
  { 
    title: "Final Event", 
    tag: "Arc 03", 
    desc: "26 FEB. VENUE: MAHARISHI MARKANDESHWAR(DEEMED TO BE) UNIVERSITY, MULLANA (AMBALA).", 
    img: "/4.gif"
  },
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const SlayerTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const bgMoveX = useTransform(smoothX, [-500, 500], ["5%", "-5%"]);

  // Original Embers Logic
  const embers = useMemo(() => 
    [...Array(45)].map((_, i) => ({
      id: i,
      left: `${seededRandom(i) * 100}%`,
      duration: seededRandom(i + 1) * 6 + 6,
      size: seededRandom(i + 2) * 4 + 1,
      delay: seededRandom(i + 3) * 15,
      drift: (seededRandom(i + 4) - 0.5) * 40,
    })), []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set(clientX - (left + width / 2));
    mouseY.set(clientY - (top + height / 2));
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 bg-[#020202] text-white overflow-hidden font-['Impact', sans-serif]"
    >
        
      {/* MOUSE GLOW - Responsive hidden on touch devices for performance */}
      <motion.div 
        className="pointer-events-none absolute z-40 w-80 h-80 md:w-125 md:h-125 rounded-full blur-[100px] opacity-20 hidden md:block"
        style={{
          left: useTransform(smoothX, (v) => v + (containerRef.current?.offsetWidth || 0) / 2),
          top: useTransform(smoothY, (v) => v + (containerRef.current?.offsetHeight || 0) / 2),
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, #ff3300 10%, transparent 70%)"
        }}
      />

      {/* BG PARALLAX */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          style={{ x: bgMoveX }}
          className="absolute bottom-0 right-0 w-full md:w-[75%] lg:w-[60%] flex justify-end items-end"
        >
          <img 
            src={image1} 
            className="w-full h-auto object-contain object-bottom opacity-60" 
            alt="" 
          />
        </motion.div>
      </div>

      {/* FIRE EMBERS */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {embers.map((e) => (
          <motion.div
            key={e.id}
            className="absolute rounded-full bg-orange-500"
            style={{ 
              left: e.left, 
              bottom: "-5%", 
              width: e.size, 
              height: e.size,
              boxShadow: "0 0 10px #ff4500",
              filter: "blur(0.5px)"
            }}
            animate={{ 
              y: [0, "-110vh", "-220vh", "-500vh"], 
              x: [0, e.drift, -e.drift, e.drift / 2],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{ 
              duration: e.duration, 
              repeat: Infinity, 
              ease: "linear", 
              delay: e.delay 
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <header className="mb-24 md:mb-32">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-4 font-mono text-[10px] tracking-[0.5em] text-red-500 uppercase font-black">
              <div className="w-8 h-0.5 bg-red-600 shadow-[0_0_10px_#f00]" /> SYSTEM_STATUS: ONLINE
          </motion.div>
          <h2 className="text-5xl md:text-8xl uppercase italic leading-[0.9] tracking-tighter">
            <span className="text-red-600 drop-shadow-[0_0_15px_#f00]">TimeLine</span>
          </h2>
        </header>

        <div className="relative">
          {/* NICHIRIN LINE - Fix: Adjusted for mobile (left-6) vs desktop (center) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 z-10">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-red-600 shadow-[0_0_20px_#f00]"
            />
          </div>

          {events.map((event, i) => {
            const isEven = i % 2 === 0;
            return (
              <article key={i} className="mb-32 md:mb-48 last:mb-0 relative z-30">
                <div className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-24 ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* TEXT - Fix: Added padding on mobile to clear the timeline line */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-left" : "md:text-right text-left"}`}
                  >
                    <span className="text-red-600 font-mono text-xs tracking-[0.3em] block mb-3 font-bold uppercase">
                      // {event.tag}
                    </span>
                    <h3 className="text-3xl md:text-5xl uppercase italic leading-tight mb-4 md:mb-6">
                      {event.title}
                    </h3>
                    <p className="text-neutral-400 font-sans text-xs md:text-sm font-bold tracking-widest uppercase opacity-80 leading-relaxed">
                      {event.desc}
                    </p>
                  </motion.div>

                  {/* HUB - Fix: Consistent diamond position */}
                  <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-20">
                     <div className="w-6 h-6 bg-black border border-red-600 rotate-45 flex items-center justify-center">
                        <div className="w-1 h-1 bg-red-600 animate-pulse" />
                     </div>
                  </div>

                  {/* IMAGE - Fix: Responsive width and padding */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-full md:w-[45%] pl-12 md:pl-0"
                  >
                    <img 
                      src={event.img} 
                      className="w-full aspect-video object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5" 
                      alt={event.title}
                    />
                  </motion.div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SlayerTimeline;