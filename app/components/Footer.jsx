import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@iconify/react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageToggle from './LanguageToggle';

/**
 * Footer Komponente
 * Zeigt Footer mit Links, Copyright, Social Media Icons und Language Toggle
 * Mehrsprachig und responsive
 */
export default function Footer() {
    const t = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border mt-auto">
            <div className="container mx-auto px-8 py-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">
                            {t('footer.brand.title')}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {t('footer.brand.description')}
                        </p>
                        <div className="pt-2">
                            <LanguageToggle />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">
                            {t('footer.quickLinks.title')}
                        </h4>
                        <nav className="flex flex-col space-y-2">
                            <Link 
                                to="/" 
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.quickLinks.home')}
                            </Link>
                            <Link 
                                to="/about" 
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.quickLinks.about')}
                            </Link>
                            <Link 
                                to="/demo" 
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.quickLinks.demo')}
                            </Link>
                        </nav>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">
                            {t('footer.resources.title')}
                        </h4>
                        <nav className="flex flex-col space-y-2">
                            <a 
                                href="https://vitejs.dev" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.resources.vite')}
                            </a>
                            <a 
                                href="https://react.dev" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.resources.react')}
                            </a>
                            <a 
                                href="https://tailwindcss.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.resources.tailwind')}
                            </a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">
                            {t('footer.social.title')}
                        </h4>
                        <div className="flex space-x-4">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent transition-colors"
                                aria-label="GitHub"
                            >
                                <Icon icon="lucide:github" className="text-2xl" />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent transition-colors"
                                aria-label="Twitter"
                            >
                                <Icon icon="lucide:twitter" className="text-2xl" />
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Icon icon="lucide:linkedin" className="text-2xl" />
                            </a>
                            <a 
                                href="mailto:info@example.com" 
                                className="text-muted-foreground hover:text-accent transition-colors"
                                aria-label="Email"
                            >
                                <Icon icon="lucide:mail" className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground">
                            {t('footer.copyright', { year: currentYear })}
                        </p>
                        <div className="flex space-x-6">
                            <a 
                                href="#privacy" 
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.legal.privacy')}
                            </a>
                            <a 
                                href="#terms" 
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.legal.terms')}
                            </a>
                            <a 
                                href="#imprint" 
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                {t('footer.legal.imprint')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
