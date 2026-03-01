/**
 * Zentrale Sprachkonfiguration
 * Definiert alle verfügbaren Sprachen mit Metadaten
 * 
 * Um eine neue Sprache hinzuzufügen:
 * 1. Füge einen neuen Eintrag in diesem Array hinzu
 * 2. Erstelle eine entsprechende JSON-Datei in app/locales/ (z.B. fr.json)
 * 3. Importiere die JSON-Datei in app/lib/i18n.js
 */
export const LANGUAGE_CONFIG = [
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        flag: 'circle-flags:uk',
        default: true
    },
    {
        code: 'de',
        name: 'German',
        nativeName: 'Deutsch',
        flag: 'circle-flags:de',
        default: false
    },
    {
        code: 'fr',
        name: 'French',
        nativeName: 'Français',
        flag: 'circle-flags:fr',
        default: false
    },
    {
        code: 'es',
        name: 'Spanish',
        nativeName: 'Español',
        flag: 'circle-flags:es',
        default: false
    },
    {
        code: 'pt',
        name: 'Portuguese',
        nativeName: 'Português',
        flag: 'circle-flags:pt',
        default: false
    },
];

/**
 * Gibt die Standard-Sprache zurück
 */
export const getDefaultLanguage = () => {
    return LANGUAGE_CONFIG.find(lang => lang.default)?.code || LANGUAGE_CONFIG[0].code;
};

/**
 * Gibt alle verfügbaren Sprachcodes zurück
 */
export const getAvailableLanguageCodes = () => {
    return LANGUAGE_CONFIG.map(lang => lang.code);
};

/**
 * Gibt die Sprachkonfiguration für einen bestimmten Code zurück
 */
export const getLanguageConfig = (code) => {
    return LANGUAGE_CONFIG.find(lang => lang.code === code);
};

/**
 * Prüft ob nur 2 Sprachen verfügbar sind (für Toggle vs. Dropdown)
 */
export const hasOnlyTwoLanguages = () => {
    return LANGUAGE_CONFIG.length === 2;
};

// HMR: Akzeptiere Updates und erzwinge Full Reload bei Änderungen
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('[HMR] languages.js wurde geändert - Full Reload...');
        window.location.reload();
    });
}
