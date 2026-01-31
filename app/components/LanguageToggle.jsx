import React from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

/**
 * LanguageToggle Komponente
 * Ermöglicht das Umschalten zwischen verfügbaren Sprachen
 * Verwendet den LanguageContext für State-Management
 */
function LanguageToggle() {
    const { language, setLanguage, availableLanguages } = useLanguage();
    const t = useTranslation();

    const toggleLanguage = () => {
        const currentIndex = availableLanguages.indexOf(language);
        const nextIndex = (currentIndex + 1) % availableLanguages.length;
        setLanguage(availableLanguages[nextIndex]);
    };

    return (
        <button 
            onClick={toggleLanguage} 
            className="px-4 py-2 bg-btn hover:bg-btn-hover dark:bg-btn-dark dark:hover:bg-btn-dark-hover rounded-md transition-colors font-medium flex items-center gap-2"
            title={t('common.selectLanguage')}
        >
            <Icon icon={language === 'de' ? 'circle-flags:de' : 'circle-flags:uk'} className="text-lg" />
            <span>{language === 'de' ? 'DE' : 'EN'}</span>
        </button>
    );
}

export default LanguageToggle;
