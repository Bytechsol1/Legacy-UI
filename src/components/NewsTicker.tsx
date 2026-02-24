export const NewsTicker = () => {
  const oddsItems = [
    { match: "DJOKOVIC VS ALCARAZ", outcome: "Alcaraz Sets 3-1", odds: "+300", positive: true },
    { match: "REAL MADRID VS BARCELONA", outcome: "Both Score", odds: "-160", positive: false },
    { match: "LAL VS GSW", outcome: "LAL -3.5", odds: "-118", positive: false },
    { match: "MAN CITY VS ARSENAL", outcome: "Draw", odds: "+248", positive: true },
    { match: "JON JONES VS MIOCIC", outcome: "Jones KO/TKO", odds: "-185", positive: false },
    { match: "CELTICS VS HEAT", outcome: "Over 215.5", odds: "-110", positive: false },
    { match: "MCILROY VS SCHEFFLER", outcome: "Scheffler Win", odds: "+130", positive: true },
    { match: "NADAL VS SINNER", outcome: "Sinner -1.5 Sets", odds: "+175", positive: true },
    { match: "PATRIOTS VS EAGLES", outcome: "Eagles -6.5", odds: "-108", positive: false },
    { match: "CHELSEA VS LIVERPOOL", outcome: "BTTS + Over 2.5", odds: "+220", positive: true },
  ];

  // Duplicate for seamless infinite loop
  const allItems = [...oddsItems, ...oddsItems];

  return (
    <div
      className="relative w-full overflow-hidden z-10 mb-8"
      style={{ height: "44px", background: "rgba(5, 30, 22, 0.97)", borderTop: "1px solid rgba(212,175,55,0.12)", borderBottom: "1px solid rgba(212,175,55,0.12)" }}
    >
      {/* LIVE badge */}
      <div className="absolute left-0 top-0 h-full flex items-center z-20 pr-5 pl-4" style={{ background: "rgba(5, 30, 22, 0.97)", borderRight: "1px solid rgba(212,175,55,0.2)" }}>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">Live</span>
        </span>
      </div>

      {/* Gradient fade left */}
      <div className="absolute left-[72px] top-0 h-full w-10 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(5,30,22,0.97), transparent)" }} />

      {/* Scrolling track */}
      <div className="flex items-center h-full pl-[80px] overflow-hidden">
        <div className="news-ticker-track flex items-center whitespace-nowrap">
          {allItems.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              {/* Dot separator */}
              <span className="mx-6 w-1 h-1 rounded-full bg-emerald-500/50 inline-block flex-shrink-0" />

              {/* Match name */}
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-emerald-400 mr-2">
                {item.match}
              </span>

              {/* Outcome */}
              <span className="text-[11px] font-medium text-gray-300 mr-2">
                {item.outcome}
              </span>

              {/* Odds */}
              <span className={`text-[11px] font-bold ${item.positive ? "text-emerald-400" : "text-red-400"}`}>
                {item.odds}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Gradient fade right */}
      <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(5,30,22,0.97), transparent)" }} />
    </div>
  );
};
