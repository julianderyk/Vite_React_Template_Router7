import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from '../hooks/useTranslation';
import { LANGUAGE_CONFIG } from '../config/languages';

/**
 * About-Seite Komponente
 * Zeigt Informationen über die App, den Tech-Stack und Features
 */
export function meta() {
    return [
        { title: "Template Web App - About" },
        { name: "description", content: "About our modern template web application" },
    ];
}

export default function AboutPage() {
    const t = useTranslation();

    return (
        <div className="space-y-6">
            {/* Main About Section */}
            <div className="bg-card p-8 rounded-lg shadow-light dark:shadow-dark border border-border">
                <h1 className="text-4xl font-bold text-foreground mb-6">{t('about.title')}</h1>
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        {t('about.description1')}
                    </p>
                    <p>
                        {t('about.description2')}
                    </p>
                    <div className="mt-6 p-4 bg-bg-secondary dark:bg-bg-dark-secondary rounded-md">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.techStack.title')}</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>{t('about.techStack.vite')}</li>
                            <li>{t('about.techStack.react')}</li>
                            <li>{t('about.techStack.router')}</li>
                            <li>{t('about.techStack.tailwind')}</li>
                            <li>{t('about.techStack.design')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Internationalization Feature */}
            <div className="bg-card p-8 rounded-lg shadow-light dark:shadow-dark border border-border">
                <div className="flex items-center gap-3 mb-6">
                    <Icon icon="lucide:globe" className="text-4xl text-accent" />
                    <h2 className="text-3xl font-bold text-foreground">{t('about.i18n.title')}</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                    <p>{t('about.i18n.description')}</p>
                    
                    {/* Available Languages */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4">{t('about.i18n.availableLanguages')}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {LANGUAGE_CONFIG.map((lang) => (
                                <div 
                                    key={lang.code}
                                    className="flex items-center gap-3 p-3 bg-bg-secondary dark:bg-bg-dark-secondary rounded-md border border-border"
                                >
                                    <Icon icon={lang.flag} className="text-2xl flex-shrink-0" />
                                    <div className="flex flex-col min-w-0">
                                        <span className="font-medium text-foreground truncate">{lang.nativeName}</span>
                                        <span className="text-xs text-muted-foreground truncate">{lang.code.toUpperCase()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6 p-4 bg-bg-secondary dark:bg-bg-dark-secondary rounded-md">
                        <h3 className="text-lg font-semibold text-foreground mb-3">{t('about.i18n.features.title')}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <Icon icon="lucide:check" className="text-accent text-xl flex-shrink-0 mt-0.5" />
                                <span>{t('about.i18n.features.smartUI')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="lucide:check" className="text-accent text-xl flex-shrink-0 mt-0.5" />
                                <span>{t('about.i18n.features.persistence')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="lucide:check" className="text-accent text-xl flex-shrink-0 mt-0.5" />
                                <span>{t('about.i18n.features.dynamic')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="lucide:check" className="text-accent text-xl flex-shrink-0 mt-0.5" />
                                <span>{t('about.i18n.features.scalable')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* How to Add Languages */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-bg-secondary to-bg-primary dark:from-bg-dark-secondary dark:to-bg-dark-primary rounded-md border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-3">{t('about.i18n.addLanguage.title')}</h3>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                            <li>{t('about.i18n.addLanguage.step1')}</li>
                            <li>{t('about.i18n.addLanguage.step2')}</li>
                            <li>{t('about.i18n.addLanguage.step3')}</li>
                        </ol>
                        <p className="mt-3 text-sm italic">{t('about.i18n.addLanguage.automatic')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
