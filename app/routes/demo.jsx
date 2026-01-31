import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Input } from '../components/ui/Input';

/**
 * Demo-Seite Komponente
 * Demonstriert verschiedene UI-Komponenten und Features:
 * - Counter Component
 * - Input Component
 * - Color Palette
 * - Custom Animations
 */
export function meta() {
    return [
        { title: "Template Web App - Demo" },
        { name: "description", content: "Component demo showcasing UI elements" },
    ];
}

export default function DemoPage() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const t = useTranslation();

    return (
        <div className="space-y-6">
            <div className="bg-card p-8 rounded-lg shadow-light dark:shadow-dark border border-border">
                <h1 className="text-4xl font-bold text-foreground mb-6">{t('demo.title')}</h1>
                
                {/* Counter Demo */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">{t('demo.counter.title')}</h2>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setCount(count - 1)}
                            className="px-4 py-2 bg-btn hover:bg-btn-hover dark:bg-btn-dark dark:hover:bg-btn-dark-hover rounded-md transition-colors"
                        >
                            -
                        </button>
                        <span className="text-3xl font-bold text-foreground min-w-[60px] text-center">
                            {count}
                        </span>
                        <button 
                            onClick={() => setCount(count + 1)}
                            className="px-4 py-2 bg-accent hover:bg-accent-hover text-black font-semibold rounded-md transition-colors"
                        >
                            +
                        </button>
                        <button 
                            onClick={() => setCount(0)}
                            className="px-4 py-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-md transition-colors ml-4"
                        >
                            {t('demo.counter.reset')}
                        </button>
                    </div>
                </div>

                {/* Input Component Demo */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">{t('demo.inputs.title')}</h2>
                    <div className="space-y-4 max-w-md">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                {t('demo.inputs.text')}
                            </label>
                            <Input 
                                type="text" 
                                placeholder={t('demo.inputs.textPlaceholder')}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            {inputValue && (
                                <p className="text-sm text-muted-foreground mt-1">
                                    {t('demo.inputs.value')}: {inputValue}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                {t('demo.inputs.email')}
                            </label>
                            <Input 
                                type="email" 
                                placeholder={t('demo.inputs.emailPlaceholder')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                {t('demo.inputs.password')}
                            </label>
                            <Input 
                                type="password" 
                                placeholder={t('demo.inputs.passwordPlaceholder')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                {t('demo.inputs.disabled')}
                            </label>
                            <Input 
                                type="text" 
                                placeholder={t('demo.inputs.disabledPlaceholder')}
                                disabled
                            />
                        </div>
                    </div>
                </div>

                {/* Color Palette Demo */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">{t('demo.colors.title')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <div className="h-20 bg-accent rounded-md flex items-center justify-center text-black font-semibold">
                                {t('demo.colors.accent')}
                            </div>
                            <p className="text-sm text-muted-foreground">#CFFF04</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-20 bg-bg-primary dark:bg-bg-dark-primary rounded-md border border-border flex items-center justify-center">
                                {t('demo.colors.primary')}
                            </div>
                            <p className="text-sm text-muted-foreground">{t('demo.colors.primary')}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-20 bg-card rounded-md border border-border flex items-center justify-center">
                                {t('demo.colors.card')}
                            </div>
                            <p className="text-sm text-muted-foreground">{t('demo.colors.card')}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-20 bg-destructive rounded-md flex items-center justify-center text-destructive-foreground font-semibold">
                                {t('demo.colors.destructive')}
                            </div>
                            <p className="text-sm text-muted-foreground">{t('demo.colors.destructive')}</p>
                        </div>
                    </div>
                </div>

                {/* Animation Demo */}
                <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">{t('demo.animations.title')}</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-bg-secondary dark:bg-bg-dark-secondary rounded-md trade-row-new">
                            <p className="text-foreground">{t('demo.animations.slideIn')}</p>
                        </div>
                        <div className="relative w-full h-4 bg-bg-secondary dark:bg-bg-dark-secondary rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-accent rounded-full"
                                style={{ animation: 'progressBar 3s ease-in-out infinite' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
