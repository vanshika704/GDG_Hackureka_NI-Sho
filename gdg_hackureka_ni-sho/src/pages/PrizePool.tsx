import { motion } from 'framer-motion';
import image1 from "../assets/PricePool1.png";
import brush from "../assets/brush.png";

const PrizePool = () => {
  const bgImageUrl = image1;

  return (
    // Removed overflow-hidden to allow the brush to peek out the bottom
    <section
      className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="relative z-10 flex flex-col items-center -mt-24 md:-mt-40">
        {/* Floating Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white px-10 py-2.5 rounded-xl border-4 border-[#D4AF37] z-30 -mb-7 shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        >
          <h2 className="text-black font-impact text-2xl md:text-4xl tracking-tighter uppercase italic leading-none">
            PRIZE POOL
          </h2>
        </motion.div>

        {/* Golden Board */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            scale: { type: "spring", stiffness: 100, delay: 0.2 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-80 md:w-145 h-52 md:h-64 bg-[#E5C158] rounded-2xl border-[6px] border-[#D4AF37] flex flex-col items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 bg-[conic-gradient(from_0deg,transparent_0deg,#ffffff_15deg,transparent_30deg)] animate-[spin_25s_linear_infinite]" />
          </div>

          {/* Prize Amount */}
          <div className="relative z-10 flex items-center gap-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
            <span className="text-black font-impact text-5xl md:text-7xl italic leading-none">₹</span>
            <span className="text-black font-impact text-7xl md:text-9xl tracking-tighter italic leading-none">
            15000
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full flex justify-around px-6 mb-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`bg-[#B8860B] rounded-full opacity-60 ${i % 2 === 0 ? 'w-1.5 h-8' : 'w-1 h-5'}`} />
            ))}
          </div>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-400/10 blur-[120px] -z-10" />
      </div>

      {/* MOVED INSIDE THE SECTION */}
      <img
        src={brush}
        alt="brush"
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none translate-y-1/2" 
      />
    </section>
  );
};

export default PrizePool;