import img1 from "../assets/Infinity castle desktop wallpaper 1 (1).png"

function Hero() {
  return (
    <div className="relative h-screen max-w-screen overflow-hidden bg-black">
      {/* 1. The Image Layer */}
      <img 
        src={img1} 
        alt="Infinity Castle"
        className="h-full w-full object-cover brightness-[0.7] contrast-[1.1]" 
      />

      {/* 2. The Aggressive Dark Overlay */}
      {/* Using a radial gradient to keep the center slightly visible while edges are dark */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
      
      {/* 3. Red "Rage" Vignette (Optional, matches your theme) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      
      {/* 4. Subtle Noise or Texture (To match the 'grit' of the cards) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}

export default Hero;