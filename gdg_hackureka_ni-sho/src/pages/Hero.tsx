import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import img1 from "../assets/Infinity castle desktop wallpaper 1 (1).png"
import rengoku from "../assets/rengoku.png"
import tanjiro from "../assets/tanjiro.png"
import zenitsu from "../assets/zenitsu.png"
import nezuko from "../assets/nezuko.png"
import inosuke from "../assets/inosuke.png"
import giyu from "../assets/giyu.png"
import circle from "../assets/logocircle.png"
import hackureka from "../assets/hackurekahero.png"

function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Create scroll-based transforms for each character with movement and scale
  const rengokuX = useTransform(scrollYProgress, [0, 1], [0, -80])
  const rengokuY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const rengokuScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  
  const giyuX = useTransform(scrollYProgress, [0, 1], [0, 90])
  const giyuY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const giyuScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  
  const inosukeX = useTransform(scrollYProgress, [0, 1], [0, 70])
  const inosukeY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const inosukeScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  const tanjiroY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const tanjiroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  
  const zenitsuX = useTransform(scrollYProgress, [0, 1], [0, -70])
  const zenitsuY = useTransform(scrollYProgress, [0, 1], [0, 75])
  const zenitsuScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  
  const nezukoY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const nezukoScale = useTransform(scrollYProgress, [0, 1], [1, 1.13])
  
  const circleScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 15])

  return (
    <div ref={containerRef} className="relative h-screen max-w-screen overflow-hidden bg-black">
      {/* 1. The Image Layer */}
      <img 
        src={img1} 
        alt="Infinity Castle"
        className="h-full w-full object-cover brightness-[0.7] contrast-[1.1]" 
      />

      {/* 2. The Aggressive Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
      
      {/* 3. Red "Rage" Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      
      {/* 4. Subtle Noise or Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Center Logo Circle */}
      <motion.img
  src={circle}
  // Changed w-110 to a responsive scale: 
  // w-64 (256px) on mobile, w-80 (320px) on tablets, w-110 (440px) on desktop
  className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-110 z-50"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  style={{ scale: circleScale, rotate: circleRotate }}
/>

      {/* Rengoku */}
      <motion.img
        src={rengoku}
        className="absolute left-[calc(50%-15vw)] top-[calc(50%-15vh)] -translate-x-1/2 -translate-y-1/2 w-[600px] z-40"
        alt="Rengoku"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ x: rengokuX, y: rengokuY, scale: rengokuScale }}
      />
      
      {/* Giyu */}
      <motion.img
        src={giyu}
        className="absolute left-[calc(50%+15vw)] top-[calc(50%-15vh)] -translate-x-1/2 -translate-y-1/2 w-[600px] z-40"
        alt="Giyu"
        initial={{ opacity: 0, x: 100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        style={{ x: giyuX, y: giyuY, scale: giyuScale }}
      />

      {/* Inosuke */}
      <motion.img
        src={inosuke}
        className="absolute left-[calc(50%+15vw)] top-[calc(50%+15vh)] -translate-x-1/2 -translate-y-1/2 w-[300px] z-40"
        alt="Inosuke"
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        style={{ x: inosukeX, y: inosukeY, scale: inosukeScale }}
      />

      {/* Tanjiro */}
      <motion.img
        src={tanjiro}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[10%] w-[380px] z-70"
        alt="Tanjiro"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        style={{ y: tanjiroY, scale: tanjiroScale }}
      />

      {/* Zenitsu - Bottom Left */}
      <motion.img
        src={zenitsu}
        className="absolute left-[calc(50%-15vw)] top-[calc(50%+15vh)] -translate-x-1/2 -translate-y-1/2 w-[300px] z-40"
        alt="Zenitsu"
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ x: zenitsuX, y: zenitsuY, scale: zenitsuScale }}
      />

      {/* Nezuko - Top */}
      <motion.img
        src={nezuko}
        className="absolute left-1/2 top-[calc(50%-30vh)] -translate-x-1/2 -translate-y-1/2 w-[280px] z-40"
        alt="Nezuko"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        style={{ y: nezukoY, scale: nezukoScale }}
      />

     <img
  src={hackureka}
  // w-64 (256px) for mobile, w-96 (384px) for tablets, w-160 (640px) for desktop
  className="absolute z-80 inset-0 w-64 sm:w-96 md:w-160 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
  alt="Hackureka Logo"
/>
      {/* <h1 color="#000000">HackurekA</h1> */}
    </div>
  );
}

export default Hero;