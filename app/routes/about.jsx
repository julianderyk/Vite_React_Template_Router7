import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

/**
 * About-Seite Komponente
 * Zeigt Informationen über die App und den verwendeten Tech-Stack
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
    );
}
