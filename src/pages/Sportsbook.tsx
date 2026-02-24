import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { BetSlip } from "@/components/BetSlip";
import { MatchCard } from "@/components/MatchCard";
import { BetProvider } from "@/context/BetContext";
import { Button } from "@/components/ui/button";
import { Filter, Menu } from "lucide-react";
import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const allMatches = [
  {
    id: "1",
    sport: "Cricket",
    league: "IPL",
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    time: "Live • 1st Innings",
    status: "Live",
    odds: { home: 1.85, draw: 12.0, away: 1.95 }
  },
  {
    id: "2",
    sport: "Football",
    league: "Premier League",
    team1: "Manchester City",
    team2: "Arsenal",
    time: "Today • 20:00",
    status: "Today",
    odds: { home: 2.10, draw: 3.40, away: 3.20 }
  },
  {
    id: "3",
    sport: "MMA",
    league: "UFC 300",
    team1: "Pereira",
    team2: "Hill",
    time: "Tomorrow • 04:00",
    status: "Tomorrow",
    odds: { home: 1.72, draw: 50.0, away: 2.15 }
  },
  {
    id: "4",
    sport: "Basketball",
    league: "NBA",
    team1: "Lakers",
    team2: "Warriors",
    time: "Tomorrow • 06:00",
    status: "Tomorrow",
    odds: { home: 1.90, draw: 15.0, away: 1.90 }
  },
  {
    id: "5",
    sport: "Cricket",
    league: "T20 Blast",
    team1: "Surrey",
    team2: "Kent",
    time: "Today • 18:30",
    status: "Today",
    odds: { home: 1.65, draw: 15.0, away: 2.20 }
  },
  {
    id: "6",
    sport: "Football",
    league: "Champions League",
    team1: "Real Madrid",
    team2: "Bayern Munich",
    time: "Live • 75'",
    status: "Live",
    odds: { home: 1.45, draw: 4.20, away: 6.50 }
  }
];

const SportsbookContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Live");
  const { "*": sportPath } = useParams();

  const currentSport = useMemo(() => {
    if (!sportPath) return "All Sports";
    return sportPath.charAt(0).toUpperCase() + sportPath.slice(1);
  }, [sportPath]);

  const filteredMatches = useMemo(() => {
    let matches = allMatches;

    // Filter by Sport if in a subroute
    if (sportPath && sportPath !== "live" && sportPath !== "favorites") {
      matches = matches.filter(m => m.sport.toLowerCase() === sportPath.toLowerCase());
    } else if (sportPath === "live") {
      matches = matches.filter(m => m.status === "Live");
    }

    // Filter by Time status (Live, Today, Tomorrow)
    if (activeFilter === "Live") {
      return matches.filter(m => m.status === "Live");
    } else if (activeFilter === "Today") {
      return matches.filter(m => m.status === "Today");
    } else if (activeFilter === "Tomorrow") {
      return matches.filter(m => m.status === "Tomorrow");
    }

    return matches;
  }, [sportPath, activeFilter]);

  return (
    <Layout>
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 relative">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 py-6 min-w-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-legacy-green-800/60 border border-legacy-gold-500/20 text-gray-300 hover:text-white hover:bg-legacy-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all"
              >
                <Menu className="h-4 w-4" />
                Sports
              </button>
              <h1 className="text-3xl font-serif font-bold text-white">
                {currentSport === "All Sports" ? "Sportsbook" : currentSport}
              </h1>
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {["Live", "Today", "Tomorrow", "Outrights"].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "gold" : "ghost"}
                  size="sm"
                  className={cn(
                    "rounded-full flex-shrink-0 transition-all",
                    activeFilter !== filter && "text-gray-400 hover:text-white"
                  )}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
              <div className="w-px h-6 bg-white/10 mx-2" />
              <Button variant="outline" size="icon" className="rounded-full border-white/10 text-gray-400 flex-shrink-0">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden relative h-64 border border-legacy-gold-500/20 group">
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
              alt="Featured Match"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-legacy-green-900 via-legacy-green-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-legacy-gold-400 font-bold tracking-widest text-xs uppercase mb-2 block">Match of the Day</span>
                  <h2 className="text-3xl font-serif font-bold text-white mb-1">Real Madrid vs Barcelona</h2>
                  <p className="text-gray-300 text-sm">El Clásico • La Liga • Today 21:00</p>
                </div>
                <Button variant="gold">View Markets</Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-legacy-gold-500 mr-3 rounded-full" />
              {activeFilter} Matches {sportPath && `in ${currentSport}`}
            </h3>

            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))
            ) : (
              <div className="py-20 text-center bg-legacy-green-800/20 rounded-2xl border border-dashed border-white/10">
                <p className="text-gray-500">No {activeFilter.toLowerCase()} matches found for this selection.</p>
              </div>
            )}
          </div>
        </main>

        <BetSlip />
      </div>
    </Layout>
  );
};

export const Sportsbook = () => {
  return (
    <BetProvider>
      <SportsbookContent />
    </BetProvider>
  );
};
