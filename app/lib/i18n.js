/**
 * Internationalization (i18n) System
 * Laden von Übersetzungen aus JSON-Dateien
 */

import enTranslations from '../locales/en.json';
import deTranslations from '../locales/de.json';

/**
 * Aktuelle Sprache (wird aus LocalStorage geladen)
 */
let currentLanguage = 'en'; // Default: English

/**
 * Alle Übersetzungen aus JSON-Dateien
 */
const translations = {
    en: enTranslations,
    de: deTranslations,
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
 */
export const setLanguage = (lang) => {
    if (!translations[lang]) {
        console.error(`[i18n] Language '${lang}' is not supported.`);
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
 */
export const getAvailableLanguages = () => {
    return Object.keys(translations);
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
 */
export const initI18n = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedLang = localStorage.getItem('language');
        if (storedLang && translations[storedLang]) {
            currentLanguage = storedLang;
            console.log(`[i18n] Loaded language from localStorage: ${storedLang}`);
        } else {
            console.log(`[i18n] Using default language: ${currentLanguage}`);
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
