import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { LANGUAGE_CONFIG, hasOnlyTwoLanguages, getLanguageConfig } from '../config/languages';

/**
 * LanguageToggle Komponente
 * Ermöglicht das Umschalten zwischen verfügbaren Sprachen
 * 
 * Verhaltensweise:
 * - Bei 2 Sprachen: Toggle-Button zum Wechseln zwischen beiden
 * - Bei 3+ Sprachen: Dropdown-Select mit allen Sprachen
 * 
 * Verwendet den LanguageContext für State-Management
 */
function LanguageToggle() {
    const { language, setLanguage, availableLanguages } = useLanguage();
    const t = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLangConfig = getLanguageConfig(language);
    const isTwoLanguages = hasOnlyTwoLanguages();

    // Schließe Dropdown wenn außerhalb geklickt wird
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Toggle zwischen 2 Sprachen
    const toggleLanguage = () => {
        const currentIndex = availableLanguages.indexOf(language);
        const nextIndex = (currentIndex + 1) % availableLanguages.length;
        setLanguage(availableLanguages[nextIndex]);
    };

    // Sprache aus Dropdown auswählen
    const selectLanguage = (langCode) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    // Toggle-Button für 2 Sprachen
    if (isTwoLanguages) {
        return (
            <button 
                onClick={toggleLanguage} 
                className="px-4 py-2 bg-btn hover:bg-btn-hover dark:bg-btn-dark dark:hover:bg-btn-dark-hover rounded-md transition-colors font-medium flex items-center gap-2"
                title={t('common.selectLanguage')}
                aria-label={t('common.selectLanguage')}
            >
                <Icon icon={currentLangConfig?.flag || 'lucide:globe'} className="text-lg" />
                <span>{language.toUpperCase()}</span>
            </button>
        );
    }

    // Dropdown-Select für 3+ Sprachen
    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-btn hover:bg-btn-hover dark:bg-btn-dark dark:hover:bg-btn-dark-hover rounded-md transition-colors font-medium flex items-center gap-2"
                title={t('common.selectLanguage')}
                aria-label={t('common.selectLanguage')}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Icon icon={currentLangConfig?.flag || 'lucide:globe'} className="text-lg" />
                <span>{currentLangConfig?.nativeName || language.toUpperCase()}</span>
                <Icon 
                    icon={isOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'} 
                    className="text-sm transition-transform" 
                />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-card border border-border rounded-md shadow-light dark:shadow-dark min-w-[180px] py-2 z-50">
                    {LANGUAGE_CONFIG.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => selectLanguage(lang.code)}
                            className={`w-full px-4 py-2 flex items-center gap-3 hover:bg-bg-secondary dark:hover:bg-bg-dark-secondary transition-colors ${
                                language === lang.code ? 'bg-bg-secondary dark:bg-bg-dark-secondary' : ''
                            }`}
                            aria-label={`${lang.nativeName} (${lang.name})`}
                        >
                            <Icon icon={lang.flag} className="text-xl" />
                            <div className="flex flex-col items-start">
                                <span className="font-medium text-foreground">{lang.nativeName}</span>
                                <span className="text-xs text-muted-foreground">{lang.name}</span>
                            </div>
                            {language === lang.code && (
                                <Icon icon="lucide:check" className="text-accent ml-auto" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageToggle;
