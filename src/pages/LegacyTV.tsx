import { Layout } from "@/components/Layout";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import {
    Tv2, Users, Radio, Heart, Share2, MessageSquare,
    ChevronRight, Eye, Send, Crown, Zap, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Types ─────────────────────────────────────────────────── */
interface Stream {
    id: number;
    title: string;
    streamer: string;
    game: string;
    viewers: number;
    thumbnail: string;
    youtubeId?: string;
    isLive: boolean;
    tags: string[];
    avatar: string;
}

interface ChatMessage {
    id: number;
    user: string;
    message: string;
    color: string;
    badge?: string;
}

/* ─── Data ───────────────────────────────────────────────────── */
const categories = ["All", "Sports Betting", "Poker", "Slots", "Live Casino", "Esports Odds", "Horse Racing"];

const streams: Stream[] = [
    {
        id: 1,
        title: "🏆 LIVE: Champions League — Real Madrid vs Man City | Best Odds Commentary",
        streamer: "LegacyBetPro",
        game: "Sports Betting",
        viewers: 24812,
        thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
        isLive: true,
        tags: ["Champions League", "Football", "Live Odds"],
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=LegacyBetPro&backgroundColor=d4af37",
    },
    {
        id: 2,
        title: "High Stakes Poker — $50,000 Buy-in | World Series Warm-up",
        streamer: "KingOfCards_",
        game: "Poker",
        viewers: 11430,
        thumbnail: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=800&auto=format&fit=crop",
        isLive: true,
        tags: ["Poker", "High Stakes"],
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=KingOfCards&backgroundColor=1a5c3f",
    },
    {
        id: 3,
        title: "Slot Sunday! Hunting for the BIG WIN 🎰 | Sweet Bonanza x500",
        streamer: "SpinQueenAria",
        game: "Slots",
        viewers: 8970,
        thumbnail: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop",
        isLive: true,
        tags: ["Slots", "Big Win", "Pragmatic"],
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SpinQueenAria&backgroundColor=8b5cf6",
    },
    {
        id: 4,
        title: "Live Roulette — American Table | VIP Session",
        streamer: "RouletteRoyale",
        game: "Live Casino",
        viewers: 5213,
        thumbnail: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=800&auto=format&fit=crop",
        isLive: true,
        tags: ["Roulette", "VIP", "Live Dealer"],
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Roulette&backgroundColor=c0392b",
    },
    {
        id: 5,
        title: "NBA Finals Odds Deep Dive — Celtics vs Lakers Preview",
        streamer: "BallBetAnalyst",
        game: "Sports Betting",
        viewers: 3841,
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
        isLive: true,
        tags: ["NBA", "Basketball", "Analysis"],
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=BallBet&backgroundColor=2980b9",
    },
    {
        id: 6,
        title: "Grand National Preview — Best Each-Way Bets 🐎",
        streamer: "HorsePowerTV",
        game: "Horse Racing",
        viewers: 2190,
        thumbnail: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=800&auto=format&fit=crop",
        isLive: true,
        tags: ["Racing", "Each-Way", "Horses"],
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=HorsePower&backgroundColor=a04000",
    },
];

const seedChat: ChatMessage[] = [
    { id: 1, user: "GoldVaultKing", message: "LFG Real Madrid!! 🔥", color: "#d4af37", badge: "👑" },
    { id: 2, user: "BetWizard99", message: "What odds you getting on Vini Jr anytime scorer?", color: "#60a5fa" },
    { id: 3, user: "SlotHunterXL", message: "Watching while crushing Sweet Bonanza 😂", color: "#a78bfa" },
    { id: 4, user: "LiveEdgePro", message: "Cash out early or let it ride? Chat decides!", color: "#34d399" },
    { id: 5, user: "LegacyCasinoVIP", message: "Just hit $500 on the live roulette table 🎉", color: "#d4af37", badge: "⭐" },
    { id: 6, user: "OddsWhisperer", message: "Man City defense looks shaky tonight ngl", color: "#fb923c" },
    { id: 7, user: "AceOfSpades__", message: "Can we get an odds check on both teams to score?", color: "#f87171" },
    { id: 8, user: "CasinoNightKing", message: "PD: @LegacyBetPro what platform are you using?", color: "#60a5fa" },
    { id: 9, user: "SpinOrNothin", message: "GOAAT stream 🐐", color: "#a78bfa" },
    { id: 10, user: "TheRealHouseEdge", message: "First goal under 30min at +180 looking tasty 👀", color: "#34d399" },
];

function formatViewers(n: number): string {
    return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : `${n}`;
}

/* ─── Live Chat Component ────────────────────────────────────── */
const LiveChat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>(seedChat);
    const [input, setInput] = useState("");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [messages]);

    // Simulate incoming messages
    useEffect(() => {
        const interval = setInterval(() => {
            const bots = [
                { user: "RandomPunter", message: "Anyone else backing the draw? 👀", color: "#94a3b8" },
                { user: "VIPHigh5", message: "Legacy Casino best platform 🏆", color: "#d4af37", badge: "👑" },
                { user: "ChipStackr", message: "+450 would be insane tonight", color: "#60a5fa" },
                { user: "LiveWireGambler", message: "siiiiuu!! 🔥🔥", color: "#f87171" },
            ];
            const random = bots[Math.floor(Math.random() * bots.length)];
            setMessages((prev) => [...prev.slice(-40), { ...random, id: Date.now() }]);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const send = () => {
        if (!input.trim()) return;
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), user: "You", message: input.trim(), color: "#d4af37" },
        ]);
        setInput("");
    };

    return (
        <div className="flex flex-col h-full bg-legacy-black/80 border border-legacy-gold-500/20 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-legacy-gold-500/15 bg-legacy-green-900/60">
                <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-legacy-gold-400" />
                    <span className="text-sm font-bold text-legacy-gold-400 tracking-wide">LIVE CHAT</span>
                </div>
                <span className="text-xs text-gray-500">{formatViewers(24812)} viewers</span>
            </div>

            {/* Messages */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-2 text-xs scrollbar-hide">
                {messages.map((msg) => (
                    <div key={msg.id} className="flex gap-1.5 items-start">
                        {msg.badge && <span>{msg.badge}</span>}
                        <span className="font-bold shrink-0" style={{ color: msg.color }}>{msg.user}:</span>
                        <span className="text-gray-300 break-words">{msg.message}</span>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-legacy-gold-500/15 bg-legacy-green-900/40">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && send()}
                        placeholder="Send a message..."
                        className="flex-1 bg-legacy-green-900/60 border border-legacy-gold-500/20 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-legacy-gold-500/50"
                    />
                    <button
                        onClick={send}
                        className="p-2 bg-legacy-gold-500 hover:bg-legacy-gold-400 rounded-lg text-legacy-black transition-colors"
                    >
                        <Send className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

/* ─── Stream Card Component ──────────────────────────────────── */
const StreamCard = ({ stream, onClick, featured = false }: { stream: Stream; onClick: () => void; featured?: boolean; key?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onClick={onClick}
        className={`cursor-pointer group ${featured ? "" : ""}`}
    >
        <div className="relative overflow-hidden rounded-xl border border-legacy-gold-500/10 hover:border-legacy-gold-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            {/* Media — YouTube iframe for featured, image for grid cards */}
            {featured && stream.youtubeId ? (
                <div className="w-full h-[340px] sm:h-[420px] overflow-hidden">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${stream.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${stream.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                        title={stream.title}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full object-cover scale-105"
                        style={{ border: 'none', pointerEvents: 'none' }}
                    />
                </div>
            ) : (
                <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${featured ? "h-[340px] sm:h-[420px]" : "h-44"}`}
                />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-legacy-black via-legacy-black/30 to-transparent" />

            {/* LIVE badge */}
            {stream.isLive && (
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-600 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-[10px] font-extrabold uppercase tracking-widest">Live</span>
                </div>
            )}

            {/* Viewers */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <Eye className="h-3 w-3 text-legacy-gold-400" />
                <span className="text-white text-[10px] font-bold">{formatViewers(stream.viewers)}</span>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-start gap-3">
                    <img src={stream.avatar} alt={stream.streamer} className="w-9 h-9 rounded-full border-2 border-legacy-gold-500/50 shrink-0 bg-legacy-green-800" />
                    <div className="min-w-0">
                        <p className={`font-bold text-white leading-tight mb-0.5 ${featured ? "text-lg" : "text-sm"} line-clamp-2`}>{stream.title}</p>
                        <p className="text-legacy-gold-400 text-xs font-semibold">{stream.streamer}</p>
                        <p className="text-gray-400 text-[11px]">{stream.game}</p>
                    </div>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {stream.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-legacy-green-900/80 border border-legacy-gold-500/20 text-legacy-gold-400 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

/* ─── Main Page ──────────────────────────────────────────────── */
export const LegacyTV = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [featuredStream, setFeaturedStream] = useState(streams[0]);

    const filtered = activeCategory === "All"
        ? streams
        : streams.filter((s) => s.game === activeCategory);

    const gridStreams = filtered.filter((s) => s.id !== featuredStream.id);

    return (
        <Layout>
            <div className="min-h-screen bg-legacy-green-900">

                {/* ── Hero Header ── */}
                <div className="relative pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-1"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-legacy-gold-500/10 border border-legacy-gold-500/30">
                            <Tv2 className="h-5 w-5 text-legacy-gold-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-white tracking-tight">Legacy <span className="text-gold-gradient">TV</span></h1>
                            <p className="text-gray-400 text-xs">Live streams • Sports commentary • Casino action</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 bg-red-600/20 border border-red-600/40 px-3 py-1.5 rounded-full">
                            <Radio className="h-3.5 w-3.5 text-red-400 animate-pulse" />
                            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">On Air</span>
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

                    {/* ── Category Filter ── */}
                    <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${activeCategory === cat
                                    ? "bg-legacy-gold-500 text-legacy-black border-legacy-gold-500"
                                    : "bg-legacy-green-800/50 text-gray-300 border-legacy-gold-500/20 hover:border-legacy-gold-500/50 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ── Featured Stream + Chat ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-10">

                        {/* Featured stream */}
                        <div>
                            <StreamCard stream={featuredStream} onClick={() => { }} featured />

                            {/* Action bar */}
                            <div className="flex items-center justify-between mt-4 px-1">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1.5 text-gray-400 hover:text-red-400 transition-colors text-sm">
                                        <Heart className="h-4 w-4" /> Follow
                                    </button>
                                    <button className="flex items-center gap-1.5 text-gray-400 hover:text-legacy-gold-400 transition-colors text-sm">
                                        <Share2 className="h-4 w-4" /> Share
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-legacy-gold-400" />
                                    <span className="text-sm font-bold text-white">{formatViewers(featuredStream.viewers)}</span>
                                    <span className="text-xs text-gray-500">watching</span>
                                </div>
                                <Button variant="gold" size="sm" className="shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                                    <Zap className="h-3 w-3 mr-1" /> Bet Now
                                </Button>
                            </div>
                        </div>

                        {/* Live Chat */}
                        <div className="h-[560px]">
                            <LiveChat />
                        </div>
                    </div>

                    {/* ── More Live Streams ── */}
                    {gridStreams.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                                    <Star className="h-5 w-5 text-legacy-gold-400" />
                                    More Live Streams
                                </h2>
                                <button className="text-legacy-gold-400 text-xs font-bold flex items-center gap-1 hover:text-legacy-gold-300">
                                    View All <ChevronRight className="h-3.5 w-3.5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {gridStreams.map((stream) => (
                                    <StreamCard
                                        key={stream.id}
                                        stream={stream}
                                        onClick={() => {
                                            setFeaturedStream(stream);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── VIP Promo Banner ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-14 rounded-2xl border border-legacy-gold-500/20 bg-gradient-to-r from-legacy-green-800/80 via-legacy-black/60 to-legacy-green-800/80 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-legacy-gold-500/10 border border-legacy-gold-500/30 flex items-center justify-center">
                                <Crown className="h-7 w-7 text-legacy-gold-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-white">Stream as a VIP Creator</h3>
                                <p className="text-gray-400 text-sm mt-0.5">Apply to host your own Legacy TV channel and earn rewards every stream.</p>
                            </div>
                        </div>
                        <Button variant="gold" size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(212,175,55,0.3)] whitespace-nowrap">
                            Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </motion.div>

                </div>
            </div>
        </Layout>
    );
};
