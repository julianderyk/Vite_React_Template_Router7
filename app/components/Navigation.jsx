import React from 'react';
import { Link } from 'react-router';
import { useTranslation } from '../hooks/useTranslation';
import LanguageToggle from './LanguageToggle';
import DarkModeToggle from './DarkModeToggle';

/**
 * Navigation Komponente
 * Enthält die Hauptnavigation mit Links zu verschiedenen Seiten
 * und die Toggle-Komponenten für Sprache und Dark Mode
 */
function Navigation() {
    const t = useTranslation();

    return (
        <nav className="bg-card p-4 border-b border-border">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex gap-6">
                    <Link
                        to="/"
                        className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                        {t('nav.home')}
                    </Link>
                    <Link
                        to="/about"
                        className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                        {t('nav.about')}
                    </Link>
                    <Link
                        to="/demo"
                        className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                        {t('nav.demo')}
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <LanguageToggle />
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
