/**
 * Converts decimal odds to the requested format.
 *
 * Decimal: raw value e.g. 1.91, 2.50
 * American: negative underdog/favorite e.g. -110, +150
 */
export type OddsFormat = 'decimal' | 'american';

export function formatOdds(decimal: number, format: OddsFormat): string {
    if (format === 'decimal') {
        return decimal.toFixed(2);
    }

    // American (Moneyline) conversion
    if (decimal >= 2.0) {
        const american = Math.round((decimal - 1) * 100);
        return `+${american}`;
    } else {
        const american = Math.round(-100 / (decimal - 1));
        return `${american}`; // already negative
    }
}
