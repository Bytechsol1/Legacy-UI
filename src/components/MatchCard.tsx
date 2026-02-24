import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useBets } from '@/context/BetContext';
import { useOdds } from '@/context/OddsContext';
import { formatOdds } from '@/lib/odds';
import React from 'react';

export interface MatchProps {
  id: string;
  sport: string;
  league: string;
  team1: string;
  team2: string;
  time: string;
  odds: { home: number; draw: number; away: number };
}

export const MatchCard: React.FC<{ match: MatchProps }> = ({ match }) => {
  const { addBet } = useBets();
  const { oddsFormat } = useOdds();

  const handleBet = (selection: string, odds: number) => {
    addBet({
      matchId: match.id,
      matchName: `${match.team1} vs ${match.team2}`,
      selection,
      odds,
    });
  };

  return (
    <Card className="bg-legacy-green-800/40 border-legacy-gold-500/10 hover:border-legacy-gold-500/30 transition-all group">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">{match.league}</span>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs text-red-400 font-medium">LIVE</span>
            </div>
          </div>
          <span className="text-xs text-gray-400 font-mono">{match.time}</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">{match.team1}</h3>
          </div>
          <div className="px-4 text-xs text-gray-500 font-serif italic">VS</div>
          <div className="flex-1 text-right">
            <h3 className="text-white font-bold text-lg mb-1">{match.team2}</h3>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Home */}
          <Button
            variant="outline"
            className="h-10 bg-legacy-green-900/50 border-legacy-green-700 hover:bg-legacy-gold-500 hover:text-legacy-black hover:border-legacy-gold-500 transition-all group/btn"
            onClick={() => handleBet(match.team1, match.odds.home)}
          >
            <span className="flex items-center justify-between w-full px-2">
              <span className="text-[10px] text-gray-500 group-hover/btn:text-legacy-black/60">1</span>
              <span className="font-mono font-bold">{formatOdds(match.odds.home, oddsFormat)}</span>
            </span>
          </Button>

          {/* Draw */}
          <Button
            variant="outline"
            className="h-10 bg-legacy-green-900/50 border-legacy-green-700 hover:bg-legacy-gold-500 hover:text-legacy-black hover:border-legacy-gold-500 transition-all group/btn"
            onClick={() => handleBet('Draw', match.odds.draw)}
          >
            <span className="flex items-center justify-between w-full px-2">
              <span className="text-[10px] text-gray-500 group-hover/btn:text-legacy-black/60">X</span>
              <span className="font-mono font-bold">{formatOdds(match.odds.draw, oddsFormat)}</span>
            </span>
          </Button>

          {/* Away */}
          <Button
            variant="outline"
            className="h-10 bg-legacy-green-900/50 border-legacy-green-700 hover:bg-legacy-gold-500 hover:text-legacy-black hover:border-legacy-gold-500 transition-all group/btn"
            onClick={() => handleBet(match.team2, match.odds.away)}
          >
            <span className="flex items-center justify-between w-full px-2">
              <span className="text-[10px] text-gray-500 group-hover/btn:text-legacy-black/60">2</span>
              <span className="font-mono font-bold">{formatOdds(match.odds.away, oddsFormat)}</span>
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};
