import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    title: "Legacy Gold",
    type: "Slot",
    rtp: "96.5%",
    image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "VIP Blackjack",
    type: "Table",
    rtp: "99.5%",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Royal Roulette",
    type: "Live",
    rtp: "97.3%",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Fortune Spins",
    type: "Slot",
    rtp: "95.8%",
    image: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=1000&auto=format&fit=crop",
  },
];

export const FeaturedGames = () => {
  return (
    <section className="py-20 bg-legacy-green-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-legacy-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Featured Games</h2>
            <p className="text-legacy-gold-400 uppercase tracking-widest text-sm">Curated for the Elite</p>
          </div>
          <Link to="/casino">
            <Button variant="outline" className="hidden sm:flex">View All Games</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative border border-legacy-gold-500/10 group-hover:border-legacy-gold-500/50 transition-all duration-300">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-legacy-black/90 via-transparent to-transparent opacity-80" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-legacy-gold-400 uppercase tracking-wider">{game.type}</span>
                    <span className="text-xs text-gray-400 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">RTP {game.rtp}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-serif">{game.title}</h3>
                  <Button variant="gold" size="sm" className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-4 w-4 mr-2" /> Play Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
