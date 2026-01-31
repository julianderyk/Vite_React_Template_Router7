/**
 * useTranslation Hook
 * 
 * Reaktiver Hook für i18n, der automatisch neu rendert wenn sich die Sprache ändert
 * Verwendet den LanguageContext um auf Sprachänderungen zu reagieren
 */

import { useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t as translateFn } from '../lib/i18n';

/**
 * useTranslation Hook
 * 
 * Gibt eine Übersetzungsfunktion zurück, die automatisch auf Sprachänderungen reagiert.
 * Wenn sich die Sprache im LanguageContext ändert, wird die Komponente automatisch neu gerendert.
 * 
 * @returns {Function} t - Übersetzungsfunktion
 * 
 * @example
 * function MyComponent() {
 *   const t = useTranslation();
 *   
 *   return (
 *     <div>
 *       <h1>{t('common.loading')}</h1>
 *       <p>{t('common.refreshEvery', { seconds: 10 })}</p>
 *     </div>
 *   );
 * }
 */
export const useTranslation = () => {
    // Hole die aktuelle Sprache aus dem Context
    // Wenn sich die Sprache ändert, wird diese Komponente automatisch neu gerendert
    const { language } = useLanguage();

    // Erstelle eine Übersetzungsfunktion, die die aktuelle Sprache verwendet
    const t = useCallback(
        (key, replacements = {}) => {
            return translateFn(key, language, replacements);
        },
        [language] // Re-create wenn sich die Sprache ändert
    );

    return t;
};
