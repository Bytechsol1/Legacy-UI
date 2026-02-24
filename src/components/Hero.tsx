import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Trophy, Play, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo.png';

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 pb-8">
      {/* Background with Vignette */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-legacy-green-900/80 via-legacy-green-900/50 to-legacy-green-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A2E24_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-0 flex justify-center"
        >
          <img
            src={logoImg}
            alt="Legacy Casino"
            className="h-36 sm:h-44 md:h-52 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight"
        >
          THE PINNACLE OF <br />
          <span className="text-gold-gradient">LUXURY GAMING</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          Sportsbook. Live Casino. Slots. VIP Rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
            JOIN THE LEGACY
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-legacy-gold-500/50 text-legacy-gold-400 hover:bg-legacy-gold-500/10">
            EXPLORE PLATFORM
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
