import React, { createContext, useContext, useState } from 'react';
import { OddsFormat } from '@/lib/odds';

interface OddsContextType {
    oddsFormat: OddsFormat;
    toggleOddsFormat: () => void;
    setOddsFormat: (format: OddsFormat) => void;
    /** True when roulette should use American double-zero wheel */
    americanRoulette: boolean;
    toggleRouletteVariant: () => void;
}

const OddsContext = createContext<OddsContextType | undefined>(undefined);

export const OddsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Default to American odds as client requires
    const [oddsFormat, setOddsFormat] = useState<OddsFormat>('american');
    const [americanRoulette, setAmericanRoulette] = useState(true);

    const toggleOddsFormat = () =>
        setOddsFormat((prev) => (prev === 'american' ? 'decimal' : 'american'));

    const toggleRouletteVariant = () =>
        setAmericanRoulette((prev) => !prev);

    return (
        <OddsContext.Provider
            value={{ oddsFormat, toggleOddsFormat, setOddsFormat, americanRoulette, toggleRouletteVariant }}
        >
            {children}
        </OddsContext.Provider>
    );
};

/** Hook — use anywhere inside OddsProvider */
export const useOdds = () => {
    const ctx = useContext(OddsContext);
    if (!ctx) throw new Error('useOdds must be used within an OddsProvider');
    return ctx;
};
