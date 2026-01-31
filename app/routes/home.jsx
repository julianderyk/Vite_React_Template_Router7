import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@iconify/react';
import { useTranslation } from '../hooks/useTranslation';

/**
 * Home-Seite Komponente
 * Zeigt Platzhaltertext und demonstriert das Design-System
 */
export function meta() {
    return [
        { title: "Template Web App - Home" },
        { name: "description", content: "Modern template web application" },
    ];
}

export default function HomePage() {
    const t = useTranslation();

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-card p-10 rounded-lg shadow-light dark:shadow-dark border border-border">
                <h1 className="text-5xl font-bold text-foreground mb-4">
                    {t('home.title')}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                    {t('home.subtitle')}
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-accent hover:bg-accent-hover text-black font-semibold rounded-md transition-colors">
                        {t('home.getStarted')}
                    </button>
                    <Link
                        to="/demo"
                        className="px-6 py-3 bg-btn hover:bg-btn-hover dark:bg-btn-dark dark:hover:bg-btn-dark-hover rounded-md transition-colors inline-block"
                    >
                        {t('home.viewDemo')}
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-light dark:hover:shadow-dark transition-shadow">
                    <Icon icon="lucide:zap" className="text-5xl mb-3 text-accent" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{t('home.features.fast.title')}</h3>
                    <p className="text-muted-foreground">
                        {t('home.features.fast.description')}
                    </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-light dark:hover:shadow-dark transition-shadow">
                    <Icon icon="lucide:palette" className="text-5xl mb-3 text-accent" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{t('home.features.design.title')}</h3>
                    <p className="text-muted-foreground">
                        {t('home.features.design.description')}
                    </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-light dark:hover:shadow-dark transition-shadow">
                    <Icon icon="lucide:compass" className="text-5xl mb-3 text-accent" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{t('home.features.navigation.title')}</h3>
                    <p className="text-muted-foreground">
                        {t('home.features.navigation.description')}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-8 rounded-lg border border-border">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t('home.content.title1')}</h2>
                    <p className="text-muted-foreground mb-4">
                        {t('home.content.text1')}
                    </p>
                    <p className="text-muted-foreground">
                        {t('home.content.text2')}
                    </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t('home.content.title2')}</h2>
                    <p className="text-muted-foreground mb-4">
                        {t('home.content.text3')}
                    </p>
                    <p className="text-muted-foreground">
                        {t('home.content.text4')}
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-bg-secondary to-bg-primary dark:from-bg-dark-secondary dark:to-bg-dark-primary p-8 rounded-lg border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('home.stats.title')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">1.2K+</div>
                        <div className="text-muted-foreground">{t('home.stats.users')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">45+</div>
                        <div className="text-muted-foreground">{t('home.stats.projects')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                        <div className="text-muted-foreground">{t('home.stats.uptime')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                        <div className="text-muted-foreground">{t('home.stats.support')}</div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-card p-10 rounded-lg border border-border text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t('home.cta.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {t('home.cta.description')}
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-3 bg-accent hover:bg-accent-hover text-black font-semibold rounded-md transition-colors">
                        {t('home.cta.tryFree')}
                    </button>
                    <button className="px-8 py-3 border border-border hover:bg-bg-secondary dark:hover:bg-bg-dark-secondary rounded-md transition-colors">
                        {t('home.cta.learnMore')}
                    </button>
                </div>
            </div>
        </div>
    );
}
