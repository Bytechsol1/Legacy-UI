import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Bet {
  id: string;
  matchId: string;
  matchName: string;
  selection: string;
  odds: number;
  stake: number;
  type: 'single' | 'parlay';
}

interface BetContextType {
  bets: Bet[];
  addBet: (bet: Omit<Bet, 'id' | 'stake' | 'type'>) => void;
  removeBet: (id: string) => void;
  updateStake: (id: string, stake: number) => void;
  clearBets: () => void;
  isOpen: boolean;
  toggleBetSlip: () => void;
}

const BetContext = createContext<BetContextType | undefined>(undefined);

export const BetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bets, setBets] = useState<Bet[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addBet = (bet: Omit<Bet, 'id' | 'stake' | 'type'>) => {
    const newBet: Bet = {
      ...bet,
      id: Math.random().toString(36).substr(2, 9),
      stake: 0,
      type: 'single',
    };
    setBets((prev) => [...prev, newBet]);
    setIsOpen(true);
  };

  const removeBet = (id: string) => {
    setBets((prev) => prev.filter((bet) => bet.id !== id));
  };

  const updateStake = (id: string, stake: number) => {
    setBets((prev) =>
      prev.map((bet) => (bet.id === id ? { ...bet, stake } : bet))
    );
  };

  const clearBets = () => {
    setBets([]);
  };

  const toggleBetSlip = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BetContext.Provider value={{ bets, addBet, removeBet, updateStake, clearBets, isOpen, toggleBetSlip }}>
      {children}
    </BetContext.Provider>
  );
};

export const useBets = () => {
  const context = useContext(BetContext);
  if (context === undefined) {
    throw new Error('useBets must be used within a BetProvider');
  }
  return context;
};
