import { Layout } from "@/components/Layout";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Search, Dices, Crown, Flame, Sparkles, Table2 } from "lucide-react";
import { motion } from "motion/react";
import { useState, useMemo } from "react";

const categories = [
  { name: "All Games", icon: Dices },
  { name: "Slots", icon: Sparkles },
  { name: "Live Casino", icon: Crown },
  { name: "Jackpots", icon: Flame },
  { name: "Table Games", icon: Table2 },
];

// ── Game data ───────────────────────────────────────────────────────────────
const slotsGames = [
  {
    id: 1,
    title: "Legacy of Dead",
    provider: "Play'n GO",
    rtp: "96.58%",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=600&auto=format&fit=crop",
    isHot: true,
    category: "Slots",
  },
  {
    id: 2,
    title: "Starburst",
    provider: "NetEnt",
    rtp: "96.09%",
    image: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    category: "Slots",
  },
  {
    id: 3,
    title: "Book of Dead",
    provider: "Play'n GO",
    rtp: "96.21%",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600&auto=format&fit=crop",
    category: "Slots",
  },
  {
    id: 7,
    title: "Fire Joker",
    provider: "Play'n GO",
    rtp: "96.15%",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
    category: "Slots",
  },
];

const liveCasinoGames = [
  {
    id: 10,
    title: "Blackjack VIP",
    provider: "Evolution Gaming",
    rtp: "99.29%",
    image: "https://images.unsplash.com/photo-1541278107931-e006523892df?q=80&w=600&auto=format&fit=crop",
    isHot: true,
    category: "Live Casino",
  },
  {
    id: 11,
    title: "Baccarat Royale",
    provider: "Evolution Gaming",
    rtp: "98.94%",
    image: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    category: "Live Casino",
  },
  {
    id: 12,
    title: "Live Roulette",
    provider: "Playtech",
    rtp: "97.30%",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=600&auto=format&fit=crop",
    category: "Live Casino",
  },
  {
    id: 13,
    title: "Dream Catcher",
    provider: "Evolution Gaming",
    rtp: "96.58%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILKIzO_sO8YIcp03RM9R7gULz8K_gd2V9SA&s",
    category: "Live Casino",
  },
];

const jackpotGames = [
  {
    id: 20,
    title: "Mega Moolah",
    provider: "Microgaming",
    rtp: "88.12%",
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=600&auto=format&fit=crop",
    isHot: true,
    category: "Jackpots",
  },
  {
    id: 21,
    title: "Wolf Gold",
    provider: "Pragmatic Play",
    rtp: "96.01%",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=600&auto=format&fit=crop",
    category: "Jackpots",
  },
  {
    id: 22,
    title: "Age of Gods",
    provider: "Playtech",
    rtp: "95.02%",
    image: "https://images.unsplash.com/photo-1549492423-400259a2e574?q=80&w=600&auto=format&fit=crop",
    isNew: true,
    category: "Jackpots",
  },
];

const tableGames = [
  {
    id: 30,
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    rtp: "96.48%",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop",
    category: "Table Games",
  },
  {
    id: 31,
    title: "Gonzo's Quest",
    provider: "NetEnt",
    rtp: "95.97%",
    image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=600&auto=format&fit=crop",
    category: "Table Games",
  },
  {
    id: 32,
    title: "Texas Hold'em",
    provider: "Evolution Gaming",
    rtp: "97.84%",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop",
    isHot: true,
    category: "Table Games",
  },
];

const allGames = [...slotsGames, ...liveCasinoGames, ...jackpotGames, ...tableGames];

// ── Section component ────────────────────────────────────────────────────────
interface GameSectionProps {
  title: string;
  games: typeof allGames;
  category?: string;
  onViewAll?: (cat: string) => void;
}

const GameSection = ({ title, games, category, onViewAll }: GameSectionProps) => (
  <div className="mb-12">
    <div className="flex justify-between items-end mb-6">
      <h2 className="text-2xl font-serif font-bold text-white">{title}</h2>
      {onViewAll && category && (
        <button
          onClick={() => onViewAll(category)}
          className="text-legacy-gold-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
        >
          View All
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      )}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
export const Casino = () => {
  const [activeCategory, setActiveCategory] = useState("All Games");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allGames.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.provider.toLowerCase().includes(q)
      );
    }
    if (activeCategory === "All Games") return null; // null = show all sections
    return allGames.filter((g) => g.category === activeCategory);
  }, [activeCategory, searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[440px] overflow-hidden -mt-20 pt-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-legacy-green-900 via-legacy-green-900/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-legacy-gold-400 font-bold tracking-widest uppercase mb-2 block">
                Exclusive Premiere
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                ROYAL <br />
                <span className="text-gold-gradient">FORTUNE</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Experience the thrill of our newest high-stakes slot with a
                progressive jackpot starting at $1,000,000.
              </p>
              <div className="flex gap-4">
                <Button variant="gold" size="lg" className="shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  Play Now
                </Button>
                <Button variant="outline" size="lg">
                  Demo Mode
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

          {/* Category Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name && !isSearching;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setSearchQuery("");
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${isActive
                    ? "bg-legacy-gold-500 text-legacy-black shadow-lg shadow-legacy-gold-500/30 scale-105"
                    : "bg-legacy-green-800/50 text-gray-400 hover:text-white hover:bg-legacy-green-800"
                    }`}
                >
                  <cat.icon className="h-4 w-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-legacy-black/30 border border-legacy-gold-500/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-legacy-gold-500/50 transition-colors"
            />
            {isSearching && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        {isSearching ? (
          // Search Results
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-serif font-bold text-white">
                Search Results
                <span className="ml-3 text-sm font-sans text-gray-400 font-normal">
                  "{searchQuery}" — {filteredGames!.length} game{filteredGames!.length !== 1 ? "s" : ""} found
                </span>
              </h2>
            </div>
            {filteredGames!.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredGames!.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <Search className="h-12 w-12 text-gray-600 mb-4" />
                <h3 className="text-xl font-serif text-gray-400 mb-2">No games found</h3>
                <p className="text-gray-600 text-sm">
                  Try searching for a different game name or provider.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-6 text-legacy-gold-400 hover:text-white text-sm underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        ) : activeCategory === "All Games" ? (
          // All Sections
          <>
            <GameSection title="Popular Slots" games={slotsGames} category="Slots" onViewAll={setActiveCategory} />
            <GameSection title="Live Casino" games={liveCasinoGames} category="Live Casino" onViewAll={setActiveCategory} />
            <GameSection title="Jackpots" games={jackpotGames} category="Jackpots" onViewAll={setActiveCategory} />
            <GameSection title="Table Games" games={tableGames} category="Table Games" onViewAll={setActiveCategory} />
          </>
        ) : (
          // Filtered by category
          <GameSection
            title={activeCategory}
            games={filteredGames!}
          />
        )}

      </main>
    </Layout>
  );
};
