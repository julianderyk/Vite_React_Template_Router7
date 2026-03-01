/**
 * Internationalization (i18n) System
 * Laden von Übersetzungen aus JSON-Dateien
 */

import enTranslations from '../locales/en.json';
import deTranslations from '../locales/de.json';
import frTranslations from '../locales/fr.json';
import esTranslations from '../locales/es.json';
import ptTranslations from '../locales/pt.json';
import { getDefaultLanguage, getAvailableLanguageCodes } from '../config/languages';

/**
 * Aktuelle Sprache (wird aus LocalStorage geladen)
 */
let currentLanguage = getDefaultLanguage();

/**
 * Alle Übersetzungen aus JSON-Dateien
 * HINWEIS: Bei neuen Sprachen hier die entsprechende JSON-Datei importieren und hinzufügen
 */
const translations = {
    en: enTranslations,
    de: deTranslations,
    fr: frTranslations,
    es: esTranslations,
    pt: ptTranslations,
};

/**
 * Übersetzt einen Key in die gegebene oder aktuelle Sprache
 */
export const t = (key, lang = null, replacements = {}) => {
    const language = lang || currentLanguage;

    if (!key || typeof key !== 'string') {
        console.warn(`[i18n] Invalid translation key:`, key);
        return String(key);
    }

    const parts = key.split('.');
    let translation = translations[language];

    if (!translation) {
        console.warn(`[i18n] Language '${language}' not found. Falling back to 'en'.`);
        translation = translations['en'];
        if (!translation) {
            console.error(`[i18n] English translations not found!`);
            return key;
        }
    }

    // Navigiere durch das Translation-Objekt
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (translation && typeof translation === 'object' && part in translation) {
            translation = translation[part];
        } else {
            console.warn(`[i18n] Translation key '${key}' not found for language '${language}'. Falling back to key.`);
            return key;
        }
    }

    // Apply replacements (z.B. {{seconds}} → 10)
    let result = String(translation);
    for (const placeholder in replacements) {
        const regex = new RegExp(`{{${placeholder}}}`, 'g');
        result = result.replace(regex, replacements[placeholder]);
    }

    return result;
};

/**
 * Setzt die aktuelle Sprache und speichert sie in LocalStorage
 * Validiert gegen LANGUAGE_CONFIG (nicht gegen translations)
 */
export const setLanguage = (lang) => {
    const availableLanguages = getAvailableLanguageCodes();
    
    if (!availableLanguages.includes(lang)) {
        console.error(`[i18n] Language '${lang}' is not enabled in LANGUAGE_CONFIG.`);
        return;
    }

    if (!translations[lang]) {
        console.error(`[i18n] Language '${lang}' has no translations loaded.`);
        return;
    }

    currentLanguage = lang;

    // In LocalStorage speichern
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', lang);
    }
};

/**
 * Gibt die aktuelle Sprache zurück
 */
export const getLanguage = () => {
    return currentLanguage;
};

/**
 * Gibt eine Liste der verfügbaren Sprachen zurück
 * Nur Sprachen die in LANGUAGE_CONFIG definiert sind
 */
export const getAvailableLanguages = () => {
    return getAvailableLanguageCodes();
};

/**
 * Fügt neue Übersetzungen hinzu oder aktualisiert bestehende
 */
export const addTranslations = (lang, newTranslations) => {
    if (!translations[lang]) {
        translations[lang] = {};
    }

    // Deep merge
    const merge = (target, source) => {
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                target[key] = target[key] || {};
                merge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    };

    merge(translations[lang], newTranslations);
};

/**
 * Initialisiert i18n (lädt Sprache aus LocalStorage)
 * Validiert gegen LANGUAGE_CONFIG
 */
export const initI18n = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedLang = localStorage.getItem('language');
        const availableLanguages = getAvailableLanguageCodes();
        
        if (storedLang && availableLanguages.includes(storedLang) && translations[storedLang]) {
            currentLanguage = storedLang;
            console.log(`[i18n] Loaded language from localStorage: ${storedLang}`);
        } else {
            if (storedLang && !availableLanguages.includes(storedLang)) {
                console.warn(`[i18n] Stored language '${storedLang}' is no longer available. Using default language: ${currentLanguage}`);
                localStorage.removeItem('language');
            } else {
                console.log(`[i18n] Using default language: ${currentLanguage}`);
            }
        }
    }
};

/**
 * Gibt alle Übersetzungen für eine bestimmte Sprache zurück
 */
export const getTranslations = (lang = null) => {
    const language = lang || currentLanguage;
    return translations[language] || translations['en'] || {};
};

/**
 * Prüft ob ein Translation-Key existiert
 */
export const hasTranslation = (key, lang = null) => {
    const language = lang || currentLanguage;
    const parts = key.split('.');
    let translation = translations[language];

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (translation && typeof translation === 'object' && part in translation) {
            translation = translation[part];
        } else {
            return false;
        }
    }

    return true;
};

// HMR: Akzeptiere Updates und erzwinge Full Reload bei Änderungen
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('[HMR] i18n.js wurde geändert - Full Reload...');
        window.location.reload();
    });
}
