import React, { useState, useRef,   } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicFile from "../assets/Timeline 1.mp3"; // Add your audio file here

const GlobalAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle the browser's autoplay block
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
// useEffect(() => {
//   const startAudio = () => {
//     if (!isPlaying) togglePlay();
//     window.removeEventListener("click", startAudio);
//   };
//   window.addEventListener("click", startAudio);
//   return () => window.removeEventListener("click", startAudio);
// }, [isPlaying]);
  return (
    <div className="fixed bottom-6 left-6 z-100 flex items-center gap-3 group">
      <audio ref={audioRef} src={musicFile} loop />
      
      {/* Visualizer / Status */}
      <div className="flex gap-0.5 items-end h-3 mb-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-0.5 bg-red-600 transition-all duration-300 ${
              isPlaying ? "animate-pulse h-full" : "h-[20%]"
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      <button
        onClick={togglePlay}
        className="relative w-10 h-10 border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center hover:border-red-600 transition-all group"
      >
        {/* Diamond frame to match your timeline hubs */}
        <div className="absolute inset-0 border border-red-600 opacity-0 group-hover:opacity-100 rotate-45 scale-75 group-hover:scale-110 transition-all duration-500" />
        
        {isPlaying ? (
          <Volume2 size={16} className="text-red-500" />
        ) : (
          <VolumeX size={16} className="text-neutral-500" />
        )}
      </button>

      <span className="font-mono text-[8px] tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
        {isPlaying ? "AUDIO_LIVE" : "AUDIO_MUTED"}
      </span>
    </div>
  );
};

export default GlobalAudio;