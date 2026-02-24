import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Users, Video, Maximize2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const tables = [
  { id: 1, name: "Legacy Roulette", type: "Roulette", dealer: "Elena", limit: "$5 - $5,000", players: 142, image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "VIP Blackjack A", type: "Blackjack", dealer: "Marco", limit: "$50 - $10,000", players: 5, image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Speed Baccarat", type: "Baccarat", dealer: "Sarah", limit: "$1 - $1,000", players: 89, image: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Lightning Dice", type: "Dice", dealer: "David", limit: "$0.50 - $500", players: 230, image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop" },
];

export const LiveCasino = () => {
  const [filter, setFilter] = useState("All Tables");

  const filteredTables = filter === "All Tables" 
    ? tables 
    : tables.filter(table => table.type === filter);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white mb-2">Live Casino</h1>
            <p className="text-legacy-gold-400 uppercase tracking-widest text-sm">Real Dealers • Real Time • Real Luxury</p>
          </div>
          <div className="flex gap-2">
            {["All Tables", "Roulette", "Blackjack", "Baccarat"].map((category) => (
              <Button 
                key={category}
                variant={filter === category ? "gold" : "ghost"} 
                className={filter === category ? "" : "text-gray-400 hover:text-white"}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTables.map((table, index) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group rounded-xl overflow-hidden border border-legacy-gold-500/20 bg-legacy-black shadow-2xl">
                {/* Live Badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  <Video className="h-3 w-3 animate-pulse" /> Live
                </div>

                {/* Dealer Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={table.image} 
                    alt={table.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-legacy-black via-transparent to-transparent opacity-90" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="gold" className="rounded-full w-12 h-12 p-0 shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                      <Maximize2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold text-lg">{table.name}</h3>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Users className="h-3 w-3 mr-1" /> {table.players}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-700 overflow-hidden border border-white/20">
                      <img src={`https://i.pravatar.cc/150?u=${table.dealer}`} alt={table.dealer} />
                    </div>
                    <span className="text-sm text-gray-300">Dealer: <span className="text-white font-medium">{table.dealer}</span></span>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <span className="text-xs text-legacy-gold-400 font-mono">{table.limit}</span>
                    <Button variant="outline" size="sm" className="h-8 text-xs border-legacy-gold-500/30 hover:bg-legacy-gold-500 hover:text-legacy-black">
                      Join Table
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
