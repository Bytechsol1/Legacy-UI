import {
  Trophy, Flame, Calendar, Star,
  Swords, Target, Activity, MonitorPlay,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const sports = [
  { name: 'Live', icon: Activity, path: '/sports/live', color: 'text-red-500' },
  { name: 'Favorites', icon: Star, path: '/sports/favorites', color: 'text-legacy-gold-400' },
  { name: 'Cricket', icon: Trophy, path: '/sports/cricket' },
  { name: 'Football', icon: Trophy, path: '/sports/football' },
  { name: 'Basketball', icon: Trophy, path: '/sports/basketball' },
  { name: 'Boxing', icon: Flame, path: '/sports/boxing', color: 'text-orange-400' },
  { name: 'MMA', icon: Swords, path: '/sports/mma' },
  { name: 'Taekwondo', icon: Target, path: '/sports/taekwondo' },
  { name: 'Karate', icon: Target, path: '/sports/karate' },
  { name: 'Tennis', icon: Trophy, path: '/sports/tennis' },
  { name: 'Esports', icon: MonitorPlay, path: '/sports/esports' },
];

const SidebarContent = ({ onClose }: { onClose?: () => void }) => {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full">
      {/* Header (drawer only) */}
      {onClose && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-legacy-gold-500/10">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sports Menu</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className="p-4 flex-1 overflow-y-auto">
        {!onClose && (
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Sports</h3>
        )}
        <div className="space-y-1">
          {sports.map((sport) => (
            <Link
              key={sport.name}
              to={sport.path}
              onClick={onClose}
              className={cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                location.pathname === sport.path
                  ? "bg-legacy-gold-500/10 text-legacy-gold-400 border border-legacy-gold-500/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <sport.icon className={cn("h-4 w-4 transition-colors", sport.color || "group-hover:text-legacy-gold-400")} />
              <span>{sport.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-legacy-gold-500/10">
        <div className="bg-legacy-green-800/50 rounded-xl p-4 border border-legacy-gold-500/10">
          <h4 className="text-legacy-gold-400 font-serif font-bold mb-2">VIP Boost</h4>
          <p className="text-xs text-gray-400 mb-3">Get 10% extra on parlays with 3+ legs.</p>
          <button className="text-xs text-white underline hover:text-legacy-gold-400">View Details</button>
        </div>
      </div>
    </div>
  );
};

interface SidebarProps {
  /** For mobile/tablet use: drawer mode */
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar — visible only on lg+ */}
      <div className="w-64 bg-legacy-green-900 border-r border-legacy-gold-500/10 hidden lg:block h-[calc(100vh-80px)] sticky top-20 overflow-y-auto flex-shrink-0">
        <SidebarContent />
      </div>

      {/* Tablet/Mobile Drawer — animated slide-in */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 left-0 h-full w-72 bg-legacy-green-900 border-r border-legacy-gold-500/20 z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <SidebarContent onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
