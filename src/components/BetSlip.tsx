import { useBets } from '@/context/BetContext';
import { useOdds } from '@/context/OddsContext';
import { formatOdds } from '@/lib/odds';
import { Button } from '@/components/ui/button';
import { X, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const BetSlip = () => {
  const { bets, removeBet, updateStake, isOpen, toggleBetSlip, clearBets } = useBets();
  const { oddsFormat } = useOdds();
  const [isMinimized, setIsMinimized] = useState(false);

  const totalStake = bets.reduce((acc, bet) => acc + (bet.stake || 0), 0);
  const totalPotentialReturn = bets.reduce((acc, bet) => acc + (bet.stake || 0) * bet.odds, 0);

  if (!isOpen && bets.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className={cn(
            "fixed right-0 top-20 bottom-0 w-80 bg-legacy-black border-l border-legacy-gold-500/20 shadow-2xl z-40 flex flex-col",
            isMinimized ? "h-auto bottom-auto rounded-bl-xl border-b" : ""
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-legacy-green-900/50 border-b border-legacy-gold-500/10">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-legacy-gold-500 text-legacy-black flex items-center justify-center font-bold text-xs">
                {bets.length}
              </div>
              <h3 className="font-serif font-bold text-legacy-gold-400">BET SLIP</h3>
            </div>
            <div className="flex items-center space-x-1">
              <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:text-white text-gray-400">
                {isMinimized ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </button>
              <button onClick={toggleBetSlip} className="p-1 hover:text-white text-gray-400">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Bets List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {bets.length === 0 ? (
                  <div className="text-center text-gray-500 py-10">
                    Your bet slip is empty.
                  </div>
                ) : (
                  bets.map((bet) => (
                    <div key={bet.id} className="bg-legacy-green-800/30 rounded-lg p-3 border border-legacy-gold-500/10 relative group">
                      <button
                        onClick={() => removeBet(bet.id)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      <div className="pr-6">
                        <div className="text-xs text-legacy-gold-400 font-bold mb-1">{bet.selection} @ {formatOdds(bet.odds, oddsFormat)}</div>
                        <div className="text-xs text-gray-300 mb-2">{bet.matchName}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">$</span>
                        <input
                          type="number"
                          placeholder="Stake"
                          className="w-full bg-legacy-black/50 border border-legacy-gold-500/20 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-legacy-gold-500/50"
                          value={bet.stake || ''}
                          onChange={(e) => updateStake(bet.id, parseFloat(e.target.value))}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-xs">
                        <span className="text-gray-500">To Return:</span>
                        <span className="text-legacy-success font-bold">${((bet.stake || 0) * bet.odds).toFixed(2)}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-4 bg-legacy-green-900/80 border-t border-legacy-gold-500/20 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Stake</span>
                  <span className="text-white font-bold">${totalStake.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Potential Return</span>
                  <span className="text-legacy-gold-400 font-bold">${totalPotentialReturn.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Button variant="outline" size="sm" onClick={clearBets} className="border-red-900/50 text-red-400 hover:bg-red-900/20">
                    Clear All
                  </Button>
                  <Button variant="gold" size="sm" className="w-full shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    PLACE BET
                  </Button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
