import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

/**
 * DarkModeToggle Komponente
 * Ermöglicht das Umschalten zwischen Dark Mode und Light Mode
 * Speichert die Präferenz im localStorage für Persistenz
 * 
 * SSR-kompatibel: Initial State ist immer false, erst nach Mount wird localStorage gelesen
 */
function DarkModeToggle() {
    // Initial State ist IMMER false für SSR-Kompatibilität
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Lade den tatsächlichen Dark Mode State NACH dem Mount (Client-side only)
    useEffect(() => {
        setMounted(true);
        
        if (typeof window !== 'undefined') {
            // Prüfe localStorage für gespeicherte Präferenz
            const saved = localStorage.getItem('darkMode');
            if (saved !== null) {
                const darkMode = saved === 'true';
                setIsDark(darkMode);
                // Setze die Klasse sofort
                if (darkMode) {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                }
            } else {
                // Fallback: Prüfe ob dark class bereits gesetzt ist
                const hasDarkClass = document.documentElement.classList.contains('dark');
                setIsDark(hasDarkClass);
            }
        }
    }, []);

    // Synchronisiere den State mit dem DOM bei Änderungen
    useEffect(() => {
        if (mounted && typeof window !== 'undefined') {
            const html = document.documentElement;
            if (isDark) {
                html.classList.remove('light');
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
                html.classList.add('light');
            }
            // Speichere Präferenz im localStorage
            localStorage.setItem('darkMode', isDark.toString());
        }
    }, [isDark, mounted]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    // Während SSR/vor Mount: Zeige neutrale Version (oder gar nichts)
    // Dies verhindert den Hydration Mismatch
    if (!mounted) {
        return (
            <button
                className="px-4 py-2 bg-btn hover:bg-btn-hover dark:bg-btn-dark dark:hover:bg-btn-dark-hover rounded-md transition-colors font-medium flex items-center gap-2"
                disabled
            >
                <Icon icon="lucide:moon" className="text-lg" />
                <span>Dark</span>
            </button>
        );
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-btn hover:bg-btn-hover dark:bg-btn-dark dark:hover:bg-btn-dark-hover rounded-md transition-colors font-medium flex items-center gap-2"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            <Icon icon={isDark ? 'lucide:sun' : 'lucide:moon'} className="text-lg" />
            <span>{isDark ? 'Light' : 'Dark'}</span>
        </button>
    );
}

export default DarkModeToggle;
