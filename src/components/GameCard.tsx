import { Button } from "@/components/ui/button";
import { Play, Info, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface GameCardProps {
  title: string;
  provider: string;
  rtp: string;
  image: string;
  isNew?: boolean;
  isHot?: boolean;
  [key: string]: any; // Allow other props
}

export const GameCard = ({ title, provider, rtp, image, isNew, isHot }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group rounded-xl overflow-hidden border border-legacy-gold-500/10 bg-legacy-green-800/50 shadow-lg"
    >
      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-legacy-gold-500 text-legacy-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-md">
              New
            </span>
          )}
          {isHot && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-md flex items-center gap-1">
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" /> Hot
            </span>
          )}
        </div>

        {/* Overlay */}
        <div className={`absolute inset-0 bg-legacy-green-900/90 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-white font-serif font-bold text-lg text-center mb-1">{title}</h3>
          <p className="text-legacy-gold-400 text-xs uppercase tracking-wider mb-4">{provider}</p>
          
          <div className="flex gap-2 w-full">
            <Button variant="gold" size="sm" className="flex-1 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Play className="h-3 w-3 mr-1" /> Play
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-white/20 hover:bg-white/10 text-white">
              <Heart className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="mt-4 flex items-center justify-between w-full text-[10px] text-gray-400 border-t border-white/10 pt-2">
            <span>RTP: {rtp}</span>
            <Info className="h-3 w-3 hover:text-white cursor-help" />
          </div>
        </div>
      </div>

      {/* Footer Info (Visible when not hovered) */}
      <div className={`p-3 transition-opacity duration-300 ${isHovered ? 'opacity-0 absolute bottom-0 w-full pointer-events-none' : 'opacity-100'}`}>
        <h4 className="text-white font-medium text-sm truncate">{title}</h4>
        <p className="text-gray-500 text-xs truncate">{provider}</p>
      </div>
    </motion.div>
  );
};
