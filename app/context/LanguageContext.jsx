import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLanguage, setLanguage as setI18nLanguage, getAvailableLanguages, initI18n } from '../lib/i18n';

/**
 * Language Context für globales Sprachen-Management
 */
const LanguageContext = createContext(undefined);

/**
 * Hook zum Zugriff auf Language Context
 * @returns {Object} { language, setLanguage, availableLanguages }
 */
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

/**
 * Language Provider Component
 * Stellt Sprach-Management für die gesamte App bereit
 */
export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(getLanguage());

    useEffect(() => {
        // Initialize i18n on mount
        initI18n();
        setLanguageState(getLanguage());
    }, []);

    const setLanguage = (lang) => {
        setI18nLanguage(lang);
        setLanguageState(lang);
    };

    const availableLanguages = getAvailableLanguages();

    const value = {
        language,
        setLanguage,
        availableLanguages,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
