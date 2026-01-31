import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility-Funktion zum Kombinieren von Tailwind-Klassen
 * Verwendet clsx für bedingte Klassen und tailwind-merge für die Auflösung von Konflikten
 * 
 * @param {...any} inputs - Beliebige Anzahl von Klassenstrings oder Objekten
 * @returns {string} - Zusammengeführter Klassenstring
 * 
 * @example
 * cn('px-4 py-2', isActive && 'bg-blue-500', { 'text-white': isActive })
 * // => 'px-4 py-2 bg-blue-500 text-white' (wenn isActive === true)
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
