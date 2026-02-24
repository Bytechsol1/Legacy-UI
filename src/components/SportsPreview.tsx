import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const matches = [
  {
    id: 1,
    sport: "Cricket",
    league: "IPL",
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    time: "Live • 1st Innings",
    odds: { home: 1.85, draw: 12.0, away: 1.95 }
  },
  {
    id: 2,
    sport: "Football",
    league: "Premier League",
    team1: "Manchester City",
    team2: "Arsenal",
    time: "Today • 20:00",
    odds: { home: 2.10, draw: 3.40, away: 3.20 }
  },
  {
    id: 3,
    sport: "MMA",
    league: "UFC 300",
    team1: "Pereira",
    team2: "Hill",
    time: "Tomorrow • 04:00",
    odds: { home: 1.72, draw: 50.0, away: 2.15 }
  }
];

export const SportsPreview = () => {
  return (
    <section className="py-20 bg-legacy-green-800/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-legacy-green-900 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Live Sports Action</h2>
            <p className="text-legacy-gold-400 uppercase tracking-widest text-sm">Premium Odds & Markets</p>
          </div>
          <Link to="/sports">
            <Button variant="outline" className="hidden sm:flex">Open Sportsbook</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-legacy-green-900/80 border-legacy-gold-500/10 hover:border-legacy-gold-500/40 transition-colors group h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-legacy-gold-400 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        {match.sport} • {match.league}
                      </span>
                      <span className="text-xs text-gray-400">{match.time}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-lg font-bold text-white">{match.team1}</div>
                      <div className="text-xs text-gray-500 px-2">VS</div>
                      <div className="text-lg font-bold text-white text-right">{match.team2}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-auto">
                    <Button variant="outline" className="h-12 flex flex-col items-center justify-center border-legacy-green-700 bg-legacy-green-800/50 hover:bg-legacy-gold-500 hover:text-legacy-black hover:border-legacy-gold-500 transition-all group/btn">
                      <span className="text-[10px] text-gray-400 uppercase group-hover/btn:text-legacy-black/70">1</span>
                      <span className="font-mono font-bold">{match.odds.home}</span>
                    </Button>
                    <Button variant="outline" className="h-12 flex flex-col items-center justify-center border-legacy-green-700 bg-legacy-green-800/50 hover:bg-legacy-gold-500 hover:text-legacy-black hover:border-legacy-gold-500 transition-all group/btn">
                      <span className="text-[10px] text-gray-400 uppercase group-hover/btn:text-legacy-black/70">X</span>
                      <span className="font-mono font-bold">{match.odds.draw}</span>
                    </Button>
                    <Button variant="outline" className="h-12 flex flex-col items-center justify-center border-legacy-green-700 bg-legacy-green-800/50 hover:bg-legacy-gold-500 hover:text-legacy-black hover:border-legacy-gold-500 transition-all group/btn">
                      <span className="text-[10px] text-gray-400 uppercase group-hover/btn:text-legacy-black/70">2</span>
                      <span className="font-mono font-bold">{match.odds.away}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
